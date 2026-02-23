let danhSachCauThu = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Văn B-Hậu vệ",
  "P003-Lê Văn C-Tiền vệ",
  "P004-Phạm Văn D-Tiền đạo",
  "P005-Hoàng Văn E-Tiền đạo",
  "P006-Nguyễn Thành Long-Hậu vệ"
];

function layTatCaViTri() {
  let dsViTri = [];

  for (let i = 0; i < danhSachCauThu.length; i++) {
    let viTri = danhSachCauThu[i].split("-")[2];
    if (!dsViTri.includes(viTri)) {
      dsViTri.push(viTri);
    }
  }

  return dsViTri;
}

function timTenDaiNhat() {
  let tenDaiNhat = "";

  for (let i = 0; i < danhSachCauThu.length; i++) {
    let ten = danhSachCauThu[i].split("-")[1];
    if (ten.length > tenDaiNhat.length) {
      tenDaiNhat = ten;
    }
  }

  return tenDaiNhat;
}

function demTenBatDauBangChu(chuCai) {
  let dem = 0;
  let kyTu = chuCai.toLowerCase();

  for (let i = 0; i < danhSachCauThu.length; i++) {
    let ten = danhSachCauThu[i].split("-")[1];
    if (ten[0].toLowerCase() === kyTu) {
      dem++;
    }
  }

  return dem;
}

console.log("Danh sách vị trí trong đội:");
console.log(layTatCaViTri());

console.log("\nCầu thủ có tên dài nhất:");
console.log(timTenDaiNhat());

console.log("\nSố cầu thủ có tên bắt đầu bằng chữ 'N':");
console.log(demTenBatDauBangChu("N"));
