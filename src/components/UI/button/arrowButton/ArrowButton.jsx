import "./ArrowButton.css"

function ArrowButton({ children, color, isRevers = false, ...props }) {
    return (
        <button {...props} className={isRevers ? `arrow-button ${color} reverse` : `arrow-button ${color}`}>
            <p className={isRevers ? `reverse` : null}>{children}</p>
            <div className="arrow">
                <div></div>
            </div>
        </button>
    )
}

export default ArrowButton