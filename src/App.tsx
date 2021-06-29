import React, {ChangeEvent, useEffect, useState} from 'react'
import {Display} from "./Display";
import {CounterSetings} from "./Counter_Setings";

export type StatusType = "error" | "count" | "set" | number

function App() {

    const [count, setCount] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)
    const [settingsMode, setSettingsMode] = useState(false)
    const [write, setWrite] = useState<boolean>(true)


    useEffect(() => {
        debugger
        let startValueAsString = localStorage.getItem("startValue")
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }
        let maxValueAsString = localStorage.getItem("maxValue")
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])


    let status: StatusType = "set"

    const needToValue = ((startValue >= 0) && (maxValue >= 0) && (startValue < maxValue))
    if (needToValue) {
        status = "count"
    } else {
        status = "error"
    }
    const startHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }


    const maxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const incHandler = () => {
        if (count < maxValue) {
            /* setWrite(false)*/
            setCount(count + 1)
        }
    }

    const resetHandler = () => {
        setCount(startValue)
    }
    const setHandler = () => {
        if (needToValue) {
            setCount(startValue)
            setSettingsMode(false)
            setWrite(false)
            localStorage.setItem("startValue", String(startValue))
            localStorage.setItem("maxValue", String(maxValue))
        } else {
            setSettingsMode(true)
        }
    }

    return (
        <div className={"counter"}>


            <CounterSetings
                status={status}
                maxValue={maxValue}
                startValue={startValue}
                setHandler={setHandler}
                startHandler={startHandler}
                maxHandler={maxHandler}
                count={count}


            />

            <Display
                count={count}
                status={status}
                settingsMode={settingsMode}
                incHandler={incHandler}
                resetHandler={resetHandler}
                maxValue={maxValue}
                write={write}
            />


        </div>
    )

}


export default App;