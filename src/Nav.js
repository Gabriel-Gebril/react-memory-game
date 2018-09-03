import React, {Component} from "react";
import "./Nav.css"

class Nav extends Component {
    
    render(){
        return(
            <div className="nav">
                <ul className="left">
                    <li className="brand">MemCell</li>
                </ul>
                <ul className="right">
                    <li><a onClick={() => this.props.onClick()}>New Game</a></li>
                    
                </ul>
            </div>
        );
    }
}

export default Nav;