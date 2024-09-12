# OnChainNFT

OnChainNFT is a Solidity smart contract that allows the minting of Non-Fungible Tokens (NFTs) directly on-chain, using SVG images encoded in Base64 format. This contract leverages OpenZeppelin's libraries for enhanced security and functionality.

## Features

- **Base64 Encoding**: Converts SVG images to Base64 strings, allowing for on-chain storage and retrieval.
- **SVG Image Support**: Mint NFTs with custom SVG images as their metadata.
- **ERC721 Compliant**: Implements the ERC721 standard with URI storage for each token.
- **Ownership**: Only the contract owner can mint new NFTs.

## Contract Details

- **Contract Name**: `OnChainNFT`
- **Symbol**: `ONC`
- **Base64 Encoding**: Uses a custom Base64 library for encoding SVG images.
- **Events**: Emits a `Minted` event with the token ID whenever a new NFT is minted.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Gifftybabe/OnChainNFT.git
   cd OnChainNFT
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile the contract**:
   ```bash
   npx hardhat compile
   ```

4. **Deploy the contract**:
   ```bash
   npx hardhat run scripts/deploy.js
   ```

## Usage

1. **Minting an NFT**:
   - Modify the SVG image in the `scripts/deploy.js` file to your desired SVG content.
   - Run the deployment script to mint the NFT:
     ```bash
     npx hardhat run scripts/deploy.js
     ```

2. **View the Minted NFT**:
   - The minted NFT can be viewed on a supported marketplace like OpenSea using the provided token ID and contract address.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project utilizes the [OpenZeppelin Contracts](https://openzeppelin.com/contracts/) library.
- Base64 encoding inspired by Brecht Devos' implementation.

## Contact

For any inquiries or support, please reach out to [ulokangozi@gmail.com](mailto:ulokangozi@gmail.com).

---

