import React, { Component } from "react";
import styles from "./ProductItem.module.css";
class ProductItem extends Component {
  // state = { isItem: false };
  // showItem = () => {
  //   this.setState({
  //     isShowItem: true,
  //   });
  // };
  render() {
    const { name, price, image } = this.props.item;
    return (
      <div className={styles.item}>
        <img className={styles.img} alt="" src={image} />
        <h2>Tên:{name}</h2>
        <h4 style={{ marginTop: "40px" }}>Giá:{price}</h4>
        <button
          onClick={() => this.props.addToCart(this.props.item)}
          className={styles.btn}
        >
          <span>Thêm vào giỏ</span>
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            this.props.setSelectedItem(this.props.item);
          }}
          className={styles.btn}
        >
          <span>Xem chi tiết</span>
        </button>
      </div>
    );
  }
}

export default ProductItem;
