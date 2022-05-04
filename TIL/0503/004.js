 // 다음 배열에서 sort 함수를 이용해 원소의 product의 값을 기준으로 가나다순으로 정렬해보세요.
 var studentList = [
    {
        id: 1, product: '연필', stock: 10
    },
    {
        id: 2, product: '색종이', stock: 33
    },
    {
        id: 3, product: '체육복', stock: 2
    },
    {
        id: 4, product: '만연필', stock: 0
    }
]

// let productList =[];
// for (i=0; i<studentList.length; i++){
//     productList.push(studentList[i].product);
// }
// console.log(productList.sort());

// var a = "10";
// var b="12";
// console.log(typeof(b-a));

studentList.sort(function(a,b){
    if(a.product < b.product) {
        return -1;
    }
    else if ( b.product < a.product) {
        return 1;
    }
    else {
        return 0;
    }
})

