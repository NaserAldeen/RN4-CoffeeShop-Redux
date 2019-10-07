import React, { Component } from "react";
import { connect } from "react-redux";
import { checkoutCart } from "../../store/actions/coffeeActions";
// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";

class CoffeeCart extends Component {
  render() {
    let items = this.props.items;
    let cartItems;
    if (items) {
      cartItems = items.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }
    const handlePress = () => {
      this.props.checkout();
      if (items.length > 0) alert("Thank you for your purchase :)");
    };
    return (
      <List>
        {cartItems}
        <Button onPress={() => handlePress()} full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cartReducer.items
});
const mapDispatchToProps = dispatch => {
  return {
    checkout: () => dispatch(checkoutCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeCart);
