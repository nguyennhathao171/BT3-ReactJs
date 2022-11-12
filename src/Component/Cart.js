import React, { Component } from "react";

class Cart extends Component {
  calcTotalAmount = () => {
    return this.props.cart.reduce((total, item) => {
      return total + item.quantity * item.prod.price;
    }, 0);
  };

  render() {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    return (
      <div
        className="position-fixed w-100 h-100 top-0 left-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <div
          className="w-50 bg-white position-absolute p-5"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <button
            onClick={this.props.hideCart}
            className="btn btn-dark position-absolute"
            style={{
              top: 20,
              right: 20,
            }}
          >
            X
          </button>
          <h1 className="text-center fs-3">Giỏ hàng</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Hình Ảnh</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((item) => {
                return (
                  <tr>
                    <td>{item.prod.id}</td>
                    <td>{item.prod.name}</td>
                    <td>
                      <img
                        alt=""
                        src={item.prod.image}
                        style={{ width: 100 }}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          this.props.decreaseQuantity(item.prod.id)
                        }
                        className="btn btn-info"
                      >
                        -
                      </button>
                      <span className="mx-2 fs-5">{item.quantity}</span>
                      <button
                        onClick={() =>
                          this.props.increaseQuantity(item.prod.id)
                        }
                        className="btn btn-info"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </td>
                    <td>${item.prod.price}</td>
                    <td>${item.quantity * item.prod.price}</td>
                    <td>
                      <button
                        onClick={() => this.props.deleteCartItem(item.prod.id)}
                        className="btn btn-danger"
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={7} className="text-end">
                  Total : {this.calcTotalAmount()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;
