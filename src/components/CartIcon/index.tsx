import * as S from "./styles";
import ShoppingBagIcon from "components/Icons/ShoppingBagIcon";

type CartIconProps = {
  items: number;
};
const CartIcon = ({ items }: CartIconProps) => (
  <S.Wrapper aria-label="Open Cart">
    <ShoppingBagIcon />
    {!!items && <S.Counter aria-label="items in cart">{items}</S.Counter>}
  </S.Wrapper>
);

export default CartIcon;
