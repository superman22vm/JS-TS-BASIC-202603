// username và password là tham số
function tenHam(username, password){
    console.log(`Login with username: ${username} and password: ${password}`)
    console.log("Click on the login button")
}

tenHam("admin", "123456");

function tinhTongTien(a,b){
    const result = a + b;
    // console.log(`Tổng tiền là: ${result}`)
    return result;
}

let tongTien = tinhTongTien(100000, 200000);
console.log(`Tổng tiền là: ${tongTien}`);

// yêu cầu viết một hàm là cleanPrice(rawString)
// hàm này nhận 1 chuỗi giá lấy từ UI " giá gốc: 1.000.000 đ "
// tự động dọn dẹp để in ra số nguyên "1000000"

sp1 = " giá gốc: 1.000.000 đ ";
sp2 = "   2.000.000 đ ";
sp3 = "";

function cleanPrice(rawString){
    //const price = Number(rawString.slice(rawString.indexOf(":")+2,
    // rawString.indexOf("đ")).replaceAll(".",""));
    const price = Number(rawString.replace("giá gốc:","")
    .replaceAll(".","")
    .replace("đ","").trim());
    //const price = rawString.replace("giá gốc: ","").replaceAll(".","").replace("đ","").trim();
    if(!rawString){
        return 0;
    }
    return price;
}

console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));

//hoiSting
//có thể gọi 1 hàm trước khi hàm đó được khởi tao
// ứng dụng vất hết các hàm hỗ trợ xu(helper, clean data) xuống dưới cùng của file cho đỡ chật chỗ
//không áp dụng cho tất cả các hàm

// xinChao();

// function xinChao(){
//     console.log("Hello")
// }

//vd 2
// let status = checkLoginStatus();
// console.log(status);

// function checkLoginStatus(){
//     return true;
// }

const checkLoginStatus = function(){
    return true;
}

// trường hợp dùng function declaration, hàm sẽ bị ghi đè
function tinhTong(a,b){
    return a + b;
}

function tinhTong(a,b){
    return a * b;
}

console.log(tinhTong(5,6));


// trường hợp dùng function expression, sẽ báo lỗi khi bị trùng
const tinh2 =function(a,b){
    return a+b;
}

// const tinh2 =function(a,b){
//     return a+b;
// }
// trường hợp arrow

const tinhTongExpresstion = (a,b) => a + b;

// cách sử dụng thực tế
// lúc nào dùng loại nào
//function declaration
//viết method trong object

const sanPham = {
    ten : "iphone 17",
    gia : "20000",


//function expression
    hienThiExpression : function(){
        console.log (`${this.ten} - ${this.gia}`);// this xíu học
    },

    //chỉ viết 1 hàm method shorthand => nên dùng
    hienThiShortHand(){
        console.log (`${this.ten} - ${this.gia}`);
    },

    // không sử dụng arrow khi viết method trong object
    hienThiArrow: () => {
        console.log (`${this.ten} - ${this.gia}`);//liên quan tới this mà arrow thì không có dọc được
    },

};

sanPham.hienThiExpression();
sanPham.hienThiArrow();

//method ở trong object hay sử dụng trong các trường hợp
// object có cả data lẫn hành vi. Ví dụ 1 obect tên cart có dữ liêu item và method getSummary để mô tả chính nó
const card  ={
    item : 3,
    getSummary(){
        return(this.item);
    },
};

const card3  ={
    item : 3,
    getSummary(){
        return(this.item);
    },
};

console.log(card.getSummary()); //3

//object config: ví dụ 1 object có cấu hình timeout, baserul => có 1 method buildUrl() để ghép link hoàn chỉnh
//object formatter có các method formatPrice. formatDate() => object tiện ích

//ví du: 1 object cụ thể, viết nhanh dùng ngay => method bên trong object là hợp lí(thường tỉ lệ sử dụng trong auto là ít)
// nhưng nếu nhiều object form như card1 card2 ==> dung class dễ tổ chức hơn

const giaSanPham =[ 20000, 50000, 40000];

// function declaration
function inGia(gia){
    return gia > 20000;
}

const result = giaSanPham.filter(inGia);
console.log(result)

// function expression

// const result2 = giaSanPham.filter(inGia(gia) {
//     return gia > 20000;
// });

//arrow
const result3 = giaSanPham.filter((gia) => gia >20000);

