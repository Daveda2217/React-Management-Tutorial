import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Customer from './components/Customer.js'
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          revise comments!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

const customer = {
  'id' :1,
  'image' : 'https://placeimg.com/128/128/any',
  'name': '홍길동',
  'birthday' : '001010',
  'gender' : '남자',
  'job': '대학생'
}

class App extends Component{
  render(){
    return(
      <Customer 
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}
export default App;
