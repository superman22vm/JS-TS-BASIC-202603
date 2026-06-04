//Tình huống: Bạn đang viết một bản kiểm tra trước khi release. Hệ thống trả về dữ liệu thô từ UI và config. Bạn cần xử lý thành báo cáo rõ ràng.
let rawProjectName = " Neko CRM ";
let rawEnvName = " ";
let rawPassRate = "82";
let rawHasReport = "true";
let rawCriticalMessage = " ";
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"

//Dùng .trim() để làm sạch rawProjectName và rawEnvName.

let proJectName = rawProjectName.trim();
let envName = rawEnvName.trim();

//Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". 
//Nếu không rỗng -> dùng chính giá trị đã làm sạch.
if(envName === ""){
    envName = "Development";
}else{
    envName = rawEnvName;
}
console.log(envName);

//Ép rawPassRate sang Number.
//Ép rawHasReport sang Boolean đúng cách.
let passRate = Number(rawPassRate);
let hasReport = rawHasReport === "true";

// Tạo hasCriticalBug theo quy tắc:
// nếu message là null hoặc undefined -> false
// nếu sau trim() là rỗng -> false
// ngược lại -> true

if (rawCriticalMessage.trim() == ""){
    hasCriticalBug = false;
}else if (rawCriticalMessage == null && rawCriticalMessage == undefined){
    hasCriticalBug = false;
}else{
    hasCriticalBug = true;
}

let isCriticalBug = hasCriticalBug ? "Có bug nghiêm trọng" : "Không có bug nghiêm trọng";

// Dùng if / else if để xếp hạng:
// >= 95 -> "EXCELLENT"
// >= 80 -> "GOOD"
// >= 60 -> "NEEDS IMPROVEMENT"
// còn lại -> "CRITICAL"

let grade;
if (passRate >=95){
    grade = "EXCELLENT";
}else if(passRate >= 80){
    grade = "GOOD";
}else if(passRate >= 60){
    grade = "NEEDS IMPROVEMENT";
}else{
    grade = "CRITICAL";
}

// Dùng switch/case để gán tên engine cho browserUsed:
// chrome -> "Chromium"
// edge -> "Chromium"
// firefox -> "Gecko"
// safari -> "WebKit"
// Nếu không khớp -> "Unknown"

let engine;
switch(browserUsed){
    case 'chrome':
        engine = "Chromium";
        break;
    case 'edge':
        engine = "Chromium";
        break;
    case 'firefox':
        engine = "Gecko";
        break;
    case 'safari':
        engine = "WebKit";
        break;
    default:
        engine = "Unknown";
}

// Dùng toán tử 3 ngôi để tạo message cho report:
// nếu hasReport là true -> "Có report"
// ngược lại -> "Chưa có report"

let isReport = hasReport ? "Có report" : "Chưa có report";

// Tạo isReadyToRelease theo quy tắc:
// nếu pass rate dưới 80 -> false
// nếu có critical bug -> false
// nếu chưa có report -> false
// còn lại -> true

let isReadyToRelease = passRate >=80 && hasCriticalBug == false && hasReport == true;
let ready = isReadyToRelease ? "YES" : "NO";
if(isReadyToRelease){
    console.log("Project: Neko CRM");
    console.log(`Environment: ${envName}`);
    console.log(`Browser: ${browserUsed}`);
    console.log(`Engine: ${engine}`);
    console.log(`Pass Rate: ${passRate.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
    console.log(`Report: ${isReport}`);
    console.log("Critical Bug: " + isCriticalBug);
    console.log("Ready: " + ready);
}