// nếu khai báo 2 hàm cùng tên
// hàm khai báo sau sẽ ghi đè hàm trước

function guiThongBao(message){
    console.log(`Message ${message}`);
}

function guiThongBao(message, userId){
    console.log(`Message ${message}, user ID ${userId}`);
}

function guiThongBao(message, userId){
    if(typeof userId === "undefined"){
        console.log(`Message ${message}`)
        return;
    }
    if(typeof userId === "number"){
         console.log(`Message ${message}, user ID ${userId}`);
         return;
    }
    console.log("Không hợp lệ")
}

guiThongBao("Test123",2);

// phân biệt break và return

function timSo1(arr){
    for(let i = 0; i <arr.length; i++){
        if(arr[i]===5){
            break;
        }
        console.log(arr[i]);
       
    }
    console.log("Dùng break thì dừng for thôi nên vẫn in ra được dòng này"); 
}

timSo1([1,2,3,4,5,6,7]);


function timSo(arr){
    for(let i = 0; i <arr.length; i++){
        if(arr[i]===5){
            return;
        }
    }
}

function dangNhap(user, pass, env ="staging"){
    console.log(`Environment ${env} : ${user} - ${pass}`);
}

dangNhap("dungvm","vmdung123");

// kỹ thuật rest parameter
function tongTien1(...danhSachGia){
    //danh sách giá là một mảng ==> array thì dùng for of
    let tong =0;
    for(const gia of danhSachGia){
        tong+=gia;
    }
    return tong;
}

console.log(tongTien1(100000,25,25));



//option object
function createUser(options){
    const{ten , tuoi = 20 , role = "admin"} = options;
    console.log(`${ten},${tuoi},${role}`);

}

function createUser2({ten , tuoi = 20 , role = "admin"}){
    console.log(`${ten},${tuoi},${role}`);
}

createUser({
    ten : "Dũng",
})

createUser2({
    ten: "Vũ",
})

//destructuring array

const list = ["Dung", "tesst123", "admin"];

const[user, pass, role] =  ["Dung", "tesst123", "admin"];
console.log(user);
console.log(pass);
console.log(role);

// bỏ qua phần tử không cần, nếu không muốn lấy thằng nào thì để trống chỗ đó
const[firstName, , city] =  ["Dung", "tesst123", "Ha Noi"];
console.log(user);
console.log(city);

// destructuring object

const userInfo = {
    name: "Dung",
    age: 20,
    email: "dungvm@luminpdf.com",
};
const{name, age, email} = userInfo;

// bỏ qua phần từ không cần
const [a,b,c="n/a"] = ["Hello", "World"];
console.log(c);

// cú pháp gặp nhiều nhất ==> bóc tách thuộc tính object => nhưng chỉ dùng cho object
// const apiResponse  = {
//     statusCode: 200,
//     body: "oke",
//     headers: {}
// };

const {statusCode, body, headers} = {
    statusCode: 200,
    body: "oke",
    headers: {}
};
console.log(statusCode);

// đổi tên biến
const {statusCode: code, body: data, headers: headersData} = {statusCode: 200,
    body: "oke",
    headers: {}};

console.log(code);
console.log(data);
console.log(headersData);

//giá trị mặc định + đổi tên
const {ten, tuoi = 20, chucDanh = "admin"} = {ten: "Dung", chucDanh: "developer"};
console.log(ten);
console.log(tuoi);
console.log(chucDanh);

//destruct lồng (nested)

const apiResponse = {
    data: {
        userInfo: { hoTen: "Dung", mail: "dungvm@luminpdf.com" },
        token: "1234567890",
    },
    status: 200,
};

// const { data: { userInfo: { hoTen, mail }, token }, status } = apiResponse;
// console.log("--------------------------------");
// console.log(hoTen);
// console.log(mail);
// console.log(token);
// console.log(status);

// bài tập: khi chạy Auto nhận được danhs sách kết quả như sau
const testRuns = [[" login smoke", {browser : "   chromium  ", env: "  staging  "}, " PASS "],
[" checkout payment", {browser : "   firefox  ", env: "  prod  "}, " FAIL "],
[" Search Product", {browser : "   webkit  ", env: "  staging  "}, " PASS "],
["", {browser : "   chromium  ", env: "  dev  "}, " PASS "],
["Home page", {browser : "   chromium  ", env: "  dev  "}, "  "]];

