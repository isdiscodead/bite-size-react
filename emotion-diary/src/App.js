import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
	
	const getDiaryAnalysis = () => {
		// console.log("일기 분석 시작");
		
		const goodCount = data.filter((it) => it.emotion >= 3).length;
		const badCount = data.length - goodCount;
		const goodRatio = (goodCount / badCount) * 100;
		
		return {goodCount, badCount, goodRatio};
	}
	
	const {goodCount, badCount, goodRatio} = getDiaryAnalysis();
	
	
  return (
	<DiaryStateContext.Provider value={ data }>
		  <DiaryDispatchContext.Provider value={ memoizedDispatches }>
			<div className="App">
			  {/* <Lifecycle /> */}
			  {/* <OptimizeTest /> */}
			  <DiaryEditor onCreate={onCreate} />
				  <div>전체 일기 : {data.length}</div>
				  <div>기분이 좋았던 일기 : {goodCount}</div>
				  <div>기분이 나빴던 일기 : {badCount}</div>
				  <div>기분 좋은 일기 비율 : {goodRatio}%</div>
			  <DiaryList onRemove={onRemove} onEdit={onEdit} />
			</div>
		  </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
