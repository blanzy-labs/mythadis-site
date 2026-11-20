import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cp, mkdtemp, readFile, writeFile, symlink, rm, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, basename } from 'node:path';
import { execFileSync } from 'node:child_process';

test('single film record drives pages, catalogue, homepage and release SEO', async () => {
 const root = new URL('../', import.meta.url).pathname;
 const temp = await mkdtemp(join(tmpdir(), 'mythadis-studio-test-'));
 const read = path => readFile(join(temp, 'dist', path), 'utf8');
 const build = (branch='main') => execFileSync(process.execPath, [join(root, 'node_modules/astro/bin/astro.mjs'), 'build'], {cwd:temp, env:{...process.env, CF_PAGES:'1',CF_PAGES_BRANCH:branch},stdio:'pipe'});
 // Deliberately isolated test data, never written into the repository or deployed.
 const film = {slug:'test-only',title:'TEST ONLY FILM',synopsis:'TEST ONLY SYNOPSIS',status:'draft'};
 const save = data => writeFile(join(temp,'src/data/films.ts'), `import type { Film } from '../lib/films';\nexport const films: Film[] = ${JSON.stringify(data)};\n`);
 try {
  await cp(root,temp,{recursive:true,filter: source => !['.git','node_modules','dist','.astro'].includes(basename(source))});
  await symlink(join(root,'node_modules'),join(temp,'node_modules'),'dir');
  await save([film]);
  build();
  await assert.rejects(access(join(temp,'dist/films/test-only/index.html')));
  for(const path of ['index.html','watch/index.html']) {
   const html=await read(path);
   assert.match(html,/FIRST PRODUCTION IN PROGRESS/);
   assert.doesNotMatch(html,/TEST ONLY FILM|WATCH OUR FILMS|data-youtube-id=/);
   assert.match(html,/noindex, nofollow/);
  }
  // No investigation fixture gate is toggled by the independent studio approval.
  const launch=join(temp,'src/config/launch.ts');
  await writeFile(launch,(await readFile(launch,'utf8')).replace('studioLaunchReady = false','studioLaunchReady = true'));
  await save([{...film,status:'published',youtubeId:'abcdefghijk',date:'2026-11-20'}]);
  build();
  const filmHTML=await read('films/test-only/index.html');
  assert.match(filmHTML,/Created by Mythadis TY Creative Producer/);
  assert.match(filmHTML,/datetime="2026-11-20"/);
  assert.match(filmHTML,/https:\/\/www.mythadis.com\/films\/test-only\//);
  assert.match(filmHTML,/https:\/\/www.youtube.com\/watch\?v=abcdefghijk/);
  assert.match(filmHTML,/data-youtube-id="abcdefghijk"/);
  assert.doesNotMatch(filmHTML,/<iframe|noindex|CASE /);
  for(const path of ['index.html','watch/index.html']) {
   const html=await read(path);
   assert.match(html,/href="\/films\/test-only\/"/);
   assert.doesNotMatch(html,/noindex|MOCK CASE|BS METER/);
   for (const [,href] of html.matchAll(/href="(\/[^"#?]*)(?:#[^"]*)?"/g)) {
    if (href.startsWith('//')) continue;
    await access(join(temp,'dist',href.endsWith('/')?`${href}index.html`:href));
   }
  }
  assert.match(await read('index.html'),/WATCH OUR FILMS/);
  assert.match(await read('sitemap.xml'),/\/films\/test-only\//);
  assert.doesNotMatch(await read('sitemap.xml'),/\/cases\//);
  for(const path of ['cases/index.html','cases/001-ai-investment-6732/index.html','evidence/index.html','submit/index.html','editorial-standards/index.html']) {
   const html=await read(path);assert.match(html,/noindex, nofollow/);assert.match(html,/INVESTIGATION ARCHIVE/);
  }
  build('feat/test-preview');
  assert.match(await read('films/test-only/index.html'),/noindex, nofollow/);
  assert.doesNotMatch(await read('sitemap.xml'),/<loc>/);
  await save([{...film,status:'published',youtubeId:'invalid'}]);
  assert.throws(()=>build(),/Command failed/);
 } finally { await rm(temp,{recursive:true,force:true}); }
});
