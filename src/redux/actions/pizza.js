//import axios from "axios";
import data from "../../api/db.json";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizza = (sortBy, category) => (dispatch) => {
  dispatch({
    type: "SET_LOADED",
    payload: false,
  });

  // axios
  //   .get(
  //     `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
  //       sortBy.order
  //     }`,
  //   )
  //   .then(({ data }) => {
  //     dispatch(setPizzas(data));
  //   });
  dispatch(setPizza(data.pizzas));
};

export const setPizza = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
