const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;
const TinhSchema = new Schema({
    ten_tinh: String
  });
const Tinh = mongoose.model("tinh", TinhSchema);
module.exports = Tinh;