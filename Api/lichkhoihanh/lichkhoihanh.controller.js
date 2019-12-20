const LichKhoiHanh = require('./lichkhoihanh.model');

exports.insert = async (req,res)=>{
    try {
        let data = await LichKhoiHanh.create({
            "ma_tour": req.body.ma_tour,
            "ten_lich": req.body.ten_lich,
            "so_cho_trong": req.body.so_cho_trong,
            "ngay_khoi_hanh": req.body.ngay_khoi_hanh,
            "noi_khoi_hanh": req.body.noi_khoi_hanh
        });
        res.status(200).json({result : true,data: data});
    } catch (error) {
        res.status(200).json({result : false,data: error});
    }
}
exports.tourgiochot= async (req,res)=>{
  try {
    let dt = new Date();
    let data = await LichKhoiHanh.find({ngay_khoi_hanh : {$gt : dt}})
        .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "ma_loai", model: "loai_tour" }
          })
          .populate({
            path: "ma_tour",
            model: "tours",
            populate: { 
                path: "giave", 
                model: "giave",
                populate:{ path: "ma_loai_khach",model : "loaikhach"}
              }
          })
          .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "hinh", model: "hinh" }
          })
          .populate({
              path: "ma_tour",
              model : "tours",
              populate: {
                path: "chuongtrinh",
                //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
                model: "chuong_trinh",
                populate: { path: "khach_san", model: "khach_san" }
              }
          })
          .populate({
            path: "ma_tour",
            model : "tours",
            populate: {
              path: "chuongtrinh",
              //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
              model: "chuong_trinh",
              populate: { path: "dia_diem", model: "dia_diem" }
            }
        })
        .exec();
        res.status(200).json({result : true,data: data});
  } catch (error) {
    res.status(200).json({result : false,data: error});
  }
}
exports.list = async (req,res)=>{
    try {
        let data = await LichKhoiHanh.find()
        // .populate({
        //     path: "ma_tour",
        //     //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
        //     model: "tours",
        //     populate: { path: "ma_loai", model: "loai_tour" }
        //   })
          .populate({
            path: "ma_tour",
            model: "tours",
            populate: { 
                path: "giave", 
                model: "giave",
                populate:{ path: "ma_loai_khach",model : "loaikhach"}
              }
          })
          .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "hinh", model: "hinh" }
          })
          .populate({
              path: "ma_tour",
              model : "tours",
              populate: {
                path: "chuongtrinh",
                //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
                model: "chuong_trinh",
                populate: { path: "khach_san", model: "khach_san" }
              }
          })
          .populate({
            path: "ma_tour",
            model : "tours",
            populate: {
              path: "chuongtrinh",
              //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
              model: "chuong_trinh",
              populate: { path: "dia_diem", model: "dia_diem" }
            }
            
        })
        .exec();
          res.status(200).json({result : true,data: data});
    } catch (error) {
        res.status(200).json({result : false,data: error});
    }
}
exports.listApp = async (req,res)=>{
  try {
      let data = await LichKhoiHanh.find()
      .populate({
          path: "ma_tour",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "tours",
          populate: { path: "ma_loai", model: "loai_tour" }
        })
        .populate({
          path: "ma_tour",
          model: "tours",
          populate: { 
              path: "giave", 
              model: "giave",
              populate:{ path: "ma_loai_khach",model : "loaikhach"}
            }
        })
        .populate({
          path: "ma_tour",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "tours",
          populate: { path: "hinh", model: "hinh" }
        })
        .populate({
            path: "ma_tour",
            model : "tours",
            populate: {
              path: "chuongtrinh",
              //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
              model: "chuong_trinh",
              populate: { path: "khach_san", model: "khach_san" }
            }
        })
        .populate({
          path: "ma_tour",
          model : "tours",
          populate: {
            path: "chuongtrinh",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "chuong_trinh",
            populate: { path: "dia_diem", model: "dia_diem" }
          }
          
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
      let data =await LichKhoiHanh.findById(id)
      .populate({
        path: "ma_tour",
        //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
        model: "tours",
        populate: { path: "ma_loai", model: "loai_tour" }
      })
      .populate({
        path: "ma_tour",
        model: "tours",
        populate: { 
            path: "giave", 
            model: "giave",
            populate:{ path: "ma_loai_khach",model : "loaikhach"}
          }
      })
      .populate({
        path: "ma_tour",
        //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
        model: "tours",
        populate: { path: "hinh", model: "hinh" }
      })
      .populate({
          path: "ma_tour",
          model : "tours",
          populate: {
            path: "chuongtrinh",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "chuong_trinh",
            populate: { path: "khach_san", model: "khach_san" }
          }
      })
      .populate({
        path: "ma_tour",
        model : "tours",
        populate: {
          path: "chuongtrinh",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "chuong_trinh",
          populate: { path: "dia_diem", model: "dia_diem" }
        }
        
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
      var data =await LichKhoiHanh.updateOne({_id: id}, req.body);
      var kq = await LichKhoiHanh.findById(id).populate({
        path: "ma_tour",
        //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
        model: "tours",
        populate: { path: "ma_loai", model: "loai_tour" }
      })
      .populate({
        path: "ma_tour",
        model: "tours",
        populate: { 
            path: "giave", 
            model: "giave",
            populate:{ path: "ma_loai_khach",model : "loaikhach"}
          }
      })
      .populate({
        path: "ma_tour",
        //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
        model: "tours",
        populate: { path: "hinh", model: "hinh" }
      })
      .populate({
          path: "ma_tour",
          model : "tours",
          populate: {
            path: "chuongtrinh",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "chuong_trinh",
            populate: { path: "khach_san", model: "khach_san" }
          }
      })
      .populate({
        path: "ma_tour",
        model : "tours",
        populate: {
          path: "chuongtrinh",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "chuong_trinh",
          populate: { path: "dia_diem", model: "dia_diem" }
        }
        
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
      let data = await LichKhoiHanh.remove({_id : id},err=>{
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
exports.getByTour = async (req,res)=>{
  try {
    let id = req.params.id;
    //console.log(id);
    let data = await LichKhoiHanh.find({ma_tour : id})
    .populate({
      path: "ma_tour",
      //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
      model: "tours",
      populate: { path: "ma_loai", model: "loai_tour" }
    })
    .populate({
      path: "ma_tour",
      model: "tours",
      populate: { 
          path: "giave", 
          model: "giave",
          populate:{ path: "ma_loai_khach",model : "loaikhach"}
        }
    })
    .populate({
      path: "ma_tour",
      //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
      model: "tours",
      populate: { path: "hinh", model: "hinh" }
    })
    .populate({
        path: "ma_tour",
        model : "tours",
        populate: {
          path: "chuongtrinh",
          //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
          model: "chuong_trinh",
          populate: { path: "khach_san", model: "khach_san" }
        }
    })
    .populate({
      path: "ma_tour",
      model : "tours",
      populate: {
        path: "chuongtrinh",
        //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
        model: "chuong_trinh",
        populate: { path: "dia_diem", model: "dia_diem" }
      }
      
  })
  .exec();
    res.status(200).json({ result: true, data: data });
  } catch (error) {
    res.status(200).json({ result: true, data: error });
  }
}
exports.search = async (req,res) => {  
  let diadiem= req.body.diadiem;
  let ngaykhoihanh = req.body.ngaykhoihanh;
  let ten_lich = req.body.ten_lich;
 // console.log("dd = "+diadiem);
  let data =[];
  if(ten_lich != null && ngaykhoihanh != null){
    data = await LichKhoiHanh.find({ ten_lich: { $regex: ten_lich, $options: 'i' },ngay_khoi_hanh : ngaykhoihanh })
        .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "ma_loai", model: "loai_tour" }
          })
          .populate({
            path: "ma_tour",
            model: "tours",
            populate: { 
                path: "giave", 
                model: "giave",
                populate:{ path: "ma_loai_khach",model : "loaikhach"}
              }
          })
          .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "hinh", model: "hinh" }
          })
          .populate({
              path: "ma_tour",
              model : "tours",
              populate: {
                path: "chuongtrinh",
                //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
                model: "chuong_trinh",
                populate: { path: "khach_san", model: "khach_san" }
              }
          })
          .populate({
            path: "ma_tour",
            model : "tours",
            populate: {
              path: "chuongtrinh",
              //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
              model: "chuong_trinh",
              populate: { path: "dia_diem", model: "dia_diem" }
            }
            
        })
        .exec();
  }
  else if(ten_lich != null){
    data = await LichKhoiHanh.find({ ten_lich: { $regex: ten_lich, $options: 'i', }})
        .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "ma_loai", model: "loai_tour" }
          })
          .populate({
            path: "ma_tour",
            model: "tours",
            populate: { 
                path: "giave", 
                model: "giave",
                populate:{ path: "ma_loai_khach",model : "loaikhach"}
              }
          })
          .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "hinh", model: "hinh" }
          })
          .populate({
              path: "ma_tour",
              model : "tours",
              populate: {
                path: "chuongtrinh",
                //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
                model: "chuong_trinh",
                populate: { path: "khach_san", model: "khach_san" }
              }
          })
          .populate({
            path: "ma_tour",
            model : "tours",
            populate: {
              path: "chuongtrinh",
              //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
              model: "chuong_trinh",
              populate: { path: "dia_diem", model: "dia_diem" }
            }
            
        })
        .exec();
  }
  else if(ngaykhoihanh != null){
    data = await LichKhoiHanh.find({ ngay_khoi_hanh : ngaykhoihanh })
        .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "ma_loai", model: "loai_tour" }
          })
          .populate({
            path: "ma_tour",
            model: "tours",
            populate: { 
                path: "giave", 
                model: "giave",
                populate:{ path: "ma_loai_khach",model : "loaikhach"}
              }
          })
          .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "hinh", model: "hinh" }
          })
          .populate({
              path: "ma_tour",
              model : "tours",
              populate: {
                path: "chuongtrinh",
                //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
                model: "chuong_trinh",
                populate: { path: "khach_san", model: "khach_san" }
              }
          })
          .populate({
            path: "ma_tour",
            model : "tours",
            populate: {
              path: "chuongtrinh",
              //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
              model: "chuong_trinh",
              populate: { path: "dia_diem", model: "dia_diem" }
            }
            
        })
        .exec();
  }
  else{
    data = await LichKhoiHanh.find()
        .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "ma_loai", model: "loai_tour" }
          })
          .populate({
            path: "ma_tour",
            model: "tours",
            populate: { 
                path: "giave", 
                model: "giave",
                populate:{ path: "ma_loai_khach",model : "loaikhach"}
              }
          })
          .populate({
            path: "ma_tour",
            //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
            model: "tours",
            populate: { path: "hinh", model: "hinh" }
          })
          .populate({
              path: "ma_tour",
              model : "tours",
              populate: {
                path: "chuongtrinh",
                //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
                model: "chuong_trinh",
                populate: { path: "khach_san", model: "khach_san" }
              }
          })
          .populate({
            path: "ma_tour",
            model : "tours",
            populate: {
              path: "chuongtrinh",
              //match: { ma_loai: "5df8a21b75bd074268a0c880" }, // where thuộc tính trong tour
              model: "chuong_trinh",
              populate: { path: "dia_diem", model: "dia_diem" }
            }
            
        })
        .exec();
  }
  var kq = [];
  if(diadiem != null){
    data.forEach(element => {
        var check = false;
        element.ma_tour.chuongtrinh.forEach(e1=>{
              e1.dia_diem.forEach(e2 => {
                //console.log(e2._id);
                if(e2._id.toString() === diadiem.toString()){
                  check = true;
                }
              });
          });
          if(check){
            kq.push(element);
          }
        });
  }
  else{
    kq = data;
  }
  //console.log(data);
  res.status(200).json({result:true,data : kq});

}