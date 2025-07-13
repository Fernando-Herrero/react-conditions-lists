import "./PizzaOrdersList.css";

export const PizzaOrdersList = ({
	pendingOrders,
	pendindOrderList,
	completeOrders,
	completeOrderList,
	totalAmount,
}) => {
	return (
		<div className="pizza-orders-list-container">
			<section className="pizza-orders-list-container">
				<h2 className="title-list">Pending Orders:</h2>
				{pendingOrders.length === 0 && <p className="no-order-message">There isn't any order pending</p>}
				{pendingOrders.length > 0 && <ul className="pizza-orders-list">{pendindOrderList}</ul>}
			</section>

			<section className="-pizza-orders-list-container">
				<h2 className="title-list">Complete Orders:</h2>
				{completeOrders.length === 0 && <p className="no-order-message">There isn't any order complete</p>}
				{completeOrders.length > 0 && (
					<div>
						<ul className="pizza-orders-list">{completeOrderList}</ul>
						<span className="complete-orders-total-amount">
							Total Completed Orders: {completeOrders.length} | Total Amount: {totalAmount}€
						</span>
					</div>
				)}
			</section>
		</div>
	);
};
