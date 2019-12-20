const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const KhachSanSchema = new Schema({
    tenKS: String,
    ma_tinh : { type: Schema.Types.ObjectId, ref: "tinh" }
  });
const KhachSan = mongoose.model("khach_san", KhachSanSchema);
module.exports = KhachSan;