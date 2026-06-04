
// 1. String (Chuỗi)
const userName = "John Doe"; //khai báo hằng số để lưu tên học viên

const loiGioiThieu =`Xin chào, tôi tên là ${userName}. Tôi đang học JavaScript.`; // gán tên học viên 

//console.log(loiGioiThieu); 

// 2. Number (Số)
const tuoi = 25;

let result = tuoi * 2; // phép nhân
//console.log(result); // In ra kết quả: 50

// 3. Boolean (Giá trị đúng/sai)
let isStudent = true; //biến boolean lưu thông tin về việc có phải là học viên hay không

// xử lý string

// .length: trả về độ dài của chuỗi
let message = "   Hello, World!  ";
//console.log(message.length); // In ra độ dài của chuỗi

// .trim(): loại bỏ khoảng trắng ở hai đầu của chuỗi
let rightMessage = message.trim();
//console.log(rightMessage); // In ra chuỗi đã được loại bỏ khoảng trắng ở hai đầu

// .toUpperCase(): chuyển đổi chuỗi thành chữ hoa
let upperMessage = rightMessage.toUpperCase();
//console.log(upperMessage); // In ra chuỗi đã được chuyển thành chữ hoa

// .toLowerCase(): chuyển đổi chuỗi thành chữ thường
let lowerMessage = rightMessage.toLowerCase();
//console.log(lowerMessage); // In ra chuỗi đã được chuyển thành chữ thường

// .includes(): kiểm tra xem chuỗi có chứa một chuỗi con hay không
// let thongBao = " Thông báo lỗi mật khẩu rồi";
// console.log(thongBao.includes("lỗi")); // In ra true nếu chuỗi chứa "lỗi", ngược lại in ra false
// console.log(thongBao.includes("Lỗi")); // In ra false vì "Lỗi" khác với "lỗi" (phân biệt chữ hoa và chữ thường)

// // includes có check khoảng trắng
// let a = " Hello ban nha ";
// console.log(a.includes("ban")); // In ra true vì chuỗi chứa "ban"
// console.log(a.includes("ban ")); // In ra true vì chuỗi chứa "ban " (có khoảng trắng sau "ban")
// console.log(a.includes("  ban")); // In ra true vì chuỗi chứa " ban" (có khoảng trắng trước "ban")

// .replace(): thay thế một chuỗi con bằng một chuỗi khác
let so = "$100";
let soKhongDau = so.replace("$", ""); // Thay thế ký tự "$" bằng chuỗi rỗng
//console.log(soKhongDau); // In ra "100"

// . replaceAll(): thay thế tất cả các chuỗi con bằng một chuỗi khác
let text = "I like JavaScript. JavaScript is great!";
let newText = text.replaceAll("JavaScript", "JS"); // Thay thế tất cả "JavaScript" bằng "JS"
//console.log(newText); // In ra "I like JS. JS is great!"

// .indexOf(): trả về vị trí đầu tiên của một chuỗi con trong chuỗi, hoặc -1 nếu không tìm thấy
let p = "Hello, World!";
//console.log(p.indexOf("W"))

let error = "Error 404: Not Found";
let pos = error.indexOf(":");
// console.log(pos); // In ra 9, vị trí của dấu ":" trong chuỗi error
// console.log(error.substring(error.indexOf(":")+2)); // In ra ": Not Found", phần chuỗi bắt đầu từ vị trí của dấu ":" đến hết chuỗi

//Bài tập

let order = "     ORDER ID: ORDER-01-2026 | CUSTOMER: John Doe     ";
let orderTrim =order.trim();
//console.log(order.slice(order.indexOf(":")+2, order.indexOf("|")-1));
// order way
let start = order.indexOf(":");
let end =order.indexOf("|");
//console.log(start+2, end-1);

// Xử lý number
//let canNang = "70";
// console.log(Number(canNang)); // In ra 70

// console.log(parseInt("70kg"));

// console.log(parseFloat("3.14px"));

//PadStart và PadEnd

// vận dung padStart
// mục tiêu tjao ra cái số SP-0005
let number =5;
let goodNum = String(number).padStart(4,"0");
let final =`SP-${goodNum}`;
console.log(final);


//method chainning
let slug = " Playwright Basic First Step ";
console.log(slug.trim().toLowerCase().replaceAll(" ","-"));

let sa = "   sale  ";
console.log(sa.trim().toLowerCase().includes("sale")); // In ra true vì chuỗi sau khi trim vẫn chứa "sale"

let amount = 9.5;
console.log(amount.toFixed(2).padStart(5,"0")); // In ra "09.5" vì padStart sẽ thêm "0" vào trước số để đạt độ dài 5 ký tự

let text1 = "ABCDEFGH"

console.log(text1.slice(1,-2));

let vnd = "54000000";
console.log(vnd.slice(0,2) + "." + vnd.slice(2,5)+ "." + vnd.slice(5) + " VNĐ");