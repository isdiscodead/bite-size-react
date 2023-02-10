import React, { useContext } from 'react';
import DiaryItem from "./DiaryItem";

import { DiaryStateContext } from "./App";

const DiaryList = () => {
    // console.log(diaryList);
	
	// Context에서 값 가져오기
	const diaryList = useContext(DiaryStateContext);
	const { onEdit, onRemove } = useContext(DiaryDispatchContext);
	
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                { diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
                ))}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: [], // 기본값으로 빈 배열을 넣어 undefined 오류 방지
}

export default DiaryList;