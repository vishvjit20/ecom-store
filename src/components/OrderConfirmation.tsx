import moment from "moment";

const OrderConfirmation = (props: any) => {
  const orderID = props.match.params.id;
  const orderData = JSON.parse(localStorage.getItem("cart")!)?.filter(
    (data: any) => data?.id === Number(orderID)
  );
  const filteredCartItems = JSON.parse(localStorage.getItem("cart")!)?.filter(
    (data: any) => data?.id !== Number(orderID)
  );
  localStorage.setItem("cart", JSON.stringify([...filteredCartItems]));
  return (
    <div>
      <h2>Order Confirmed!</h2>
      <div className="item" key={orderData[0]?.id}>
        <img src={orderData[0]?.image} alt="" />
        <p>
          Total : {orderData[0]?.quantity} X {orderData[0]?.price} ={" "}
          {orderData[0]?.total}
        </p>
        <p>{orderData.category}</p>
        <p>Date of delivery : </p> {moment(new Date()).toISOString()}
      </div>
    </div>
  );
};

export default OrderConfirmation;
