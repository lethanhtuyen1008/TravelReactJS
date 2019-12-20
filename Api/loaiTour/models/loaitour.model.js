const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const LoaiTourSchema = new Schema({
    ten_loai_tour: String
  });
const Loai = mongoose.model("loai_tour", LoaiTourSchema);

module.exports = Loai;



