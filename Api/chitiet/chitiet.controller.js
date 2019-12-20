const ChiTiet = require('./chitiet.model');

exports.insert = (req,res)=>{
    try {
        var ct = new ChiTiet(req.body);
        ct.save();
        res.status(200).json({result : true,data: ct});
    } catch (error) {
        res.status(200).json({result : false,data: error});
    }
}

exports.list = async (req,res)=>{
    try {
        let data = await ChiTiet.find()
        .populate("loaikhach")
        .exec();
        res.status(200).json({result : true,data: data});
    } catch (error) {
        res.status(200).json({result : false,data: error});
    }
}
exports.getbyId = async (req,res)=>{
    try {
        let id = req.params.id;
        let data =await ChiTiet.findById(id).populate("loaikhach")
        .exec();
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.update = async (req,res)=>{
    try {
        let id = req.params.id;
        var data =await ChiTiet.updateOne({_id: id}, req.body);
        var kq = await ChiTiet.findById(id).populate("loaikhach")
        .exec();
        res.status(200).json({ result: true, data: kq });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.delete = async(req,res)=>{
    try {
        let id = req.params.id;
        let data = await ChiTiet.remove({_id : id},err=>{
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