import { useEffect, useRef, useState } from "react"

const useThrottle = (value, delay) => {
    const [throttledText, setThrottledText] = useState(value);

    // If you want to persist the timestamp between renders in React, you should use useRef
    const lastUpdated = useRef(Date.now())

    useEffect(()=>{

        const timer = setTimeout(()=>{
            if(Date.now() - lastUpdated.current >= delay){
                setThrottledText(value)
                lastUpdated.current = Date.now()
            }
        },delay - (Date.now() - lastUpdated.current) )

        return ()=>{clearTimeout(timer)}
    },[value, delay])

    return throttledText
}

export default useThrottle