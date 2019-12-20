const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const GiaVeSchema = new Schema({
    ma_loai_khach: { type: Schema.Types.ObjectId, ref: "loaikhach" },
    gia: Number,
    ghichu: String
});
const GiaVe = mongoose.model("giave", GiaVeSchema);
module.exports = GiaVe;