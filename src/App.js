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

const customers = [
{
  'id' :1,
  'image' : 'https://placeimg.com/128/128/1',
  'name': '홍길동',
  'birthday' : '001010',
  'gender' : '남자',
  'job': '대학생'
},
{
  'id' :2,
  'image' : 'https://placeimg.com/128/128/2',
  'name': '홍길동',
  'birthday' : '041231',
  'gender' : '남자',
  'job': '프로그래머'
},
{
  'id' :3,
  'image' : 'https://placeimg.com/128/128/3',
  'name': '홍길동',
  'birthday' : '990892',
  'gender' : '남자',
  'job': '디자니어'
}
]

class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c=>{
            return(
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          }) 
        }
      </div>
    );
  }
}
export default App;
