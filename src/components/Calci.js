import React, {Component} from 'react';
import './style.css'

class Calci extends Component{
    constructor(){
        super();
            this.state = {
                temp : '',
                firstOprand :  '0',
                secondOprand : '',
                Operator : ''
        }
    }
    seven(){
        if(this.state.temp===''){
            this.setState({
                temp : '7'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '7'
            })
        }
    }
    eight(){
        if(this.state.temp===''){
            this.setState({
                temp : '8'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '8'
            })
        }
    }
    nine(){
        if(this.state.temp===''){
            this.setState({
                temp : '9'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '9'
            })
        }
    }
    four(){
        if(this.state.temp===''){
            this.setState({
                temp : '4'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '4'
            })
        }
    }
    five(){
        if(this.state.temp===''){
            this.setState({
                temp : '5'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '5'
            })
        }
    }
    six(){
        if(this.state.temp===''){
            this.setState({
                temp : '6'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '6'
            })
        }
    }
    one(){
        if(this.state.temp===''){
            this.setState({
                temp : '1'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '1'
            })
        }
    }
    two(){
        if(this.state.temp===''){
            this.setState({
                temp : '2'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '2'
            })
        }
    }
    three(){
        if(this.state.temp===''){
            this.setState({
                temp : '3'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '3'
            })
        }
    }
    dot(){
        if(this.state.temp===''){
            this.setState({
                temp : '.'
            })
        }
        else{
            this.setState({
                temp : this.state.temp + '.'
            })
        }
    }
    mul(){
        if(this.state.Operator===''){
            this.setState({
                Operator : 'X',
                firstOprand : parseFloat(this.state.temp),
                temp : ''
            })
        }
        else{
            this.equal()
        }
    }
    add(){
        if(this.state.Operator===''){
            this.setState({
                Operator : '+',
                firstOprand : parseFloat(this.state.temp),
                temp : ''
            })
        }
        else{
            this.equal()
        }
        
    }
    sub(){
        if(this.state.Operator===''){
            this.setState({
                Operator : '-',
                firstOprand : parseFloat(this.state.temp),
                temp : ''
            })
        }
        else{
            this.equal()
        }
        
    }
    divide(){
        if(this.state.Operator===''){
            this.setState({
                Operator : '/',
                firstOprand : parseFloat(this.state.temp),
                temp : ''
            })
        }
        else{
            this.equal()
        }
        
    }
    equal(){
        switch(this.state.Operator){
            case '+':
                this.setState({
                    Operator : '',
                    secondOprand : parseFloat(this.state.temp),
                },
                ()=>{
                    this.Addition()
                })
            break

            case 'X':
                this.setState({
                    Operator : '',
                    secondOprand : parseFloat(this.state.temp),
                },
                ()=>{
                    this.multiplication()
                })
            break

            case '/':
                this.setState({
                    Operator : '',
                    secondOprand : parseFloat(this.state.temp),
                },
                ()=>{
                    this.division()
                })
            break

            case '-':
                this.setState({
                    Operator : '',
                    secondOprand : parseFloat(this.state.temp),
                },
                ()=>{
                    this.substraction()
                })
            break

            default:
                alert('Invalid OPeration ! \n 2 Oprands are required to calculate them')    
            break
        }
    }
    Addition(){
        this.setState({
            temp : this.state.firstOprand + this.state.secondOprand
        })
        return parseFloat(this.state.temp)
    }
    multiplication(){
        this.setState({
            temp : this.state.firstOprand * this.state.secondOprand
        })
    }
    division(){
        this.setState({
            temp : this.state.firstOprand / this.state.secondOprand
        })
    }
    substraction(){
        this.setState({
            temp : this.state.firstOprand - this.state.secondOprand
        })
    }
    render(){
        return(
            <div className="calci">
                <div className="head">
                    <p>{this.state.firstOprand} <br/>   
                    {this.state.Operator}     
                    {this.state.secondOprand}<br/><h2>{this.state.temp}</h2></p>
                    
                </div>
                <br/>
                <div className="body">
                    {/* <input type="text" value={this.state.temp} onChange={this.tempValue=(e)=>{
                        this.setState({
                            temp : e.target.value
                        })
                    }}/> */}
                    <hr/>
                    <div className="row">
                        <button onClick={()=>this.seven()}>7</button>
                        <button onClick={()=>this.eight()}>8</button>
                        <button onClick={()=>this.nine()}>9</button>
                        <button onClick={()=>this.add()}>+</button>
                    </div>
                    <div className="row">
                        <button onClick={()=>this.four()}>4</button>
                        <button onClick={()=>this.five()}>5</button>
                        <button onClick={()=>this.six()}>6</button>
                        <button onClick={()=>this.sub()}>-</button>
                    </div>
                    <div className="row">
                        <button onClick={()=>this.one()}>1</button>
                        <button onClick={()=>this.two()}>2</button>
                        <button onClick={()=>this.three()}>3</button>
                        <button onClick={()=>this.mul()}>x</button>
                    </div>
                    <div className="row">
                        <button onClick={()=>this.dot()}>.</button>
                        <button onClick={()=>this.zero()}>0</button>
                        <button onClick={()=>this.equal()}>=</button>
                        <button onClick={()=>this.divide()}>/</button>
                    </div>
                    <button id="clr" onClick={this.clear=()=>{
                        this.setState({
                            Operator : '',firstOprand : '',secondOprand : '',temp : ''
                        })
                    }}>Clear All</button>
                </div>
            </div>
        )
    }
}

export default Calci 
