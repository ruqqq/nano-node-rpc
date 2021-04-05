const NanoClient = require("@dev-ptera/nano-node-rpc").NanoClient;

// with your own node
const client = new NanoClient({
  url: 'http://localhost:7076'
});

async function queryDemo() {
  try {
    // query the current block count
    var count = await client.block_count();
  } catch (error) {
    console.error("\nError: " + error.message);
    return
  }
  console.log("Block count:", count);
}

queryDemo();