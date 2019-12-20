import React from "react";
import { Table, Card } from 'antd';
const View = (props) => {
    const { data } = props;
    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            align: "center"
        },
        {
            title: 'Order ID',
            align: "center",
            dataIndex: 'order_id'
        },
        {
            title: 'Mã giảm giá',
            align: "center",
            dataIndex: 'PromotionCode'
        },
        {
            title: 'Giảm giá',
            align: "center",
            dataIndex: 'Discount'
        },
        {
            title: 'Tổng tiền',
            align: "center",
            dataIndex: 'Total'
        },
        {
            title: 'Trạng thái',
            align: "center",
            dataIndex: 'Status'
        },
        {
            title: 'Ngày bán',
            align: "center",
            dataIndex: 'CreateAt'
        }
    ];
    const dataID = [
        {
            key: data.key,
            order_id: data.order_id,
            PromotionCode: data.PromotionCode,
            Discount: data.Discount,
            Total: data.Total,
            Status: data.Status,
            CreateAt: data.CreateAt
        }];
    return (
        <Card className="gx-card-widget">
            <div className="gx-table-responsive">
                <Table className="gx-table-no-bordered" columns={columns} dataSource={dataID} style={{ background: "white" }} pagination={false} />
            </div>
        </Card>
    );
}
export default View;