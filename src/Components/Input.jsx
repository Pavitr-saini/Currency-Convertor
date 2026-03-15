import React from 'react'

function Input({label,amount,onAmountChange,currencyOptions=[],selectCurrency="usd",amountDisable=false,currencyDisable=false,onCurrencyChange}) {
  return (
      <div className="w-full bg-white/20 backdrop-blur-md rounded-xl p-4 sm:p-6 flex flex-col shadow-inner border border-white/20">
          <div className="flex justify-between items-center mb-2 sm:mb-4 text-white/80 text-xs sm:text-sm font-medium">
              <span className="uppercase tracking-wider">{label}</span>
              <span className="uppercase tracking-wider">Currency</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
              <input className="outline-none w-full bg-transparent text-white text-2xl sm:text-3xl font-semibold placeholder:text-white/50 py-1 sm:py-2"
               type="number"
                placeholder="0.00"
                 disabled={amountDisable} 
                 value={amount}
                  onChange={(e)=>{onAmountChange && onAmountChange(e.target.value === '' ? '' : Number(e.target.value))}} />
              <div className="relative shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
                  <select className="appearance-none w-full bg-blue-600/80 hover:bg-blue-600 text-white font-semibold py-2 pl-4 pr-10 rounded-lg cursor-pointer outline-none transition-colors border border-blue-500/30 uppercase text-sm sm:text-base"
                   value={selectCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}} disabled={currencyDisable}>
                      {currencyOptions.map((currency)=>(
                          <option key={currency} value={currency} className="bg-gray-800 text-white">{currency}</option>
                          ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/70">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Input