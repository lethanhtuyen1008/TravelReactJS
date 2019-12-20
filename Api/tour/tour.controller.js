const Tour = require("./tour.model");
const Hinh = require('../hinh/hinh.model');
const GiaVe = require('../giave/giave.model');
const ChuongTrinh = require('../chuongtrinh/chuongtrinh.model');

exports.list = async (req,res) => {
    let data = await Tour.find()
    .populate("hinh", "url")
    .populate({
      path: "giave",
      model: "giave",
      populate : { path:"ma_loai_khach",model:"loaikhach"}
    })
    .populate({
      path: "chuongtrinh",
      //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
      model: "chuong_trinh",
      populate: { path: "dia_diem", model: "dia_diem" }
    })
    .populate({
      path: "chuongtrinh",
      model: "chuong_trinh",
      populate: { path: "khach_san", model: "khach_san" }
    })
    .exec();
    res.status(200).json({ result: true, data: data });
}
exports.insert = async (req,res) => {
  try {
    var id_hinh=[];
    //Hình
    var list_hinh = req.body.hinh;
    list_hinh.forEach(i => {
      let hinhnew = new Hinh();
      //lưu hình
      var body =i.url;
      let date_ob = new Date();
      var binaryData = new Buffer(body, 'base64').toString('binary');
      require("fs").writeFile("./tour/images/tour_"+date_ob.getTime()+".png", binaryData, "binary", function(err) {
            console.log(err); // writes out file without error, but it's not a valid image
      });
      hinhnew.url = "tour_"+date_ob.getTime()+".png";
      hinhnew.save();
      id_hinh.push(hinhnew._id);
    });
    //Giá vé
     var id_giave=[];
     var list_giave = req.body.giave;
     list_giave.forEach(e => {
       let giavenew = new GiaVe();
       giavenew.ma_loai_khach = e.ma_loai_khach;
       giavenew.gia = e.gia;
       giavenew.ghichu = e.ghichu;
        giavenew.save();
        id_giave.push(giavenew._id);
     });
     //Chương trinh
     var id_ct=[];
     var list_ct = req.body.chuongtrinh;
     list_ct.forEach(e => {
       let ctnew = new ChuongTrinh();
       ctnew.tenCT = e.tenCTtenCT;
       ctnew.ghi_chu = e.ghi_chu;
       ctnew.khach_san = e.khach_san;
       ctnew.dia_diem = e.dia_diem;
       ctnew.save();
        id_ct.push(ctnew._id);
     });
     //Thêm tour
    let data = await Tour.create({
      "ten": req.body.ten,
      "songay": req.body.songay,
      "socho": req.body.socho,
      "ma_loai": req.body.ma_loai,
      "hinh": id_hinh,
      "giave":id_giave,
      "chuongtrinh" : id_ct
    });
    res.status(200).json({ result: true, data: data });
  } catch (error) {
    res.status(200).json({ result: false, data: error });
  }
}
exports.insertImageTour = async(req,res)=>{
  try {
    let tour = await Tour.findById(req.params.id);
    //lưu hình
    let hinhnew = new Hinh();
    var body =req.body.url;
    let date_ob = new Date();
    var binaryData = new Buffer(body, 'base64').toString('binary');
    require("fs").writeFile("./tour/images/tour_"+date_ob.getTime()+".png", binaryData, "binary", function(err) {
          console.log(err); // writes out file without error, but it's not a valid image
    });
    hinhnew.url = "tour_"+date_ob.getTime()+".png";
    hinhnew.save();
    tour.hinh.push(hinhnew._id);
    tour.save();
    res.status(200).json({result : true,data : tour});
  } catch (error) {
    res.status(200).json({result : false,data : error});
  }
}
exports.insertChuongTrinhTour= async(req,res)=>{
  try {
    let tour = await Tour.findById(req.params.id);
    //chương trình mới
    let list_ct = req.body.chuongtrinh;
    list_ct.forEach(element => {
      let ct = new ChuongTrinh(element);
      ct.save();
      tour.chuongtrinh.push(ct._id);
    });
    tour.save();
    res.status(200).json({result : true,data : tour});
  } catch (error) {
    res.status(200).json({result : false,data : error});
  }
}
exports.insertGiaVeTour = async (req,res)=>{
  try {
    let tour = await Tour.findById(req.params.id);
    //Giá vé mới
    let list_gv = req.body.giave;
    list_gv.forEach(element => {
      let gv = new GiaVe(element);
      gv.save();
      tour.giave.push(gv._id);
    });
    tour.save();
    res.status(200).json({result : true,data : tour});
  } catch (error) {
    res.status(200).json({result : false,data : error});
  }
}
exports.deleteHinh = async (req,res)=>{
  try {
    let tour = await Tour.findById(req.params.id);
    let id_hinh = req.params.id_hinh;
    let list_hinh = tour.hinh;
    for( var i = 0; i < list_hinh.length; i++){
      if(list_hinh[i].toString() == id_hinh.toString()){
        await Hinh.deleteOne({_id : id_hinh},err=>{
            if(err){
                console.log("Lỗi remove");
            }
            else{
              list_hinh.splice(i,1);
            }
        });
      }
    }
    tour.hinh = list_hinh;
    tour.save();
    res.status(200).json({result : true,data : tour});
  } catch (error) {
    res.status(200).json({result : false,data : error});
  }
}
exports.deleteGiaVe = async (req,res)=>{
  try {
    let tour = await Tour.findById(req.params.id);
    let id_giave = req.params.id_giave;
    let list_giave = tour.giave;
    for( var i = 0; i < list_giave.length; i++){
      if(list_giave[i].toString() == id_giave.toString()){
        await GiaVe.deleteOne({_id : id_giave},err=>{
            if(err){
                console.log("Lỗi remove");
            }
            else{
              list_giave.splice(i,1);
            }
        });
      }
    }
    tour.giave = list_giave;
    tour.save();

    res.status(200).json({result : true,data : tour});
  } catch (error) {
    res.status(200).json({result : false,data : error});
  }
}
exports.deleteChuongTrinh = async (req,res)=>{
  try {
    let tour = await Tour.findById(req.params.id);
    let id_chuongtrinh = req.params.id_chuongtrinh;
    let list_chuongtrinh = tour.chuongtrinh;
    for( var i = 0; i < list_chuongtrinh.length; i++){
      if(list_chuongtrinh[i].toString() == id_chuongtrinh.toString()){
        await ChuongTrinh.deleteOne({_id : id_chuongtrinh},err=>{
            if(err){
                console.log("Lỗi remove");
            }
            else{
              list_chuongtrinh.splice(i,1);
            }
        });
      }
    }
    tour.giave = list_chuongtrinh;
    tour.save();

    res.status(200).json({result : true,data : tour});
  } catch (error) {
    res.status(200).json({result : false,data : error});
  }
}
exports.getImage = (req, res) => {
    // var name = req.params.image;
    // res.sendFile('../../public/src/images/'+name+'.jpg');
    var options = {
      root: __dirname + "/images",
      dotfiles: "deny",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true
      }
    };
  
    var fileName = req.params.image;
    res.sendFile(fileName, options, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Sent:", fileName);
      }
    });
  };

  exports.getbyId = async (req,res)=>{
    try {
        let id = req.params.id;
        let data =await Tour.findById(id)
        .populate("ma_loai", "ten_loai_tour")
        .populate("hinh", "url")
        .populate("giave")
        .populate({
          path: "chuongtrinh",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "chuong_trinh",
          populate: { path: "dia_diem", model: "dia_diem" }
        })
        .populate({
          path: "chuongtrinh",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "chuong_trinh",
          populate: { path: "khach_san", model: "khach_san" }
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
        var data =await Tour.find({_id: id});
        data.ten = req.body.ten;
        data.songay = req.body.songay;
        data.socho = req.body.socho;
        data.ma_loai = req.body.ma_loai;
        data.save();
        var kq = await Tour.findById(id).populate("ma_loai", "ten_loai_tour")
        .populate("hinh", "url")
        .populate("giave")
        .populate({
          path: "chuongtrinh",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "chuong_trinh",
          populate: { path: "dia_diem", model: "dia_diem" }
        })
        .populate({
          path: "chuongtrinh",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "chuong_trinh",
          populate: { path: "khach_san", model: "khach_san" }
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
        let data = await Tour.remove({_id : id},err=>{
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
exports.getByLoai = async (req,res)=>{
      try {
        let id = req.params.id;
        let data =await Tour.find({ma_loai:id})
        .populate("ma_loai", "ten_loai_tour")
        .populate("hinh", "url")
        .populate("giave")
        .populate({
          path: "chuongtrinh",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "chuong_trinh",
          populate: { path: "dia_diem", model: "dia_diem" }
        })
        .populate({
          path: "chuongtrinh",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "chuong_trinh",
          populate: { path: "khach_san", model: "khach_san" }
        })
        .exec();
        res.status(200).json({ result: true, data: data });
      } catch (error) {
          res.status(200).json({ result: false, data: error });
      }
}
exports.getTourFavoute = async (req,res)=>{
  try {
    let id = req.params.id;
    //console.log(id);
    let data = await Tour.find()
    .populate("ma_loai", "ten_loai_tour")
    .populate("hinh", "url")
    .populate("giave")
    .populate({
      path: "chuongtrinh",
      //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
      model: "chuong_trinh",
      populate: { path: "dia_diem",  model: "dia_diem",}
    })
    .populate({
      path: "chuongtrinh",
      model: "chuong_trinh",
      populate: { path: "khach_san", model: "khach_san" }
    })
    .exec();
    //lấy theo địa điểm
    var kq = [];
    data.forEach(element => {
        var check = false;
        
        element.chuongtrinh.forEach(e1=>{
              e1.dia_diem.forEach(e2 => {
                if(e2._id.toString() === id.toString()){
                  check = true;
                }
              });
          });
          if(check){
            kq.push(element);
          }
        });
    //==================
    res.status(200).json({ result: true, data: kq });
  } catch (error) {
    res.status(200).json({ result: false, data: error });
  }
}
