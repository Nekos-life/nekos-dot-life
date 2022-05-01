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


> Please note that NSFW endpoints and images have been removed from the API
> 
> This is a breaking change, please alter your code to reflect the breaking change.

### Endpoints

| Function | Description |
| -------- | ----------- |
| `smug` | Gets a URL of a smug image/gif |
| `baka` | Gets a URL of a baka image/gif |
| `tickle` | Gets a URL of a tickle image/gif |
| `slap` | Gets a URL of a slap image/gif |
| `poke` | Gets a URL of a poke image/gif |
| `pat`  | Get a URL of a pat image/gif |
| `neko` | Get a URL of a neko image |
| `nekoGif` | Get a URL of a neko gif |
| `meow` | Get a URL of a cat image/gif |
| `lizard` | Get a URL of a lizard image |
| `kiss` | Get a URL of a kiss image/gif |
| `hug`  | Get a URL of a hug image/gif |
| `foxGirl` | Get a URL of a fox girl image/gif |
| `feed` | Get a URL of a feeding image/gif |
| `cuddle` | Get a URL of a cuddle image/gif |
| `kemonomimi` | Get a URL of a kemonomimi image/gif |
| `holo` | Get a URL of a Holo image/gif |
| `woof` | Get a URL of a dog image/gif |
| `wallpaper` | Get a URL of a wallpaper |
| `goose` | Get a URL of a goose image |
| `gecg` | Get a URL of a gecg (genetically engineered catgirl) image |
| `avatar` | Get a URL of an avatar image |
| `waifu` | Get a URL of a waifu image |
| `why` | Get `text` of a question |
| `catText`| Get `text` of a cat emoji |
| `OwOify` | Get OwOified `text` of a string |
| `eightBall` | Sends the text and replies with a `text` as a response to the magic 8Ball and an image as well.|
| `fact` | Gets the text and replies with a `text` that is a random fact |
| `spoiler` | Creates an individual spoiler per letter for Discord |

All of the endpoints but the ones marked with `text`, except Chat/8Ball/Fact in the description will return JSON: `{ url: <theURL>}`.

`neko.catText` will return JSON: `{cat: <catemoji>}`  
`neko.why` will return JSON `{why: <whytext>}`  
`neko.OwOify` will return JSON `{owo: <owoified string>}` 

`neko.fact` will return JSON `{fact: <fact string>}`  
`neko.eightBall` will return JSON `{response: <8Ball response string>, url: <URL to a matching 8Ball image>}`  

As of now, `OwOify` and `eightBall` are the only ones with query parameters. It requires an object containing the parameter, and the key should be the value. In this case, the key is `text` and the value is whatever you want OwOified.  There is an example in this README.
`{text: 'Some text you want weebified.}` 

## Typings

I added a typings file and will be working to improve it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.


## Examples

Await/Async example
```js
const client = require('nekos.life');
const neko = new client();

async function test() {
  console.log(await neko.hug());
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

neko.catText().then((catText) => console.log(catText));
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
  let owo = await neko.OwOify({text: 'This lib is really awesome!'});
  console.log(owo);
}

work();
```
returns
```js
{ owo: 'This wib is weawwy awesome >w< ' }
```
