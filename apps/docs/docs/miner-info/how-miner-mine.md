---
sidebar_position: 2
---

# How miner mine?
:::info
You need to get your own celestia rpc in localhost
:::

### Step 0. follow Celestia docs to setup a node to connect DA
Follow Celestia docs to get a node

### Step 1. Run circuits script to generate proof and publish to DA
:::info
You have 2 choices
1. build in source
2. run in docker
:::
1. clone in source
```bash
git clone git@github.com:hollow-leaf/goten.git
```

2. 2 options to run the miner
(option 1) use cargo run to run the scripts
```
cd apps/circuits
# run in rust
cargo check
cargo run --release
```

(option 2) change dir to circuits for miner and run docker
```
cd apps/circuits
# run in docker
docker-compose up --build
```


