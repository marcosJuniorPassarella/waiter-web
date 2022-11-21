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
  function handleOpenModal() {
    setModalVisible(true);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders?.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((e) => (
            <button onClick={handleOpenModal} type="button" key={e?._id}>
              <strong>Mesa {e?.table} </strong>
              <span>{e?.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
