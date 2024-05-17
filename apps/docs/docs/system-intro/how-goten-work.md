---
sidebar_position: 1
---

# How Goten Works?

Goten operates in two main use cases:

### Normal On-Chain Actions
Users can perform cross-chain transactions using Goten by interacting with Goten contracts on Layer 2. When a user initiates a transaction, miners are notified through on-chain events. These miners then consolidate individual or multiple transactions within a specific time period (epoch), similar to the role of a sequencer, but solely for proving these on-chain actions.

:::warning
Currently, zk proofs, aside from pre-packaged ones and demo withdraw proofs, are not fully open-source for system security and proprietary reasons. 

The available open-source part demonstrates the process of sending proofs to the DA layer using the `sp1` example from eigenlayer withdraws with hardcoded proofs.
:::

### Goten Liquidity Pool
A basic lending pool is deployed on-chain, allowing users to over-collateralize their assets. Deposits and withdrawals in this pool simulate Layer 1 transactions, generating withdraw or lending proofs that facilitate cross-chain interoperability.