export { CartProduct } from './ui/CartProduct';

// redux
export { cartActions, cartReducer, cartSlice } from './model/cart.slice';
export { getCartItems } from './model/selectors';

// types
export {
   type CartSliceTypes,
   type ICartProduct,
   type IncOrDecPayloadType,
} from './model/types';