// Bài toán
// Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.

// Yêu cầu
// - Dùng destructuring để bóc tách từng phần tử trong mảng.
// - Gợi ý:
//   const [rawTestName, { browser, env }, rawStatus] = item
// - Tương ứng:
//   + rawTestName: tên test thô
//   + { browser, env }: thông tin môi trường chạy
//   + rawStatus: trạng thái test thô
let invalidCount = 0;
let testPassed = [];
let testFailed =[];
function taoBaoCaoTest(testRuns){
    for(const test of testRuns){
        const [rawTestName,{browser, env}, rawStatus] = test;
        const testName = rawTestName.trim();
        const envNam = env.trim();
        const browserName = browser.trim();
        const statu = rawStatus.trim().toUpperCase();
        if(testName === ""){
            invalidCount++;
            continue;
        }
        if(statu != 'PASS' && statu != 'FAIL'){
            invalidCount++;
            continue;
        }
        const report = `${testName} - ${browserName} - ${envNam}`
        if(statu === "PASS"){
            testPassed.push(report);
        }else if(statu === "FAIL"){
            testFailed.push(report);
        }
    }
    return{
            totalValid: testPassed.length + testFailed.length,
            invalid: invalidCount,
            passed: testPassed,
            failed: testFailed,  
        };
}

console.log(taoBaoCaoTest(testRuns));

// Rule xử lý
// - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// - Nếu dữ liệu hợp lệ:
//   + Tạo chuỗi theo định dạng: testName - browser - env
//   + Ví dụ: login smoke - chromium - staging
//   + Nếu PASS thì đưa vào mảng passed.
//   + Nếu FAIL thì đưa vào mảng failed.

// Kết quả mong đợi
// Hàm cần trả về dữ liệu theo dạng:
// {
//   totalValid: 3,
//   invalid: 1,
//   passed: [
//     "login smoke - chromium - staging"
//   ],
//   ...
// }

// spread operator

const mangGoc = [1,2,3,4,5];
// clone mảng gốc => spread operator
const mangMoi = [...mangGoc];
mangMoi.push(6);
console.log(mangMoi);
console.log(mangGoc);

// merge mảng
const mang1 = [1,2,3];
const mang2 = [4,5,6];
const mang3 = [...mang1, ...mang2];
console.log(mang3);

// chèn vào đầu và cuối
const mang4 = [0, ...mang2, 7, 8];
console.log(mang4);

// merge object
const object1 = {baseUrl: "https://api.example.com",timeout : 10000, headless: true, retries:2};

const object2 = {
    ...object1,
    baseUrl: "https://api.example.com/v2",
    retries: 3,
    headless: false,
};
console.log(object2);

const danhSachPrice = [100000, 200000, 300000];
// spread operator dùng để gỉai và truyền các giá trị của mảng vào hàm Math.max
const giaMax = Math.max(...danhSachPrice); //

const object4 = {baseUrl: "https://api.example.com",
    timeout : 10000,
    headless: true,
    retries:2};

const objectGhiDe = {
    headless: false, retries:5,
}

// dùng object spread để ghi đè giá trị của object cũ
// const configCuoi = {...object4, ...objectGhiDe};
// console.log("--------------------------------");
// console.log(configCuoi);

// const tocDoPhanHoi = ["340", "350", "360", "370", "380", "390", "400"];
// const tagMacDinh = ["  smoke  ", "login   "];
// const tagThem = ["  checkout", "smoke  ","  regresssion"];

// const mergeTag = [...tagMacDinh, ...tagThem];


// const testSuiteRaw = "  Payment flow   ";
// console.log(mergeTag);
// function chayCauHinhTest(mergeTag){
//     const mangSach = [];
//     for(const tag of mergeTag){
//         const tagTrim = tag.trim();
//         if (!mangSach.includes(tagTrim)){
//             mangSach.push(tagTrim);
//         }
//     }
//     let response = Math.max(...tocDoPhanHoi);
//     return {
//         testSuite: testSuiteRaw.trim(),
//         config: configCuoi,
//         tags: mangSach,
//         slowestResponse: response,
//     }
// }

// console.log(chayCauHinhTest(mergeTag));

// callback

function quayLaiAn(){
    console.log("Quay lại an");
}

function choBan(soDienThoaiCuaKhach){

    console.log("Đang chọn bàn");
    soDienThoaiCuaKhach();
}

