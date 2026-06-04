for(let i =1 ; i <=5 ; i++){
    console.log(`dang click lan thu ${i}`);
}

// tạo 3 địa chỉ email
let accountNum = 3;
for(let i = 1; i <= accountNum; i++){
    let email = `user${i}@gmail.com`;
    console.log(email);
}

// duyệt array bằng index
let products = ["Áo khoác", "Áo thun", "Quần jean"];

for(let i = 0; i < products.length; i++){
    console.log(`san pham thu ${i + 1} la ${products[i]}`);
}

// duyệt object bằng key

let userInfo = {
    name : "Dũng",
    age : 20,
    email : "dungvm@luminpdf.com",
}
console.log(userInfo["name"]);
console.log(userInfo["age"]);
console.log(userInfo["email"]);

// Object ko dùng được for cổ điển
let keys = Object.keys(userInfo);
console.log(`lấy ra mảng key của object ${keys}`); // lấy ra mảng key của object
for(let i = 0; i < keys.length; i++){
    let key = keys[i] 
    // keys là một mảng gồm các key của object [name, age, email], 
    // nếu gọi keys[0] thì sẽ lấy ra name, keys[1] thì sẽ lấy ra age, keys[2] thì sẽ lấy ra email
    let values = userInfo[key]; 
    // userInfo[key] là cách lấy giá trị của key trong object, 
    // userInfo[name] sẽ lấy ra "Dũng", userInfo[age] sẽ lấy ra 20, userInfo[email] sẽ lấy ra "dungvm@luminpdf.com"
    console.log(`key ${key} có value là ${userInfo[key]}`); 
}


let arr = ["A","B","C"];

// for (let i = 0; i <= arr.length ; i++){
//     console.log(arr[i]);
// }
// vòng lặp lầu đầu tiên i = 0 ==> arr[0] = A
// vòng lặp lầu đầu tiên i = 1 ==> arr[1] = B
// ...
//// vòng lặp lầu đầu tiên i = 3 ==> arr[3] = undefined do trong mảng chỉ có giá trị 2 [0,1,2]

let soLuongDon = 5;
for(let i = 0 ; i <= soLuongDon ; i++){
    console.log (`ORDER-${i}`);
}

// for kiểu mới

let fruits = ["Táo", "Cam" , "Thơm"];

for(let fruit of fruits){
    console.log (`Trai cay ten la ${fruit}`);
}

let danhSachUser = [
    {ten: "Dũng", role: "admin"},
    {ten: "Vũ", role: "guest"},
    {ten: "Mạnh", role: "user"},
];

for(let user of danhSachUser){
    console.log(`${user.ten} : ${user.role}`)
}

let config1 = { browser : "Chrome", timeout: 5000};

console.log(Object.entries(config1));

//Object.entries() là một phương thức trong JavaScript dùng để chuyển đổi một object thành một mảng các cặp [key, value]
for(let cap of Object.entries(config1)){
    console.log(`${cap[0]} : ${cap[1]}`)
}

let danhSachURL = ["/login" , "/dasboard" , "/profile"];

// for of dùng cho array
for(let key of danhSachURL){
    console.log(`Đang kiểm tra ${key}`)
}

// for in dùng cho objects
for(let key in config1){
    console.log(`${key} : ${config1[key]}`);
}

// dùng vòng lặp nào cho array và object
// while: koong biết trước số vòng lặp => lặp ddenes khi điều kiện sai
// for cổ điển: biết chính xác lúc nào lặp ==> kiểm soát tuyệt đối
// có array, có cả index ==> for cổ điển
// duyệt object ==> for of hoặc for in

//ví dụ 
let products1 = [{ten: "macbook", gia: 10000},{ten: "iphone", gia: 200000},{ten: "airpot", gia: 300000}]
// dùng for of và for in đển 
for( let product of products1 ){ // for of dùng cho array==> tách products ra từng object
    for(let key in product){// for in dùng cho object để xử lý từng object, chỗ này có nghĩa là cho từng key là ten và giá
        console.log(`${key} : ${product[key]}`);
        console.log(`${product.ten}`);
    }
    console.log(`${product.ten}`);
    console.log("----")
}

//break
// từ 1 >100 tìm số chia hết cho 7

for(i=1; i<=100; i++){
    if(i%7 ===0){
        console.log(`found ${i}`)
        continue;
    }
}

let products2 = [{ten: "macbook", conHang: true},{ten: "iphone", conHang: false},{ten: "airpot", conHang: true}];

for(let product of products2){
    if (product.conHang !== true){
        console.log(`Sản phẩm này hết hàng ${product.ten}`)
        break;
    }
}

//continue
for(let i = 0 ; i < 10 ; i++){
    if(i % 2 === 0){
        console.log(i);
        continue;
    }
    console.log("hahaha");
}

// Tìm ra sản phẩm còn hàng
// In ra sản phẩm còn hàng
// bỏ qua sản phẩm hết hàng

for(let product of products2){
    if (!product.conHang){
        continue;
    }
    console.log(`Sản phẩm còn hàng ${product.ten}`);
}

let thongTin = {userName : "John",
    email : "john@gmail.com",
    password : "12345",
    role : "admin",
};

let fieldAn = ["password"];
// dùng includes và continue để bỏ qua cái phần password
for(let key in thongTin){
    if(fieldAn.includes(key)){
        continue;
    }
    console.log(` ${key} : ${thongTin[key]}`);
}

// mình đang test trang tiki có danh sách 6 sản phẩm,
// yêu cầu lọc ra sản phẩm có giá lớn hơn 100k
let danhSachGia = [5000, 200000, 150000,1000,999000, 500000];

// Yêu cầu tạo ra danhSachVip
// giá hơn 100k thì bỏ vô danh sách
// sau đó in ra danh sách và số lượng

let danhSachVip = [];
for(let gia of danhSachGia){
    // cách 1
    // if(gia < 100000){
    //     continue;// continue ở đây có nghĩa là bỏ qua ko đụng tới những cái nhỏ hơn 100k
    // }
    //danhSachVip.push(gia)

    //cách 2
    if(gia >100000){
        danhSachVip.push(gia);
    }
}

console.log(danhSachVip);
console.log(`Tổng sản phẩm: ${danhSachVip.length}`);