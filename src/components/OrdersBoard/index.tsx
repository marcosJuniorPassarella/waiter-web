import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setModalVisible(true);
    setSelectedOrder(order);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} order={selectedOrder} />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders?.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              onClick={() => handleOpenModal(order)}
              type="button"
              key={order?._id}
            >
              <strong>Mesa {order?.table} </strong>
              <span>{order?.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
