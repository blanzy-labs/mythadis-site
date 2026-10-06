import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assertLaunchContent, isFixtureCase, launchReady, publicRoutes } from '../src/config/launch.ts';
import { getSocialLinks } from '../src/config/social.ts';
const real = { id: 'real-case', body: 'Supported editorial content', data: { visibility: 'published', featured: true } };
test('explicit launch flag and intended static route list', () => {
 assert.equal(typeof launchReady, 'boolean');assert.deepEqual(publicRoutes, ['/', '/watch/', '/cases/', '/evidence/', '/submit/', '/about/']);
});
test('launch refuses zero cases and published fixture identities or markers', () => {
 assert.throws(()=>assertLaunchContent([]));
 assert.throws(()=>assertLaunchContent([{...real,id:'017-ai-investment-6732'}]));
 assert.throws(()=>assertLaunchContent([{...real,body:'<!-- FF-002 mock fixture -->'}]));
});
test('real published featured case plus draft fixture satisfies content shape only', () => {
 assert.doesNotThrow(()=>assertLaunchContent([real,{...real,id:'017-ai-investment-6732',data:{visibility:'draft',featured:false}}]));
 assert.equal(isFixtureCase({id:'017-ai-investment-6732'}),true);
});
test('launch requires exactly one featured real case', () => {
 assert.throws(()=>assertLaunchContent([{...real,data:{visibility:'published',featured:false}}]));
 assert.throws(()=>assertLaunchContent([real,{...real,id:'second'}]));
});
test('social configuration hides missing, malformed, insecure or credential URLs', () => {
 assert.deepEqual(getSocialLinks(),[]);
 assert.deepEqual(getSocialLinks({youtube:'http://example.com',rumble:'javascript:alert(1)',x:'https://user:password@example.com',threads:'bad'}),[]);
 const links=getSocialLinks({youtube:' https://example.com/channel ',linkedin:'https://example.com/studio'});
 assert.equal(links.length,2);assert.equal(links[0].href,'https://example.com/channel');assert.equal(links[1].label,'LinkedIn');
});
