const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const TourSchema = new Schema({
    ten: String,
    songay: Number,
    socho: Number,
    ma_loai: { type: Schema.Types.ObjectId, ref: "loai_tour" },
    hinh: [{ type: Schema.Types.ObjectId, ref: "hinh" }],
    giave: [{ type: Schema.Types.ObjectId, ref: "giave" }],
    chuongtrinh : [{ type: Schema.Types.ObjectId, ref: "chuong_trinh" }],
    rate : Number
  });
const Tour = mongoose.model("tours", TourSchema);
module.exports = Tour;