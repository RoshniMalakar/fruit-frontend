const products = [];
const Reducers = (state = { products }, Action) => {
  switch (Action.type) {
    case "success":
      return { products: Action.payload };
      break;
    case "fail":
      return { products: Action.payload };
      break;
    default:
      return state;
  }
};
export default Reducers;
