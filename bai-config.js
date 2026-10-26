/* =====================================================================
   bai-config.js — CẤU HÌNH DÙNG CHUNG CHO TẤT CẢ CÁC BÀI HỌC
   =====================================================================
   File này là NƠI DUY NHẤT cần sửa mỗi khi thêm một bài học mới.
   KHÔNG cần sửa AVAILABLE_BAI trong từng file bai1.html, bai2.html, ...
   nữa — tất cả các file đều đọc dữ liệu từ đây (window.BAI_CONFIG).

   Cách thêm bài học mới (vd: thêm bài 5):
     1. Tạo file bai5.html mới (copy từ file bài gần nhất, sửa
        CURRENT_BAI = 5 và toàn bộ nội dung LESSON_DATA).
     2. Thêm số 5 vào mảng "available" bên dưới.
     3. Xong — KHÔNG cần đụng vào bai1.html, bai2.html, bai3.html,
        bai4.html nữa.

   "total": tổng số bài của cả giáo trình (hiện tại: 18 bài). Dùng để
   sidebar hiển thị đủ số ô bài học (kể cả các bài khoá/chưa làm) từ
   1 đến total. Nếu giáo trình có nhiều/ít hơn 18 bài, sửa số này.
   ===================================================================== */
window.BAI_CONFIG = {
  total: 18,
  available: [1, 3, 4]
};
