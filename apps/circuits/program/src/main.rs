// example circuits for miner mining
#![no_main]
sp1_zkvm::entrypoint!(main);

pub fn main() {
  let n = sp1_zkvm::io::read::<u32>();
  sp1_zkvm::io::commit(&n);

  let mut a = 0;
  let mut b = 1;
  for _ in 0..n {
      let mut c = a + b;
      c %= 7919; // Modulus to prevent overflow.
      a = b;
      b = c;
  }

  sp1_zkvm::io::commit(&a);
  sp1_zkvm::io::commit(&b);
}