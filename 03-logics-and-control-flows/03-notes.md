1. Cấu trúc else\if và else if

2. Toán tử 3 ngôi - lối tắt của if else
vì nó có 3 thành phần
syntax: 
let bien = dieu kien ? gia tri dung : gia tri sai
dấu ? mang nghĩa đang hỏi điều kiện này đúng hay sai
: ngăn cách giữa đúng bên trái và phải là sai

BEST PRACTICE
if else dùng để quyết đinhj chạy khối code nào

toán tử 3 ngôi thì nó là in ra giá trị
Ưu tiên sử dụng khi chỉ muốn đưa ra giá trị
Bài toán chỉ có 2 kết quả
Hiển thị nhãn\label

Sử dụng if esle khi mỗi nhánh có nhiều hành động
như các action click, screenshot
Kiểm tra xem là có cần thêm logic trong tương lai không

3. Truthy và falsy
bình thường thì truyền điều kiện

còn cái này thì thg if không hỏi m thuộc kiểu dữ liệu gì
mà sẽ hỏi:trong ngữ cảnh điều kiện, cái này nên cho là đúng hay sai

đó là lý do tại sao có 2 khái niện:
TRUTHY: không phải boolean thật nhưng đưa vào if thì xem là true
FAlSY: không phải boolean thật nhưng đưa vào if thì xem là false

Quy tắc
Những thứ tiêu cực, vô nghĩa sẽ bị ép thành false gọi là falsy
Còn những thứ còn lại sẽ là truthy

list 6 đứa falsy
- false
- 0
- ""
- NaN
- null
- undefined

chú ý các bẫy, trò lừa bằng string
"0" => chuỗi chứa số 0
" " ==> truthy
[] array ==> truthy
{} object ==> truthy

4. Switch case
Hoạt động giống máy bán nước tự động
vd bạn nhé tiền vào bấm mã số switch, máy sẽ dò tìm đúng số đó là case(), nếu không tồn tại thì refund hoặc thông báo lõi

Cú pháp 
Switch(), nơi truyền biến cần kiểm tra
case 'giá trị': điểm dừng ở lưu ý ở cuối
break: lệnh ngắt
default giống như else

Khi nafo dung if else và switch

dùng if else trong trường hợp phức tạp, điều kiện lồng nhau, nhiều biến
dùng switch case khi có 1 giá trị và so khớp

switch không mạnh ở điều kiện logic mà mạnh ở giá trị biểu thức truyền vào


Tình huống: Bạn đang viết một bản kiểm tra trước khi release. Hệ thống trả về dữ liệu thô từ UI và config. Bạn cần xử lý thành báo cáo rõ ràng.
Dữ liệu đầu vào:
let rawProjectName = " Neko CRM ";
let rawEnvName = " ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = " ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"
Yêu cầu:
Dùng .trim() để làm sạch rawProjectName và rawEnvName.
Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.
Ép rawPassRate sang Number.
Ép rawHasReport sang Boolean đúng cách.
Tạo hasCriticalBug theo quy tắc:
nếu message là null hoặc undefined -> false
nếu sau trim() là rỗng -> false
ngược lại -> true
Dùng if / else if để xếp hạng:
>= 95 -> "EXCELLENT"
>= 80 -> "GOOD"
>= 60 -> "NEEDS IMPROVEMENT"
còn lại -> "CRITICAL"
Dùng switch/case để gán tên engine cho browserUsed:
chrome -> "Chromium"
edge -> "Chromium"
firefox -> "Gecko"
safari -> "WebKit"
Nếu không khớp -> "Unknown"
Dùng toán tử 3 ngôi để tạo message cho report:
nếu hasReport là true -> "Có report"
ngược lại -> "Chưa có report"
Tạo isReadyToRelease theo quy tắc:
nếu pass rate dưới 80 -> false
nếu có critical bug -> false
nếu chưa có report -> false
còn lại -> true
In báo cáo ra console.
Expected output
Project: Neko CRM
Environment: Development
Browser: chrome
Engine: Chromium
Pass Rate: 82.00%
Grade: GOOD
Report: Có report
Critical Bug: Không có bug nghiêm trọng
Ready: YES