# Nano NodeJS RPC Client

[![npm version](https://nodei.co/npm/nano-node-rpc.png)](https://www.npmjs.com/package/nano-node-rpc)

Nano RPC client written with NodeJS.  
It produces JSON objects or strings as output, wrapped in native promises.

All RPC calls are defined here:
https://github.com/nanocurrency/nano-node/wiki/RPC-protocol

## Getting Started

### Install

`npm install nano-node-rpc`

#### My Nano Ninja Node API

```js
const NanoClient = require('nano-node-rpc');
const client = NanoClient({apiKey: process.env.NINJA_API_KEY})
```

#### Your own Nano RPC server

```js
const NanoClient = require('nano-node-rpc');
const client = NanoClient({url: 'http://localhost:7076'})
```

### Use methods attached to `client` to send RPC calls

#### Examples

Head to the [`examples.js`](examples.js) file for even more!

```js
const client = NanoClient({url: 'http://localhost:7076'})

// Some methods do not require arguments:
client
  .block_count()
  .then(count => {
    console.log(count);
    /**
     * {
     *   "count": "1826834",
     *   "unchecked": "3385205"
     * }
     */
  })
  .catch(e => {
    // Deal with your errors here.
  });

// Some methods require arguments:
client
  .account_balance("nano_1ninja7rh37ehfp9utkor5ixmxyg8kme8fnzc4zty145ibch8kf5jwpnzr3r")
  .then(balance => {
    console.log(balance);
    /**
     * {
     *   "balance": "325586539664609129644855132177",
     *   "pending": "2309370929000000000000000000000000"
     * }
     */
  })
  .catch(e => {
    // Deal with your errors here.
  });
```

### Promise-wrapped responses

All method calls return native NodeJS promises. You need to use the
`then()` / `catch()` pattern shown above. If the call was succesful,
the data will be passed to `then()`, otherwise the error will be passed
to `catch()`.

### Methods Names

The method calls are the same as the original RPC actions defined
on the Nano wiki.
(See https://github.com/nanocurrency/nano-node/wiki/RPC-protocol)

Example1: on the Nano wiki `account_balance` is called with `account`.
For the NodeJS client, the method is `account_balance` and the argument is the account string.