//choBan(quayLaiAn);

// function có ngoặc ==> hàm chạy ngay ==> lấy kết quả

function  layDuLieuTest(){
    return "Dữ liệu test";
}

const duLieuTest = layDuLieuTest();
console.log(duLieuTest);

// function không ngoặc ==> hàm chỉ được truyền vào để chạy sau
function choBan(soDienThoaiCuaKhach){
    //
    console.log("Đang chọn bàn");
    soDienThoaiCuaKhach();
}

//choBan(quayLaiAn);

//callback có tham số
//hàm nhận callback có thể truyền dữ liệu ngược lại cho callback khi gọi

// Callback: hàm được truyền vào hàm khác, hàm kia gọi lại khi cần
function thongBao(tenBaiTest, ketqua){
    // In kết quả test ra console, vd: "login smoke - PASS"
    console.log(`${tenBaiTest} - ${ketqua}`);
}

// tenBaiTest: tên bài test cần chạy
// thongBao: tham số thứ 2 là callback — hàm sẽ được gọi lại sau khi test xong
function chayTest(tenBaiTest, thongBao){
    // Bước 1: log trạng thái đang chạy
    console.log(`Đang chạy test ${tenBaiTest}`);

    // Bước 2: giả lập pass/fail — tên test có chứa "login" thì pass
    const pass = tenBaiTest.includes("login");

    // Bước 3: gọi callback, truyền dữ liệu ngược lại (tên test + kết quả)
    // Cách viết gọn tương đương if/else bên dưới:
    // thongBao(tenBaiTest, pass ? "PASS" : "FAIL");
    if(pass){
        thongBao(tenBaiTest, "PASS");
    }else{
        thongBao(tenBaiTest, "FAIL");
    }
}

// Truyền hàm thongBao làm callback — chayTest sẽ gọi nó khi test xong
chayTest("login smoke", thongBao);


//////////////////////

function inThongBao(){
    console.log("In thông báo");
}

// cách 1 set timeout
// setTimeout(inThongBao, 1000);

// //các 2 arrow function
// setTimeout(() => {
//     console.log("In thông báo");
// }, 1000);

// // cách 3 
// setTimeout(function(){
//     console.log("In thông báo");
// }, 1000);

// ứng dụng thực tế callback thường dùng ở các hàm xử lý array
// map()
const giaSanPhamUI = [100000, 200000, 300000];

function giaNhanDoi(gia){
    return gia * 2;
}

const giaMoi = giaSanPhamUI.map(giaNhanDoi);
// const giaMoi = giaSanPhamUI.map((gia) => {
//     return gia * 2;
// });
console.log(giaMoi);

const user4 =[{hoTen: "John", ten: "Doe"}, 
    {hoTen: "Jane", ten: "Doe"}, 
    {hoTen: "Jim", ten: "Doe"}];

const mapUser = user4.map((user) =>{
    return `${user.hoTen} - ${user.ten}`;
});
console.log(mapUser);

// filter()
// lọc phần tử th

const products = [{ten : "chuọt", gia : 100000, conHang: true},
    {ten : "bàn phím", gia : 200000, conHang: true},
    {ten : "màn hình", gia : 300000, conHang: false},
    {ten : "máy tính", gia : 400000, conHang: true},
    {ten : "loa", gia : 500000, conHang: false},
];

// dùng for để lọc các sản phẩm còn hàng
const sanPhamConHang = [];
// for(const prod of products){
//     if(prod.conHang){
//         sanPhamConHang.push(prod);
//     }
// } 
console.log(sanPhamConHang);

const conHang = products.filter((prod) => {return prod.conHang === true;});

// lọc giá nhỏ hơn 200000
const giaNho = products.filter((prod) => {
    return prod.gia < 200000;
});

// nhỏ hơn 200k và còn hàng

const giaNhoConHang = products.filter((prod) => {
    return prod.gia < 200000 && prod.conHang === true;
});
console.log(giaNhoConHang);

// find()
// tìm phần tử đầu tiên thoả mãn điều kiện
const userF = [{id: 1, name: "John", role: "admin"}, 
    {id: 2, name: "Jane", role: "user"}, 
    {id: 3, name: "Jim", role: "admin"}];

const userAdmin = userF.find((user) => {return user.role === "admin";})
console.log(userAdmin);

//scope
