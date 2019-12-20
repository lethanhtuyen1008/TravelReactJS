const Hinh = require('./hinh.model')

exports.list = async (req,res)=>{
    let data = await Hinh.find();
    res.status(200).json({ result: true, data: data });
}
exports.insert = (req,res)=>{
    try {
        var body =req.body.url;
        let date_ob = new Date();
        var binaryData = new Buffer(body, 'base64').toString('binary');
        require("fs").writeFile("./tour/images/tour_"+date_ob.getTime()+".png", binaryData, "binary", function(err) {
            console.log(err); // writes out file without error, but it's not a valid image
        });
        req.body.url = "tour_"+date_ob.getTime()+".png";

        let data = new Hinh(req.body);
        data.save();
        res.status(200).json({result:true,data:data});
    } catch (error) {
        res.status(200).json({result:false,data:error});
    }
    
}
exports.getbyId = async (req,res)=>{
    try {
        let id = req.params.id;
        let data =await Hinh.findById(id);
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.update = async (req,res)=>{
    try {
        let id = req.params.id;
        var data =await Hinh.updateOne({_id: id}, req.body);
        var kq = await Hinh.findById(id);
        res.status(200).json({ result: true, data: kq });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.delete = async(req,res)=>{
    try {
        let id = req.params.id;
        let data = await Hinh.remove({_id : id},err=>{
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