const LoaiKhach = require('./loaikhach.model');

exports.list = async (req,res)=>{
    let data = await LoaiKhach.find();
    res.status(200).json({ result: true, data : data });
}
