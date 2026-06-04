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

Thêm mới nữa nha

User A kéo code về => tạo nhánh mới => dẩy merge main => main có thêm 20 dòng
User B kéo code

Cách đặt tên branch, ngắn gọn, không có khoảng trắng
doc/git-lesson
feat/product-search

trước khi tạo nhánh mới nên quay về main
lý do nhánh mới sẽ tạo ra trên nhánh hiện tại
flow quay về main => pull code mới => tạo nhánh từ main

git checkout main
git checkout: chuyển sang nhánh

tôi đã code xong nhánh mới nhé

Thêm code mới trên nhánh docs/workflow-2
Thêm dòng 2
Thêm dòng 3
Thêm dòng 4

checkout về main và dùng git merge "tên nhánh muốn merge"