import './MenuButton.css'

function MenuButton({children, sectionRef})
{
    return(
        <li className='menu-button'>
            <a href={sectionRef}>{children}</a>    
        </li>
    )
}

export default MenuButton