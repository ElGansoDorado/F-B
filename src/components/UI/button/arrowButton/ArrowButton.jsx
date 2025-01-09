import "./ArrowButton.css"

function ArrowButton({ children, isBlack, ...props }) {
    return (
        <button {...props} className={isBlack ? "arrow-button black" : "arrow-button green"}>
            <p>{children}</p>
            <div class="arrow">
                <div></div>
            </div>
        </button>
    )
}

export default ArrowButton