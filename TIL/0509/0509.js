let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// 1. 중간고사 점수를 하나의 array로 만들어주세요.

//for문으로 푸는 방법
const score = [];
for (let i=0; i<data.length; i++){
    score.push(data[i].중간고사점수);
}
console.log(score);

//메소드를 활용해 푸는 방법
const score2 = Array(data.length).fill(0).map((ele,idx)=> ele+= data[idx].중간고사점수);
console.log(score2);

// 2. 이름과 중간고사 점수를 하나의 array로 만들어주세요.

//for문으로 푸는 방법 
const arr= [];
for (let i=0; i<data.length; i++){
    arr.push([data[i].이름,data[i].중간고사점수]);
}
console.log(arr);

//메소드를 활용해 푸는 방법
const arr2 = Array(data.length).fill(0).map((ele,idx)=>new Array(data[idx].이름,data[idx].중간고사점수));
console.log(arr2);

// (나아가기) 3. 중간고사점수의 표준편차를 구해주세요. 또 어떻게 구하는 것이 효율적일지 고민해주세요.

//메소드를 활용해 푸는 방법
const average = score.reduce((acc,cur)=>acc+cur,0)/score.length;
const answer = Math.sqrt(score.map(ele=>(ele-average)**2).reduce((acc,cur)=>acc+cur,0)/score.length).toFixed(3);
console.log(answer);

//for문으로 푸는 방법
const sum_2 =0;
for (let i=0; i<score.length; i++){
    sum_2 += score[i];
}
const average2 = sum/score.length;
