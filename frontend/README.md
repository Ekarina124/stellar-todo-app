# 📝 Todo App on Stellar

A decentralized Todo application built on the Stellar blockchain using Soroban Smart Contract SDK. It provides a secure, immutable platform for managing tasks directly on the blockchain.

## Project Description
Stellar Todo DApp is a decentralized smart contract solution built on the Stellar blockchain using Soroban SDK. It provides a secure, immutable platform for managing personal tasks directly on the blockchain. The system allows users to create, view, and delete tasks, leveraging the efficiency and security of the Stellar network.

## Key Features
1. **Add Tasks** - Create tasks stored permanently on the Stellar blockchain
2. **View Tasks** - Fetch all stored tasks in a single call
3. **Delete Tasks** - Remove specific tasks using their unique IDs
4. **Wallet Integration** - Connect with Freighter wallet to sign transactions
5. **Testnet Ready** - Fully deployed and tested on Stellar Testnet

## Smart Contract
- **Contract ID (Testnet):** `CDVMUWZ5Z5523B6G6RHLPREN3J7PL33E4KWRXAAQFUTDGBPRWIQ4DQYJ`
- **Network:** Stellar Testnet
- **Functions:** `add_task`, `get_tasks`, `delete_task`

## Tech Stack
- Rust + Soroban SDK (Smart Contract)
- React + Vite (Frontend)
- Stellar Contracts Kit
- Freighter Wallet

## How to Run
1. Clone this repository
2. Install dependencies: `npm install`
3. Run: `npm run dev`
4. Open: `http://localhost:5173`
5. Connect Freighter wallet (set to Testnet)
6. Add tasks and interact with the blockchain!

## Frontend Screenshot
![Todo App](./screenshot.png)

## Contract Details
CDVMUWZ5Z5523B6G6RHLPREN3J7PL33E4KWRXAAQFUTDGBPRWIQ4DQYJ
![Testnet](./testnet.png)
