import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./Redux/idSlice/idSlice"

const Counter = () =>{
    const count = useSelector(store => store.arraySlice.value)
    const dispatch = useDispatch()

    return (
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      )
}