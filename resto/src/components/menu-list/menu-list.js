import React, {useEffect} from 'react';
import MenuListItem from '../menu-list-item';
import {useSelector, useDispatch} from "react-redux";
import WithRestoService from "../hoc";

import './menu-list.scss';

const MenuList = ({RestoService}) => {
    const menuItems = useSelector(state => state.menu.menu)
    const dispatch = useDispatch()
    useEffect(() => {
        RestoService.getMenuItems()
            .then(res => console.log(res))
    }, [])
    return (
        <ul className="menu__list">
            {
                menuItems.map((menuItem)=> {
                    return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                })
            }
        </ul>
    )
}

export default WithRestoService()(MenuList);