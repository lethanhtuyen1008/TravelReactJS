const TourDat = require('./tourdat.model');
const ChiTiet = require('../chitiet/chitiet.model');
const KhachHang = require('../khachhang/khachhang.model');
const LichKhoiHanh = require('../lichkhoihanh/lichkhoihanh.model');
exports.insert = (req, res) => {
    try {
        var ct = new TourDat(req.body);
        ct.save();
        res.status(200).json({ result: true, data: ct });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}

exports.list = async (req, res) => {
    try {
        let data = await TourDat.find()
            .populate("lichkhoihanh")
            .populate("chitiet")
            .populate("khachhang")
            .populate("loaiTT")
            .exec();
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}

exports.getbyId = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await TourDat.findById(id).populate("lichkhoihanh")
            .populate("chitiet")
            .populate("khachhang")
            .populate("loaiTT")
            .exec();
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.update = async (req, res) => {
    try {
        let id = req.params.id;
        var data = await TourDat.updateOne({ _id: id }, req.body);
        var kq = await TourDat.findById(id).populate("lichkhoihanh")
            .populate("chitiet")
            .populate("khachhang")
            .populate("loaiTT")
            .exec();
        res.status(200).json({ result: true, data: kq });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.delete = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await TourDat.remove({ _id: id }, err => {
            if (err) {
                res.status(200).json({ result: false });
            }
            else {
                res.status(200).json({ result: true });
            }
        });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.bookTour = async (req, res) => {
    try {
        var makh;
        var id_ct = [];
        var ct = req.body.chitiet;
        var sl = 0;
        ct.forEach(i => {
            let chitietnew = new ChiTiet()
            chitietnew.hoten= i.hoten,
            chitietnew.gioitinh= i.gioitinh,
            chitietnew.ngaysinh= i.ngaysinh,
            chitietnew.phongdon = i.phongdon,
            chitietnew.loaikhach = i.loaikhach
            
            chitietnew.save();
            // console.log("data = "+ chitietnew);
            sl++;
            id_ct.push(chitietnew._id);
        });
       
        // console.log("sl=" + sl);
        // console.log(id_ct);
        let lkh = await LichKhoiHanh.findById(req.body.lichkhoihanh);
        if (sl > lkh.so_cho_trong) {
            res.status(200).json({ result: false, message: "Đã hết chỗ" });
            return;
        }
        if (req.body.maKH == null || req.body.maKH == "") {
            let data = new KhachHang();
            data.tenKH=req.body.tenKH;
            data.email= req.body.email;
            data.dienthoai= req.body.dienthoai;
            data.ngaysinh=req.body.ngaysinh;
            data.diachi= req.body.diachi;
            data.gioitinh = req.body.gioitinh;
            data.save();
            makh = data._id;
        }
        else {
            makh = req.body.maKH;
        }
        lkh.so_cho_trong = lkh.so_cho_trong - sl;
        lkh.save();
        let kq = await TourDat.create({
            diemdon: req.body.diemdon,
            ngaydat: req.body.ngaydat,
            trangthai: req.body.trangthai,
            tongtien: req.body.tongtien,
            lichkhoihanh: req.body.lichkhoihanh,
            chitiet: id_ct,
            khachhang: makh,
            loaiTT : req.body.loaiTT
        });
        res.status(200).json({ result: true, data: kq });

    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.filterngay = async (req,res)=>{
    try {
        let from = req.body.from;
        let to = req.body.to;
        let data = await TourDat.find({ngaydat:{$gt : from,$lt:to}})
            .populate("lichkhoihanh")
            .populate("chitiet")
            .populate("khachhang")
            .populate("loaiTT")
            .exec();
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}
exports.filterMonth = async (req,res)=>{
    try {
        let from = req.body.month;
        let data = await TourDat.find({ngaydat:{$month : from}})
            .populate("lichkhoihanh")
            .populate("chitiet")
            .populate("khachhang")
            .populate("loaiTT")
            .exec();
        res.status(200).json({ result: true, data: data });
    } catch (error) {
        res.status(200).json({ result: false, data: error });
    }
}