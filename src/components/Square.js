import React, { Component } from 'react';
import './Square.css';


export class Square extends Component{
    render(){
        return(
        <button className="square"
        onClick={()=> console.log('click', this.props.value)}
        >
            {this.props.value} 
        </button>
        );
    }
}