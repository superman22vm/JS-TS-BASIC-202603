các quy tắc đặt tên biến
1. ký tự đặc biệt . dấu gạch ngang là không được, chỉ dùng dấu gạch dưới "_"
2. số ở đầu là không được
3. không có được dùng từ khoá của javascript vd: if, function,....

Các đặt tên
1. PascalCase StudentInformation ==> dành cho class là nhiều
2. camelCase studentInformation ==> tên biến

Nghệ thuật đặt tên

1. đặt tên có nghĩa
- let st = "Alice" ==> X
- let studentName = "Alice" ==> oke

2. đặt tên biến boolean()
- let open = false 
- let isOpen = false ==> oke

Kiểu dữ liệu (data types):

- kiểu chuỗi dữ liệu string
    - đóng gói bằng chuỗi nháy đơn ('...') hoặc dấu nháy kép ("...") nếu chuỗi binh thường không cần nhúng biến
    - có thể dùng backtick nếu như có nhúng biến ==>  `... ${tên biến} ...  `
Lưu ý nếu có ('...') ở ngoài thì bên trong dùng ("...")

- Kiểu Number:
    - Không phân biệt số nguyên hay số thập phân mà sẽ gọi chung là number
    - Không cần phải bao lại bằng nháy 

- Kiểu boolean
    - Chỉ có 2 trạng thái true và false
    - Không cần phải bao lại bằng nháy


- Cách xử lý string
    1. .length
        - .length : lấy độ dài của string
        - vd tenChuoi.length ==> Không có để () đằng sau do không phải là method, đây là thuộc tính
    
    2. .trim()
        - làm sạch khoảng cách 2 đầu vd "  vmdung450@gmail. com " ==> "vmdung450@gmail.com"

    3. toUpperCase() và toLowerCase()
        - Làm cho viết hoa và viết thường

    4. includes()
        - Kiểm tra chuỗi con có nằm trong chuỗi mẹ hay không
        - Nếu tuỳ là thấy hoặc không thì sẽ trả về true hoặc false
        - Vd là case phân biệt hoa thường, includes so sánh độ khớp của từng kí tự

    5. replace()
        - Xoá và sửa
        - Chỉ replace giá trị đầu tiên tìm thấy được
        - Nhận vào là dạng string

    6. replaceAll()
        - Replace tất cả

    7. indexOf()
        - Tìm vị trí của một chuỗi con bên trong chuỗi mẹ, không thấy thì trả về -1

    8. subString() - slice()
        - cắt lấy một phần chuỗi dựa trên vị trí bắt đầu và kết thúc
        - start thì được tính vào còn end thì không được tính
        - subString() - cắt từ bát đầu đến trước kết thúc
        - slice() - tương tự subString() nhưng có hỗ trợ số âm
            vd let fileName = "test.pdf"
               fileName.slice(-4) ==> .pdf
    
Tư duy kết hợp nhiều string method?
- Đổi sang kiểu tư duy theo quy trình
    1. Dữ liệu bẩn ==> trim(), replace(), replaceAll(), toUppercase(), to lowerCase()
    2. Cần biết sự tồn tại ==> dùng includes()
    3. Mốc bắt đầu nằm ở đâu ==> indexOf()
    4. Sau khi biết vị trí thì tiến hàng cắt ==> subString(), slice()
    5. Xem kq sau cùng có cần chuẩn hoá nữa không ==> trim(), split(). to lowerCase()

    - Tư duy: làm sạch > tìm mốc > cắt/tách > chuẩn hoá > kiểm tra

Đồ nghề xử lý number "100" ==> 100

- ép kiểu: Để tính toán bắt buộc phải dùng number
A. Number() ==> Sẽ chuyển chuỗi thành số tuy nhiên nếu có ký tự lạ thì sẽ trả về NaN (not a number)
B. parseInt() ==> Lọc số nguyên, lấy từ trái sang phải, gặp số thì lấy, chữ thì stop, bỏ qua phần thập phân
C. parseFloat() ==> Lọc ra số thập phân

