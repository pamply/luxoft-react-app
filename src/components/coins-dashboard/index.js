import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { graphql } from "@apollo/react-hoc";

import {
  ticketsQuery,
  ordersQuery,
  placeOrderMutation,
  removeOrderMutation
} from "./graphql";

class Coins extends React.Component {
  handleBuy = ticker => {
    this.props.placeOrder({
      variables: {
        amount: 1,
        price: ticker.price,
        exchange: ticker.exchange
      }
    });
  };

  handleRemove = order => {
    this.props.removeOrder({
      variables: {
        orderId: order.id
      }
    });
  };

  handleRefetch = () => {
    this.props.tickers.refetch();
  };

  handleNavigate = () => {
    this.props.history.push("/back");
  };

  render() {
    const tickers = this.props.tickers.tickers || [];
    const orders = this.props.orders.orders || [];

    return (
      <div>
        <h2>Tickers</h2>
        <button onClick={this.handleRefetch}>Refetch</button>
        <button onClick={this.handleNavigate}>Navigate</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Exchange</th>
              <th scope="col">Currency</th>
              <th scope="col">Volume</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickers.map(ticker => (
              <tr key={ticker.exchange}>
                <th scope="row">{ticker.exchange}</th>
                <td>{ticker.currency}</td>
                <td>{ticker.volume}</td>
                <td>{ticker.price}</td>
                <td>
                  <button onClick={() => this.handleBuy(ticker)}>Buy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Exchange</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <th scope="row">{order.exchange}</th>
                <td>{order.amount}</td>
                <td>{order.price}</td>
                <td>
                  <button onClick={() => this.handleRemove(order)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export const CoinsDashboard = compose(
  graphql(ordersQuery, {
    name: "orders",
    options: { fetchPolicy: "cache-first" }
  }),
  graphql(ticketsQuery, {
    name: "tickers",
    options: { fetchPolicy: "cache-first" }
  }),
  graphql(placeOrderMutation, {
    name: "placeOrder",
    options: {
      // refetchQueries: ["getOrders"]
      update: (proxy, { data: { placeOrder } }) => {
        const data = proxy.readQuery({ query: ordersQuery });
        proxy.writeQuery({
          query: ordersQuery,
          data: { ...data, orders: [...data.orders, placeOrder] }
        });
      }
    }
  }),
  graphql(removeOrderMutation, {
    name: "removeOrder",
    options: {
      // refetchQueries: ["getOrders"]
      update: (proxy, { data: { removeOrder } }) => {
        const data = proxy.readQuery({ query: ordersQuery });
        const orders = data.orders.filter(n => n.id !== removeOrder);
        proxy.writeQuery({
          query: ordersQuery,
          data: { ...data, orders }
        });
      }
    }
  })
)(Coins);

Coins.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
