let danhSachCauThu = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Văn B-Hậu vệ",
  "P003-Lê Văn C-Tiền vệ",
  "P004-Phạm Văn D-Tiền đạo",
  "P005-Hoàng Văn E-Tiền đạo"
];

function hienThiDanhSach() {
  console.log("Danh sách đội bóng:");
  for (let i = 0; i < danhSachCauThu.length; i++) {
    let tach = danhSachCauThu[i].split("-");
    console.log(`${i + 1}. ${tach[0]} | ${tach[1]} | ${tach[2]}`);
  }
}

function demCauThuTheoViTri(ds) {
  let ketQua = {};

  for (let i = 0; i < ds.length; i++) {
    let viTri = ds[i].split("-")[2];
    ketQua[viTri] = (ketQua[viTri] || 0) + 1;
  }

  return ketQua;
}

function kiemTraThuMon() {
  for (let i = 0; i < danhSachCauThu.length; i++) {
    if (danhSachCauThu[i].split("-")[2] === "Thủ môn") {
      return true;
    }
  }
  return false;
}

hienThiDanhSach();

console.log("\nSố lượng cầu thủ theo vị trí:");
console.log(demCauThuTheoViTri(danhSachCauThu));

console.log("\nĐội bóng có thủ môn không?");
console.log(kiemTraThuMon());
