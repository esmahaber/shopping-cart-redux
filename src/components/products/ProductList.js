import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          <Badge color="light">Product</Badge> - <Badge color="warning">{this.props.currentCategory.categoryName}</Badge>
        </h3>        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
export default connect(mapStateToProps)(ProductList);
