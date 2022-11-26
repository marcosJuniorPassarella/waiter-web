import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard/index";
import { Order } from "../../types/Order";

const orders: Order[] = [
  {
    _id: "637574f256672bca8e8bd0f7",
    table: "123",
    status: 'WAITING',
    products: [
      {
        product: {
          name: "Pizza Quatro Queijos",
          imagePath: "1668547752493-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "637574f256672bca8e8bd0f8",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard orders={orders} icon="🕑" title="Fila de espera" />
      <OrdersBoard orders={[]} icon="👨‍🍳" title="Em preparação" />
      <OrdersBoard orders={[]} icon="✅" title="Pronto" />
    </Container>
  );
}
