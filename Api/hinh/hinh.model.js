const mongoose = require('../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const HinhSchema = new Schema({
    url: String
  });
const Hinh = mongoose.model("hinh", HinhSchema);
module.exports = Hinh;