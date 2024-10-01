# OnChainNFT

OnChainNFT is a Solidity smart contract that enables the creation and minting of on-chain NFTs using SVG images. It utilizes Base64 encoding to store image data directly on-chain and follows the ERC721 token standard.

## Features

- **SVG-to-Base64 Encoding**: Converts SVG images to Base64 strings to store them on-chain.
- **TokenURI Generation**: Generates token metadata (name, description, image) in JSON format encoded as Base64.
- **Minting**: The contract allows the owner to mint NFTs, each associated with an SVG image.
- **ERC721 Compliance**: Implements the ERC721 standard with the `ERC721URIStorage` extension for storing metadata on-chain.

## Technologies

- **Solidity**: ^0.8.4
- **OpenZeppelin Contracts**: Used for standard contract modules like `ERC721URIStorage` and `Ownable`.
- **Base64 Encoding**: A custom library is used to encode data as Base64 strings for on-chain storage.



### Minting

To mint an NFT, call the `mint` function with an SVG string. This converts the SVG into a Base64 string and stores the resulting tokenURI on-chain.

```solidity
mint("<svg>...</svg>");
```

### Example

Here is an example of how the contract works:

1. **Convert SVG to Base64**:
   The contract takes an SVG image, encodes it to Base64, and stores it on-chain.
   
2. **Mint a Token**:
   The `mint` function is called by the owner, and a new token is minted with the associated metadata.

## Deployment

The contract have been deployed on the Lisk Sepolia testnet with the following addresses:

- **OnChainNFT"**: `0x7f92f89B9FE3E41C9FB4e71C15Cec8E2f632D6c6`
