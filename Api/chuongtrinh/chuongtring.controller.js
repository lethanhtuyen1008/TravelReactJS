const ChuongTrinh = require('./chuongtrinh.model');

exports.insert = async (req,res)=>{
    try {
        let data = await ChuongTrinh.create({
            "tenCT": req.body.tenCT,
            "ngay": req.body.ngay,
            "ghi_chu":req.body.ghi_chu,
            "khach_san" : req.body.khach_san,
            "dia_diem" : req.body.dia_diem
        });
        res.status(200).json({result : true,data: data});
    } catch (error) {
        res.status(200).json({result : false,data: error});
    }
   
}
exports.list = async (req,res)=>{
    try {
        var data = await ChuongTrinh.find()
        .populate({
            path: "khach_san",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "khach_san",
            populate: { path: "ma_tinh", model: "tinh" }
          })
          .populate({
            path: "dia_diem",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "dia_diem",
            populate: { path: "ma_tinh", model: "tinh" }
          })
          .populate({
            path: "dia_diem",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "dia_diem",
            populate: { path: "ma_quoc_gia", model: "quoc_gia" }
          })
        .exec();
        res.status(200).json({result : true,data: data});
    } catch (error) {
        res.status(200).json({result : false,data: error});
    }
}

exports.getbyId = async (req,res)=>{
    try {
        let id = req.params.id;
        let data =await ChuongTrinh.findById(id).populate({
            path: "khach_san",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "khach_san",
            populate: { path: "ma_tinh", model: "tinh" }
          })
          .populate({
            path: "dia_diem",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "dia_diem",
            populate: { path: "ma_tinh", model: "tinh" }
          })
          .populate({
            path: "dia_diem",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "dia_diem",
            populate: { path: "ma_quoc_gia", model: "quoc_gia" }
          })
        .exec();
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.update = async (req,res)=>{
    try {
        let id = req.params.id;
        var data =await ChuongTrinh.updateOne({_id: id}, req.body);
        var kq = await ChuongTrinh.findById(id).populate({
            path: "khach_san",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "khach_san",
            populate: { path: "ma_tinh", model: "tinh" }
          })
          .populate({
            path: "dia_diem",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "dia_diem",
            populate: { path: "ma_tinh", model: "tinh" }
          })
          .populate({
            path: "dia_diem",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "dia_diem",
            populate: { path: "ma_quoc_gia", model: "quoc_gia" }
          })
        .exec();
        res.status(200).json({ result: true, data: kq });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }

}
exports.delete = async(req,res)=>{
    try {
        let id = req.params.id;
        let data = await ChuongTrinh.remove({_id : id},err=>{
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