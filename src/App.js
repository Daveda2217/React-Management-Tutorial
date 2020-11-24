import './App.css';
import React,{Component} from 'react';
import Customer from './components/Customer.js'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

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

const styles = theme =>({
  root:{
    width: '100%',
    marginTop :theme.spacing.unit*3;
    overflowX: 'auto'
  },
  table:{
    minWidth:1080
  }
})
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
    const{classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c=>{
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
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);
