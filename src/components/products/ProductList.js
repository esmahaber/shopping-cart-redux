import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

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
  CardFooter,
} from "reactstrap";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success("Sepete Eklendi");
  };

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
            <Col key={product.id}>
              <Card
                className="mb-5"
                style={{ height: "450px", width: "180px" }}
              >
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
                <CardFooter>
                  <Button
                    color="success"
                    onClick={() => this.addToCart(product)}
                  >
                    Ekle
                  </Button>
                </CardFooter>
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
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
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
