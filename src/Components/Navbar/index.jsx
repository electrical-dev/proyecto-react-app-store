import {NavLink} from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { RiShoppingCart2Line } from "react-icons/ri";


const Navbar = () => {
    const activeStyle = 'underline underline-offset-5'
    const context = useContext(ShoppingCartContext)
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-bold text-lg text-blue-600'>
                    <NavLink
                    to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    onClick={ () => context.setSearchByCategory()}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes'
                    onClick={ () => context.setSearchByCategory('clothes')}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
            }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/furnitures'
                    onClick={ () => context.setSearchByCategory('furnitures')}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    onClick={ () => context.setSearchByCategory('electronics')}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'
                    onClick={ () => context.setSearchByCategory('toys')}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'
                    onClick={ () => context.setSearchByCategory('others')}
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    dsavilav@unal.edu.co
                </li>
                <li>
                    <NavLink
                    to='/my-orders'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/my-account'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/sing-in'
                    className={({isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Sing In
                    </NavLink>
                </li>
                <li  >
                <RiShoppingCart2Line style={{color: 'rgb(50,100,255)', fontSize: '20px'}} />
                </li>
                <li  >
                    {context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar