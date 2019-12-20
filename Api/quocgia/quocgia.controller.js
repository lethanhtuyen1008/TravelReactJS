const QuocGia = require('./quocgia.model');

exports.insert = async (req,res) =>{
    let check = false;
    if(req.body.ten_quoc_gia == "" || req.body.ten_quoc_gia == null){
        res.status(500).json({result: false,error: "Tên quốc gia không được bỏ trống"});
            return;
    }
    else{
        var kq = await QuocGia.create({
            "ten_quoc_gia" : req.body.ten_quoc_gia
        });
        res.status(200).json({result : true,data: kq});
    }
}
exports.list = async (req,res)=>{
    let data =await QuocGia.find();
    res.status(200).json({result : true,data : data});
}
