import Block from "./block";

describe('block', () => {

    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1)
        previousBlock = Block.genesis;
        data = 't3st-d4t4';
        hash = 'h4s4';
    })

    it('create and instance with parameters', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);
        expect(block.timestamp).toEqual(timestamp);
        expect(block.previusHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    })

    it('use static mine()', () => {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previusHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    })

    it('use static hash()', () => {
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hashOutput = '5bc976e1448acb9f697dd94a5f537841539c55b1778672f1bd2a12c83ff419ec';
        expect(hash).toEqual(hashOutput);
    })

    it('use toString', () => {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    })
})