const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const LoaiTTSchema = new Schema({
    tenLoaiTT: String,
    chitiet: String
  });
const LoaiTT = mongoose.model("loaiTT", LoaiTTSchema);
module.exports = LoaiTT;