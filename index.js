const { Blockchain, Block } = require("./blockchain");

const myBlockchain = new Blockchain();

console.log("Mining block 1...");
myBlockchain.addBlock(
  new Block(1, new Date().toISOString(), {
    sender: "Alice",
    receiver: "Bob",
    amount: 50,
  })
);

console.log("Mining block 2...");
myBlockchain.addBlock(
  new Block(2, new Date().toISOString(), {
    sender: "Bob",
    receiver: "Charlie",
    amount: 30,
  })
);

console.log("Blockchain:", JSON.stringify(myBlockchain, null, 2));
console.log("Is blockchain valid?", myBlockchain.isChainValid());
