import "./CustomButton.css"

function CustomButton({children, isFill, onClick, ...props})
{
    return(
        <button {...props} onClick={() => onClick()} className={isFill ? "button-fill" : "button-not-fill"}>
            {children}
        </button>
    )
}

export default CustomButton