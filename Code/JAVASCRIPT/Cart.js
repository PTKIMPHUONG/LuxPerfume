//NÚT GIẢM SỐ LƯỢNG SẢN PHẨM
function decreaseQuantity() {
    // Lấy thẻ input có lớp 'quantity'
    var quantityInput = document.querySelector('.quantity');
    // Chuyển giá trị hiện tại của thẻ input thành số nguyên
    var currentQuantity = parseInt(quantityInput.value);
    // Kiểm tra nếu số lượng hiện tại lớn hơn 1
    if (currentQuantity > 1) {
      // Giảm giá trị của thẻ input đi 1
      quantityInput.value = currentQuantity - 1;
    }
  }
  
  //HÀM TĂNG SỐ LƯỢNG SẢN PHẨM
  function increaseQuantity() {
    // Lấy thẻ input có lớp 'quantity'
    var quantityInput = document.querySelector('.quantity');
    // Chuyển giá trị hiện tại của thẻ input thành số nguyên
    var currentQuantity = parseInt(quantityInput.value);
     // Tăng giá trị của thẻ input đi 1
     quantityInput.value = currentQuantity + 1;
  }

//HÀM HIỆN CHI TIẾT SẢN PHẨM
function showDetails(element) {
    // Tìm phần nội dung trong phần tử được truyền vào
    var content = element.querySelector('div');
    // Đặt kiểu hiển thị thành 'block' để hiển thị nội dung
    content.style.display = 'block';
  }
  
  //HÀM ẨN CHI TIẾT SẢN PHẨM
  function hideDetails(element) {
    // Tìm phần nội dung trong phần tử được truyền vào
    var content = element.querySelector('div');
    // Đặt kiểu hiển thị thành 'none' để ẩn nội dung
    content.style.display = 'none';
  }

// Thiết lập biến $ bằng thư viện jQuery mà đã được nạp và quản lý trên đối tượng window
const $ = window.jQuery;

//XỬ LÝ SỰ KIỆN GIỎ HÀNG
const buyBtns = document.querySelectorAll('.js-buy-item'); //Tìm và gán các đối tượng cho các biến thông qua class
const modal = document.querySelector('.js-modal');
const modalclose = document.querySelector('.js-modal-close'); 
const modalStop = document.querySelector('.js-modal-containter');
const closeCartBtn = document.querySelector('.close-cart'); // Thêm nút close-cart

//HIỂN THỊ GIỎ HÀNG
function showModal() {
    modal.classList.add('open');
}

//ẨN GIỎ HÀNG
function hideBuyItem() {
    modal.classList.remove('open');
}

//ĐÓNG GIỎ HÀNG
function closeCart() {
    modal.classList.remove('open');
}

// Lặp qua tất cả nút "Mua" và thêm sự kiện hiển thị giỏ hàng khi được nhấp.
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal);
}

// Sử dụng jQuery để đơn giản hóa việc thêm sự kiện
$(modalclose).click(hideBuyItem);
$(modal).click(hideBuyItem);
$(modalStop).click(function(event) {
    event.stopPropagation();
});
$(closeCartBtn).click(closeCart);

//XỬ LÝ CÁC SỰ KIỆN TẠI GIỎ HÀNG

// Khởi tạo một mảng cart để lưu trữ thông tin sản phẩm đã chọn
var cart = new Array();

// Hàm Buy được gọi khi người dùng nhấp vào nút "Thêm vào giỏ hàng"
function Buy(button) {
    // Tìm phần tử sản phẩm chứa nút "Mua" đã được nhấp.
    var productContainer = button.closest(".product-container");

    // Kiểm tra xem sản phẩm có tồn tại hay không.
    if (productContainer) {
        // Thu thập thông tin về sản phẩm.
        var hinh = productContainer.getElementsByTagName("img")[0]; // Lấy hình ảnh sản phẩm.
        var ten = productContainer.querySelector(".product-title").textContent; // Lấy tên sản phẩm.
        var gia = parseFloat(productContainer.querySelector(".product-price").textContent.replace('$', '')); // Lấy giá sản phẩm và chuyển đổi thành số thực.
        var soLuong = parseInt(productContainer.querySelector(".quantity").value); // Lấy số lượng sản phẩm.

        // Tạo một mảng sp chứa thông tin sản phẩm và thêm vào giỏ hàng.
        var sp = new Array(hinh, ten, gia, soLuong);
        cart.push(sp); // Thêm sản phẩm vào giỏ hàng.
        alert("Sản phẩm đã được thêm vào giỏ hàng."); // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng.
        document.getElementById("countCart").innerHTML = cart.length; // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện.
        showmycart(); // Gọi hàm để hiển thị giỏ hàng mới.
    } else {
        console.log("Không thể tìm thấy phần tử sản phẩm."); // Ghi log nếu không tìm thấy sản phẩm.
    }
}

//HÀM KHI NGƯỜI DÙNG BẤM NÚT XÓA 1 MỤC ĐÃ CHỌN TRONG GIỎ HÀNG
function deleteItems(index) {
    cart.splice(index, 1); // Xóa một mục trong giỏ hàng dựa trên chỉ số index.
    document.getElementById("countCart").innerHTML = cart.length; // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện.
    showmycart(); // Gọi hàm để hiển thị giỏ hàng mới sau khi xóa mục.
}

//HÀM GỌI KHI NGƯỜI DÙNG CẬP NHẬP THÊM GIỎ HÀNG
function showmycart() {
    var tong = 0; // Biến để tính tổng giá trị đơn hàng.
    var ttgh = ""; // Biến để lưu trữ nội dung giỏ hàng.

    // Lặp qua các mục trong giỏ hàng và tính tổng giá trị đơn hàng.
    for (i = 0; i < cart.length; i++) {
        var tt = cart[i][2] * cart[i][3]; // Tính tổng giá trị của từng mục sản phẩm.
        var stt = i + 1; // Số thứ tự của mục sản phẩm.
        tong += tt; // Cộng vào tổng giá trị đơn hàng.
        
        // Tạo HTML để hiển thị thông tin mục sản phẩm trong giỏ hàng.
        ttgh +=
            '<tr>' +
            '<td>' + stt + '</td>' +
            '<td><img src="' + cart[i][0].src + '" alt="" width = "20%"></td>' +
            '<td>' + cart[i][1] + '</td>' +
            '<td>' + cart[i][3] + '</td>' +
            '<td>$' + cart[i][2] + '</td>' +
            '<td><button style="border: none;width: 50px;height: 50px;border-radius: 5px; background-color: rgb(29, 28, 28); color: white" onclick="deleteItems(' + i + ')">XÓA</button></td>' +
            '</tr>';
    }
    
    // Thêm tổng giá trị đơn hàng vào nội dung giỏ hàng.
    ttgh +=
        '<tr>' +
        '<th colspan="4">TỔNG ĐƠN HÀNG</th>' +
        '<th colspan="2">' +
        '<div>$' + tong + '</div>' +
        '</th>' +
        '</tr></table>';
    
    // Cập nhật nội dung giỏ hàng trên giao diện.
    document.getElementById("mycart").innerHTML = ttgh;
}
