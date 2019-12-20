const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const KhachHangSchema = new Schema({
    tenKH: String,
    email: String,
    dienthoai: String,
    ngaysinh: String,
    diachi: String,
    gioitinh : String
  });
const KhachHang = mongoose.model("khach_hang", KhachHangSchema);
module.exports = KhachHang;