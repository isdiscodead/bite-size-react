import logo from './logo.svg';
import './App.css';

import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';
import OptimizeTest from "./OptimizeTest";

import React from 'react'
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

// https://jsonplaceholder.typicode.com/comments/

const getData = async() => { // promise를 반환하는 비동기 함수 
	const res = await fetch('https://jsonplaceholder.typicode.com/comments/https://jsonplaceholder.typicode.com/comments/')
	.then((res) => res.json() );
	
	// body는 내용, email를 작성자로 ...
	const initData = res.slice(0, 20).map((it) => {  // 0 ~ 19 인덱스
		return {
			author: it.email,
			content: it.body,
			emotion: Math.floor(Math.random() * 5) + 1, // ( 0 ~ 4 ) + 1
			created_date: new Date().getTime(),
			id: dataId.current ++
		}
	});
	
	setData(initData);
};


// mount 시에 데이터 불러오기 
useEffect(() => {
	getData();
}, []);


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
  
  
  const onRemove = ( targetId ) => {
	  // console.log(`${targetId}가 삭제되었습니다.`);
	  const newDiaryList = data.filter((it) => it.id !== targetId);
	  setData(newDiaryList);
  };
	
	
  const onEdit = (targetId, newContent) => {
	  setData(
	  	data.map((it) => {
			// id가 일치하는 데이터를 찾아서 내용물만 바꿔줌! 일치하지 않을 경우엔 그대로 냅둠 ... 
			it.id === target.id ? {...it, content: newContent } : it
		})
	  );
  };
	
	
	const getDiaryAnalysis = () => {
		// console.log("일기 분석 시작");
		
		const goodCount = data.filter((it) => it.emotion >= 3).length;
		const badCount = data.length - goodCount;
		const goodRatio = (goodCount / badCount) * 100;
		
		return {goodCount, badCount, goodRatio};
	}
	
	const {goodCount, badCount, goodRatio} = getDiaryAnalysis();
	
	
  return (
    <div className="App">
	  {/* <Lifecycle /> */}
	  <OptimizeTest />
      <DiaryEditor onCreate={onCreate} />
		  <div>전체 일기 : {data.length}</div>
		  <div>기분이 좋았던 일기 : {goodCount}</div>
		  <div>기분이 나빴던 일기 : {badCount}</div>
		  <div>기분 좋은 일기 비율 : {goodRatio}%</div>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
};

export default App;
