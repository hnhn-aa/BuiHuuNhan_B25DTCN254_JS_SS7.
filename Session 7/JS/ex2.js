let dsMa = ["P001", "P002", "P003"];
let dsTen = ["Nguyễn Văn A", "Trần Văn B", "Lê Văn C"];
let dsSoAo = [1, 10, 9];

function hienThiDoiHinh() {
  console.log("\nDanh sách đội bóng:");
  for (let i = 0; i < dsMa.length; i++) {
    console.log(`${i + 1}. ${dsMa[i]} - ${dsTen[i]} - Số áo: ${dsSoAo[i]}`);
  }
}

function capNhatThongTin(ma, tenMoi, soAoMoi) {
  for (let i = 0; i < dsMa.length; i++) {
    if (dsMa[i] === ma) {
      dsTen[i] = tenMoi;
      dsSoAo[i] = soAoMoi;
      return true;
    }
  }
  return false;
}

hienThiDoiHinh();

let maNhap = prompt("Nhập mã cầu thủ cần cập nhật (ví dụ: P001):");
let viTri = dsMa.indexOf(maNhap);

if (viTri !== -1) {
  let tenMoi = prompt("Nhập tên mới cho cầu thủ:");
  let soAoMoi;

  do {
    soAoMoi = parseInt(prompt("Nhập số áo mới (1-99):"));
  } while (isNaN(soAoMoi) || soAoMoi < 1 || soAoMoi > 99);

  let daCapNhat = capNhatThongTin(maNhap, tenMoi, soAoMoi);

  if (daCapNhat) {
    console.log("\nCập nhật thành công!");
    hienThiDoiHinh();
  }
} else {
  alert("Không tìm thấy mã cầu thủ!");
}
