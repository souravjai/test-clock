import React, { useEffect, useState } from 'react'
import Clock from './Clock';

export default function ClockWrapper({diff=0}) {
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const hrDiff = Math.trunc(-diff/60);
    const minDiff = -diff%60;

    useEffect(() => {
        let timerId;
        timerId = setInterval(()=>{
            const date = new Date();
            let mins = +date.getUTCMinutes() + minDiff;
            let hrs = (+date.getUTCHours()+hrDiff) + Math.trunc(mins/60)
            mins = (mins+60)%60;
            hrs = (hrs+12)%12;

            setHour(hrs);
            setMin(mins);
            setSec(+date.getUTCSeconds());
        },100);

        return ()=>clearInterval(timerId);
    }, [diff,hrDiff,minDiff])

    console.log("Min diff",minDiff);
    console.log("Hr diff",hrDiff);
    console.log("UTC HR", new Date().getUTCHours());
    console.log("UTC MIN", new Date().getUTCMinutes());
    console.log(`${hour}:${min}:${sec}`);

    return (
        <div>
            <Clock hh={hour} mm={min} ss={sec} />
        </div>
    )
}
