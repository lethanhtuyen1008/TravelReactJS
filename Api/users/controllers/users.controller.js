const UserModel = require("../models/users.model");
const KhachHang = require('../../khachhang/khachhang.model');
const crypto = require("crypto");

exports.insert = (req, res) => {
  let check = false;
  if (
    req.body.email == "" ||
    req.body.email == null ||
    req.body.password == "" ||
    req.body.password == null
  ) {
    res
      .status(500)
      .send({ result: false, errors: "Email or password is null" });
    return;
  } else {
    UserModel.findByEmail(req.body.email).then(result => {
      if (result.length != 0) {
        res.status(200).send({ result: false, errors: "Email is already" });
      } else {
        let salt = crypto.randomBytes(16).toString("base64");
        let hash = crypto
          .createHmac("sha512", salt)
          .update(req.body.password)
          .digest("base64");
        req.body.password = salt + "$" + hash;
        req.body.permissionLevel = 1;
        const kh = new KhachHang();
        kh.tenKH = req.body.firstName;
        kh.email = req.body.email;
        kh.dienthoai = req.body.phone;
        kh.gioitinh = req.body.gender;
        kh.ngaysinh = req.body.ngaysinh;
        kh.diachi = req.body.diachi;
        kh.save();
        req.body.maKH = kh._id;
        let data =  kh.save();
        UserModel.createUser(req.body).then(result => {
          res.status(201).send({ result: true, id: result._id });
        });
      }
    });
  }
  //test git
};

exports.list = (req, res) => {
  let limit =
    req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  UserModel.list(limit, page).then(result => {
    res.status(200).send(result);
  });
};

exports.getById = (req, res) => {
  UserModel.findById(req.jwt.userId).then(result => {
    res.status(200).send(result);
  });
};
exports.patchById = (req, res) => {
  if (req.body.password) {
    let salt = crypto.randomBytes(16).toString("base64");
    let hash = crypto
      .createHmac("sha512", salt)
      .update(req.body.password)
      .digest("base64");
    req.body.password = salt + "$" + hash;
  }

  UserModel.patchUser(req.params.userId, req.body).then(result => {
    res.status(204).send({});
  });
};

exports.removeById = (req, res) => {
  UserModel.removeById(req.params.userId).then(result => {
    res.status(204).send({});
  });
};
