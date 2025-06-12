import { useImperativeHandle, useRef, forwardRef } from "react"
import ReactDOM from "react-dom"

const ResultModal = forwardRef( function ResultModal({ targetTime, remainingTime, onReset, playerName }, ref) {
    const dialog = useRef()

    const userLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })

    return ReactDOM.createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds</strong> </p>
           {!userLost && <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>}
            <form method="dialog" onSubmit={onReset}>
                <div style={{display: "flexbox", justifyContent: "space-evenly"}}><button>Close</button><h5>Thanks for playing!</h5></div>
            </form>
        </dialog>, document.getElementById('modal')
    )
})

export default ResultModal