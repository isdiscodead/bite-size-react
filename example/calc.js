// node test.js 명령어로 실행 가능 
const add = (a, b) => a + b;
const sub = (a, b) => a - b;


// console.log(add(1,2));

// node.js는 객체 단위로 모듈 내보내기 진행됨
module.exports = {
	moduleName: "calc module",
	add: add,
	sub: sub,
};