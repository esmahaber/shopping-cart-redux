import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Badge, Button } from "reactstrap";
import alertify from "alertifyjs";

class CartDetails extends Component {
  removeToCart = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.error("Ürün Silindi");
  };
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          {this.props.cart.map((cartItem) => (
            <tbody key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <h4>
                  <Button color="danger" onClick={() => this.removeToCart(cartItem.product)}>
                    Sil
                  </Button>
                </h4>
              </td>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
