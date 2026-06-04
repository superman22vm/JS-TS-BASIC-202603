//Tình huống: Bạn viết script test tự động kiểm tra API /users/1. Server trả về response, bạn cần kiểm tra toàn bộ dữ liệu: tìm field rỗng, kiểm tra kiểu dữ liệu sai.
// Dữ liệu đầu vào:let apiResponse = { userId: 101, username: "neko_tester", email: null, isActive: "true" } 
// Bug: phải là boolean, không phải string phone: "", role: "admin"};Yêu cầu:Với mỗi key, kiểm tra:Giá trị có phải null hoặc "" (chuỗi rỗng) không?
//  → In cảnh báo trường rỗng.Nếu key là "isActive", kiểm tra typeof có phải "boolean" không? → In cảnh báo sai kiểu.
// Đếm tổng số lỗi tìm được.Trong bài này, 1 lỗi = 1 lần vi phạm 1 quy tắc kiểm tra.

let apiResponse = { userId: 101, 
    username: "neko_tester", 
    email: null, 
    isActive: "true",
    phone: "", 
    role: "admin" 
} 

let keys = Object.keys(apiResponse)
let errorCount = 0;

// console.log(keys);
// console.log(typeof apiResponse.isActive);
for(let i = 0 ; i < keys.length ; i++){ // -1 vì chiều dài là 6 giá trị nhưng mà trong mảng đếm theo kiểu [0,1,2,3,4,5] (array chỉ có index 0 =>5), vì bắt đầu từ 0 nên giá trị cuối chỉ là 5 thôi ==> phải trừ 1
    let key = keys[i]; // lấy từng giá trị trong mảng keys
    let values = apiResponse[key]; // lấy value của từng key trong apiRespones
    let isWarning = values === "" || values === null;//kiểm tra xem có phải chuỗi rỗng không
    if(isWarning){
        console.log("Cảnh báo : Giá trị rỗng ở key " + key)
        errorCount++;
    }
    if( key === "isActive" && typeof values !== "boolean" ){
        console.log(`Cảnh báo  : sai kiểu `);
        errorCount++;
    }
}
console.log(`Tổng số lỗi ${errorCount}`);

//Bài 2 Tình huống: Bạn có danh sách URL cần test. Một số URL bị rỗng (bỏ qua), 
//một số trả về status bình thường, nhưng nếu gặp URL trả về lỗi 500 thì dừng ngay vì server đã sập,
//test tiếp vô nghĩa.Dữ liệu đầu vào:
// let testUrls = [ { url: "/api/users", status: 200 }, { url: "", status: null }, { url: "/api/products", status: 200 }, { url: "/api/orders", status: 500 }, { url: "/api/reviews", status: 200 }];
// Yêu cầu:Nếu url rỗng ("") → dùng continue bỏ qua, in cảnh báo “URL rỗng”.Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay.Nếu bình thường → in kết quả PASS.Đếm tổng URL đã test được (không tính URL bị bỏ qua).
console.log("BÀI TẬP SỐ 2");

//cách 1 dùng for of
let testUrls = [ { url: "/api/users", status: 200 }, 
    { url: "", status: null }, 
    { url: "/api/products", status: 200 }, 
    { url: "/api/orders", status: 500 }, 
    { url: "/api/reviews", status: 200 }];

let urls = 0;

for(let test of testUrls){ //for of xử lý array, ở đây có nghĩa là for từng object trong cái array testUrls
    if(test.url === ""){
        console.log("URL rỗng");
        continue;
    }
    
    if(test.status === 500){
        console.log(`${test.url} Gặp lỗi nghiêm trọng`);
        urls++;
        break;
    }
    console.log(`${test.url} PASSED`);
    urls++;
}
console.log(urls);

// cách 2 dùng for cổ điển
// let testedUrlCount = 0;
// for(let i = 0; i < testUrls.length; i++){
//     let ob = testUrls[i] // cái này có nghĩa là object này { url: '/api/users', status: 200 }
    
//     //Nếu url rỗng ("") → dùng continue bỏ qua, in cảnh báo “URL rỗng”
//     if(ob.url === ""){
//         console.log("Lỗi URL rỗng");
//         testedUrlCount++;
//         continue;
//     }

//     //Nếu status === 500 → in lỗi nghiêm trọng, dùng break dừng ngay
//     if(ob.status === 500){
//         console.log("Lỗi nghiêm trọng ở URL "+ ob.url);
//         testedUrlCount++;
//         break;
//     }

//     //Nếu bình thường → in kết quả PASS
//     console.log("PASS ở url "+ ob.url)
//     testedUrlCount++;
// }
// console.log("Số lần test "+ testedUrlCount)