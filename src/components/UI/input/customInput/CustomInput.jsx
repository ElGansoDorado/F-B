import "./CustomInput.css"

function CustomInput({isCorrect, mRef, ...props})
{
    return(
        <label className="custom-input-box">
            <span className="custom-input-error">{isCorrect && "Недопустимый формат"}</span>
            <input ref={mRef} 
                className={isCorrect ? "custom-input error" : "custom-input"} 
                {...props} 
                />
        </label>
    )
}

export default CustomInput