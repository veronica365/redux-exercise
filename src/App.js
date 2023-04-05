import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import { calculateTotals, getCartItems } from "./feature/cart/cartSlice";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main className="App">
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
