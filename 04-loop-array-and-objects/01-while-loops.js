// yếu tố 1
let clickcount = 1;

// yếu tố 2
while(clickcount <=3){
    console.log(`dang click lan thu ${clickcount}`);

    //yeu to 3
    clickcount++;
}

let miengThit = 5;
while (miengThit > 0){
     console.log(`an con ${miengThit}`);

    //yeu to 3
    miengThit--;
}

// trong auto sẽ có cơ chế retry - thử lại n lần
// viết code tìm nút thanh toán, cứ 1s thì tìm 1 lần tối đa n lần, nếu thấy thì dừng, quá n lần thì báo lỗi
let maxRetry = 5;
let retry = 1;

let isFound = false

while(isFound === false && retry <= maxRetry){
     console.log(`Dang tim nut thanh toan`);

     //gia lap tim kiem, cho ti le tim kiem > 0.8
     let result = Math.random() >0.8;

     if(result === true){
        isFound = true;
        console.log(`tim thay roi`);
     }else{
        console.log(`not found`);
        retry++;
     }
}

if(isFound === false){
    console.log(`NOT FOUND`);
}


//////ARRAY//////
let sanPham = ["Áo khoác",2,"Áo thun"];

console.log(sanPham[0]);
console.log(sanPham.length);

let sanPham2 = [];
sanPham2.push("123123");

let history =["Trang chủ", "sản phẩm"];

let trangVuaThoat = history.pop();

//console.log(trangVuaThoat);

//console.log(history);

let text =["A", "B"];

let text2 = text.join(".");
//console.log(text2);

//bài tập array

let gioHang = ["Bàn phím", "Chuột", "Màn hình", "Tai nghe"];

// tong san pham
//console.log(gioHang.length);

// san pham dau tien
//console.log(gioHang[0]);

// san pham cuoi cung
//console.log(gioHang[3]);

// them lot chuot vao cuoi
//console.log(gioHang.push("Lot chuot"))

//console.log(gioHang)


//bài tâp: có 1 hệ thống login ==> rule cho phép nhập sai mật khẩu tối đa 3 lần. nếu nhập đúng trước 3 lần thì hiển thị Login success, nếu sai locked
//ở mỗi lần thử, giả lâp ng dùng nhập mât khẩ bằng cách gắn cứng giá trj cho biến nhapMatKhau
//Nhập đúng in ra "Đăng nhập thành công"
//Nhập sai "Khoá tài khoản"

// let matKhauDung = "1234";

// let lanThu  = 1;
// let daDung = false; // false cos nghia la chua dung
// let nhapMatKhau;

// while(!daDung && lanThu <=3){
//     if(lanThu ===1){
//         nhapMatKhau = "0000";
//     }else if(lanThu === 2){
//         nhapMatKhau = "9999";
//     }else if(lanThu === 3){
//         nhapMatKhau = "134";
//     }

//     console.log (`Thử lần ${lanThu}, nhập mật khẩu: ${nhapMatKhau} `)

//     if(nhapMatKhau == matKhauDung){
//         console.log("Đăng nhâp thành công");
//         daDung = true;
//     }else{
//         console.log("Sai mật khẩu");
//         lanThu++ // sai mật khẩu nên nhập tiếp lần n + 1
//     }
// }

// if(!daDung){
//     console.log("Khoá tài khoản");
// }

let matKhauDung = "1234";
let danhSachNhap = ["0000","9999","1234"]
let daDung = false;

let i = 0; // gia tri index dau tien cua mang la 0

while(i < danhSachNhap.length){
    let nhapMatKhau = danhSachNhap[i];
    if(nhapMatKhau === matKhauDung){
        console.log("Đăng nhâp thành công");
        break;
    }else{
        console.log("Sai password");
    }
    i++;
}

if(!daDung){
    console.log("Het luot");
}





