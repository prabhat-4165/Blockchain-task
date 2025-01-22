# Blockchain Task

## Description

This project is a simple blockchain simulation implemented in JavaScript. The simulation demonstrates the core features of a blockchain, including block structure, hashing, and chain validation. It also showcases tampering detection and an optional proof-of-work mechanism for block mining.

## Structure

simple-blockchain/
├── blockchain.js (Main logic for blockchain simulation)
├── tamper.js (Logic to tamper with the blockchain data)
├── index.js (Entry point for execution)
├── package.json (Dependencies and project info)
└── README.md (Instructions for setup and usage)

## Features

- **Block Structure**: Each block contains:
  - Block index
  - Timestamp
  - List of transactions
  - Hash of the previous block
  - Current block hash
- **Hashing**: Uses a SHA-256 hashing algorithm to generate block hashes.
- **Blockchain Class**:
  - Add new blocks to the chain.
  - Validate the integrity of the chain.
- **Proof-of-Work**: Implements a simple proof-of-work mechanism (optional).
- **Tampering Detection**: Demonstrates tampering and its detection.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/prabhat-4165/Blockchain-task.git
   cd Blockchain-task
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

## Usage

### Run the Blockchain Simulation

```bash
node index.js
```

This will:

- Initialize the blockchain.
- Add blocks with sample transactions.
- Print the details of the blockchain.
- Validate the blockchain integrity.

### Tampering Demonstration

```bash
node tamper.js
```

This will:

- Display the blockchain before and after tampering.
- Validate the blockchain integrity and detect tampering.

## Files

- `blockchain.js`: Contains the `Block` and `Blockchain` classes.
- `index.js`: Main script to simulate the blockchain.
- `tamper.js`: Demonstrates tampering and chain validation.

## Example Output

### Blockchain Simulation (`index.js`)

```
Mining block 1...
Block mined: <hash>
Mining block 2...
Block mined: <hash>
Blockchain: {
  "chain": [...],
  "difficulty": 2
}
Is blockchain valid? true
```

### Tampering Demonstration (`tamper.js`)

```
Blockchain before tampering: {...}
Blockchain after tampering: {...}
Is blockchain valid? false
```

## Contribution

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

---

### Author

Prabhat ([GitHub Profile](https://github.com/prabhat-4165))
