import { useState, useEffect } from "react";

const DigitalTimer = () => {

    const padTime = (time) => {
        if(time >= 10) return time
        else return '0' + time
    }

    const [time, setTime] = useState(
        {
            hour : '00',
            minute : '00',
            seconds : '00',
        }
    );

    useEffect(()=>{
        const Id = setInterval(()=>{
            const date = new Date;
            setTime(
                {
                    hour : date.getHours(),
                    minute : date.getMinutes(),
                    seconds : date.getSeconds()
                }
            )

            return () => clearInterval(Id)
        },1000)
    },[])
    
    return (
        <>
        <h4>Digital Timer</h4>
        {/* <h2>{time.hour < 10 ? '0'+ time.hour : time.hour} : {time.minute < 10 ? '0' + time.minute : time.minute} : {time.seconds < 10 ? '0'+ time.seconds : time.seconds}</h2> */}

        <h2>
            {padTime(time.hour)} : {padTime(time.minute)} : {padTime(time.seconds)}
        </h2>
        </>
    )
}

export default DigitalTimer;