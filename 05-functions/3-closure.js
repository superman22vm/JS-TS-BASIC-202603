//Hình thái 1: return ra 1 hàm khác

function taoMayChao(ten){
    function chao(){
        console.log(`Chào bạn ${ten}`);
    }
    return chao;
}

const chaoNeko = taoMayChao("Neko"); //chaoNeko là 1 hàm được return ra từ hàm taoMayChao
//chaoNeko(); //khi gọi chaoNeko() thì nó sẽ chạy hàm chao() bên trong

//taoMayChao("Neko")
//1. tao bien neko
//2. tao ham chao()
//3. return ham chao()

//chaoNeko()
//lời chao vẫn nhớ tên = Neko

//Hình thái 2: callback chạy trễ sau đó không cần return
//kiểu này hay gặp trong setTimeout(), setInterval(), requestAnimationFrame(), ...

function henGio(){
    let message = "Im still alive"
    setTimeout(function(){
        console.log(message);
    }, 1000);
}

henGio();

//1. tao bien message = "Im still alive"
//2. tao ham setTimeout()
//3. ham setTimeout() chạy sau 1 giây rồi chạy hàm bên trong
//4. hàm bên trong in ra message

//chaySau(function(){
//    console.log("Chạy sau");
//});

//hình thái 3: Dùng object có sẵn scope bên ngoài
const testContext ={
    env : "staging",
    retry :0
}

function taoLoggerKetQua(){
    return function (testName){
        console.log(`${testName} - ${testContext.env} - ${testContext.retry}`);
    };
}

const logger = taoLoggerKetQua();
logger("login smoke");
testContext.env = "local";
logger("login smoke");
// vì sao vẫn là closure
//hàm được return nằm trong hàm cha
//dùng biến testContext từ bên ngoài
//khi chạy nó vẫn truy cập vào testContext
// lưu ý closure không sao chép nguyên object

// Câu hỏi: closure giải quyết vấn đề gì
//Global scope: ai cũng truy cập được, nhưng không phải là private
let soThuTu = 0;

function taoIdTest(){
    soThuTu++;
    return `USER_${soThuTu}`;
}

// console.log(taoIdTest());
// console.log(taoIdTest());

// soThuTu = 9999;
// console.log(taoIdTest());

function mayTaoID(){
    let soThuTu = 0;
    function tangId(){
        soThuTu++;
        return `USER_${soThuTu}`;
    };
    return tangId;
}

const layIdMoi = mayTaoID();
console.log(layIdMoi());
console.log(layIdMoi());

soThuTu = 9999;
//console.log(layIdMoi());

// khi mayTaoId chạy xong => theo quy tắc scope, biến soThuTu sẽ chết
//Nhưng vì chúng ta tạo return tangId, và hàm tangId đang closure(bao đóng)
//biến soThuTu vào balo kí ức => soThuTu bất tử và tiếp tục tăng lên sau mỗi lần gọi

// ứng dụng data factory

function taoNhaMaySinhEmail(domain){
    let dem = 0;
    return function sinhEmail(){
        dem++;
        return `user${dem}@${domain}`;
    };
}

const stagingEmail = taoNhaMaySinhEmail("staging.com");
const prodEmail = taoNhaMaySinhEmail("prod.com");

// console.log(stagingEmail());
// console.log(prodEmail());
// console.log(stagingEmail());

//hình thái 4 trả về object có method dùng chung biến ngoài
// function taoBoDem(tenNut){
//     let dem = 0;
//     return {
//         click(){
//             dem++;
//             console.log(`${tenNut} đã được click ${dem} lần`);
//         },
//         reset(){
//             dem = 0;
//             console.log(`${tenNut} đã được reset`);
//         }
//     };
// }


//bài tập: viết 1 hàm tạo bộ dếm taoBoDem(tenNut) trả về 1 object với 2 method
//click() - tăng số lần click lên 1 và in ra số lần click click
//reset() - reset số lần click về 0 và in ra số lần click reset

// kết quả mong muốn:
//const nutLogin = taoBoDem("login");

function taoBoDem(tenNut){
    let i = 0
    return {
        click() {
            i++;
            console.log(`${tenNut} đã được click ${i} lần`);
        },
        reset() {
            i=0
            console.log(`${tenNut} đã được reset`);
        }
    }
}

const nutLogin = taoBoDem("Nút login");

nutLogin.click();
nutLogin.click();
nutLogin.click();

nutLogin.reset();

nutLogin.click();