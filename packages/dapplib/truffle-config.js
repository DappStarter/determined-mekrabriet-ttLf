require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad hope clip symptom sense'; 
let testAccounts = [
"0x65152d2af12ad9143f994071e532a7a8cf6b766eae74e17fe435ceba2548a69a",
"0xb7323ea2d1d2be73a253628e739b193c12be22c7b16ce723bd7e5d7a8135ba34",
"0xc308f092cf1a97504bb596a8bb4d6c805b64dc6df5fb1e15b120c0a40d3805cc",
"0xcd6bb151c2f030d037fa3b171140e4f78462a3cd22fe10460d903ca0724cfb36",
"0x34fe797267f8587414ecc7ad2dc507af11e94d603899714f460b8225bd1b426e",
"0x077c0bfe86c0305b0b9081e77f4aa16d35de574134fff6f99668fa34695d2872",
"0xb2ace23fbb95a9a49a92f96038c6043a72d1378780acf689d745679b20fd69be",
"0x9760d9d29415aed3646b436b5fa4c2d0bdc4d9779301aece10ce275b2a448ea1",
"0xef27b0b4604ca8ada46dedddec524f900138a76dd6a637e8e91e2b5fc23dbff0",
"0x06ba7b0a8b1af67b76bfd4ff639a33900531136ce1eeaed8015f2921ac9bd9f2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

