# @dev-ptera/nano-node-rpc

This is a Nanocurrency remote procedure call (RPC) client written in Typescript with a singular dependency on [axios](https://www.npmjs.com/package/axios). 

Use this package to fetch Nanocurrency data from either a local Nano Node, 
a [Nano Node Proxy server](https://github.com/dev-ptera/nano-rpc-proxy), 
or [My Nano Ninja](https://mynano.ninja/).  

All RPC calls are defined in the [Nano.org Docs](https://docs.nano.org/commands/rpc-protocol/).

## Getting Started

### Install

`npm install @dev-ptera/nano-node-rpc`

or 

`yarn add @dev-ptera/nano-node-rpc`

###
### Usage

**Typescript**
```ts
import { NanoClient } from "@dev-ptera/nano-node-rpc";

/* Below are three potential nano clients; pick one. */

/* Localhost Nano Node */
const localClient = new NanoClient({url: "http://[::1]:7076"});

/* Web API */
const remoteClient = new NanoClient({url: "[URL]"});

/* My Nano Ninja */
const myNanoNinjaClient = new NanoClient({
    url: "https://mynano.ninja/api/node",
    requestHeaders: {
        "Authorization": process.env.NINJA_API_KEY
    }
});
```


**Javascript**
```js
const NanoClient = require("@dev-ptera/nano-node-rpc").NanoClient;
/* Same client configuration as typescript example. */
```

###
### Fetching Node Data


```ts
import { NanoClient } from "@dev-ptera/nano-node-rpc";
import * as RPC from "@dev-ptera/nano-node-rpc/types"
import { AxiosError } from "axios";

const client = NanoClient({ url: "http://localhost:7076" })

// Some methods do not require arguments:
client
    .block_count()
    .then((count: RPC.BlockCountReponse) => {
        console.log(count);
        /**
         * {
         *   "count": "1826834",
         *   "unchecked": "3385205"
         * }
         */
    })
    .catch((e: AxiosError) => {
        // Deal with your errors here.
    });

// Some methods require arguments:
client
    .account_balance("nano_1ninja7rh37ehfp9utkor5ixmxyg8kme8fnzc4zty145ibch8kf5jwpnzr3r")
    .then((balance: RPC.AccountBalanceResponse) => {
        console.log(balance);
        /**
         * {
         *   "balance": "325586539664609129644855132177",
         *   "pending": "2309370929000000000000000000000000"
         * }
         */
    })
    .catch((e: AxiosError) => {
        // Deal with your errors here.
    });
```
All method calls return native NodeJS promises. You need to use the `then()` / `catch()` pattern shown above. 
If the call was successful, the data will be passed to `then()`, otherwise the error will be passed to `catch()`. 

See [`examples.js`](examples.js) file for more examples.

## Supported Methods

The method calls are the same as the original RPC actions defined on the [Nano.org Docs](https://docs.nano.org/commands/rpc-protocol/).  
E.g. the Nano `block_count` RPC method would be accessible via `client.block_count()`.

If a method is not available as a method on `NanoClient`, you can use the `_send` method below: 

```js
client._send("block_info", {
  "json_block": true,
  "hash": "87434F8041869A01C8F6F263B87972D7BA443A72E0A97D7A3FD0CCC2358FD6F9"
}).then(block_info => {
  console.log(block_info);
  /**
   * {
   *   "block_account": "nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est",
   *   "amount": "30000000000000000000000000000000000",
   *   "balance": "5606157000000000000000000000000000000",
   *   "height": "58",
   *   "local_timestamp": "0",
   *   "confirmed": "true",
   *   "contents": {
   *     ...
   *   },
   *   "subtype": "send"
   * }
   */
})
.catch(e => {
  // Deal with your errors here.
});
```

## Generic Typing

Some RPC response types will change depending on the optional parameters included in the request.
`peers` is an example of a request that can conditionally include `PeersResponseDetails` when the flag `peer_details` is true.

## Local Development

`yarn build` > creates output in the `/dist` folder

`yarn test` > runs test suite; requires a local Banano node to pass

`yarn prettier` > run code formatting
