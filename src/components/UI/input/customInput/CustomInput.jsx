import "./CustomInput.css"

function CustomInput({isCorrect, ...props})
{
    return(
        <label className="custom-input-box">
            <span className="custom-input-error">{isCorrect && "Недопустимый формат"}</span>
            <input className={isCorrect ? "custom-input error" : "custom-input"} {...props} required/>
        </label>
    )
}

export default CustomInput