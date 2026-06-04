// lesson-05-examples.js — ví dụ theo từng phần trong lesson-05-notes.md
// Chạy: node lesson-05-examples.js

console.log("========== 1. Function cơ bản (input → body → return) ==========");

function dangNhap(userName, matKhau) {
  // parameter: userName, matKhau | argument: giá trị thật khi gọi
  console.log(`Nhập userName: ${userName}`);
  console.log(`Nhập matKhau: ${matKhau}`);
}

dangNhap("abc", "abc");
dangNhap("abc2", "abc3"); // DRY: gom logic, gọi lại thay vì copy-paste

function tinhPhiShip(giaSanPham) {
  return giaSanPham >= 500000 ? 0 : 30000; // return dừng hàm ngay tại đây
}

console.log("Phí ship:", tinhPhiShip(200000));

console.log("\n========== 2. Hoisting (chỉ function declaration) ==========");

goiTruocKhiKhaiBao(); // OK — JS đưa khai báo hàm lên trên

function goiTruocKhiKhaiBao() {
  console.log("Function declaration được hoisting");
}

console.log("\n========== 3. Ba kiểu viết hàm ==========");

// 3a. Function declaration — có hoisting, có tên rõ
function cong(a, b) {
  return a + b;
}

// 3b. Function expression — không hoisting, gán vào biến
const nhan = function (a, b) {
  return a * b;
};

// 3c. Arrow function — ngắn gọn, hay dùng callback
const tru = (a, b) => a - b;

console.log(cong(5, 3), nhan(5, 3), tru(5, 3));

console.log("\n========== 4. Function overloading (JS không hỗ trợ — tự kiểm tra input) ==========");

function guiThongBao(message, userId) {
  if (typeof userId === "undefined") {
    console.log(`Message: ${message}`);
    return;
  }
  console.log(`Message: ${message}, userId: ${userId}`);
}

guiThongBao("Test chung");
guiThongBao("Test riêng", 42);

console.log("\n========== 5. Default parameter ==========");

function moTrang(url, timeout = 30000, headless = true) {
  console.log({ url, timeout, headless });
}

moTrang("https://staging.example.com"); // thiếu 2 tham số → dùng default

console.log("\n========== 6. Rest parameter (...args) ==========");

function tongGia(...danhSachGia) {
  let tong = 0;
  for (const gia of danhSachGia) {
    tong += gia;
  }
  return tong;
}

console.log("Tổng:", tongGia(100000, 250000, 50000));

console.log("\n========== 7. Options object (>3 tham số → gói object) ==========");

function chayTestCase({ tenTest, browser = "chromium", env = "staging", retries = 1 }) {
  console.log(`${tenTest} | ${browser} | ${env} | retry: ${retries}`);
}

chayTestCase({ tenTest: "login smoke", env: "prod", retries: 3 });

console.log("\n========== 8. Destructuring & Spread ==========");

// 8a. Array destructuring
const [testName, browser, status] = ["checkout", "firefox", "PASS"];
console.log(testName, browser, status);

// 8b. Object destructuring
const { baseUrl, timeout = 10000 } = { baseUrl: "https://api.example.com", timeout: 5000 };
console.log(baseUrl, timeout);

// 8c. Spread — clone/merge, không đổi bản gốc
const configMacDinh = { headless: true, retries: 2 };
const configChay = { ...configMacDinh, headless: false, retries: 5 }; // phải ghi đè
console.log("configMacDinh:", configMacDinh);
console.log("configChay:", configChay);

console.log("\n========== 9. Callback (hàm truyền vào hàm khác) ==========");

function choCoBan(callback) {
  console.log("Đang tìm bàn...");
  callback(); // gọi lại khi xong việc
}

function quayLaiAn() {
  console.log("Có bàn rồi — quay lại ăn!");
}

choCoBan(quayLaiAn); // truyền tên hàm, KHÔNG có ()

console.log("\n========== 10. Có () vs không có () ==========");

function layData() {
  return "Dữ liệu test";
}

const data = layData(); // có () → chạy ngay → nhận "Dữ liệu test"
console.log("data:", data);

function chaySau(callback) {
  callback(); // không () lúc truyền — chỉ lưu hàm, gọi sau
}
chaySau(layData); // in "Dữ liệu test" vì layData() được gọi bên trong

console.log("\n========== 11. map() — biến đổi mảng → mảng mới ==========");

const giaGoc = [100000, 200000, 300000];
const giaSauGiam = giaGoc.map((gia) => gia * 0.9);
console.log("gốc:", giaGoc);
console.log("sau giảm:", giaSauGiam);

console.log("\n========== 12. filter() — giữ phần tử thỏa điều kiện ==========");

const products = [
  { ten: "chuột", gia: 100000, conHang: true },
  { ten: "bàn phím", gia: 200000, conHang: true },
  { ten: "màn hình", gia: 300000, conHang: false },
];

const reNhoConHang = products.filter((p) => p.gia < 250000 && p.conHang);
console.log(reNhoConHang);

console.log("\n========== 13. find() — phần tử đầu tiên thỏa điều kiện ==========");

const users = [
  { id: 1, name: "John", role: "admin" },
  { id: 2, name: "Jane", role: "user" },
  { id: 3, name: "Jim", role: "admin" },
];

const adminDauTien = users.find((u) => u.role === "admin");
console.log(adminDauTien); // object, không phải mảng

console.log("\n========== 14. Scope ==========");

// 14a. Global scope
let envUrl = "staging.example.com";

function docGlobal() {
  console.log("Trong hàm vẫn đọc được global:", envUrl);
}
docGlobal();

// 14b. Function scope — biến trong hàm, ngoài không thấy
function taoSession() {
  let sessionId = "abc-123";
  console.log("sessionId trong hàm:", sessionId);
}
taoSession();
// console.log(sessionId); // ReferenceError nếu bật dòng này

// 14c. Block scope — let/const trong {}
if (true) {
  let blockVar = "chỉ trong block";
  console.log(blockVar);
}
// console.log(blockVar); // ReferenceError nếu bật

// 14d. Object KHÔNG tạo scope
const config = {
  timeout: 5000,
  // timeout ở đây là property, không phải biến scope riêng
};
let timeoutGlobal = 9999;
console.log("timeout global:", timeoutGlobal);
console.log("config.timeout:", config.timeout);

// 14e. Scope chain — tìm từ trong ra ngoài
function cha() {
  let message = "từ hàm cha";
  function con() {
    console.log(message); // con nhìn thấy biến của cha
  }
  con();
}
cha();
