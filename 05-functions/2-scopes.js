//scope
let envUrl = "staging.luminpdf.com";
let env ="staging";

function testScope(){
    // gọi ở hàm này
    console.log(`envUrl: ${envUrl}`);
    console.log(`env: ${env}`);
}

function testScope2(){
    // cũng có thể gọi ở hàm khác
    console.log(`envUrl 123123123: ${envUrl}`);
}

testScope();
testScope2();

// CÓ MỘT CÁI NGUY HIỂM LÀ nếu cả 2 đều sửa global variable thì sẽ gây ra lỗi

// function scope: là phạm vi của biến được khai báo trong hàm
function testScope3(){
    let envUrl = "staging.luminpdf.com";
    let env ="staging";
    console.log(`envUrl 123123123: ${envUrl}`);
    console.log(`env: ${env}`);
}

testScope3();
console.log(`envUrl: ${envUrl}`);
console.log(`env: ${env}`);

// block scope: là phạm vi của biến được khai báo trong khối code
// nhữn gì xảy ra trong ngoặc nhọn thì sẽ nằm trong đấy
function testScope4(){
    let envUrl = "staging.luminpdf.com";
    let env ="staging";
    console.log(`envUrl 123123123: ${envUrl}`);
    console.log(`env: ${env}`);
}

testScope4();
console.log(`envUrl: ${envUrl}`);
console.log(`env: ${env}`);

// object không phải là scope
// object là một hộp dữ liệu chứa các cặp key-value
const config = {
    envUrl: "staging.luminpdf.com",
    env: "staging",
}
console.log(`envUrl: ${config.envUrl}`);
console.log(`env: ${config.env}`);

let mau ="Đỏ";
function ngoai(){
    // function scope của ngoài - hàm cha
    let size = "Lớn";

    function trong(){
        // function scope của trong - hàm con
        // nhìn thấy biến của ngoài
        let gia = 100000;
        console.log(`mau: ${mau}`);
        console.log(`size: ${size}`);
        console.log(`gia: ${gia}`);
    }
    trong();
    console.log(`mau: ${mau}`);
    console.log(`size: ${size}`);
}
ngoai();
console.log(size); // không nhìn thấy biến size vì nó là block scope
console.log(mau); // không nhìn thấy biến mau vì nó là function scope
console.log(gia); // không nhìn thấy biến gia vì nó là block scope
// trong có thể thấy ngoài nhưng ngoài thì không thể thấy trong