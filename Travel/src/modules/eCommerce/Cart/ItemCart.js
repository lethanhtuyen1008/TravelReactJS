import React, { useState, useMemo, useEffect } from "react";
import { Row, Col, Button, Input, Icon, message } from "antd";
import CurrencyFormat from "react-currency-format";
import SweetAlert from "react-bootstrap-sweetalert";

const ItemCart = props => {
  const [show, setShow] = useState(false);
  return (
    <Row
      className="row-item-cart gx-mb-2 gx-border-bottom gx-no-border-bottom-last-child"
      type="flex"
    >

    </Row>
  );
};

export default ItemCart;
