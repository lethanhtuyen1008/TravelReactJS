const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const LoaiKhachSchema = new Schema({
    ten_loai_khach: String,
    do_tuoi: Number
  });
  const LoaiKhach = mongoose.model("loaikhach", LoaiKhachSchema);
  module.exports = LoaiKhach;