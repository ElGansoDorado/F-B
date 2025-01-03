import "./CustomButton.css"

function CustomButton({children, isFill, ...props})
{
    return(
        <button {...props} className={isFill ? "button-fill" : "button-not-fill"}>
            {children}
        </button>
    )
}

export default CustomButton