import React from 'react'

// npm install --save react-router-dom
import { Link } from "react-router-dom";

function NavigationMenu( props ){
    return (
        <div>
            <div className="font-bold py-3">
                Product App
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"                        
                        onClick={ props.closeMenu } // onClick={() => setShowMenu(false)}
                    >
                        Home
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link 
                        to="/about"
                        className="text-blue-500 py-3 border-b block" 
                        onClick={ props.closeMenu }
                    >
                        About
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link 
                        to="/product/1"
                        className="text-blue-500 py-3 border-b block" 
                        onClick={ props.closeMenu }
                    >
                        Product
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu