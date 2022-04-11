document.getElementById("luong").onclick = function(){
    soNgay = document.getElementById("nhapSoNgayLamViec").value*1;
var ketQuaLuong=soNgay*100000;
ketQua = "Số Lương Của Bạn Là: "+ketQuaLuong;
document.getElementById("ketQua").innerHTML = ketQua;
}


document.getElementById("trungBinh").onclick = function(){
    var soThu1 = document.getElementById("soThu1").value*1;
    var soThu2 = document.getElementById("soThu2").value*1;
    var soThu3 = document.getElementById("soThu3").value*1;
    var soThu4 = document.getElementById("soThu4").value*1;
    var soThu5 = document.getElementById("soThu5").value*1;
    var trungBinh = (soThu1+soThu2+soThu3+soThu4+soThu5)/5;
    ketQuaTrungBinh = "Giá Trị Trung Bình Là: "+trungBinh;
    document.getElementById("ketQuaTrungBinh").innerHTML = ketQuaTrungBinh;
}


document.getElementById("quyDoiTien").onclick = function(){
    const tyGia = 23500;
    var soTienDo = document.getElementById("nhapSoTienUsd").value*1;
    var soTienViet = soTienDo*tyGia;
    var currentFomat = new Intl.NumberFormat("vn-VN");
    tienVietQuyDoi = "Số Tiền USD Quy Đổi Thành: "+ currentFomat.format(soTienViet)+" Đồng ";
    document.getElementById("ketQuaVND").innerHTML = tienVietQuyDoi;
}


document.getElementById("tinhToan").onclick = function(){
    var chieuDai = document.getElementById("chieuDai").value*1;
    var chieuRong = document.getElementById("chieuRong").value*1;
    var chuVi = (chieuDai+chieuRong)*2;
    var dienTich = chieuDai*chieuRong;
    kqChuVi = " Chu Vi Hình Chữ Nhật Là: "+chuVi+" cm";
    kqDienTich = " Diện Tích Hình Chữ Nhật Là: "+dienTich+" cm2";
    document.getElementById("chuVi").innerHTML = kqChuVi;
    document.getElementById("dienTich").innerHTML = kqDienTich;
}

document.getElementById("tinhTongKySo").onclick = function(){
    var haiChuSo = document.getElementById("soHaiChuSo").value*1;
    var soHangChuc =  Math.floor(haiChuSo% 100/10);
    var soHangDonVi = Math.floor(haiChuSo%10);
    var tongHaiSo = soHangChuc+soHangDonVi;
    kqTongHaiSo = " Tổng hai ký số là: "+tongHaiSo;
    document.getElementById("ketQuaTongHaiSo").innerHTML = kqTongHaiSo;
}