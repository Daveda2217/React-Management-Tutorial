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
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme =>({
  root:{
    width: '100%',
    marginTop :theme.spacing.unit*3,
    overflowX: 'auto'
  },
  table:{
    minWidth:1080
  },
  progress:{
    margin: theme.spacing.unit*2
  }
});

class App extends Component{

  state = { // 변경될 수 있는 변수
    customers: "",
    completed: 0
  }

  componentDidMount(){  // 컴포넌트 준비 완료, api 불러오기
    this.timer = setInterval(this.progress, 20);
    this.callApi()  
      .then(res => this.setState({customers: res})) // state로 설정하기
      .catch(err=> console.log(err))  // 에러가 났을 경우 에러를 출력한다.
  }

  callApi = async()=>{  // 비동기적 호출
    const response = await fetch('/api/customers');
    const body = await response.json(); // 고객 목록이 json형태로 담아준다.
    return body;
  }

  progress = () => {
    const{completed} = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed+1});
  }
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
            {this.state.customers ? this.state.customers.map(c=>{
              return(
                <Customer 
                  key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
                />
              );
            }) : 
            <TableRow>
              <TableCell colSpan = "6" align = "center">
                <CircularProgress calssName = {classes.progress} variant = "determinate" value = {this.state.completed}/>
              </TableCell>

            </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);