- một số phương thứclafm việc với number
    - toFixed() ==> chốt số thâp phân ()
        - Tự động làm tròn >5 thì tròn lên, <5 thì làm tròn xuống

Math.floor(Math.ramdom() * (max - min + 1)) + min
'50,51,52,53,54,55'
1. Math.random() ==> ra số 0 đến 0.99999
2. max - min + 1 ==> 55 - 50 + 1 = 6 ==> tính tổng số kết quả có thể có '50,51,52,53,54,55'
3. Math.random() *6 ==> 0 đến 5,99999 ==> kéo ra 6 đơn vị
3. math.floor() ==> làm tròn xuống ==> 6 số nguyên từ 0 đến 5
4. + min mỗi số + với min là 50 ==> 

Cách cách in console log:
1. thêm dấu + vd :console.log("Username: " +name)
2. thêm dấu phẩy vd console.log("Username: " ,name)
3. backtick console.log(` Username: ${name}`)

Method chainning
console.log(slug.trim().toLowerCase().replaceAll(" ","-"));
trim (làm sạch dữ liệu) > tolower (chuẩn hoá) >
==> Kết quả của bước trước sẽ là đầu ra của bước sau

toLocaleString() ==> hiển thị số theo từng quốc gia


Toán tử operators
1. Phép cộng
    -  Tính lưỡng cực
    - Nếu cả 2 là số thì + lại với nhau bth 10 + 5 = 15
    - Nếu một trong 2 là chuỗi thì sẽ thành nối chuỗi "10" + 5 = 105

2. Phép trừ 
    - JS luôn cố ép chuỗi thành số khi sử dụng dấu trừ
    - Nhân chia cũng tương tự

3. Toá tử gán (=)
let diem = 10
let diem = diemso + 5
B1 tính bên phải trước 10 +5 =15
B2 gán 15 ngược vào biến

4. Toán tử gán rút gọn
    - += vd x+=5 => x = x+5
    - -= vd x-=5 => x = x-5
    - \*=5 vd x*=5 => x = x*5

5. Toán tử so sánh Bằng nhau == và bằng nhau tuyệt đối ===
    - toán tử == (so sánh lỏng lẻo):
        Nó chỉ quan tâm giá trị, không quan tâm đến kiểu dữ liệu ==> 10 == "10" true
        Nếu khác kiểu dữ liệu thì nó sẽ cố gắng ép kiểu cho chúng bằng nhau
    - toán tử === (so sánh tuyệt đối)
        Nó kiểm tra giá trị lẫn dữ liệu ==> 10 == "10" false

6. toán tử logic
    - Phép VÀ (&& - logic AND)
    Quy tắc :  chỉ trả về true khi tất cả các điều kiện là true, còn nếu có 1 cái false là false luôn

    - Phep hoac(||)
    Quy tắc :  chỉ trả về true khi có ít nhất 1 điều kiện là true

    - Phep phu dinh (!)
    Quy tắc đao nguoc gia tri boolean, dang true thanh false va nguoc lai

    - phep ?  ==> ? Đúng : không đúng

    Cách đọc toán tử cho đúng
    3 cách đọc quen thuộc
    Không
    Không phải
    Phủ định của

7. Toán tử tăng giảm (prefix\postfix)

postfix(i++): trả về gía trị cũ của i rồi mới tăng i lên 1
prefix(++i) tăng i lên 1 trước rồi mới trả về giá trị mới

Khi nhìn vào thì phải đặt ra 2 câu hỏi
- giá trj của biểu thức i++ hoặc ++i là gì?
- giá trị cuối cùng của biến i sau khi chạy là gì

Nơi dùng toán tử được nhét vào?
Phép gán let i =i++
Phép tính let i = ++i *2

Lưu ý khi dùng ++\--
khi đứng trên một dòng thì nó đều hoàn toàn vô hai, prefix và postfix đều ra kết qủa giống nhau

Ý chính khi code:
Một dòng chỉ nên làm 1 việc chính
Phép tính riêng