const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const TourDatSchema = new Schema({
    diemdon: String,
    ngaydat: Schema.Types.Date,
    trangthai: Schema.Types.Boolean,
    tongtien : Number,
    lichkhoihanh : { type: Schema.Types.ObjectId, ref: "lich_khoi_hanh" },
    chitiet : [{ type: Schema.Types.ObjectId, ref: "chi_tiet" }],
    khachhang: { type: Schema.Types.ObjectId, ref: "khach_hang"},
    loaiTT : { type: Schema.Types.ObjectId, ref: "loaiTT"}
  });
const TourDat = mongoose.model("tour_dat", TourDatSchema);
module.exports = TourDat;