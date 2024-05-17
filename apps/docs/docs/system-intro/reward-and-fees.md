---
sidebar_position: 2
---

# Reward and Fees

Rewards are a crucial part of Goten, designed to subsidize miners using the system when users pay gas fees.

When a transaction is submitted, it includes a gas field that allows miners to evaluate its profitability. The gas fee will be covered by the user through future contract designs.

### Transaction Fees
Transaction fees are categorized based on whether our liquidity pool is used.

- **Using Our Pool:** 

A withdrawal fee of 0.05% of the transaction amount.
- **For Transactions:**

  $$
  \text{Fee} = 0.1\% \times \text{Transaction Amount} + (\text{Estimated Gas on Target Chain} \times 1.1)
  $$

- For messages or state changes, the fee is calculated as:
  $$
  \text{Fee} = \text{Gas Price} \times 1.1 + 0.1u \text{ ETH}
  $$

- For transfers or ERC20 transactions, the fee is:

  $$
  \text{Fee} = 0.1\% \times \text{Token or Transfer Amount}
  $$
