const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const ChiTietSchema = new Schema({
    hoten: String,
    gioitinh: String,
    ngaysinh: String,
    phongdon : Schema.Types.Boolean,
    loaikhach : { type: Schema.Types.ObjectId, ref: "loaikhach" }
  });
const ChiTiet = mongoose.model("chi_tiet", ChiTietSchema);
module.exports = ChiTiet;