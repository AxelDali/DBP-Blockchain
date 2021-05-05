const Block = require('./block');

class Blockchain {
    constructor(origin, difficulty = '0'){
        this.chain = [this.createFirstBLock(origin)];
        this.difficulty = difficulty;
    }

    createFirstBLock(origin){
        return new Block(0, origin);
    }

    getlLastBlock(){
        return this.chain[this.chain.length-1];
    }

    addBlock(data){
        let previousBlock = this.getlLastBlock();
        let newBlock = new Block(previousBlock.index + 1, data, previousBlock.hash);
        newBlock.mine(this.difficulty);
        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;
