Function:

1. Đầu vào
2. Quy trình xử lý
3. Đầu ra

có 3 loai function() trong JS
cú pháp đơn giản là function

function tenHam(đầu vào){
    //body
    //đầu ra
}

// đầu vào parameter

tham số parameter: lỗ hổng chờ sẵn khi bạn chế tạo máy
đối số argument: nguyên liệu dudojwc nhé vào

// body:

là logic code xử lý
từ khoá return - trả về // nó lấy kết quả tính toán được và giao lại cho dòng code bên ngoài mang đi vào việc khác
- return sẽ trả giá trị bên trong function ra bên ngoài
- giá trị có thể là number, string, boolean, object, array,..


//hoiSting
//có thể gọi 1 hàm trước khi hàm đó được khởi tao
// ứng dụng vất hết các hàm hỗ trợ xu(helper, clean data) xuống dưới cùng của file cho đỡ chật chỗ
//không áp dụng cho tất cả các hàm

Các trường phái viết hàm trong javascript
1. Cổ điển function declaration( hàm khai báo)
- Đây là hàm truyền thống học ở đầu buổi, bắt buộc phải bắt đầu bằng chữ function
- Cái này hỗ trợ 100% hoiSting
- Ưu điểm được hoiSting gọi đâu cũng chạy được
    tên hàm rõ ràng, dễ đọc, debug
- Nhược điểm: cú pháp dàu dòng hơn arrow function

2. Thực dụng : function expression
cú pháp:
const tenHam = function(){
    ... thân hàm
}

==> Không có được hỗ trợ hoiSting
- Tuy nhiên thì có một số ưu điểm, an toàn hơn nhờ const; với declaration thì vô tình khai báo trùng tên hàm khác thì dẫn đến cái mới đè lên cái cũ và không có báo lỗi
- Linh hoạt truyền hàm như một món đồ: vì hàm đc cất trong biến => có thể truyền vào hàm khác
- Chọn hàm theo điều kiện

3. arrow function
-  là phiên bản nâng cấp của function expression nhưng rút gọn tốt đa cú pháp

const tenHam = (thamSo1, thamSon) => {
    // thân hàm
} 
Không hỗ trợ hoiSting
Ưu điểm, cú pháp siêu nắn => rất hay sử dụng khi viết call back (.map, filters)

thường thì sử dụng arrow nhiều hơn là expression
cùng là const nhưng mà arrow ngắn hơn rất nhiều

kỹ thuật xử lý tham số nâng cao
cách viết hàm cơ bản -> nâng cao hơn vì thực tế không đơn giản

- Functioning overloading là 1 hàm nhiều cách gọi
các ngôn ngữ Java hoặc C# thì có thể nhưng JS thì ko

- default parameterr - giá trị mặc định
Khi ng dùng ko truyền đủ tham số thì JS sẽ tự động cho thêm vào các giá trị măc định
chỉ hoạt động tốt khi tham số mặc định nằm ở cuối, nếu tham số giữa bị thiếu thì phải truyền undefined hoặc là null vào cho nó
==> Quy tắc luôn đặt tham số default, nếu có nhiều hơn 3 tham số thì có thể dùng option object

- rest parameterretemarap (...args) dấu ... () gom tất cả vào một mảng

- option object 
nếu một hàm có nhiều hơn 3 tham số, thay vì truyền lẻ tẻ thì sẽ gói tất cả vào 1 object
- đây là 1 patern nâng cao hay được sử dụng