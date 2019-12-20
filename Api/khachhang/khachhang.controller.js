const KhachHang = require('./khachhang.model');

exports.insert = (req,res)=>{
    try {
        const kh = new KhachHang(req.body);
        let data =  kh.save();
        res.status(200).json({result : true,data: kh});
    } catch (error) {
        res.status(200).json({result : false,data: error});
    }
}
exports.list = async (req,res)=>{
    try {
        let data = await KhachHang.find();
        res.status(200).json({result : true,data: data});
    } catch (error) {
        res.status(200).json({result : true,data: error});
    }
}
exports.getbyId = async (req,res)=>{
    try {
        let id = req.params.id;
        let data =await KhachHang.findById(id);
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.update = async (req,res)=>{
    try {
        let id = req.params.id;
        var data =await KhachHang.updateOne({_id: id}, req.body);
        var kq = await KhachHang.findById(id);
        res.status(200).json({ result: true, data: kq });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.delete = async(req,res)=>{
    try {
        let id = req.params.id;
        let data = await KhachHang.remove({_id : id},err=>{
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