[![npm](https://img.shields.io/npm/v/nekos.life.svg)](https://www.npmjs.com/package/nekos.life)
[![npm](https://img.shields.io/npm/dt/nekos.life.svg?maxAge=3600)](https://www.npmjs.com/package/nekos.life)

 
[![NPM](https://nodei.co/npm/nekos.life.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nekos.life/)


# Nekos.life

## Installation
```
npm i -s nekos.life
```
This wrapper has no external dependencies ;).  
The wrapper functions all return promises, so you can use traditional promises or await/async.

| Function | Description |
| -------- | ----------- |
| `getSFWTickle` | Gets a URL of a tickle image/gif |
| `getSFWSlap` | Gets a URL of a slap image/gif |
| `getSFWPoke` | Gets a URL of a poke image/gif |
| `getSFWPat`  | Get a URL of a pat image/gif |
| `getSFWNeko` | Get a URL of a neko image/gif |
| `getSFWMeow` | Get a URL of a cat image/gif |
| `getSFWLizard` | Get a URL of a lizard image/gif |
| `getSFWKiss` | Get a URL of a kiss image/gif |
| `getSFWHug`  | Get a URL of a hug image/gif |
| `getSFWFoxGirl` | Get a URL of a fox girl image/gif |
| `getSFWFeed` | Get a URL of a feeding image/gif |
| `getSFWCuddle` | Get a URL of a cuddle image/gif |
| `getSFWWhy` | Get `text` of a question |
| `getSFWCatText`| Get `text` of a cat emoji |
| `getNSFWRandomHentaiGif` | Get a URL of hentai gif |
| `getNSFWPussy` | Get a NSFW URL of a pussy image/gif |
| `getNSFWNekoGif`| Get a NSFW URL of a neko gif |
| `getNSFWNeko` | Get a NSFW URL of a neko image |
| `getNSFWLesbian` | Get a NSFW URL of a lesbian image/gif |
| `getNSFWKuni` | Get a NSFW URL of a kuni image/gif |
| `getNSFWCumsluts` | Get a NSFW URL of a cumslut image/gif |
| `getNSFWClassic` | Gets a NSFW URL of the classic endpoint image/gif |
| `getNSFWBoobs` | Gets a NSFW URL of boobs image/gif |
| `getNSFWBj` | Gets a NSFW URL of bj image/gif |
| `getNSFWAnal` | Gets a NSFW URL of anal image/gif |

All of the endpoints but the ones marked with `text` in the description will return JSON: `{ url: <theURL>}`.

getSFWCatText will return JSON: `{cat: <catemoji>}`  
getSFWWhy will return JSON `{why: <whytext>}`  

## Examples

Await/Async example
```js
const client = require('nekos.life');
const neko = new client();

async function test() {
  console.log(await neko.getSFWHug());
}

test();
```
returns: 
```js
{ url: 'https://cdn.nekos.life/hug/hug10050.gif' }
```

Promise example
```js
const client = require('nekos.life');
const neko = new client();

neko.getSFWCatText().then((catText) => console.log(catText));
```
returns
```js
{ cat: '((≡^⚲͜^≡))' }
```