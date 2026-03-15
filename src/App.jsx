
import Input from "./Components/Input"
import { useState } from "react"
import "./App.css"
import React from "react"
import useCurrencyInfo from "./Components/hooks/"
function App() {
const [amount, setAmount] = useState("")
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")
const [convertedAmount, setConvertedAmount] = useState("")
const currencyInfo= useCurrencyInfo(from)

const options=Object.keys(currencyInfo)

const swap =()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}
const convert =()=>{
  setConvertedAmount(amount * currencyInfo[to])
}
  return (
    <div className="bg-container font-sans text-gray-800 p-4 sm:p-0">
      <div className="w-full max-w-md mx-auto container relative">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 drop-shadow-md">Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <Input 
              label={"From"} 
              amount={amount} 
              currencyOptions={options} 
              selectCurrency={from} 
              onCurrencyChange={(currency)=> setFrom(currency)} 
              onAmountChange={(amount)=> setAmount(amount)}
            />
          </div>
          <div className="relative w-full h-0.5 my-4">
            <button 
              type="button"
              onClick={swap} 
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-1.5 font-semibold text-sm shadow-md"
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-6">
            <Input 
              label={"To"} 
              amount={convertedAmount} 
              currencyOptions={options} 
              selectCurrency={to} 
              onCurrencyChange={(currency)=>setTo(currency)} 
              amountDisable
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-3 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 uppercase tracking-widest"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
