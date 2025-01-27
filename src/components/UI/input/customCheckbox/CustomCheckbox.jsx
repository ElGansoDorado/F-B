import './CustomCheckbox.css'

function CustomCheckbox({ children, id, ...props }) {
    return (<div>
        <input id={id} type="checkbox" className="custom-checkbox" {...props} />
        <label htmlFor={id}>{children}</label>
    </div>
    )
}

export default CustomCheckbox