require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note rural million inner private slot giant'; 
let testAccounts = [
"0x1c64b6a2b1d16cd8e97925988ef78153a0d65a6c0f59275f8c6c375adc964d5e",
"0xc954653da6b8a6c8c87270a8874a3bd014022be091c5f8bbc3fa241743ef1f7a",
"0xf25f9e489103e80984e7406a32940c6aac4092ec94436b085de898743c00abd2",
"0x2d517ce1c5f3595934ee9bda18018338344db59a0bc62d1f8265bb122444ce89",
"0x94afcd0727b001356f0a279ecb2e9d09968810b46a4951332ea9447e0b6b3f60",
"0x974c1ed55ffa0679fd5ee5689ae84fc505a5b1679e7223404ca872f6d8caf015",
"0x5cddca76923d4fdc5602cae75810207fb8fea1b4712173a3ca8cb2cd5074f0bd",
"0xbeff3fcd2acf318dc11f82c6eb70245a48bb6b7062b10caea3886851d8b4d829",
"0x062fafb574567b798462c854ecfeb548bd9d9c369bbbb3a74f933ac9de189a33",
"0x82d79309f5f3bae0b8b9d1b4aed879cad12ebb477769b190e7f7a490a9e74124"
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

