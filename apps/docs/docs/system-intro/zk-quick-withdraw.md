---
sidebar_position: 3
---

# ZK Quick Withdraw

The internal logic of the ZK Proof is based on the eigenlayer's mechanism for generating proofs for withdrawals from Layer 1 and the beacon chain via eigenpod. Currently, we use the L2 source chain as the beacon deposit proof, allowing validators to produce block intervals and withdrawal proofs, enabling user withdrawals.

Compared to the original L2 deposit and withdrawal interactions, miners extract transaction fees. Once the proof is generated and the deposit is verified, the miner's callback design sends the proof and withdrawal confirmation to another chain. Then, the miner transfers the corresponding tokens to the target chain through the transaction fee.