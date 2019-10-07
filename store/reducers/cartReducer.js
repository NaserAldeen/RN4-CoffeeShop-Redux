import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      let items;
      if (
        state.items.find(
          item => item.drink == payload.drink && item.option == payload.option
        )
      ) {
        items = state.items.map(item => {
          if (item.drink == payload.drink && item.option == payload.option) {
            item.quantity = item.quantity + 1;
          }
          return item;
        });
      } else {
        items = state.items;
        let newItem = payload;
        newItem.quantity = 1;
        items = items.concat(newItem);
      }

      return {
        ...state,
        items: [...items]
      };
    case REMOVE_ITEM:
      let newItems = state.items.filter(item => {
        if (item.drink !== payload.drink || item.option !== payload.option) {
          return item;
        }
      });
      return {
        ...state,
        items: [...newItems]
      };
    case CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export default cartReducer;
