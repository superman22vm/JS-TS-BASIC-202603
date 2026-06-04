const user ={
    hoten: "Dũng",
    tuoi: "28",
    gioiThieu() {
        console.log(`${this.hoten} - ${this.tuoi}`);
    }
}
//khi gọi user.gioiThieu => kẻ đứng trươc dấu chấm bằng user => this = user
user.gioiThieu()

const sanPham ={
    ten: "Máy tính",
    gia: 20000,
    soLuong :3,
    inThongTin() {
        console.log(this.ten);
        console.log(this.gia);
        console.log(this.soLuong);
    },
    sauGiamGia(phanTram){
        this.gia = this.gia * (1 - phanTram / 100);
        console.log(`giá sau khi giảm của sản phẩm ${this.ten} còn ${this.gia.toLocaleString()}`);
    }
}

sanPham.inThongTin()
sanPham.sauGiamGia(30)

const sanPham2 = {
    ten: "iPhone 11",
    inTen: () => {
        console.log(`${this.ten}`)
    },
    inTenDung(){
        console.log(`${this.ten}`)
    }

}
sanPham2.inTenDung()

//==> nhưng nếu có callback

const gioHang = {
    items: ["chuột", "bàn phím", "màn hình"],
    inDanhSach(){
        console.log(`Giỏ hàng ${this.items.length} sản phẩm`)
        this.items.forEach((item) => {
            //nếu là arrow function => thằng this sẽ tìm theo scope bên ngoài
            //=> this lúc này là this của inDanhSach => gioHang
            console.log(`${item} (giỏ ${this.items.length})`);
        });
    },
}

gioHang.inDanhSach();

const boDem1 = {
    ten: "Click Counter",
    soLan = 0,
    dem() {
        this.soLan++;
        console.log(`${this.ten} - ${this.soLan}`);
    }
}
boDem1.dem();

// gắn method vào 1 biến mới
const hamTach = boDem1.dem;
// lúc này hàm tách chứa các hàm nhưng đã bị mất liên kết đến boDem
//giống copy mà bản copy không biết thuộc về ai

hamTach();
// this sẽ bị mất khi truyền call back

// TỔNG KẾT arrow function sẽ fix việc callback 

/*
=== CALLBACK FUNCTION ===

Callback là gì?
- Callback = một function được truyền vào làm tham số cho function khác
- Function đó sẽ gọi lại hàm bạn truyền vào ở thời điểm thích hợp

Khác với gọi function bình thường:
- Gọi bình thường: bạn gọi ngay lập tức
  sayHello();
  
- Callback: bạn đưa function cho ai đó, để lúc nào họ muốn họ mới gọi
  forEach((item) => { ... })

Ví dụ thực tế:
- this.items.forEach((item) => { }) 
  => Bạn truyền arrow function vào forEach
  => forEach sẽ gọi nó cho mỗi phần tử

Lưu ý với callback:
- Nếu dùng function bình thường: this sẽ bị mất
  this.items.forEach(function(item) { console.log(this) }) // this = undefined
  
- Nếu dùng arrow function: this được kế thừa từ scope ngoài
  this.items.forEach((item) => { console.log(this) }) // this = object chứa nó
*/