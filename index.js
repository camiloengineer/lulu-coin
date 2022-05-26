import PKG from "./package.json";
import Block from './src/blockchain/block';

const {name, version} = PKG;

console.log( `${name} v${version}` );
const { genesis } = Block;

const block1 = Block.mine(genesis, 'd4t4-1');
console.log(block1.toString())

const block2 = Block.mine(block1, 'd4t4-2');
console.log(block2.toString())

const block3 = Block.mine(block2, 'd4t4-3');
console.log(block3.toString())