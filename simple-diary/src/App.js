import logo from './logo.svg';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState, useRef } from 'react';


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

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    // 개수 증가
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data}/>
    </div>
  );
};

export default App;
