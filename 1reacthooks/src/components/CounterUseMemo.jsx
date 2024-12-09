
// We are not calling square function at decrement still its invoking itself because change in states cause re-render of whole

// It cost us heavy bcs we are calling unnecessarily function.

// So we use UseMemo to resolve this issue

import {useState} from 'react'
import useCustomMemo from '../hooks/useCustomMemo'

const CounterUseMemo = () =>{
    const [counter, setCounter] = useState(0)
    const [counterDec, setCounterDec] = useState(100)

    function squaredValue(){
        console.log("squared value called")
        return counter * counter
    }

    // const memoizedValue = useMemo(squaredValue, [counter])
    const memoizedValue = useCustomMemo(squaredValue, [counter])

    return(
        <>
            <h2>Counter : {counter}</h2>
            {/* <h2>Squared value : {memoizedValue}</h2> */}
            <h2>Squared value : {memoizedValue}</h2>
            {/* <h2>Squared value : {squaredValue()}</h2> */}
            <button onClick={() => setCounter(counter+1)}>Increment</button>

            <h2>Counter : {counterDec}</h2>
            <button onClick={()=>setCounterDec(counterDec - 1)}>Decrement</button>
        </>
    )
}

export default CounterUseMemo