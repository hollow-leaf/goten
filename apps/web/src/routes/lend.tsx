import React, { useState } from 'react'
import Navbar from '../components/AppNavbar'
import { useNavigate } from 'react-router-dom'
import { Collateral, MintButton } from 'src/components/'
import { ERC20Address } from 'src/services/contractAbi'
import Lend from 'src/components/Lend'


export default function LendingPool() {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputIdValue, setInputIdValue] = useState<string>('')

  const [correctOtherInput, setCorrectOtherInput] = useState<boolean>(true)
  const navigate = useNavigate()

  const handleInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      setInputValue(value)

  }

  const handleIdInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputIdValue(value)
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyword = e.key
    if (keyword=="Enter"){
      handleSubmit()
    }
  }
  const handleSubmit = async () => {
    if (inputValue.trim() !== '') {
     
    
    } else {
      alert('Must input streamer name!')
    }
  }

  const handleRegister = () => {
    if (inputIdValue.trim() !== '') {
      
    } else {
      alert('Must input streamer id!')
    }
  }

  return (
<div className=' w-full bg-primary bg-no-repeat bg-fixed bg-launch min-h-screen grid place-items-start relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <div className='mx-auto w-full md:grid grid-row-5 text-center gap-4 rounded-md relative z-10 px-12'>
        <Navbar />
        <div className='row-span-5'></div>
        <label className="font-bold flex" style={{ "color": "white" }}>Create Collateral Request</label>
        <div className='flex flex-col bg-blue-950 rounded-md p-16 h-[200px] shadow-xl gap-3' style={{"marginBottom": "10px"}}>
          <p className='text-xl text-start text-white'>Input  name: </p>
          <div className='join gap-4 start'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-info w-full max-w-xs'
              defaultValue={123}
              value={inputValue}
              onChange={handleInputContent}
              onKeyDown={handleEnter}
            />
            <Collateral dstChainId={inputValue}/>
          </div>
          <div className={`${correctOtherInput === true ? "hidden" : "flex items-center"}`}>
            <svg className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <p className="text-red-500 font-bold">Warning: Only allow number and string in text box！</p>
          </div>
        </div>
        <label className="font-bold flex" style={{ "color": "white" }}>Lending Pool</label>
        <div className='flex flex-col bg-blue-950 rounded-md p-16 h-[200px] shadow-xl gap-3'>
          <p className='text-xl text-start text-white'>Lend Money</p>
          <div className='join gap-4 start'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-info w-full max-w-xs'
              value={inputIdValue}
              onChange={handleIdInputContent}
              onKeyDown={handleEnter}
            />
            <Lend amount={inputIdValue}/>
          </div>
          <div className={`${correctOtherInput === true ? "hidden" : "flex items-center"}`}>
            <svg className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <p className="text-red-500 font-bold">Warning: Only allow number and string in text box！</p>
          </div>
        </div>
      </div>
    </div>
  )
}
