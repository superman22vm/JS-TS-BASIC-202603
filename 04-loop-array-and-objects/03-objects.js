let user = {
    name: "John",
    age: 20,
    email: "john@example.com",
    isVIP : true,
    permission: ["read", "write", "delete"]
};

console.log(user);

// để truy cập vào giá trị của một key trong object, ta dùng dấu chấm
console.log(user.name);

// để truy cập vào giá trị của một key trong object, ta dùng dấu ngoặc vuông
console.log(user["age"]);

let apiData ={
    "first-name" : "Dũng",
}

console.log(apiData["first-name"]);

let userTest2 = {
    hoTen : "Nguyễn Văn A",
    email : "dungvm@luminpdf.com",
};

let thongTin = "email";
console.log(userTest2[thongTin]); // vì đã gán nó bằng "email" nên nó có "" nên phải dùng []

let config = {browse : "chrome" , timeout : 10000};

console.log("Ban đầu", config);


config.timeout = 20000;
console.log("sau khi sua", config);

// thêm key mới vào object
config.headless = true;
console.log("sau khi them", config);

// xoá key timeout
delete config.timeout;
console.log("sau khi xoa", config);

//trường hợp gán vào const
const userInfo = { name : "Mèo"};

// trường hợp lỗi
//userInfo = { name : "Chó"}; // lỗi vì const không thể gán lại

//trường hợp hợp lệ, vì đã gán vào const nhưng không phải là const object mà là const reference
userInfo.name = "Chó";
console.log("sau khi sua", userInfo);

let spTiki = {id : "SP01", name : "Áo thun", price : 100000};

//Check danh sách key trong object
console.log(Object.keys(spTiki));

//Check xem key cos toonf tồn tại trong object hay không
console.log(Object.values(spTiki).includes(spTiki, "name"));

//Check xem key và value có tồn tại trong object hay không
console.log(Object.entries(spTiki));

//Check xem key có phải của chính nó không
console.log(Object.hasOwn(spTiki, "name"));

//Bài tập object
let apiResponse= {
    userId : 1,
    userName : "Dũng",
    role : "admin",
    isActive : "yes",
}

// dung Object.keys() de xem api tra ra bao nhieu key
console.log("BAI TAP OBJECT 1");
let object = Object.keys(apiResponse);
console.log(object);

// dung Oject.hasOwn de kiem tra xem cos chua userId, email va role
console.log(Object.hasOwn(apiResponse, "userId","email","role"));

let isActive = apiResponse.isActive;
if(typeof isActive !== "boolean"){
    console.log("is not Boolean, Error");
}else{
    console.log("is Boolean");
}

// dung object.values + includes de kiem tra xem gia tri nafo cos admin
let value = Object.values(apiResponse);
console.log(value.includes("admin"));