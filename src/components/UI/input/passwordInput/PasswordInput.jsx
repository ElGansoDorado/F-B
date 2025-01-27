import "./PasswordInput.css"

function PasswordInput({children, name, description, onShow, ...props})
{
    return(
        <div className="registration-field">
            <label htmlFor={name} className="registration-field-icon">{children}</label>
            <div className="registration-field-box">
                <input className="registration-field-input" id={name} {...props}/>
                <div onClick={() => onShow()} className="registration-field-help">
                    <p data-tooltip={description}>i</p>
                </div>
            </div>
        </div>
    )
}

export default PasswordInput