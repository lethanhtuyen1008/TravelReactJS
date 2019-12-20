const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const QuocGiaSchema = new Schema({
    ten_quoc_gia: String
  });
const QuocGia = mongoose.model("quoc_gia", QuocGiaSchema);
module.exports = QuocGia;