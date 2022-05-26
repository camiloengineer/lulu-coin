import { SHA256 } from 'crypto-js'

class Block{
    constructor(timestamp, previusHash, hash, data){
        this.timestamp = timestamp;
        this.previusHash = previusHash
        this.hash = hash;
        this.data = data;
    }
  
    static get genesis(){
        const timestamp = (new Date(2000, 0, 1)).getTime();
        return new this(timestamp, undefined, "g3n3s1s-h4sh", "i like ramen")
    }

    static mine(previusBlock, data){
        const timestamp = Date.now();
        const hash = Block.hash(timestamp, previusHash, data);
        const { hash: previusHash} = previusBlock;

        return new this(timestamp, previusHash, hash, data);
    }

    static hash(timestamp, previusHash, data){
        return SHA256(`${timestamp}${previusHash}${data}`).toString();
    }

    toString(){
        const {timestamp, previusHash, hash, data} = this;

        return `Block - 
        timestamp      : ${timestamp},
        previusHash    : ${previusHash},
        hash           : ${hash},
        data           : ${data},
        `
    }
}
export default Block;