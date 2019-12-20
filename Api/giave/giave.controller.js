const GiaVe = require("./giave.model")

exports.list = async (req,res) =>{
    let data = await GiaVe.find().populate("ma_loai_khach").exec();
    res.status(200).json({ result: true, data: data });
}
exports.insert = (req,res) =>{
    try {
        let gia = new GiaVe(req.body);
        gia.save();
        res.status(200).json({ result: true, data: gia });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.getbyId = async (req,res)=>{
    try {
        let id = req.params.id;
        let data =await GiaVe.findById(id).populate("ma_loai_khach").exec();
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.update = async (req,res)=>{
    try {
        let id = req.params.id;
        var data =await GiaVe.updateOne({_id: id}, req.body);
        var kq = await GiaVe.findById(id).populate("ma_loai_khach").exec();
        res.status(200).json({ result: true, data: kq });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
    // let id = req.params.id;
    // var data = GiaVe.updateOne({_id: id}, req.body);
    // GiaVe.updateOne({_id: id}, req.body)
    // .then( (result) => res.json({result: true, data: result }))
    // .catch((error) => res.status(200).json({ result: false, data: error }));
}
exports.delete = async(req,res)=>{
    try {
        let id = req.params.id;
        let data = await GiaVe.remove({_id : id},err=>{
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