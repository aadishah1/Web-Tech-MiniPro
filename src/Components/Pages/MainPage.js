import React from 'react';
import {Link} from 'react-router-dom';

class MainPage extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1 style={headingStyle}>Classrooms</h1>
                <ul style={listStyle}>
                    <Link to="/DDCO"><li className="classroom">DDCO</li></Link>
                    <Link to="/DSA"><li className="classroom">DSA</li></Link>
                    <Link to="/SDS"><li className="classroom">SDS</li></Link>
                    <Link to="/WT"><li className="classroom">Web Technologies</li></Link>
                    <Link to="/AFLL"><li className="classroom">AFLL</li></Link>
                </ul>
            </div>
        );
    }
}

const headingStyle = {
    textAlign: 'center',
    backgroundColor: "black",
    color: '#FFFBFF',
    padding: '0.8em'
};

const listStyle = {
    textAlign: 'center',
    padding: '1.2em',
    listStyle: 'none'
};

export default MainPage;