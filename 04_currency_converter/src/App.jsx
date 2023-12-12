import { useState } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
    const [amount, setAmount] = useState()
    const [from, setFrom] = useState("inr")
    const [to, setTo] = useState("usd")
    const [convertedAmount, setConvertedAmount] = useState()

    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]  )
    }
    return (
        <>

            <div
                className="w-full h-screen flex flex-col flex-wrap justify-center items-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                }}
            >
                <h1 className='text-3xl backdrop-blur-3xl mb-10 p-4 px-10 text-white -mt-12 font-bold text-center rounded-2xl border-2 bg-black opacity-60'>Real Time Currency Converter</h1>
                <div className="" >

                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-7  backdrop-blur-sm bg-white/30">

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert()
                            }}
                        >
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    onCurrencyChange={ (currency) => setAmount(amount) }
                                    selectCurrency={from}
                                    onAmountChange={(amount) => setAmount(amount)}
                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                    onClick={swap}
                                >
                                    swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={ (currency) => setTo(currency) }
                                    selectCurrency={to}
                                    
                                    amountDisable
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
