const loaiTourModel = require("../models/loaitour.model");

exports.list = async(req,res) => {
    let data = await loaiTourModel.find();
    res.status(200).json({result:true,data:data});
}
