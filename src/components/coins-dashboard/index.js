import React from "react";
import PropTypes from "prop-types";

class Coins extends React.Component {
  render() {
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
            <tr>
              <th scope="row">exchange</th>
              <td>currency</td>
              <td>volume</td>
              <td>price</td>
              <td>
                <button>Buy</button>
              </td>
            </tr>
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
            <tr>
              <th scope="row">exchange</th>
              <td>amount</td>
              <td>price</td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export const CoinsDashboard = Coins;

Coins.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
