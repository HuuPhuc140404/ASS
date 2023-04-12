const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

const products = document.querySelectorAll('#listproducts .item')

products.forEach(product => {
  const detail = product.querySelector('.product-detail')

  product.addEventListener('mouseover', function (event) {
    detail.style.display = 'block'
    
  })

  product.addEventListener('mouseout', function (event) {
    detail.style.display = 'none'
  })
})

function them(button){
  // Sao chép node mẹ của button
  var row = button.parentElement.parentElement.cloneNode(true);
  // Sửa lại innerText và thêm sự kiện click cho button Xóa
  var btnXoa = row.getElementsByTagName("button")[0];
  btnXoa.innerText = "Xóa";
  btnXoa.setAttribute('onclick', 'xoa(this)');
  // Thêm node mới đã sửa vào table#cart
  document.getElementById("cart").appendChild(row);
  // Tính tổng tiền giỏ hàng
  tinhTong();
}

function xoa(button){
  // Tìm node chứa nút Xóa được click
  var row = button.parentElement.parentElement;
  // Xóa node đó khỏi table#cart
  document.getElementById("cart").removeChild(row);
  // Tính lại tổng tiền giỏ hàng
  tinhTong();
}

function tinhTong(){
  // Lấy danh sách các thẻ trong table#cart
  var cart = document.getElementById("cart");
  var rows = cart.getElementsByTagName("item");
  // Duyệt danh sách và tính tổng giá tiền
  var tong = 0;
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("p");
    var price = cells[1].innerText.substr(1);
    tong += 1*price;
  }
  // Hiển thị tổng tiền
  document.getElementById("tong").innerText = tong;
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
  
  document.getElementById("vido").innerText = "Vĩ độ: " + position.coords.latitude;
  document.getElementById("kinhdo").innerText = "Kinh độ: " + position.coords.longitude;
}
// Đặt thời gian bắt đầu và thời gian kết thúc
let start = new Date('Mon Apr 10 2023 15:00:00 GMT+0000').getTime();
let end = new Date('Mon Apr 10 2023 15:30:00 GMT+0000').getTime();

// Thiết lập khoảng thời gian mỗi lần lặp
let interval = 1000; // mỗi giây

// Thiết lập hàm lặp lại
let timer = setInterval(function() {

  // Lấy thời gian hiện tại
  let current = new Date().getTime();

  // Tính thời gian còn lại
  let remaining = end - current;

  // Kiểm tra nếu thời gian còn lại âm hoặc bằng 0
  if (remaining <= 0) {
    clearInterval(timer); // dừng hàm lặp lại
    console.log('Đã đến thời gian kết thúc');
  } else {
    // Tính các giá trị cho định dạng giờ, phút và giây
    let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // In thời gian còn lại
    document.getElementById("flashsale").innerText = `Còn lại: ${hours} giờ, ${minutes} phút và ${seconds} giây`
  }
}, interval);
