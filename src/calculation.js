import React, { Component } from 'react';
import './App.css';

class calculation extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.mul = this.mul.bind(this);
        this.division = this.division.bind(this);
        this.minus = this.minus.bind(this);
        this.mc = this.mc.bind(this);
    }

    mul(){
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        document.getElementById('result').value = num1 * num2;
    }
    division(){
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        document.getElementById('result').value = num1 / num2;
    }
    plus(){
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        document.getElementById('result').value = parseInt(num1) + parseInt(num2);
    }
    minus(){
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        document.getElementById('result').value = num1 - num2;
    }
    mc(){
        let num1 = document.getElementById('num1').value = "";
        let num2 = document.getElementById('num2').value = "";
        document.getElementById('result').value = "";
    }

    render() {
        return (
            <div className="main">
            <div className="calculation">
                <div>total<input id="result" /></div>
                <div>number1<input id="num1" /></div>
                <div>number2<input id="num2" /></div>
                <div>
                    <button onClick={this.mul}>*</button>
                    <button onClick={this.division}>/</button>
                    <button onClick={this.plus}>+</button>
                    <button onClick={this.minus}>-</button>
                    <button onClick={this.mc}>clear</button>
                </div>
            </div>
        </div>
      );
    }
}

export default calculation;