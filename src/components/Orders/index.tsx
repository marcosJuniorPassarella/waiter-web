import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard/index";

export function Orders() {
  return (
    <Container>
      <OrdersBoard />
      <OrdersBoard />
      <OrdersBoard />
    </Container>
  );
}
