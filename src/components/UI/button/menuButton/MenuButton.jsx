import './MenuButton.css'

function MenuButton({children, sectionRef, ...props})
{
    return(
        <li className='menu-button'>
            <a {...props} href={sectionRef}>{children}</a>    
        </li>
    )
}

export default MenuButton