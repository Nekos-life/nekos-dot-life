[![npm](https://img.shields.io/npm/v/nekos.life.svg)](https://www.npmjs.com/package/nekos.life)
[![npm](https://img.shields.io/npm/dt/nekos.life.svg?maxAge=3600)](https://www.npmjs.com/package/nekos.life)
[![install size](https://packagephobia.now.sh/badge?p=nekos.life)](https://packagephobia.now.sh/result?p=nekos.life)

 
[![NPM](https://nodei.co/npm/nekos.life.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nekos.life/)


# Nekos.life

## Installation
```
npm i -s nekos.life
```
Official wrapper for nekos.life! Very small install size with no external dependencies.

### SFW

| Function | Description |
| -------- | ----------- |
| `8Ball` | Sends the text and replies with a `text` as a response to the magic 8Ball and an image as well.|
| `OwOify` | Gets OwOified `text` of a string |
| `avatar` | Gets you a URL of an avatar image/gif |
| `baka` | Gets a URL of a baka image/gif |
| `catText` | Gets `text` of a cat emoji |
| `chat` | Sends the text and replies with a `text` as a response |
| `cuddle` | Gets a URL of a cuddle image/gif |
| `fact` | Gets the text and replies with a `text` that is a random fact |
| `feed` | Gets a URL of a feeding image/gif |
| `foxGirl` | Gets a URL of a fox girl image/gif |
| `gecg` | Gets a URL of a genetically engineered catgirl image/gif |
| `goose` | Gets a URL of a goose image/gif |
| `holo` | Gets a URL of a Holo image/gif |
| `hug`  | Gets a URL of a hug image/gif |
| `kemonomimi` | Gets a URL of a kemonomimi image/gif |
| `kiss` | Gets a URL of a kiss image/gif |
| `lizard` | Gets a URL of a lizard image/gif |
| `meow` | Gets a URL of a cat image/gif |
| `nekoGif` | Gets a URL of a neko gif |
| `neko` | Gets a URL of a neko image |
| `pat`  | Gets a URL of a pat image/gif |
| `poke` | Gets a URL of a poke image/gif |
| `slap` | Gets a URL of a slap image/gif |
| `smug` | Gets a URL of a smug image/gif |
| `spoiler` | Creates an individual spoiler per letter for Discord |
| `tickle` | Gets a URL of a tickle image/gif |
| `wallpaper` | Gets a URL of a wallpaper image/gif |
| `why` | Gets `text` of a question |
| `woof` | Gets a URL of a dog image/gif |

### NSFW

| Function | Description |
| -------- | ----------- |
| `anal` | Gets a NSFW URL of anal image/gif |
| `avatar` | Gets a NSFW URL of an avatar image/gif |
| `bJ` | Gets a NSFW URL of bj image/gif |
| `blowJob` | Gets a NSFW URL of an/a image/gif blowjob |
| `boobs` | Gets a NSFW URL of boobs image/gif |
| `classic` | Gets a NSFW URL of the classic endpoint image/gif |
| `cumArts` | Gets a NSFW URL of an/a image/gif of cum arts |
| `cumsluts` | Get a NSFW URL of a cumslut image/gif |
| `eroFeet` | Gets a NSFW URL of an/a image/gif of ero feet |
| `eroKemonomimi` | Gets a NSFW URL of an/a image/gif ero kemonomimi |
| `eroKitsune` | Gets a NSFW URL of an/a image/gif ero kitsune |
| `eroNeko` | Gets a NSFW URL of an/a image/gif ero neko |
| `eroYuri` | Gets a NSFW URL of an/a image/gif ero yuri |
| `ero` | Gets a NSFW URL of an/a image/gif ero |
| `feetGif` | Gets a NSFW URL of a gif of feet |
| `feet` | Gets a NSFW URL of an image of feet |
| `femdom` | Gets a NSFW URL of an/a image/gif of femdom |
| `futanari` | Gets a NSFW URL of an/a image/gif of futa |
| `girlSoloGif` | Gets a NSFW URL of a solo girl gif |
| `girlSolo` | Gets a NSFW URL of a solo girl image |
| `hentai` | Gets a NSFW URL of an/a image/gif of hentai |
| `holoEro` | Gets a NSFW URL of an/a image/gif Holo ero |
| `holo` | Gets a NSFW URL of an/a image/gif of Holo |
| `kemonomimi` | Gets a NSFW URL of an/a image/gif containing kemonomimi |
| `keta` | Gets a NSFW URL of an/a image/gif of keta |
| `kitsune` | Gets a NSFW URL of an/a image/gif of kitsune |
| `kuni` | Gets a NSFW URL of a kuni image/gif |
| `lesbian` | Gets a NSFW URL of a lesbian image/gif |
| `nekoGif`| Gets a NSFW URL of a neko gif |
| `neko` | Gets a NSFW URL of a neko image |
| `pussyArt` | Gets a NSFW URL of an/a image/gif of pussy art |
| `pussyGif` | Gets a NSFW URL of a gif of pussy |
| `pussyWankGif` | Gets a NSFW URL of a gif of pussy masterbation |
| `pussy` | Gets a NSFW URL of a pussy image/gif |
| `randomHentaiGif` | Get a URL of hentai gif |
| `smallBoobs` | Gets a NSFW URL of an/a image/gif small boobs |
| `tits` | Gets a NSFW URL of an/a image/gif containing tits |
| `trap` | Gets a NSFW URL of trap image/gif |
| `yuri` | Gets a NSFW URL of yuri image/gif |

All of the endpoints but the ones marked with `text`, except Chat/8Ball/Fact in the description will return JSON: `{ url: <theURL>}`.

`sfw.catText` will return JSON: `{cat: <catemoji>}`  
`sfw.why` will return JSON `{why: <whytext>}`  
`sfw.OwOify` will return JSON `{owo: <owoified string>}` 

`sfw.fact` will return JSON `{response: <fact string>}`  
`sfw.8Ball` will return JSON `{response: <8Ball response string>, url: <URL to a matching 8Ball image>}`  

As of now, `OwOify` and `8Ball` are the only ones with query parameters. It requires an object containing the parameter, and the key should be the value. In this case, the key is `text` and the value is whatever you want OwOified.  There is an example in this README.
`{text: 'Some text you want weebified.}` 

## Typings

I added a typings file and will be working to improve it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.


## Examples

Await/Async example
```js
const client = require('nekos.life');
const neko = new client();

async function test() {
  console.log(await neko.sfw.hug());
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

neko.sfw.catText().then((catText) => console.log(catText));
```
returns
```js
{ cat: '((≡^⚲͜^≡))' }
```

`OwOify` example
```js
const client = require('nekos.life');
const neko = new client();

async function work() {
  let owo = await neko.sfw.OwOify({text: 'This lib is really awesome!'});
  console.log(owo);
}

work();
```
returns
```js
{ owo: 'This wib is weawwy awesome >w< ' }
```

NSFW example
```js
const client = require('nekos.life');
const neko = new client();

neko.nsfw.neko().then(neko => {console.log(neko);});
```
returns
```js
{ url: 'https://cdn.nekos.life/lewd/lewd_neko750.jpeg' }
```

## Advanced examples
Here I'll show you how to import either `sfw` or `nsfw` if you would like to do so. That allows you to only use one or the other So if you only need `sfw`, you can just import that without anything `nsfw`!

Importing only `sfw`
```js
const client = require('nekos.life');
const {sfw} = new client();

sfw.neko().then(neko => console.log(neko));
```
returns
```js
{ url: 'https://cdn.nekos.life/neko/neko_083.jpg' }
```

Importing only `nsfw`
```js
const client = require('nekos.life');
const {nsfw} = new client();

nsfw.neko().then(neko => console.log(neko));
```
returns
```js
{ url: 'https://cdn.nekos.life/lewd/lewd_neko_058.jpeg' }
```