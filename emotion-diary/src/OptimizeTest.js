import React, { useState, useEffect } from "react";

const TextView = React.memo(({text}) => {
	useEffect(()=> {
		console.log(`update text ${text}`);
	})
	return <div>{text}</div>
});

const CountView = React.memo(({count}) => {
	useEffect(()=> {
		console.log(`update count ${count}`);
	})
	return <div>{count}</div>
});


const CounterA = React.memo(({ count }) => {
	useEffect(()=> {
		console.log(`update count ${count}`);
	})
	return <div>{ count }</div>
});

// 하지만 객체 비교 시에는 얕은 비교를 하므로 ( 주소에 의한 비교 ) 잘 작동되지 않을 수 있음
const CounterB = React.memo(({ obj }) => {
	useEffect(()=> {
		console.log(`update obj ${obj}`);
	})
	return <div>{ obj.count }</div>
});

const areEqual = (prevProps, nextProps) => {
	// props 동일 -> rerender x 
	// props 변경 -> rerender o
	return prevProps.obj.count === nextProps.obj.count; 
}

// 위에서 만든 비교 함수를 추가로 사용해서 객체 비교도 수월하게 ~ 
const CounterB = React.memo(({ obj }) => {
	useEffect(()=> {
		console.log(`update obj ${obj}`);
	})
	return <div>{ obj.count }</div>
});

const OptimizeTest = () => {
	// 원래는 둘 중 하나의 state만 변경되어도 하위 컴포넌트까지 모두 리렌더링됨 
	// 따라서 React.memo로 낭비 방지 가능 !! 
	/*
	const [ count, setCount ] = useState(1);
	const [ text, setText ] = useState("");
	*/
	
	// React.memo로 변경 후가 기존 값과 동일할 경우에 리렌더링 방지 ! 
	// 객체 비교 시에는 얕은 비교를 하므로 ( 주소에 의한 비교 ) 잘 작동되지 않음 ... 
	const [ count, setCount ] = useState(1);
	const [ obj, setObj ] = useState({
		count: 1
	});
	
	return <div style={{ padding: 50 }}>
		{/*
		<div>
			<h2>Count</h2>
			<CountView count={count} />
			<button onClick={() => setCount(count+1)}>+</button>
		</div>
		<div>
			<h2>Text</h2>
			<TextView text={text} />
			<input value={text} onChange={(e) => setText(e.target.value)} />
		</div>
		*/}
		
		<div>
			<h2>Couner A</h2>
			<CounterA count={count} />
			<button onClick={() => setCount(count)}>A button</button>
		</div>
		<div>
			<h2>Couner B</h2>
			<button onClick={() => setObj({
					count: obj.count
				})}>B button</button>
		</div>
	</div>
}

export default OptimizeTest;