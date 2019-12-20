const DiaDiem = require('./diadiem.model');

exports.insert = async (req,res)=>{
    let check = false;
    if(req.body.tenDD == "" || req.body.tenDD == null){
        res.status(500).json({result: false,error: "Tên khách sạn không được bỏ trống"});
            return;
    }
    else{
        var kq = await DiaDiem.create({
            "tenDD" : req.body.tenDD,
            "ma_tinh" : req.body.ma_tinh,
            "ma_quoc_gia" : req.body.ma_quoc_gia,
            "chi_tiet" : req.body.chi_tiet,
            "rate" : req.body.rate
        });
        res.status(200).json({result : true,data: kq});
    }
}
exports.list = async (req,res) =>{
    let data = await DiaDiem.find()
    .populate("ma_tinh","ten_tinh")
    .populate("ma_quoc_gia","ten_quoc_gia")
    .exec();
    res.status(200).json({result : true,data: data});
}
exports.listFavourite = async (req,res) =>{
    let data = await DiaDiem.find({rate : 5})
    .populate("ma_tinh","ten_tinh")
    .populate("ma_quoc_gia","ten_quoc_gia")
    .exec();
    res.status(200).json({result : true,data: data});
}
exports.getbyId = async (req,res)=>{
    try {
        let id = req.params.id;
        let data =await DiaDiem.findById(id)
        .populate("ma_tinh","ten_tinh")
        .populate("ma_quoc_gia","ten_quoc_gia")
        .exec();
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.update = async (req,res)=>{
    try {
        let id = req.params.id;
        var data =await DiaDiem.updateOne({_id: id}, req.body);
        var kq = await DiaDiem.findById(id).populate("ma_tinh","ten_tinh")
        .populate("ma_quoc_gia","ten_quoc_gia")
        .exec();
        res.status(200).json({ result: true, data: kq });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }

}
exports.delete = async(req,res)=>{
    try {
        let id = req.params.id;
        let data = await DiaDiem.remove({_id : id},err=>{
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
