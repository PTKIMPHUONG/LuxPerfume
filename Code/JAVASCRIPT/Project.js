// CHẠY HÌNH ẢNH QUẢNG CÁO CHUYỂN ĐỘNG CHO HOMEPAGE
document.addEventListener("DOMContentLoaded", function() {
  // Lấy tất cả các hình ảnh trong phần có lớp là "slider"
  const images = document.querySelectorAll(".slider img");

  // Biến để theo dõi vị trí hiện tại của hình ảnh đang được hiển thị
  let currentImage = 0;

  // Hàm hiển thị hình ảnh dựa trên chỉ số (index) được cung cấp
  function showImage(index) {
      // Ẩn hình ảnh hiện tại bằng cách đặt "display" thành "none"
      images[currentImage].style.display = "none";
      // Hiển thị hình ảnh mới dựa trên chỉ số mới
      images[index].style.display = "block";
      // Cập nhật chỉ số hình ảnh hiện tại
      currentImage = index;
  }

  // Hàm để chuyển đến hình ảnh tiếp theo
  function nextImage() {
      // Tính toán chỉ số của hình ảnh tiếp theo trong vòng lặp
      const nextIndex = (currentImage + 1) % images.length;
      // Hiển thị hình ảnh tiếp theo
      showImage(nextIndex);
  }

  // Thiết lập hàm nextImage để chạy tự động mỗi 3 giây
  setInterval(nextImage, 3000); // Thay đổi hình ảnh mỗi 3 giây
});



//KIỂM TRA KHÁCH HÀNG ĐĂNG KÝ TÀI KHOẢN THÀNH VIÊN
function registerSuccess() {
  // Lấy giá trị từ các trường input
  var newPassword = document.getElementById("new-password").value;
  var rePassword = document.getElementById("re-password").value;
  // Kiểm tra xem mật khẩu và mật khẩu nhập lại trùng khớp không
  if(newPassword !=rePassword)
  {
      alert("Mật khẩu không khớp. Vui lòng nhập lại!");
      return false;
  }
  alert("Đăng ký thành công!"); //Hiện thông báo đã đăng ký thành công
  window.location.href = "Login.html"
  return false; // Ngăn form được gửi đi sau khi hiển thị thông báo (để tránh khách nhập lại nhiều lần)
}


//HIỂN THỊ THÔNG BÁO KHI NGƯỜI DÙNG ĐĂNG NHẬP THÀNH CÔNG
function loginSuccess() {
  alert("Đăng nhập thành công!");
  //Chuyển hướng đến trang chủ sau khi đã đăng nhập thành công
  window.location.href = "HomePage.html"
  return false;
}