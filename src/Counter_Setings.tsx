import React, {ChangeEvent} from "react";
import {StatusType} from "./App";
import './App.css'

type ButtonType = {
    status: StatusType
    maxValue: number
    startValue: number
    maxHandler: (e: ChangeEvent<HTMLInputElement>) => void
    startHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setHandler: () => void
    count: number
}

export const CounterSetings = (props: ButtonType) => {

    return (
        <div className={'button-container'}>
            <span>{" max value "}</span>

            <input type="number"
                   className={props.maxValue < 0 || props.startValue === props.maxValue ? "errorValue" : " "}
                   value={props.maxValue}
                   onChange={props.maxHandler}/>
            <span>{" start value"}</span>

            <input type="number"
                   className={props.startValue < 0 || props.startValue === props.maxValue ? "errorValue" : " "}
                   value={props.startValue}
                   onChange={props.startHandler}/>

            <button className={"setButton"}
                    disabled={props.status === "error"}
                    onClick={props.setHandler}>set
            </button>
        </div>
    )
}