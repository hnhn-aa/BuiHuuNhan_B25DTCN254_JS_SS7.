let dsMaCauThu = [];
let dsViTri = [];

const bangViTri = {
  1: "Thủ môn",
  2: "Hậu vệ",
  3: "Tiền vệ",
  4: "Tiền đạo"
};

let soLuong = parseInt(prompt("Nhập số cầu thủ cần thêm vào đội:"));

for (let i = 0; i < soLuong; i++) {
  console.log(`Nhập cầu thủ thứ ${i + 1}:`);

  let ma;
  do {
    ma = prompt("Nhập mã cầu thủ:");
    if (dsMaCauThu.includes(ma)) {
      alert("Mã đã tồn tại, nhập lại!");
    }
  } while (dsMaCauThu.includes(ma));

  let chonViTri;
  do {
    chonViTri = parseInt(
      prompt("Chọn vị trí (1: Thủ môn | 2: Hậu vệ | 3: Tiền vệ | 4: Tiền đạo):")
    );
  } while (!bangViTri[chonViTri]);

  dsMaCauThu.push(ma);
  dsViTri.push(bangViTri[chonViTri]);
}

function hienThiDoiHinh() {
  console.log(`\nĐội bóng hiện tại (${dsMaCauThu.length} cầu thủ):`);
  for (let i = 0; i < dsMaCauThu.length; i++) {
    console.log(`${i + 1}. ${dsMaCauThu[i]} - ${dsViTri[i]}`);
  }
}

function timCauThuTheoViTri(viTriCanTim) {
  let danhSachChiSo = [];

  for (let i = 0; i < dsViTri.length; i++) {
    if (dsViTri[i] === viTriCanTim) {
      danhSachChiSo.push(i);
    }
  }

  return danhSachChiSo;
}

let nhapSoViTri = parseInt(
  prompt("Nhập vị trí muốn đếm (1: Thủ môn | 2: Hậu vệ | 3: Tiền vệ | 4: Tiền đạo):")
);

let viTriCanTim = bangViTri[nhapSoViTri];

hienThiDoiHinh();

let ketQua = timCauThuTheoViTri(viTriCanTim);

console.log(`\nSố cầu thủ ở vị trí ${viTriCanTim}: ${ketQua.length}`);
console.log(`Các chỉ số cầu thủ ở vị trí ${viTriCanTim}: ${ketQua.join(", ")}`);
