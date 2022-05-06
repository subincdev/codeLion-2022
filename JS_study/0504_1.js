//user의 id와 name, age를 가진 새로운 array를 만들어주세요.
let test = [
    {
        "_id": "6271fd40fe5c58d4cbd3a72f",
        "index": 0,
        "guid": "60f843d2-1b6b-4536-b421-e5df1c4ab735",
        "isActive": true,
        "balance": "$2,534.11",
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "eyeColor": "brown",
        "name": "Miranda Nguyen",
        "gender": "male",
        "company": "ZENTIA",
        "email": "mirandanguyen@zentia.com",
        "phone": "+1 (833) 466-3207",
        "address": "198 Dank Court, Hartsville/Hartley, Indiana, 8416",
        "about": "Consectetur proident anim do commodo ipsum. Elit consectetur irure dolore voluptate. Enim aute voluptate et qui do. Eu pariatur laboris labore esse enim reprehenderit mollit ullamco fugiat. Laborum sunt veniam consectetur laboris cupidatat. Lorem tempor occaecat labore ut et eiusmod amet.\r\n",
        "registered": "2021-06-16T11:50:54 -09:00"
    },
    {
        "_id": "6271fd40e30856d15651c60c",
        "index": 1,
        "guid": "ee647592-0647-4ad5-96b1-eb6c06a32dbd",
        "isActive": true,
        "balance": "$2,636.22",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "eyeColor": "blue",
        "name": "Florence Flynn",
        "gender": "female",
        "company": "ELENTRIX",
        "email": "florenceflynn@elentrix.com",
        "phone": "+1 (901) 525-3731",
        "address": "246 Billings Place, Brandermill, Guam, 5037",
        "about": "Sint non dolore cupidatat voluptate laboris adipisicing eu quis. Laboris nostrud qui dolor cillum dolor nulla sint culpa est reprehenderit sint ipsum nisi excepteur. Qui cupidatat sint do aliquip ut. Officia est aliquip fugiat ex enim do sunt consequat.\r\n",
        "registered": "2014-12-10T08:44:47 -09:00"
    },
    {
        "_id": "6271fd404394e16d79143873",
        "index": 2,
        "guid": "3d3890ff-8241-4a2b-a361-789e0298817a",
        "isActive": false,
        "balance": "$1,047.32",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "eyeColor": "green",
        "name": "Debbie Pratt",
        "gender": "female",
        "company": "OPTIQUE",
        "email": "debbiepratt@optique.com",
        "phone": "+1 (831) 537-3188",
        "address": "737 Quentin Street, Calpine, Louisiana, 9102",
        "about": "Officia nisi labore mollit cupidatat exercitation commodo duis adipisicing officia amet laborum. Nulla qui commodo aliqua reprehenderit dolore cupidatat esse ea pariatur sint ad dolore. Exercitation duis veniam velit occaecat est irure quis labore occaecat.\r\n",
        "registered": "2016-09-19T10:00:38 -09:00"
    }
]
let userArr =  Array.from(test, item=> [item._id,item.name,item.age]);
console.log(userArr);
 
const userObj = [
    {
        "_id":userArr[0][0],
        "name":userArr[0][1],
        "age":userArr[0][2]
    },
    {
        "_id":userArr[1][0],
        "name":userArr[1][1],
        "age":userArr[1][2]
    },
    {
        "_id":userArr[2][0],
        "name":userArr[2][1],
        "age":userArr[2][2]
    }
]
console.log(userObj.map(item=>item._id));


//user을 유사배열객체로 만들기

// const user = {};
// for (let i=0; i<userArr.length; i++){
//     for (let j=0; j<userArr.length; j++){
//         user[i]._id = userArr[j][0];
//         user[i].name = userArr[j][1];
//         user[i].age = userArr[j][2];
//     }
// }
// console.log(user);



