let danhSachCauThu = [];

const bangViTri = {
  1: "Thủ môn",
  2: "Hậu vệ",
  3: "Tiền vệ",
  4: "Tiền đạo"
};

let soLuong = parseInt(prompt("Nhập số cầu thủ cần thêm vào đội:"));

for (let i = 0; i < soLuong; i++) {
  console.log(`Nhập thông tin cầu thủ thứ ${i + 1}:`);

  let ma;
  let trungLap;

  do {
    trungLap = false;
    ma = prompt("Nhập mã cầu thủ:");

    for (let ct of danhSachCauThu) {
      let tach = ct.split("-");
      if (tach[0] === ma) {
        trungLap = true;
        alert("Mã đã tồn tại, vui lòng nhập lại!");
        break;
      }
    }
  } while (trungLap);

  let ten;
  do {
    ten = prompt("Nhập tên cầu thủ:");
  } while (!ten || ten.trim() === "");

  let chonViTri;
  do {
    chonViTri = parseInt(
      prompt("Chọn vị trí (1: Thủ môn | 2: Hậu vệ | 3: Tiền vệ | 4: Tiền đạo):")
    );
  } while (!bangViTri[chonViTri]);

  themCauThu(`${ma}-${ten}`, bangViTri[chonViTri]);
}

function themCauThu(thongTin, viTri) {
  danhSachCauThu.push(`${thongTin}-${viTri}`);
}

function hienThiDanhSach() {
  console.log("\nDanh sách đội bóng:");

  for (let i = 0; i < danhSachCauThu.length; i++) {
    let tach = danhSachCauThu[i].split("-");
    let ma = tach[0];
    let ten = tach[1];
    let viTri = tach[2];

    console.log(`${i + 1}. Mã: ${ma} | Tên: ${ten} | Vị trí: ${viTri}`);
  }
}

hienThiDanhSach();
