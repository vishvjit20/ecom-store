const OrderConfirmation = (props: any) => {
  const orderID = props.match.params.id;
  const orderData = JSON.parse(localStorage.getItem("cart")!);
  const filteredData = orderData?.filter(
    (data: any) => data?.id === Number(orderID)
  );
  console.log(orderData);
  return <div>{JSON.stringify(filteredData)}</div>;
};

export default OrderConfirmation;
