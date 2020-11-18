import React from 'react';

class DDCO extends React.Component {
    render() {
        return (
            <h1 style={headingStyle}>Digital Design and Computer Organization</h1>
        );
    }
}

class DSA extends React.Component {
    render() {
        return (
            <h1 style={headingStyle}>Data Structures and Algorithms</h1>
        );
    }
}

class SDS extends React.Component {
    render() {
        return (
            <h1 style={headingStyle}>Statistics for Data Science</h1>
        );
    }
}

class WT extends React.Component {
    render() {
        return (
            <h1 style={headingStyle}>Web Technologies</h1>
        );
    }
}

class AFLL extends React.Component {
    render() {
        return (
            <h1 style={headingStyle}>Automata Formal Languages and Logic</h1>
        );
    }
}

const headingStyle = {
    textAlign: 'center',
    backgroundColor: "black",
    color: '#FFFBFF',
    padding: '0.8em'
};

export {DDCO, DSA, SDS, WT, AFLL};