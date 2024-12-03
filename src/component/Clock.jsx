import React from 'react'

export default function Clock({hh,mm,ss}) {

    const offset = 90;
    const hourDeg = (hh%12)*30 + offset;
    const minDeg = (mm%60)*6+offset;
    const secDeg = (ss%60)*6+offset;

    return (
        <div className="clock">
        <div className="clock-face">
            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
            <div className="hand hour-hand" style={{transform:`rotate(${hourDeg}deg)`}}></div>
            <div className="hand minute-hand" style={{transform:`rotate(${minDeg}deg)`}}></div>
            <div className="hand second-hand" style={{transform:`rotate(${secDeg}deg)`}}></div>
            <div className="screw"></div>
        </div>
    </div>
    )
}
