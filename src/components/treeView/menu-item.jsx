import { useState } from "react";
import MenuList from "./menu-list";
import './styles.css'

export default function MenuItem({item}){

    const[displayCurrentChildren,setDisplayCurrentChildren] = useState(false)

    return(<>
    <li className="item">
        <div style={{display:'flex', gap:'20px'}}> 
            <p>{item.label}</p>
            {item && item.children && item.children.length ?
            <span>+</span> : null}
        </div>
        {item.children ? 
        <div className="parentItem">
            <MenuList list={item.children}/> 
        </div> : null}
    </li>
    </>)
}