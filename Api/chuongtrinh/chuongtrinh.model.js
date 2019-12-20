const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const ChuongTringSchema = new Schema({
    tenCT: String,
    ngay: String,
    ghi_chu:String,
    khach_san : { type: Schema.Types.ObjectId, ref: "khach_san" },
    dia_diem : [{ type: Schema.Types.ObjectId, ref: "dia_diem" }]
  });
const ChuongTrinh = mongoose.model("chuong_trinh", ChuongTringSchema);
module.exports = ChuongTrinh;