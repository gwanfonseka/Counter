import { useReducer } from "react"
import counterReducer from "../reducers/counterReducer"
import { State } from "../types"

const Counter = () => {
    const initialState: State = { count: 0 }
    const [state, dispatch] = useReducer(counterReducer, initialState)

    return (
        <div className="containerWrapper">
            <div className="innerWrapper">
                <div>
                    <p className="count">{state.count}</p>
                </div>
                <div>
                    <button className="actionButtons" type="button" onClick={() => state.count === 0 ? window.alert("Count can't be less than 0") : dispatch({ type: 'DECREMENT' })}>Decrease</button>
                    <button className="actionButtons resetButton" type="button" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
                    <button className="actionButtons" type="button" onClick={() => state.count === 10 ? window.alert("Count can't be more than 10") : dispatch({ type: 'INCREMENT' })}>Increase</button>
                </div>
            </div>
        </div>
    )
}

export default Counter