import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions";

class CartDetails extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
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
