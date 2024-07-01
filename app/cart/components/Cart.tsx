import useMediaQuery from "../hooks/useMediaQuery";
import CartDrawer from "./CartDrawer";
import CartDialog from "./CartDialog";

const Cart = () => {
  const isDesktop = useMediaQuery("(min-width: 640px)")

  if (isDesktop) {
    return (
      <CartDialog/>
    )
  }

  return (
    <CartDrawer/>
  )

}


export default Cart;
