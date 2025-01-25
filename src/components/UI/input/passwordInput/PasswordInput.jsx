import "./PasswordInput.css"

function PasswordInput({children, name, description, ...props})
{
    return(
        <div className="password-input">
            <label htmlFor={name} className="icon">{children}</label>
            <div className="password-input-box">
                <input id={name} {...props} type="text" />
                <p data-tooltip={description}>i</p>
            </div>
        </div>
    )
}

export default PasswordInput