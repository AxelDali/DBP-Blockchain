const SHA256 = require('crypto-js/sha256');

class Block {

    // Index = Identificador de la posicion del bloque en la cadena
    // Data = El contenido del bloque
    // previousHash = Valor del bloque anterior de la cadena
    constructor(index, data, previousHash=''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date();
        this.nonce = 0;
        this.hash = this.createHash();
    }

    createHash(){
        return SHA256(`${this.index} ${this.data} ${this.date} ${this.nonce}`).toString();
    }

    // Inicie con un cero el hash
    mine(difficulty){
        while(!this.hash.startsWith(difficulty)){
            this.nonce++;
            this.hash = this.createHash();
        }
    }

    // Cifrado
    // Simetrico y Asimetrico

    // a SHA256 = x
    // a SHA256 = x

    // NPM = Node Package Manager
    // YARN
}

module.exports = Block;
