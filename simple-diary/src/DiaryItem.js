import React, { useState, useRef } from 'react';

const DiaryItem = ({ onDelete, onEdit, id, author, content, emotion, created_date }) => {
	
	// 현재 수정 중인지 아닌지의 state를 보관 
	const [isEdit, setIsEdit] = useState(false);
	const toggleIsEdit = () => setIsEdit(!isEdit);
	
	const [localContent, setLocalContent] = useState(content);
	const localContentInput = useRef();
	
	const hanleRemove = () => {
		if ( window.confirm(`${id}번째 일기를 정말 삭제하시겠습니가?`)) {
			onDelete(id);
		}
	}
	
	const handleQuitEdit = () => {
		setIsEdit(false);
		setLocalContent(content); // 수정하기 취소 눌렀을 때 웹에 써져있는 content 복구 
	}
	
	const handleEdit = () => {
		// 5글자 확인
		if ( localContent.length < 5 ) {
			localContentInput.current.focus();
			return;
		}
		// 수정 여부 재확인 
		if ( window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
			onEdit(id, localContent);
			toggleIsEdit(); // text area 닫아주기 
		}
		
	}
	
    return (
      <div className="DiaryItem">
			
        <div className="info"> 
          <span className="author_info">
            | 작성자 : {author} | 감정점수 : {emotion} |
          </span>
          <br />
          <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        
		<div className="content">
			{ isEdit ? (
				<>
					<textarea ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)} /> 
				</>
			) : (
				<>{content}</> 
			)}	
		</div>
		
			
		{ isEdit ? (
			<>
				<button onClick={toggleIsEdit}>수정 취소</button>
				<button onClick={handleEdit}>수정 완료</button>
			</>
	    ) : (
			<>
				<button onClick={toggleIsEdit}>수정하기</button>
				<button onClick={handleRemove}> 삭제하기 </button>
			</>
		)}
			
      </div>
    );
};
  
  export default DiaryItem;
  