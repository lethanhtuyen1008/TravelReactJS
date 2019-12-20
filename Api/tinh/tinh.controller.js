const Tinh = require('./tinh.model');

exports.insert = async (req,res) =>{
    let check = false;
    if(req.body.ten_tinh == "" || req.body.ten_tinh == null){
        res.status(500).json({result: false,error: "Tên tỉnh không được bỏ trống"});
            return;
    }
    else{
        var kq = await Tinh.create({
            "ten_tinh" : req.body.ten_tinh
        });
        res.status(200).json({result : true,data: kq});
    }
}
exports.list = async (req,res)=>{
    let data =await Tinh.find();
    res.status(200).json({result : true,data : data});
}
