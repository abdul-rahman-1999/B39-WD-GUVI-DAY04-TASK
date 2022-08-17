var obj1 = {name1:"Abdul",age:23};
var obj2 = {age:23,name1:"Abdul"};

if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    console.log("true");
}else{
    console.log("false");
};