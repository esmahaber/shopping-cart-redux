import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Link} from "react-router-dom"
import * as cartActions from "../../redux/actions/cartActions";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

class CartSummary extends Component {
  emptyCart() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepet
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge color="warning">{cartItem.quantity}</Badge>
              <Badge
                color="danger"
                onClick={() =>
                  this.props.actions.removeFromCart(cartItem.product)
                }
              >
              -
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to = {"/cart"}>Sepete Git</Link> </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.emptyCart()}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
