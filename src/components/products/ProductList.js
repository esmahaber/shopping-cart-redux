import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import {
  Badge,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
} from "reactstrap";
class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  render() {
    return (
      <div>
        <h3>
          <Badge color="light">Product</Badge> -
          <Badge color="warning">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <Row>
          {this.props.products.map((product) => (
            <Col >
              <Card key={product.id}>
                <CardImg
                  top
                  width="100%"
                  src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/open_box4-512.png"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{product.productName}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Price - {product.unitPrice}
                  </CardSubtitle>
                  <CardText>{product.quantityPerUnit}</CardText>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Stock - {product.unitsInStock}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
