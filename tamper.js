const { Blockchain, Block } = require("./blockchain");

const myBlockchain = new Blockchain();
myBlockchain.addBlock(new Block(1, new Date().toISOString(), { amount: 100 }));
myBlockchain.addBlock(new Block(2, new Date().toISOString(), { amount: 50 }));

console.log("Original Blockchain:", JSON.stringify(myBlockchain, null, 2));
console.log("Is blockchain valid?", myBlockchain.isChainValid());

// Tampering
myBlockchain.chain[1].transactions = { amount: 1000 };
console.log("Tampered Blockchain:", JSON.stringify(myBlockchain, null, 2));
console.log(
  "Is blockchain valid after tampering?",
  myBlockchain.isChainValid()
);
