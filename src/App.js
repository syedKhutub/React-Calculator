import React ,{ Component }from 'react';
import Result from './components/ResultComponent';
import Keypad from './components/KeyComponenet';
import './css/App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      result: ""
    }

  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    }
    catch (e) {
      this.setState({
        result: "error"
      })
    }
  };
  
  reset = () => {

    this.setState({

      result: ""

    })

  };

  backspace = () => {

    this.setState({
      
      result: this.state.result.slice(0,-1)

    })

  };

  onClick = button =>{
    if(button === '='){
      this.calculate()
    }
    else if (button === 'CE'){
      this.backspace()
    }
    else if (button === 'C'){
      this.reset()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }

  };


  render(){
    return (
      <div className="App">
        <Result screen={this.state.result} />
        <Keypad onClick={this.onClick} />
      </div>
    )
    };
};


export default App;
