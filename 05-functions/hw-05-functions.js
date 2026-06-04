// BÀI 1
//console.log("==========BÀI 1==========");
const loginOptions = {
    defaultRole: "guest",
    allowedRoles: ["admin", "tester", "viewer", "guest"],
    minPasswordLength: 8
};

const loginTestData = [
    {
        name: "Case 1 - Hợp lệ cơ bản",
        formInput: {
            username: "  Neko_Admin  ",
            password: "  12345678  ",
            role: " tester ",
            rememberMe: "yes",
            device: "  chrome-win11  "
        }
    },
    {
        name: "Case 2 - Role rỗng, phải dùng defaultRole",
        formInput: {
            username: "  guest_user  ",
            password: "  abcdefgh  ",
            role: "   ",
            rememberMe: "no",
            device: " firefox "
        }
    },
    {
        name: "Case 3 - Username rỗng",
        formInput: {
            username: "    ",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 4 - Username có khoảng trắng ở giữa",
        formInput: {
            username: "neko admin",
            password: "12345678",
            role: "tester",
            rememberMe: "yes",
            device: "chrome"
        }
    },
    {
        name: "Case 5 - Password quá ngắn",
        formInput: {
            username: "valid_user",
            password: "123",
            role: "tester",
            rememberMe: true,
            device: "chrome"
        }
    },
    {
        name: "Case 6 - Role không hợp lệ",
        formInput: {
            username: "valid_user",
            password: "12345678",
            role: "manager",
            rememberMe: "on",
            device: "chrome"
        }
    },
    {
        name: "Case 7 - rememberMe là boolean true",
        formInput: {
            username: "admin01",
            password: "abcdefgh",
            role: "admin",
            rememberMe: true,
            device: "edge"
        }
    },
    {
        name: "Case 8 - rememberMe là chuỗi lạ",
        formInput: {
            username: "viewer01",
            password: "abcdefgh",
            role: "viewer",
            rememberMe: "maybe",
            device: "safari"
        }
    }
];

// Khi làm với bộ data test này:

// - `formInput` nhận `loginTestData[i].formInput`
// - `options` nhận `loginOptions`
// - Ví dụ gọi hàm: `taoPayloadDangNhap(loginTestData[0].formInput, loginOptions)`

// ### Yêu cầu
// 1. Dùng object destructuring để lấy dữ liệu từ `formInput`.
// 2. Dùng object destructuring + default value để lấy dữ liệu từ `options`.
//    - Nếu `options.defaultRole` không có thì biến `defaultRole` nhận `"guest"`.
//    - Nếu `options.minPasswordLength` không có thì biến `minPasswordLength` nhận `8`.
//    - `"guest"` và `8` lấy theo `loginOptions` đã cho ở đầu bài, không phải tự nghĩ thêm.
//    - `allowedRoles` lấy thẳng từ `options.allowedRoles`, không tự thêm giá trị khác.
//    - Trong bộ data test hiện tại, `options` đã có đủ field nên 2 giá trị mặc định này có thể không chạy; chúng được giữ lại để bám đúng YC2.


// 3. Chuẩn hóa dữ liệu:
//    - `username` -> trim, chuyển về lowercase
//    - `password` -> trim
//    - `role` -> trim, lowercase
//    - `device` -> trim
//    - `rememberMe` -> chuyển về boolean
// 4. Kiểm tra hợp lệ:
//    - `username` không được rỗng
//    - `username` không được chứa khoảng trắng ở giữa
//    - `password` phải dài ít nhất `minPasswordLength`
//    - `role` phải nằm trong `allowedRoles`
// 5. Không được sửa trực tiếp `formInput` hoặc `options`.
// 6. Phải trả về object theo dạng:

// ```javascript
// {
//     isValid: true,
//     payload: {
//         username: "neko_admin",
//         password: "12345678",
//         role: "tester",
//         rememberMe: true,
//         device: "chrome-win11"
//     },
//     errors: []
// }
// ```

function taoPayloadDangNhap(formInput, options) {
    const { username, password, role, rememberMe, device } = formInput;
    const { defaultRole = "guest", allowedRoles, minPasswordLength = 8 } = options;

    const normalName = username.trim().toLowerCase();
    const normalPassword = password.trim();
    let normalRole = role.trim().toLowerCase();
    if (normalRole === "") {
        normalRole = defaultRole;
    }
    
    if(rememberMe === "yes" || rememberMe === "on" || rememberMe === true){
        rememberMe = true;
    }else{
        rememberMe = false;
    }
    const normalDevice = device.trim();

    const errors = [];

    if (normalName === "") {
        errors.push("Username không được rỗng");
    }
    if (normalName.includes(" ")) {
        errors.push("Username không được chứa khoảng trắng ở giữa");
    }
    if (normalPassword.length < minPasswordLength) {
        errors.push(`Password phải dài ít nhất ${minPasswordLength} ký tự`);
    }
    if (!allowedRoles.includes(normalRole)) {
        errors.push("Role không hợp lệ");
    }

    const result = {
        isValid: errors.length === 0,
        payload: {
            username: normalName,
            password: normalPassword,
            role: normalRole,
            rememberMe: rememberMe,
            device: normalDevice,
        },
        errors,
    };

    return result;
}

// for(let i = 0; i < loginTestData.length; i++){
//     console.log(`${loginTestData[i].name}:`);
//     const result = taoPayloadDangNhap(loginTestData[i].formInput, loginOptions);
//     console.log(result);
// }

//bài 2
//console.log("==========BÀI 2==========");
const testCaseConfig = {
    minPriority: 1,
    maxPriority: 5
};

const rawRows = [
    [" TC_LOGIN_001 ", "login", "1", " smoke ", "active"],
    ["TC_LOGIN_001", "login", "2", "regression", "active"],
    ["TC_SEARCH_002", "search", "0", "smoke", "active"],
    ["TC_CART_003", "", "3", "checkout", "inactive"],
    ["TC_PAY_004", "payment", "2", " critical ", "ACTIVE"],
    ["TC_ORDER_005", "order", "5", "sanity", "inactive"],
    ["TC_ORDER_006", " order ", "4", " SANITY ", "active"],
    ["LOGIN_007", "login", "2", "smoke", "active"],
    ["TC_USER_008", "user", "6", "regression", "active"],
    ["TC_API_009", "api", "3", "api", "disabled"],
    ["TC_API_010", "api", "2", " api ", "active"],
    ["TC_API_010", "api", "2", " api ", "active"],
    ["TC_REPORT_011", "report", "1", " nightly ", "INACTIVE"],
    [" TC_EMPTY_012 ", "   ", "2", "misc", "active"]
];

// ### Yêu cầu

// 1. Dùng array destructuring để bóc từng cột.
// 2. Chuẩn hóa:
//    - `id` -> trim, uppercase
//    - `module` -> trim, lowercase
//    - `priority` -> đổi sang number
//    - `tag` -> trim, lowercase
//    - `status` -> trim, lowercase
// 3. Test case hợp lệ khi:
//    - `id` bắt đầu bằng `TC_`
//    - `module` không rỗng
//    - `priority` nằm trong `1` đến `5`
//    - `status` chỉ là `active` hoặc `inactive`
//    - không bị trùng `id`
// 4. Khi gọi `chuanHoaDanhSachTest(rawRows, testCaseConfig)`, hàm phải `return` object có dạng:

// ```javascript
// {
//     validCases: [...],
//     invalidCases: [...],
//     summary: {
//         total: rawRows.length,
//         valid: ...,
//         invalid: ...,
//         duplicateIds: ...
//     }
// }
// ```

// ### Điều bắt buộc

// 1. Dùng `for` để duyệt `rawRows`.
// 2. Không dùng `map`, `filter`, `find` cho phần duyệt chính của bài này.
// 3. Không được sửa trực tiếp `rawRows`.
//    Nghĩa là không gán ngược vào từng dòng cũ trong mảng này, mà chỉ đọc dữ liệu cũ rồi tạo object mới để đưa vào kết quả trả về.
// 4. Mỗi test case hợp lệ phải được build thành object mới:

// ```javascript
// {
//     id: "TC_LOGIN_001",
//     module: "login",
//     priority: 1,
//     tag: "smoke",
//     status: "active"
// }
// ```
let invalids = 0;

let valids =0;

let validCases =[];
let invalidCases =[];

let duplicateIds =[];

let seenIds =[];

function chuanHoaDanhSachTest(rawRows, testCaseConfig){
    for(const row of rawRows){
        const [id, module, priority, tag, status] = row;
        // 2. Chuẩn hóa:
        //    - `id` -> trim, uppercase
        let idNormalized = id.trim().toUpperCase();
        //    - `module` -> trim, lowercase
        let moduleNormalized = module.trim().toLowerCase();
        //    - `priority` -> đổi sang number
        let priorityNormalized = Number(priority);
        //    - `tag` -> trim, lowercase
        let tagNormalized = tag.trim().toLowerCase();
        //    - `status` -> trim, lowercase
        let statusNormalized = status.trim().toLowerCase();

        // 3. Test case hợp lệ khi:
        //  - `id` bắt đầu bằng `TC_`
        if(idNormalized.startsWith("TC_") && 
        moduleNormalized !== "" && 
        priorityNormalized >= testCaseConfig.minPriority && 
        priorityNormalized <= testCaseConfig.maxPriority && 
        (statusNormalized === "active" || statusNormalized === "inactive") &&
        !seenIds.includes(idNormalized)){
            seenIds.push(idNormalized);
            validCases.push({
                id: idNormalized,
                module: moduleNormalized,
                priority: priorityNormalized,
                tag: tagNormalized,
                status: statusNormalized
            });
        }else{
            //giải thích về dòng if phía dưới
            //trước đó nếu thấy id mà trước đó chưa thấy thì sẽ push vào mảng seenIds
            //ở dòng if dưới này thì check nếu id đã có tồn tại ở seenIds
            //==> do là trc đó ID đó đã được thấy và cho vô seenIds thì nếu thấy lại lần nữa
            // có nghĩa là id đó đã bị trùng
            if(seenIds.includes(idNormalized)){
                duplicateIds.push(idNormalized);
            }
            invalidCases.push({
                id: idNormalized,
                module: moduleNormalized,
                priority: priorityNormalized,
                tag: tagNormalized,
                status: statusNormalized
            });
        }
    }
    return {
        validCases: validCases,
        invalidCases: invalidCases,
        summary: {
            total: rawRows.length,
            valid: validCases.length,
            invalid: invalidCases.length,
            duplicateIds: duplicateIds,
        }
    };
}

//console.log(chuanHoaDanhSachTest(rawRows, testCaseConfig));



//## Bài 3: Merge config chạy test và bắt lỗi cấu hình

// Viết 2 hàm:

// ```javascript
// function taoCauHinhCuoi(defaultConfig, envConfig, overrideConfig)
// function kiemTraCauHinh(config)
// ```

//### Bộ data test dùng để làm bài

//```javascript
const configCase1 = {
    defaultConfig: {
        env: "local",
        baseUrl: "http://localhost:3000",
        timeout: 30000,
        retries: 0,
        headed: true,
        browsers: ["chromium"],
        reporter: {
            type: "html",
            output: "reports/default"
        }
    },
    envConfig: {
        env: "staging",
        baseUrl: "https://staging.neko.dev",
        retries: 1,
        browsers: ["chromium", "firefox"]
    },
    overrideConfig: {
        timeout: 500,
        headed: true,
        browsers: [" Chromium ", "chromium", "webkit"],
        reporter: {
            type: "html",
            output: "reports/custom"
        }
    }
};

const configCase2 = {
    defaultConfig: {
        env: "ci",
        baseUrl: "https://ci.neko.dev",
        timeout: 10000,
        retries: 2,
        headed: true,
        browsers: ["chromium"],
        reporter: {
            type: "html",
            output: "reports/ci"
        }
    },
    envConfig: {},
    overrideConfig: {}
};

const configCase3 = {
    defaultConfig: {
        env: "staging",
        baseUrl: "ftp://bad-url",
        timeout: 2000,
        retries: 1,
        headed: false,
        browsers: ["firefox"],
        reporter: {
            type: "json",
            output: "reports/json"
        }
    },
    envConfig: {},
    overrideConfig: {}
};

const configCase4 = {
    defaultConfig: {
        env: "test",
        baseUrl: "https://prod.neko.dev",
        timeout: 5000,
        retries: 1,
        headed: false,
        browsers: ["webkit"],
        reporter: {
            type: "html",
            output: "reports/test"
        }
    },
    envConfig: {},
    overrideConfig: {}
};

const configCase5 = {
    defaultConfig: {
        env: "local",
        baseUrl: "http://localhost:3000",
        timeout: 30000,
        retries: -1,
        headed: false,
        browsers: [],
        reporter: {
            type: "",
            output: ""
        }
    },
    envConfig: {},
    overrideConfig: {}
};
// ```

// Khi làm với bộ data test này:

// - `defaultConfig`, `envConfig`, `overrideConfig` lấy từ từng `configCase`
// - `config` truyền vào `kiemTraCauHinh(config)` là object cuối sau khi đã merge
// - Ví dụ với `configCase1`:

// ```javascript
// const finalConfig = taoCauHinhCuoi(
//     configCase1.defaultConfig,
//     configCase1.envConfig,
//     configCase1.overrideConfig
// );

// kiemTraCauHinh(finalConfig);
// ```

// ### Yêu cầu

// 1. Dùng spread để merge config.
// 2. Thứ tự merge phải là:

// ```javascript
// defaultConfig -> envConfig -> overrideConfig
// ```

// 3. Trong `kiemTraCauHinh(config)`, với mảng `browsers`:
//    - dùng `map` để `trim` và đưa từng browser về lowercase
//    - dùng `filter` để lấy ra browser bị trùng
//    - dùng `find` để lấy browser trùng đầu tiên nếu có
// 4. Hàm `kiemTraCauHinh()` phải trả về:

// ```javascript
// {
//     errors: [],
//     warnings: []
// }
// ```

// - Không bắt buộc đúng từng câu chữ của `errors` và `warnings`.
// - Chỉ cần phân biệt đúng lỗi nào đưa vào `errors`, cảnh báo nào đưa vào `warnings`.
// - Có thể dùng câu ngắn gọn, dễ hiểu.

// ### Luật kiểm tra

// - `baseUrl` phải bắt đầu bằng `http://` hoặc `https://`
// - `timeout` phải từ `1000` trở lên
// - `retries` không được âm
// - `browsers` không được rỗng
// - không được có browser trùng sau khi đã `trim` và đưa về lowercase
// - nếu `env === "ci"` mà `headed === true` -> warning
// - nếu `baseUrl` chứa `"prod"` nhưng `env !== "production"` -> warning

// ### Điều bắt buộc

// 1. Không được sửa trực tiếp bất kỳ config đầu vào nào.
// 2. Dùng object destructuring ít nhất 1 lần.
// 3. Dùng `map`, `filter`, `find` ở phần xử lý `browsers`.		

// Merge 3 config: default -> env -> override (cái sau ghi đè cái trước)
// Phải truyền 3 tham số riêng, KHÔNG truyền cả configCase1 (sẽ không có baseUrl ở top level)
function taoCauHinhCuoi(defaultConfig, envConfig, overrideConfig){
    const finalConfig = {...defaultConfig, ...envConfig, ...overrideConfig};
    return finalConfig;
}

function kiemTraCauHinh(config){
    // Destructuring: lấy field cần kiểm tra từ config (không sửa config gốc)
    const {baseUrl, timeout, retries, browsers, reporter, env, headed} = config;
    const errors= [];
    const warnings= [];

    // --- errors: vi phạm luật bắt buộc ---
    if(!baseUrl.startsWith("http://") && !baseUrl.startsWith("https://")){
        errors.push("baseUrl phải bắt đầu bằng http:// hoặc https://");
    }
    if(timeout < 1000){
        errors.push("timeout phải từ 1000 trở lên");
    }
    if(retries < 0){
        errors.push("retries không được âm");
    }
    if(browsers.length===0){
        errors.push("browsers không được để rỗng");
    }

    // --- xử lý browsers: map -> filter -> find ---
    // map: trim + lowercase, tạo mảng mới (không đụng browsers gốc)
    const normalizedBrowsers = browsers.map(browser => browser.trim().toLowerCase());

    // filter: lọc ra browser bị trùng
    // indexOf(browser) = vị trí ĐẦU TIÊN mà browser xuất hiện trong mảng
    // index = vị trí HIỆN TẠI đang duyệt
    //
    // Ví dụ: ["chrome", "firefox", "chrome"]
    //   index 0 "chrome"  -> indexOf = 0, index = 0 -> 0 === 0 -> KHÔNG trùng (lần đầu)
    //   index 1 "firefox" -> indexOf = 1, index = 1 -> 1 === 1 -> KHÔNG trùng
    //   index 2 "chrome"  -> indexOf = 0, index = 2 -> 0 !== 2 -> TRÙNG (chrome đã có ở index 0)
    //
    // indexOf !== index => phần tử này là bản SAO CHÉP, không phải lần xuất hiện đầu tiên
    const duplicates = normalizedBrowsers.filter((browser, index) => {
        return normalizedBrowsers.indexOf(browser) !== index;
    });

    // find: lấy browser trùng đầu tiên trong mảng duplicates (undefined nếu không trùng)
    const firstDuplicate = duplicates.find(browser => browser);
    if(firstDuplicate){
        errors.push(`browser trùng: ${firstDuplicate}`);
    }

    // --- warnings: không sai luật cứng nhưng nên cảnh báo ---
    if(env === "ci" && headed){
        warnings.push("Warning");
    }
    if(baseUrl.includes("prod") && env !== "production"){
        warnings.push("Warning");
    }

    return {
        errors: errors,
        warnings: warnings
    };
}

// Gọi đúng: truyền 3 phần của configCase1, không truyền cả object configCase1
const finalConfig = taoCauHinhCuoi(
    configCase1.defaultConfig,
    configCase1.envConfig,
    configCase1.overrideConfig
);
console.log(kiemTraCauHinh(finalConfig));

const browsers = ["chromium", "chromium", "webkit"];

console.log(`HÂHHAHHAHAHAHH ------ ${browsers.indexOf("chromium")}`);