const Block = require('./block');
const Blockchain = require('./blockchain');

/*let block = new Block(0, "Lo que sea", null);
console.log(block);*/

const blockchain = new Blockchain("data de una nueva moneda");
blockchain.addBlock("Data de segundo bloque");
blockchain.addBlock("Data de tercer bloque");

console.log(blockchain);
