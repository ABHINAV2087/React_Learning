import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const [buttontext, setButtonText] = useState("Copy")


  // useRef hoook
  const passwordRef = useRef(null)
  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    buttontext = setButtonText("Copied")
  }, [password])

  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "/*-@#$&"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor((Math.random() * str.length) + 1)

      password += str.charAt(char)

      setPassword(password)

    }

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full  mx-auto shadow-md rounded-lg p-5 text-orange-400 bg-gray-700 '>
        <h1 className='text-1xl text-gray-700 dark:text-white p-2 '>Password Generator</h1>
        <div className='w-full flex rounded-lg overflow-hidden m-4 mt-10 '>
          <input
            className="flex mx-3 h-10 w-9/12 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none  focus:ring-black/30 focus:ring-offset-1 "
            type="text"
            readOnly
            placeholder="Password"
            value={password}
            ref={passwordRef}
          />
          <button
            type="button"
            class="rounded-md cursor-pointer bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={copytoclipboard}

          >
            {buttontext}
          </button>
        </div>
        <div className='flex flex-col px-10'>
          <div className='flex justify-between align-middle mt-5 '>
            <input
              className='w-7/12 cursor-pointer'
              type='range'
              max={25}
              min={8}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length} </label>
          </div>
          <div className='flex justify-between align-middle mt-5'>
            <label> Special Character </label>
            <input
              className='w-7/12 cursor-pointer'
              type='checkbox'
              defaultChecked={charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />

          </div>
          <div className='flex justify-between align-middle mt-5'>
            <label> Numbers </label>
            <input
              className='w-7/12 cursor-pointer'
              type='checkbox'
              defaultChecked={numberAllowed}
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />

          </div>
        </div>
      </div>
    </>
  )
}

export default App
