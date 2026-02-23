let danhSachCauThu = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Văn B-Hậu vệ",
  "P003-Lê Văn C-Tiền vệ",
  "P004-Phạm Văn D-Tiền đạo",
  "P005-Hoàng Văn E-Tiền đạo",
  "P006-An-Hậu vệ"
];

function timTenNganNhat() {
  let tenNganNhat = null;

  for (let i = 0; i < danhSachCauThu.length; i++) {
    let ten = danhSachCauThu[i].split("-")[1];

    if (tenNganNhat === null || ten.length < tenNganNhat.length) {
      tenNganNhat = ten;
    }
  }

  return tenNganNhat;
}

function demViTriDaiHon(doDai) {
  let dem = 0;

  for (let i = 0; i < danhSachCauThu.length; i++) {
    let viTri = danhSachCauThu[i].split("-")[2];

    if (viTri.length > doDai) {
      dem++;
    }
  }

  return dem;
}

console.log("Tên cầu thủ ngắn nhất:");
console.log(timTenNganNhat());

console.log("\nSố cầu thủ có tên vị trí dài hơn 6 ký tự:");
console.log(demViTriDaiHon(6));
