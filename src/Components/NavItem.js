import React from 'react';
import {Link} from 'react-router-dom';

class NavItem extends React.Component {
    render() {
        return (
            <div style={{color: '#fff'}}>
                <li style={listStyle}>
                    {/* <Link to="/Login" className="navlink">{this.props.item.title}</Link> */}
                    <a href={`./${this.props.item.title}.html`} className="navlink">{this.props.item.title}</a>
                </li>
            </div>
        );
    }
}

const listStyle = {
    textDecoration: 'none',
    textAlign: 'center',
    color: '#000'
};


export default NavItem;