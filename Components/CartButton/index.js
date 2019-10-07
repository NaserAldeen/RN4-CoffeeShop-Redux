import React, { Component } from "react";
import { Icon, Text, View } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
class CartButton extends Component {
  render() {
    const items = this.props.items;
    let itemsCounter = 0;
    items.forEach(item => {
      itemsCounter = itemsCounter + item.quantity;
    });
    return (
      <View>
        <Text>{itemsCounter}</Text>
        <Icon
          onPress={() => this.props.navigation.navigate("CoffeeCart")}
          name="shoppingcart"
          type="AntDesign"
          style={{ marginRight: 20 }}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  items: state.cartReducer.items
});
export default withNavigation(connect(mapStateToProps)(CartButton));
