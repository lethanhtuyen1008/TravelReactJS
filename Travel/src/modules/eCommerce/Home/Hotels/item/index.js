import React from "react";
import { Button } from "antd";
const Index = props => {
  return (
    <div className={`gx-product-row even`}>
      <div className="gx-product-col gx-product-thumb ">
        <div className="gx-grid-thumb-equal">
          <span className="gx-link gx-grid-thumb-cover">
            <img
              alt="Special Edition Party Spas"
              src="https://cdn.wallpapersafari.com/65/60/Cu4Uzk.jpg"
            />
          </span>
        </div>
      </div>
      <div className="gx-product-col gx-product-content">
        <h2>Khách sạn ánh trăng</h2>
        <p>
          Bạn có phải là người am hiểu công nghệ? Hãy tưởng tượng phòng nổi bật,
          tiện lợi và linh hoạt được cung cấp Điện thoại di động tiện dụng, Ứng
          dụng tự phục vụ và Kiosk cung cấp dịch vụ điện tử với quy trình tự
          kiểm tra trực tiếp nhanh chóng, liền mạch và cho phép bạn gọi và kết
          nối dễ dàng để làm phong phú thêm toàn bộ trải nghiệm hành trình của
          bạn . Cho dù đó là cho kinh doanh hay giải trí, hãy giữ Citlist Hotels
          trong danh sách đầu tiên của bạn hoặc chọn phòng của bạn ngay lập tức!
        </p>
        <Button type="primary">Xem chi tiết</Button>
      </div>
    </div>
  );
};
export default Index;
