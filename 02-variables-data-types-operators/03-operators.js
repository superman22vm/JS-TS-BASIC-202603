// Tổng tiền đầu tiên bằng 0
// let tongTien = 0

// const giaAo = 25000

// tongTien += giaAo;
// console.log(tongTien); // In ra 25000

// const giaQuan = 30000

// tongTien += giaQuan;
// console.log(tongTien); // In ra 55000

// let isEmailCorrect = true;
// let isPasswordCorrect = false;

// console.log(isEmailCorrect && isPasswordCorrect); // In ra false
// console.log(isEmailCorrect || isPasswordCorrect); // In ra true
// console.log(!isEmailCorrect);

// test chức năng đăng kí, nút đăng kí chỉ thoả mãn 3 điều kiện
//1. email phải đúng định dạng
//2. password phải có ít nhất 8 kí tự
//3. checkbox đồng ý phải được tick

let userAge = 20;
let password = "12345678";
let isCheckboxChecked = true;

let isSubmitButtinEnabled = (userAge >=18) && (password.length >= 8) && isCheckboxChecked;

//console.log(isSubmitButtinEnabled); // In ra true

//postfix
let a = 5;

//sau khi thục hiện câu lệnh thì nó mới tăng
console.log(a++);
//console.log(++a);

let b = 5;
let ketQua =++b;
console.log(ketQua); // In ra 6

let x1 = 5;
console.log(x1++); // In ra 5

let count =0;
count++;
console.log(count); // In ra 1

// ví dụ test retry nút submit n lần
// 1 bạn mới viết vừa giảm vừa tăng số lần thử

let retry = 2
retry ++;
console.log(retry); // In ra 3

++retry;
console.log(retry); // In ra 4
let secondLog = retry
canRetry = retry > 3;
console.log(canRetry);

// Bài tập mình có 1 promotion -> rules nếu khách hàng lớn hơn 18 tuổi và là VIP thì được giảm 30% giá vé, ngược lại vẫn giữ nguyên

let rawAge = " 25 tuổi ";
let isVIP = "true";
let rawPrice = " 100.000 đồng ";

//1. Xử lý dữ liệu đầu vào
let age = Number(rawAge.replace("tuổi","").trim())
let price = Number(rawPrice.replace(".","").replace("đồng","").trim())
let VIP = isVIP.trim() === "true"


let promotion = (age >18) && VIP ? price * 0.7 : price;
console.log(`Kết quả: ${promotion}`);