import React from "react";
import {StatusType} from "./App";

type DisplayType = {
    count: number
    status: StatusType
    settingsMode: boolean
    incHandler: () => void
    resetHandler: () => void
    maxValue: number
    write: boolean
}
export const Display = (props: DisplayType) => {

    const myValue = () => {
        if (props.status === "error") {
            return "Incorrect value!"
        }
        if (props.write) {
            return "enter values and press set"
        }
        if (props.status === "count") {
            return props.count
        }
    }
    return (
        <div className={"display-container"}>
            <h3 className={props.count === props.maxValue ? "number" : "truNumber"}>
                {myValue()}
            </h3>
            <div>
                <button
                    className={"incButton"}
                    disabled={props.status === "error"}
                    onClick={props.incHandler}>inc
                </button>
                <button
                    className={"resetButton"}
                    disabled={props.status === "error"}
                    onClick={props.resetHandler}>reset
                </button>
            </div>
        </div>
    )
}