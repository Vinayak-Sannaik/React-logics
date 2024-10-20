import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {

    // After value and delay 
    // Hold the value until the delay 
    // After set incoming value to updated debounce value
    // Clear time out function to handle memory leak issues ,If we stop using the button, it stops the timer, so it doesn’t keep waiting forever.

    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(()=>{

        const timer = setTimeout(()=>{
            setDebounceValue(value)
        }, delay)

        // cleanup function that runs if the component unmounts (is removed) or if value or delay changes before the timer finishes.
        return () => {
            //clearTimeout(handler) stops the previous timer so it doesn't trigger accidentally after we’ve started a new one.
            clearTimeout(timer)
        }
    }, [value, delay])

    return debounceValue
}

export default useDebounce