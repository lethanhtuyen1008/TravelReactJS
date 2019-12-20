import React, { useState, useEffect } from "react";
import { Modal, Form, Select } from 'antd';
import './popUp.less';

const FormItem = Form.Item;
const Option = Select.Option;

const PopUp = (props) => {
  const [ toggleModal, setModal ] = useState({ visible: false });
  const { visible } = toggleModal;

  const handleOk = e => {
    console.log(e);
    setModal({...toggleModal, visible: false});
  };

  const handleCancel = e => {
    console.log(e);
    setModal({...toggleModal, visible: false});
  };

  const {getFieldDecorator} = props.form;

  useEffect(() => {
    setTimeout((() => setModal({...toggleModal, visible: !visible})), 3000);
}, [])

return(
  <Modal
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
    <div className='customer-place-modal'>
      <span>Vui lòng chọn tỉnh thành</span>
      <Form.Item>
        {getFieldDecorator('place', {
          initialValue: 'hanoi'
        })(<Select>
            <Option value="hanoi">Hà Nội</Option>
            <Option value="hochiminh">Tp. Hồ Chí Minh</Option>
            <Option value="kh">Khánh Hoà</Option>
           </Select>)}
      </Form.Item>
    </div>
    </Modal>
)
}
export default Form.create()(PopUp);
