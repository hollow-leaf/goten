import React from "react";
import { ERC20ABI, ERC20Address, MinerTokenABI, MinerTokenAddress } from "src/services/contractAbi";
import { useAccount, useContractWrite } from "wagmi";
import Loading from "./loading";

export default function Lend(amount) {
    const { address, isConnecting, isDisconnected } = useAccount()
    // approve first and then stake
    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: MinerTokenAddress,
        abi: MinerTokenABI,
        functionName: 'lend',
        onSuccess(data) {
            alert('Successful! \n'+ "transaction hash: " + JSON.stringify(data).split(":")[1].split("\"")[1])
            
        },
        onError(error) {
            console.log(error)
        },
    })

    if(!isDisconnected){
        return (
            <div>
                <div>
                    
                    {<button
                    className="btn join-item input-bordered input-info rounded"
                    type="button"
                    disabled={!write}
                    onClick={() => {
                      write({
                          args: [address, 10000000000000000000],
                      })
                    }}
                    style={{"borderRadius": "30px", "minWidth": "0px", "marginTop": "10px"}}
                    >Lend</button>
                    }
                    
                </div>
                
                <div>
                {isLoading && <Loading />}
                </div>

            </div>
            
        )
    }else{
        return (
            <div>
                <p>You have to connect wallet!</p>
            </div>
        )
    }

}
