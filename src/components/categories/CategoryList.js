import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>CategoryList</h1>
        <h5>Seçili kategori: {this.props.currentCategory.categoryName}</h5>

        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem key={category.id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
