const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const DiaDiemSchema = new Schema({
    tenDD: String,
    chi_tiet: String,
    ma_tinh : { type: Schema.Types.ObjectId, ref: "tinh" },
    ma_quoc_gia: { type: Schema.Types.ObjectId, ref: "quoc_gia" },
    rate : Number
  });
const DiaDiem = mongoose.model("dia_diem", DiaDiemSchema);
module.exports = DiaDiem;