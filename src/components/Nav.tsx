import '../css/global.scss'

const menuItems = [
    {label: 'О нас', href: '/about'},
    {label: 'Услуги', href: '/service'},
    {label: 'Проекты', href: '/portfolio'},
    {label: 'Контакты', href: '/contact'},
]

const Nav: React.FC = () => {
    return (
        <>
            <nav>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Nav