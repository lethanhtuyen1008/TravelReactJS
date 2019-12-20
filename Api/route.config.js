const TourController = require('./tour/tour.controller');
const GiaVeController = require('./giave/giave.controller');
const LoaiKhachController = require('./loaikhach/loaikhach.controller');
const HinhController = require('./hinh/hinh.controller');
const QuocGiaController = require('./quocgia/quocgia.controller');
const TinhController = require('./tinh/tinh.controller');
const KhachSanController = require('./khachsan/khachsan.controller');
const DiaDiemController = require('./diadiem/diadiem.controller');
const ChuongTrinhController = require('./chuongtrinh/chuongtring.controller');
const LichKhoiHanhController = require('./lichkhoihanh/lichkhoihanh.controller');
const KhachHangController = require('./khachhang/khachhang.controller');
const LoaiTTController = require('./loaiTT/loaiTT.controller');
const ChiTietController = require('./chitiet/chitiet.controller');
const TourDatController = require('./tourdat/tourdat.controller');
const PermissionMiddleware = require('./common/middlewares/auth.permission.middleware');
const ValidationMiddleware = require('./common/middlewares/auth.validation.middleware');
const config = require('./common/config/env.config');

const ADMIN = config.permissionLevels.ADMIN;
const PAID = config.permissionLevels.PAID_USER;
const FREE = config.permissionLevels.NORMAL_USER;

exports.routesConfig = function(app){
    //tour
    app.get('/api/tour',[
        TourController.list
    ]);
    app.get("/api/images/:image", [TourController.getImage]);
    app.post("/api/tour",[TourController.insert]);
    app.get('/api/tour/:id',[TourController.getbyId]);
    app.put('/api/tour/:id',[TourController.update]);
    app.get('/api/tour/loai/:id',[TourController.getByLoai]);
    app.get('/api/tour/diadiem/:id',[TourController.getTourFavoute]);
    app.put('/api/tour/hinh/:id',[TourController.insertImageTour]);
    app.put('/api/tour/chuongtrinh/:id',[TourController.insertChuongTrinhTour]);
    app.put('/api/tour/giave/:id',[TourController.insertGiaVeTour]);
    app.delete('/api/tour/hinh/:id/:id_hinh',[TourController.deleteHinh]);
    app.delete('/api/tour/chuongtrinh/:id/:id_chuongtrinh',[TourController.deleteChuongTrinh]);
    app.delete('/api/tour/giave/:id/:id_giave',[TourController.deleteGiaVe]);
    app.delete('/api/tour/:id',[TourController.delete]);
    //Giá vé
    app.get('/api/giave',[GiaVeController.list]);
    app.post('/api/giave',[GiaVeController.insert]);
    app.get('/api/giave/:id',[GiaVeController.getbyId]);
    app.put('/api/giave/:id',[GiaVeController.update]);
    app.delete('/api/giave/:id',[GiaVeController.delete]);
    // loai khach
    app.get('/api/loaikhach',[LoaiKhachController.list]);
    //hinh
    app.get('/api/hinh',[HinhController.list]);
    app.post('/api/hinh',[HinhController.insert]);
    //quoc gia
    app.post('/api/quocgia',[QuocGiaController.insert]);
    app.get('/api/quocgia',[QuocGiaController.list]);
    //tinh
    app.get('/api/tinh',[TinhController.list]);
    app.post('/api/tinh',[TinhController.insert]);
    //khach san
    app.get('/api/khachsan',[KhachSanController.list]);
    app.post('/api/khachsan',[KhachSanController.insert]);
    app.get('api/khachsan/:id',[KhachSanController.getbyId]);
    app.put('/api/khachsan/:id',[KhachSanController.update]);
    app.delete('/api/khachsan/:id',[KhachSanController.delete]);
    //dia diem
    app.get('/api/diadiem',[DiaDiemController.list]);
    app.post('/api/diadiem',[DiaDiemController.insert]);
    app.get('/api/diadiem/favourite',[DiaDiemController.listFavourite]);
    app.get('/api/diadiem/:id',[DiaDiemController.getbyId]);
    app.put('/api/diadiem/:id',[DiaDiemController.update]);
    app.delete('/api/diadiem/:id',[DiaDiemController.delete]);

    //Chương trình
    app.post('/api/chuongtrinh',[ChuongTrinhController.insert]);
    app.get('/api/chuongtrinh',[ChuongTrinhController.list]);
    app.get('api/chuongtrinh/:id',[ChuongTrinhController.getbyId]);
    app.put('/api/chuongtrinh/:id',[ChuongTrinhController.update]);
    app.delete('/api/chuongtrinh/:id',[ChuongTrinhController.delete]);
    //Lich khoi hanh
    app.get('/api/lichkhoihanh',[LichKhoiHanhController.list]);
    app.get('/api/lichkhoihanhApp',[LichKhoiHanhController.listApp]);
    app.post('/api/lichkhoihanh',[LichKhoiHanhController.insert]);

    app.get('/api/lichkhoihanh/tour/:id',[LichKhoiHanhController.getByTour]);
    app.get('/api/lichkhoihanh/:id',[LichKhoiHanhController.getbyId]);
    app.put('/api/lichkhoihanh/:id',[LichKhoiHanhController.update]);
    app.delete('/api/lichkhoihanh/:id',[LichKhoiHanhController.delete]);
    app.get('/api/lichkhoihanh/tourchot/giochot',[LichKhoiHanhController.tourgiochot]);
    app.post('/api/lichkhoihanh/search',[LichKhoiHanhController.search]);
    //Khách hàng
    app.get('/api/khachhang',[KhachHangController.list]);
    app.post('/api/khachhang',[KhachHangController.insert]);
    app.get('api/khachhang/:id',[KhachHangController.getbyId]);
    app.put('/api/khachhang/:id',[KhachHangController.update]);
    app.delete('/api/khachhang/:id',[KhachHangController.delete]);
    //Loai tt
    app.get('/api/loaitt',[LoaiTTController.list]);
    app.post('/api/loaitt',[LoaiTTController.insert]);
    //chi tiet
    app.get('/api/chitiet',[ChiTietController.list]);
    app.post('/api/chitiet',[ChiTietController.insert]);
    //Tour dat
    app.get('/api/tourdat',[TourDatController.list]);
    app.post('/api/tourdat',[TourDatController.insert]);
    app.post('/api/tourdat/book',[TourDatController.bookTour]);
    
}