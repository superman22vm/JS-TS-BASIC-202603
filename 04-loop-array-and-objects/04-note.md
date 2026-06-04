1. while ==> trong khi

Cú pháp 3 yếu tố

let bien = gia_tri_ban_dau

Yếu tố 1.  biến khởi tạo => vạch xuất phát
vd let bien = 1
yếu tố 2, điều kiện lặp()
Đánh giá > nếu truthy thì chạy tiếp > nếu falsy thì kết thúc
Yếu tố 3: bước nhảy
của thoát hiểm; bắt buộc phải nằm trong dấu ngoặc nhọn
-> nhiệm vụ thay đổi biến khởi tạo để đến khi điều kiên false, từ đó vòng lặp dừng lại
- ví dụ clickcount++

2. Array
trong JS thì array có thể chưa nhiều kiểu dữ liệu

let sanPham = ["String",2,3]

Công cụ xử lý mảng:
tenMan.length() ==> trả ra number tổng số phần tử trong mảng
push() nhét đồ vào trong mảng, nhét vào cuối mảng
vì index =0 nên phần tử cuối mảng luôn nằm ở vị trí length =1 

includes() kiểm tra trong mảng có phần tử đó hay không

pop() rút phần tử cuối cùng ra ngoài
đầu ra là phần tử cuối cùng bị rút ra
==> trong mảng sẽ không còn gía trị được rút ra nữa

shift() rút phần tử đầu tiên ra ngoài

unshift() gắn phần tử vào đầu array

join() nối tất cả vào cùng 1 chuỗi

3. Object
tủ có dán nhãn khi muốn lấy 1 cái ngăn kéo
Quy tắc dùng array khi ban muốn lấy một danh sách nhiều thứ giống nhau(danh sách học sinh)
dùng object khi cần mô tả 1 chi tiết duy nhất ( 1user, sản phẩm)

cú pháp: để tạo object => dùng dấu ngoặc nhọn và các cặp KEY_VALUE, ngăn cách bởi dấu phẩy

Quy tắc đặt tên key trong object tuân theo key không cần giấu nháy kép ""
Nếu key là tên hợp lệ theo quy tắc biến 
nếu key chưa dấu cách hoặc gạch ngang vd fist-name
==> Phải bọc lại bằng dấu nháy ""

cách trích xuất dữ liêu:
A. Dùng dấu chấm (90%)
oject.key ==> nếu nó không chưa dấu nháy kép

B. Dấu ngoặc vuông dùng cho trường hợp còn lại
console.log(apiData["first-name"]);

C. Thêm sửa xoá CRUD dữ liệu trong object
các phươngh thức của object
A. Objects.keys() => gom tất cả key thành một mảng
B, Objects.values() => gom tất cả giá trị thành một mảng
C. Objects.entries() => gom cả nhãn lẫn giá trị
D. Objects.hasOwn() => kiểm tra key có phải của chính nó không

BAN CHAT AUTOMATION LA XAC DINH VI TRI PHAN TU CAN TUONG TAC
KHI DA XAC DINH ROIF THI NGON

Array of Object 
let objectArray = [{name : dung, role : admin}{name : dung, role : fly}]

Vòng lặp for - lặp lại có cấu trúc
A. Vòng lặp for cổ điển
- Mạnh mẽ nhất và xuất hiện ở mọi ngôn ngữ lập trình
- Cú pháp for([1.Khơi tạo];[2.điều kiện dừng];[3.bước nhảy)]
    - 1. khởi tạo: tạo biến đếm, khởi tạo lần đầu tiên
    - 2. điều kiện dừng: kiểm tra trước mỗi vòng, true > chạy tiếp, false > dừng
    - 3. bước nhảy: cập nhật biến đếm sau mỗi vòng, thường là i++, i--
    - ba phần cách nhau bởi dấm chấm phẩy