import { Component } from "react";
import "./App.css"
import Wrapper from "./Ui/Wrapper/Wrapper";
import classes from "./Ui/Global.module.css"
import Card from "./Ui/Card/Card";
import Text from "./Components/Text/Text"



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
          <Card className={classes.conteiner}> 
          <Text>
          {this.state.timer}
          </Text>
          </Card>
        </Wrapper>
      )
    }
}


export default App