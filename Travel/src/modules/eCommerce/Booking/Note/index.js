import React from "react";
import {Icon, Card } from 'antd';

const Index = () => {
  return (
    <Card className="gx-card-widget gx-card-full gx-dot-arrow-hover">
      <div className="gx-user-wid-row">
        <div className="gx-user-wid gx-mr-3">
          <Icon
            type="exclamation"
            style={{ fontSize: 60, padding: 20, color: "#0B6121" }}
            className="gx-object-cover"
          />
        </div>
        <div className="gx-user-wid-body gx-py-3 gx-pr-3">
          <div className="ant-row-flex">
            <h2 className="h4 gx-mr-1 gx-mb-1">
              Khách nữ từ 55 tuổi trở lên, khách nam từ 60 tuổi trở lên đi tour
              một mình và khách mang thai trên 4 tháng (16 tuần) vui lòng đăng
              ký tour trực tiếp tại văn phòng của Travel. Không áp dụng đăng ký
              tour online đối với khách từ 70 tuổi trở lênn
            </h2>
          </div>
          <p className="gx-mb-1 gx-text-grey gx-fs-sm">
            Ghi chú
            <br />
          </p>
          <div className="gx-dot-arrow">
            <div className="gx-bg-danger gx-hover-arrow">
              <i className="icon icon-long-arrow-right gx-text-white" />
            </div>
            <div className="gx-dot">
              <i className="icon icon-ellipse-v gx-text-primary" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Index;