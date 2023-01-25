import { useState, useRef } from "react";


const DiaryEditor = () => {
    // author와 content는 같은 방식으로 동작 + 같은 자료형이므로 하나의 state로 묶어 관리 가능 
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });


    //  name을 기준으로 하나의 함수로 관리 가능 
    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    }

    // useRef 
    const authorInput = useRef();
    const contentInput = useRef();

    // 저장 버튼
    const handleSubmit = () => {
        // 작성자가 비어있을 경우
        if ( state.author.length < 1 ) {
            alert("작성자는 최소 1글자 이상 입력해주세요.");
            // useRef로 DOM 선택하여 포커스 주기 
            authorInput.current.focus();
            return;
        }

        // 내용물이 없을 경우
        if ( state.content.length < 5 ) {
            alert("일기 본문은 최소 5글자 이상 입력해주세요.");
            contentInput.current.focus();
            return;
        }

        // console.log(state);
        alert("저장 성공");
    }


    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input ref={authorInput} name="author" value={state.author} onChange={(e) => {
                // console.log(e);
                setState({
                    // 반드시 spread 이후에 값 변경 들어가야 함
                    ...state,
                    author: e.target.value, 
                });
            }}/>
        </div>

        <div>
            <textarea 
                ref={contentInput}
                name="content"
                value={state.content}
                onChange={handleChangeState}
            />
        </div>

        <div>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>

        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>
};


export default DiaryEditor;