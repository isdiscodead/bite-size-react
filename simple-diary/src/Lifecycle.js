import React, { useEffect, useState } from "react";


const UnmountTest = () => {
	
	// mount 시점에 실행됨 
	useEffect(() => {
		console.log("Mount");
		
		return () => {
			// Unmount 시점에 실행
			console.log("Unmount");
		};
	}, []);
	
	return <div>Unmount Testing Component</div>
}

const Lifecycle = () => {
	
	const [count, setCount] = useState();
	const [text, setText] = useState();
	
	const [isVisible, setIsVisible] = useState(true);
	const toggle = () => setVisible( !isVisible );
	
	// mount 
	useEffect(() => {
		console.log("Mount!");
	}, []);
	
	// update
	useEffect(() => {
		console.log("Update");
	});
	
	// 특정 값 update 
	useEffect(() => {
		console.log(`count is updated : ${count}`);
	}, [count]);
	
	
	return <div style={{ padding: 20 }}>
		{/* <div>
			{ count }
			<button onClick={() => setCount(count+1)}>+</button>
		</div>
		<div>
			<input value={text} onChange={(e) => setText(e.target.value)} />
		</div>
		*/}
		
		<button onClick={toggle}>ON / OFF</button>
		{ isVisible && <UnmountTest /> }
	</div>
}

export default Lifecycle;