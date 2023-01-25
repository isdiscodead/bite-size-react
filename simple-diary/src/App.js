import logo from './logo.svg';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState } from 'react';


/* 일기 리스트를 위한 임시 리스트
const dummyList = [
  {
    id: 1,
    author: "꽁치",
    content: "1일 1깡할게요",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "꽁치",
    content: "aaaa",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "꽁치",
    content: "bbbbbbb",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "꽁치",
    content: "cccccccccccccccc",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];
*/

function App() {

  const [data, setData] = useState([]);

  const onCreate = () => {

  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList />
    </div>
  );
};

export default App;
