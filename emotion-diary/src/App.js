import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {

  // const [data, setData] = useState([]);
	
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const onCreate = useCallback((author, content, emotion) => {
    
	  dispatch({ type: 'CREATE', data: {author, content, emotion, id: dataId.current} })
	  
	  	/*
	  	const created_date = new Date().getTime();
	  
		const newItem = {
		  author,
		  content,
		  emotion,
		  created_date,
		  id: dataId.current
		};
		*/
	  
    // 개수 증가
    dataId.current += 1;

	// 함수형 업데이트로 최신 데이터 사용 가능하게끔 !! 
    // setData((data) => [newItem, ...data]);
	  
  }, []); // 의존성 배열이 빈 배열이므로 mount 시에만 새로 ... 
  
  
  const onRemove = useCallback(( targetId ) => {
	  // console.log(`${targetId}가 삭제되었습니다.`);
	  // setData(data => data.filter((it) => it.id !== targetId));
	  dispatch({type: "REMOVE", targetId});
  }, []);
	
	
  const onEdit = useCallback((targetId, newContent) => {
	  dispatch({ type: "EDIT", targetId, newContent });
	  /*
	  setData((data) =>
		data.map((it) => 
			// id가 일치하는 데이터를 찾아서 내용물만 바꿔줌! 일치하지 않을 경우엔 그대로 냅둠 ... 
			it.id === target.id ? {...it, content: newContent } : it
		)
	  );
	  */
  }, []);
	
	const memoizedDispatches = useMemo(() => {
		return { onCreate, onRemove, onEdit }
	}, []);
	
	
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
