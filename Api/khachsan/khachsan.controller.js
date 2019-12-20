const KhachSan = require('./khachsan.model');

exports.insert = async (req,res)=>{
    let check = false;
    if(req.body.tenKS == "" || req.body.tenKS == null){
        res.status(500).json({result: false,error: "Tên khách sạn không được bỏ trống"});
            return;
    }
    else{
        var kq = await KhachSan.create({
            "tenKS" : req.body.tenKS,
            "ma_tinh" : req.body.ma_tinh
        });
        res.status(200).json({result : true,data: kq});
    }
}
exports.list = async (req,res) =>{
    let data = await KhachSan.find()
    .populate("ma_tinh","ten_tinh")
    .exec();
    res.status(200).json({result : true,data: data});
}
exports.getbyId = async (req,res)=>{
    try {
        let id = req.params.id;
        let data =await KhachSan.findById(id).populate("ma_tinh","ten_tinh")
        .exec();
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.update = async (req,res)=>{
    try {
        let id = req.params.id;
        var data =await KhachSan.updateOne({_id: id}, req.body);
        var kq = await KhachSan.findById(id).populate("ma_tinh","ten_tinh")
        .exec();
        res.status(200).json({ result: true, data: kq });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }

}
exports.delete = async(req,res)=>{
    try {
        let id = req.params.id;
        let data = await KhachSan.remove({_id : id},err=>{
            if(err){
                res.status(200).json({result:false});
            }
            else{
                res.status(200).json({result:true});
            }
        });
    } catch (error) {
        res.status(200).json({result:false,data : error});
    }
}