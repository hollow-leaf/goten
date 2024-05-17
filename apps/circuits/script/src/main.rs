use sp1_sdk::{utils, ProverClient, SP1Stdin};
use sp1_recursion_gnark_ffi::{convert, verify};
const ELF: &[u8] = include_bytes!("../../program/elf/riscv32im-succinct-zkvm-elf");
use std::io;
use std::io::prelude::*;

use reqwest::{StatusCode, Client};
use serde::{Deserialize, Serialize};
use serde_json::json;
use base64::{Engine as _, engine::{self, general_purpose}};
use flate2::write::GzEncoder;

fn compress(data: &[u8]) -> Vec<u8> {
    let mut encoder = GzEncoder::new(Vec::new(), flate2::Compression::default());
    encoder.write_all(data).unwrap();
    encoder.finish().unwrap()
}
// use sp1_recursion_gnark_ffi::convert;
#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Confidence {
    pub block: u32,
    pub confidence: f64,
    pub serialised_confidence: Option<String>,
}
#[derive(Debug, Serialize, Deserialize)]
struct SubmitResponse {
    block_number: u32,
    block_hash: String,
    hash: String,
    index: u32,
}
const LIGHT_CLIENT_URL: &str = "http://127.0.0.1:7000";

#[tokio::main]
async fn main() {
    // Generate proof.
    // utils::setup_tracer();
    utils::setup_logger();

    let stdin = SP1Stdin::new();
    let client = ProverClient::new();
    let (pk, vk) = client.setup(ELF);
    let mut proof = client.prove_groth16(&pk, stdin).unwrap();
    println!("generated proof");
    client
        .verify_groth16(&proof, &vk)
        .expect("verification failed");

    // let proof = client.prove(&pk, stdin).expect("proving failed");
    // Verify proof.
    // client.verify(&proof, &vk).expect("verification failed");

    // Save proof.
    proof
        .save("proof-with-pis.json")
        .expect("saving proof failed");
    println!("proof saved to proof-with-pis.json");
    println!("successfully generated and verified proof for the program!");
    // from this proof to groth16

    // let submit_url = format!("{LIGHT_CLIENT_URL}/v2/submit");
    
    
}
