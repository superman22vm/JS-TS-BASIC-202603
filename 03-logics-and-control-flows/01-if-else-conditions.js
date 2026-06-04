let num = "123456"

if(num.length >6){
    console.log("Good")
}else{
    console.log("Bad")
}

let age =20
let hasTicket = true;

if (age > 18 && hasTicket){
    console.log("Valid")
}


//bài tập
let loginStatus = "locked";

if(loginStatus === "success"){
    console.log("Login success");
}else if(loginStatus === "locked"){
    console.log("Login locked");
}else{
     console.log("Login failed");
}

let diem = 8;
let trangThai = diem >=5 ? "PASS" : "FAILED";


//bài tập nhỏ

let failedTests = 2;
let suiteStatus;

if(failedTests = 0){
    suiteStatus = "PASS";
}else if(failedTests <= 2){
    suiteStatus = "XÉM PASS";
}else{
    suiteStatus = "FAILED";
}
//console.log(suiteStatus);

let rawUserName = "     ";

if(rawUserName.trim()){
    console.log("TRUE")
}else{
    console.log("FALSE")
}

let role = 'admin';

switch(role){
    case 'admin':
        console.log("cap quyen full");
        break;
    case 'editor':
        console.log("cap quyen chinh sua");
        break;
    default:
        console.log("loi roi")
}

let browserName = "firefox"
switch(browserName){
    case 'chrome':
    case 'edge':
        console.log("cap quyen chinh sua");
        break;
    default:
        console.log("loi roi")
}