import { gql } from "apollo-boost";

export const ticketsQuery = gql`
  query getTickers {
    tickers {
      exchange
      volume
      price
      currency
    }
  }
`;

export const ordersQuery = gql`
  query getOrders {
    orders {
      id
      exchange
      amount
      price
    }
  }
`;

export const placeOrderMutation = gql`
  mutation($amount: Float!, $price: Float!, $exchange: String!) {
    placeOrder(amount: $amount, price: $price, exchange: $exchange) {
      id
      exchange
      amount
      price
    }
  }
`;

export const removeOrderMutation = gql`
  mutation($orderId: String!) {
    removeOrder(orderId: $orderId)
  }
`;
