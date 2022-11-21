import { Order } from "../../types/Order";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  function handleOpenModal() {
    alert('Modal')
  }

  return (
    <Board>
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
