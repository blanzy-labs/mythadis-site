import { test } from 'node:test';
import assert from 'node:assert/strict';
import { publishedFilms, filmHref, defaultFilmCredit } from '../src/lib/films.ts';
import { studioIndexable, isStudioPath, launchReady, studioLaunchReady } from '../src/config/launch.ts';
// Test-only metadata; never imported into site content.
const draft = {slug:'test-film', title:'Test only', synopsis:'Test only', status:'draft'};
const published = {...draft, status:'published', youtubeId:'abcdefghijk'};
test('drafts need no video and never appear in public catalogue or route input', () => {
 assert.deepEqual(publishedFilms([draft]), []);
 assert.deepEqual(publishedFilms([]), []);
 assert.deepEqual(publishedFilms([draft, {...published,slug:'second'}]).map(filmHref), ['/films/second/']);
 assert.equal(defaultFilmCredit, 'Created by Mythadis TY Creative Producer');
});
test('publication requires complete metadata and a strictly validated YouTube ID', () => {
 for (const overrides of [{youtubeId:undefined},{youtubeId:'https://youtube.com/watch?v=abcdefghijk'},{youtubeId:'short'}, {title:' '}, {synopsis:''}, {status:'ready'}, {credit:' '}]) {
  assert.throws(() => publishedFilms([{...published,...overrides}]));
 }
 assert.throws(() => publishedFilms([{...draft,youtubeId:'bad'}]));
 assert.deepEqual(publishedFilms([published]), [published]);
});
test('stable slugs, optional dates and local thumbnails are validated', () => {
 for (const overrides of [{slug:'../bad'},{slug:'UPPER'}, {date:'2026-02-30'}, {date:'bad'}, {thumbnail:'//evil.example/a.jpg'}]) {
  assert.throws(() => publishedFilms([{...published,...overrides}]));
 }
 assert.throws(() => publishedFilms([published,published]));
 assert.doesNotThrow(() => publishedFilms([{...published,date:'2026-11-20',thumbnail:'/images/films/approved.webp'}]));
});
test('studio approval does not enable previews, local builds or investigation archives', () => {
 assert.equal(launchReady,false);
 assert.equal(studioLaunchReady,false);
 for (const [ready,pages,branch] of [[false,'1','main'],[true,'1','feature'],[true,undefined,undefined],[true,'1',undefined]]) assert.equal(studioIndexable(ready,pages,branch),false);
 assert.equal(studioIndexable(true,'1','main'),true);
 for (const path of ['/','/watch/','/about/','/films/test-film/']) assert.equal(isStudioPath(path),true);
 for (const path of ['/cases/','/cases/test/','/evidence/','/submit/','/editorial-standards/']) assert.equal(isStudioPath(path),false);
});
