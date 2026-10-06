import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { hasPerformedExperiment } from '../src/config/editorial.ts';
test('experiment disclaimer requires explicit performed testing; plans and omitted metadata stay excluded',()=>{
 for(const data of [{},{experiment_performed:false}]) assert.equal(hasPerformedExperiment({data}),false);
 assert.equal(hasPerformedExperiment({data:{experiment_performed:true}}),true);
});
test('public editorial copy remains synchronized with internal approved copy',()=>{
 const document=readFileSync('docs/editorial/LEGAL-AND-EDITORIAL-STANDARDS.md','utf8');
 const copy=document.split('## Public Editorial Standards copy\n\n')[1].split('\n\n## Case BS Meter disclaimer')[0];
 const expected=copy.replace(/^### /gm,'').replace(/^\d+\. /gm,'').replace(/\s+/g,' ').trim();
 const actual=readFileSync('src/components/final-frontier/EditorialStandardsCopy.astro','utf8').replace(/<[^>]+>/g,' ').replace(/&#x27;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
 assert.equal(actual,expected);
});
