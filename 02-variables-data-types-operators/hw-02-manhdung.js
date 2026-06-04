// Bài 1 : Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:
// Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): " 800.000 đ "

// Yêu cầu: Viết code để:
// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100 

let price = " 1.000.000 đ ";
let discount = 20;
let priceInNumber =Number(price.replaceAll(".","").replace("đ","").trim());
// console.log (priceInNumber); // In ra 1000000
// console.log(typeof priceInNumber); // In ra "number"
// console.log(priceInNumber * (100 -discount) / 100);

// Bài 2 : 
// "Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).
// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh."														
// Dữ liệu đầu vào														
// "let tenSanPham = "   macbook pro m3   ";
// let giaGoc = "Price: 30,000,000 vnđ";
// let soLuong = "Sl: 2 máy";
// let maGiamGia = "DISCOUNT CODE: 10% OFF";														
// "Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:												
														
// HÓA ĐƠN THANH TOÁN - ID: #0002														
// Sản phẩm: MACBOOK PRO M3														
// Đơn giá: 30000000														
// Số lượng: 2														
// Tổng tiền (Gốc): 60000000														
// Giảm giá: 10%														
// THÀNH TIỀN: 54.000.000 VNĐ	

// Bài 2 : 
// "Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).
// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh."														
// Dữ liệu đầu vào														
// "let tenSanPham = "   macbook pro m3   ";
// let giaGoc = "Price: 30,000,000 vnđ";
// let soLuong = "Sl: 2 máy";
// let maGiamGia = "DISCOUNT CODE: 10% OFF";														
// "Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:												
														
// HÓA ĐƠN THANH TOÁN - ID: #0002														
// Sản phẩm: MACBOOK PRO M3														
// Đơn giá: 30000000														
// Số lượng: 2														
// Tổng tiền (Gốc): 60000000														
// Giảm giá: 10%														
// THÀNH TIỀN: 54.000.000 VNĐ	

let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF" 

//In ra hoá đơn thanh toán
console.log("HÓA ĐƠN THANH TOÁN - ID: #0002")

// in ra sản phẩm
console.log("Sản phẩm:" + tenSanPham.trim().toUpperCase());


let start = giaGoc.indexOf(":");
let end = giaGoc.indexOf("vnđ");
let gia = Number(giaGoc.slice(start + 2, end).replaceAll(",",""))

// in ra đơn giá
console.log(`Đơn giá: ${gia}`)

// in ra số lượng
let quantityStart = soLuong.indexOf(":");
let quantityEnd = soLuong.indexOf("máy");
console.log(`quantityEnd: ${quantityEnd}`);
let quantityFinal = soLuong.slice(quantityStart + 2, quantityEnd).trim();
console.log(`Số lượng: ${quantityFinal}`);

// in ra tổng tiền gốc
let totalPrice = gia * quantityFinal;
console.log(`Tổng tiền (Gốc): ${totalPrice}`);

//in ra giảm giá
let discountStart = maGiamGia.indexOf(":");
let discountEnd = maGiamGia.indexOf("%");
let discountPercent = Number(maGiamGia.slice(discountStart + 2, discountEnd));
console.log(`Giảm giá: ${discountPercent}%`);

// in ra thành tiền
let finalPrice = totalPrice * (100 - discountPercent) / 100;
finalPriceString = finalPrice.toString()

// Cách 1: Dùng slice (cách cũ)
// finalPriceFormatted =  finalPriceString.slice(0,-6)+"." + finalPriceString.slice(-6,-3) + "." + finalPriceString.slice(-3) + " VNĐ";

// Cách 2: Dùng toLocaleString() (cách mới - dễ hơn)
finalPriceFormatted = finalPrice.toLocaleString('vi-VN') + " VNĐ";
console.log(`THÀNH TIỀN: ${finalPriceFormatted}`);