const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers',(req,res) => {
    res.send([
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
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));