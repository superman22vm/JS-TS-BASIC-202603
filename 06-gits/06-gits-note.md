Các bước để đẩy code lên repository
B1: Khởi tạo git trong folder hiện tai
    git init ==> Làm lần đầu tiên và duy nhất => sau lệnh này git sẽ tạo ra 1 folder ẩn tên .git
    nó là nơi lưu lịch sử thay đổi của project

B2: Kiểm tra trạg thái file
    git status ==> git đã được bật trong folder nhưng chưa tạo mốc lưu đầu tiên

B3: git add tên file hoặc tên folder
git add . => chọn tát cả các file đã thay đổi trong prj

B4. tạo commit đầu tiên
git commit -m "nội dung mô tả commit"

nhánh main => nhánh này là nhánh chính chạy ổn định => khi làm việc người ta tạo ra nhanh khác để làm việc

nối git local với remote repo để chia sẻ code
git remote add origin đường link remote repo

push đẩy code
lần đầu chưa đẩy code ==> thiết lập upstream

test123123123
new change on the file

==> vì là có nhiều người làm push lên main liên tục nên phải update liên tục ==> git fetch, git pull
vd: có người đã push code mới lên rồi nè
