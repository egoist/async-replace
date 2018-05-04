
# async-replace

[![NPM version](https://img.shields.io/npm/v/@egoist/async-replace.svg?style=flat)](https://npmjs.com/package/@egoist/async-replace) [![NPM downloads](https://img.shields.io/npm/dm/@egoist/async-replace.svg?style=flat)](https://npmjs.com/package/@egoist/async-replace) [![CircleCI](https://circleci.com/gh/egoist/async-replace/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/async-replace/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

> Like String.prototype.replace but supports asynchronous replacer.

## Install

```bash
yarn add @egoist/async-replace
```

## Usage

```js
const replace = require('@egoist/async-replace')

const newString = replace('[foo] [bar]', /\[(.*?)\]/g, async (_, p1) => {
  await sleep(300)
  return `hi ${p1}`
})
//=> 'hi foo hi bar'
```

## API

### replace(str, RE, replacer)

#### str

- __Type__: `string`
- __Required__: `true`

#### RE

- __Type__: `RegExp`
- __Required__: `true`

#### replacer

- __Type__: `function`
- __Required__: `true`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**async-replace** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/async-replace/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
