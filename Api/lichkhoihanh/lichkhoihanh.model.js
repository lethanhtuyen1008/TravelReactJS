const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const LichKhoiHanhSchema = new Schema({
    ten_lich: String,
    so_cho_trong: Number,
    ngay_khoi_hanh: Schema.Types.Date,
    noi_khoi_hanh: String,
    ma_tour: { type: Schema.Types.ObjectId, ref: "tours" }
  });
const LichKhoiHanh = mongoose.model("lich_khoi_hanh", LichKhoiHanhSchema);

module.exports = LichKhoiHanh;
