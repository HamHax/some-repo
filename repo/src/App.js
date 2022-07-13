import { Component } from "react";
import "./App.css"
import Wrapper from "./Ui/Wrapper/Wrapper";
import classes from "./Ui/Global.module.css"



class App extends Component{
    constructor(props){
      super(props);
        this.state ={
            timer : ''
        }

    }

     componentDidMount(){
      this.setState({
        timer: new Date().toLocaleTimeString()
      })
     }

     componentDidUpdate (){
      this.myTimeout = setTimeout(()=> {
        this.setState({
          timer: new Date().toLocaleTimeString()
        })
      },1000)
      
     }

     componentWillUnmount (){
      clearTimeout(this.myTimeout)
     }




    render(){
      return(
        <Wrapper>
            {this.state.timer}
        </Wrapper>
      )
    }
}


export default App