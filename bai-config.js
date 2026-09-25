/* =====================================================================
   bai-config.js — CẤU HÌNH DÙNG CHUNG CHO TẤT CẢ CÁC BÀI HỌC
   =====================================================================
   File này là NƠI DUY NHẤT cần sửa mỗi khi thêm một bài học mới.
   KHÔNG cần sửa AVAILABLE_BAI trong từng file bai1.html, bai2.html, ...
   nữa — tất cả các file đều đọc dữ liệu từ đây (window.BAI_CONFIG).

   Cách thêm bài học mới (vd: thêm bài 2):
     1. Tạo file bai2.html mới (copy từ file bài gần nhất, sửa
        CURRENT_BAI = 2 và toàn bộ nội dung LESSON_DATA).
     2. Thêm số 2 vào mảng "available" bên dưới.
     3. Xong — KHÔNG cần đụng vào bai1.html nữa.

   "total": tổng số bài của cả giáo trình New HSK 2.
   ⚠️ TODO: giá trị 15 dưới đây là ước lượng tạm thời — anh xác nhận lại
   số bài thật của giáo trình HSK2 rồi sửa số này cho đúng.
   ===================================================================== */
window.BAI_CONFIG = {
  total: 15,
  available: [1, 2]
};