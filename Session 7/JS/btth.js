let tenCauThu = [];
let soBanThang = [];

function themCauThu(ten, banThang) {
  tenCauThu.push(ten);
  soBanThang.push(banThang);
  console.log(`✔ Đã thêm cầu thủ ${ten} vào đội.`);
}

function hienThiDoiHinh() {
  if (tenCauThu.length === 0) {
    console.log("Đội bóng chưa có cầu thủ nào.");
    return;
  }

  console.log("=== DANH SÁCH ĐỘI HÌNH ===");
  for (let i = 0; i < tenCauThu.length; i++) {
    console.log(`${i + 1}. ${tenCauThu[i]} - ${soBanThang[i]} bàn thắng`);
  }
}

const tinhTongBanThang = function () {
  let tong = 0;
  for (let i = 0; i < soBanThang.length; i++) {
    tong += soBanThang[i];
  }
  return tong;
};

function timBanThangCaoNhat(dsBanThang) {
  if (dsBanThang.length === 0) return 0;

  let max = dsBanThang[0];
  for (let i = 1; i < dsBanThang.length; i++) {
    if (dsBanThang[i] > max) {
      max = dsBanThang[i];
    }
  }
  return max;
}

let luaChon;

do {
  luaChon = prompt(
`===== QUẢN LÝ ĐỘI BÓNG MINI =====
1. Thêm cầu thủ
2. Xem đội hình
3. Tổng số bàn thắng
4. Tìm vua phá lưới
0. Thoát

Nhập lựa chọn của bạn:`
  );

  switch (luaChon) {
    case "1":
      let ten = prompt("Nhập tên cầu thủ:");
      let banThang = parseInt(prompt("Nhập số bàn thắng:"));

      if (!ten || isNaN(banThang) || banThang < 0) {
        console.log("✖ Dữ liệu nhập không hợp lệ!");
      } else {
        themCauThu(ten, banThang);
      }
      break;

    case "2":
      hienThiDoiHinh();
      break;

    case "3":
      console.log(`👉 Tổng số bàn thắng của đội: ${tinhTongBanThang()} bàn.`);
      break;

    case "4":
      if (tenCauThu.length === 0) {
        console.log("Chưa có dữ liệu cầu thủ.");
        break;
      }

      let max = timBanThangCaoNhat(soBanThang);
      let viTri = soBanThang.indexOf(max);

      console.log(`🏆 Vua phá lưới: ${tenCauThu[viTri]} - ${max} bàn.`);
      break;

    case "0":
      console.log("Đã thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
  }
} while (luaChon !== "0");
