import axios from "axios";
const Action = () => async (dispatch) => {
  try {
    const product = await axios.get(
      "https://fruit-backend-d30x.onrender.com/getProducts",
    );
    const res = product.data;
    dispatch({ type: "success", payload: res });
  } catch (error) {
    dispatch({ type: "fail", payload: error.message });
  }
};
export default Action;
