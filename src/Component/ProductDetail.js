import React, { Component } from "react";
class ProductDetail extends Component {
  render() {
    const { name, image, price, description, quantity } = this.props.item;
    return (
      <div
        className="w-50 bg-white position-absolute p-5"
        style={{
          border: "1px solid red",
          padding: 30,
          display: "block",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <button
          onClick={this.props.hideItems}
          className="btn btn-dark position-absolute"
          style={{
            top: 20,
            right: 20,
          }}
        >
          X
        </button>
        <h1 style={{ fontWeight: "900" }}>Tên Sản phẩm: {name} </h1>
        <img alt="" src={image} />
        <h4>Giá: {price} </h4>
        <h4>Mô tả: {description} </h4>
        <h4>Số lượng : {quantity}</h4>
      </div>
    );
  }
}

export default ProductDetail;
