# EDUChain Yield Vault Protocol

Welcome to the official documentation for the EDUChain Yield Vault Protocol — a suite of DeFi strategies built on top of the EDUChain ecosystem. This protocol leverages SailFish DEX and Blend Lending to deliver high-yield, capital-efficient strategies for $EDU, $USDT, and $sEDU holders.

## Overview

The Yield Vault Protocol provides automated vaults where users can deposit assets and earn yield through recursive lending strategies and token incentives. Each vault is isolated, transparent, and optimized for capital efficiency and safety.

This is a public-facing DeFi app with its own frontend, branding, and on-chain smart contracts.

## Key Features

- Strategy-based vaults (EDU, USDT, sEDU)
- Automated recursive lending loops
- Modular and configurable vaults
- Oracle integration (for sEDU)
- Emergency pause and withdrawal controls
- On-chain analytics: APY, LTV, earnings

## Smart Contract Architecture (Developer Docs)

### Vault Contracts

- Modular vaults per strategy
- Configurable parameters:
  - Loop depth
  - Max LTV
  - Slippage tolerance
- Supports:
  - Deposits and withdrawals
  - Strategy health checks
  - Emergency pause/unwind functions

### Blend Integration

- Direct integration with Blend for:
  - Lending market deposits
  - Borrowing operations
  - Claiming BLEND emissions

### Oracle Support

- Uses Stork Oracle or trusted source for sEDU/wstEDU price feeds
- Accurate APY and LTV calculations per vault

## Frontend Application (User-Facing)

### App Features

- Connect wallet (EDUChain compatible)
- View vault metrics:
  - Strategy APY
  - LTV usage
  - TVL and user-specific deposits
  - Pending rewards
- Deposit/withdraw interface
- Reward claiming and compounding
- Health factor display and warnings

### Frontend Tech Stack

- New standalone codebase (not part of EDU dashboard)
- Hooks for fetching:
  - Strategy metadata (APY, LTV, slippage)
  - On-chain vault stats (TVL, earnings, utilization)
  - User positions

## Vault Strategies

### Vault A: EDU Lending Loop (Vanilla)

- Input Asset: $EDU
- Looping Steps:
  1. Deposit $EDU into Blend
  2. Borrow $EDU (around 55% LTV)
  3. Re-deposit borrowed $EDU
  4. Repeat until target leverage (approximately 2.2x)
- Yield Sources:
  - 5% BLEND rewards on deposits
  - 5% BLEND rewards on borrows
  - Estimated APY: ~17%
- Output:
  - BLEND token rewards (claimable or stakeable)

### Vault B: USDT Positive Carry Loop (Stablecoin Strategy)

- Input Asset: $USDT
- Looping Steps:
  1. Deposit $USDT into Blend
  2. Borrow $USDT (around 75% LTV)
  3. Re-deposit borrowed $USDT
  4. Repeat until target leverage (approximately 4x)
- Yield Sources:
  - 2.5% BLEND rewards on deposits
  - 2.5% BLEND rewards on borrows
  - Estimated APY: ~17.5%
- Output:
  - BLEND token rewards (claimable or stakeable)

### Vault C: sEDU Leverage Vault (Advanced Strategy)

- Input Asset: $EDU (converted to $sEDU and then to $wstEDU)
- Mechanism:
  1. Stake $EDU to receive $sEDU
  2. Convert $sEDU to $wstEDU
  3. Deposit to Blend
  4. Borrow $EDU and loop
- Yield Sources:
  - Real yield (USDC) from sEDU staking
  - BLEND emissions on lending and borrowing
- Requirements:
  - Blend must support $sEDU as collateral
  - Oracle pricing for $sEDU

## Dev and Infra Requirements

### Contract Requirements

- Modular, upgradeable vault contracts
- Emergency unwind and withdrawal cap mechanisms
- Integration with Blend (deposit, borrow, repay, claim)
- Oracle consumption for dynamic LTV and APY

### Frontend Requirements

- Dedicated dApp UI (separate repo)
- Hooks for fetching on-chain data (TVL, APY, rewards)
- Real-time vault health metrics
- Connected wallet UX and reward claiming

## Governance and Admin Controls

- Admin: Deployer multisig (initially)
- Controls:
  - Set vault parameters (LTV, slippage)
  - Pause or unpause vaults
  - Trigger emergency withdrawal or unwind

## Next Steps

- Finalize custody model: vault-controlled vs. multisig
- Confirm $sEDU collateral support on Blend
- Begin contract deployment and audit
- Launch frontend with EDU and USDT vaults first

Built for the next generation of on-chain capital efficiency.

Version: v1.0.0  
