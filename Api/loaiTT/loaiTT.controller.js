const LoaiTT = require('./loaiTT.model');

exports.insert = (req,res)=>{
    try {
        const loaiTT = new LoaiTT(req.body);
        loaiTT.save();
        res.status(200).json({result : true,data: loaiTT});
    } catch (error) {
        res.status(200).json({result : false,data: error});
    }
}
exports.list = async (req,res)=>{
    try {
        let data = await LoaiTT.find();
        res.status(200).json({result : true,data: data});
    } catch (error) {
        res.status(200).json({result : false,data: error});
    }
}