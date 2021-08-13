/* eslint-disable no-unreachable */
import Item from './User'
import propTypes from 'prop-types'
import {Component} from "react";

class ShopItemClass extends Component  {
  render() {
    return (
      <>
        <div className="ImgContainer">
          <img src={this.props.item.itemBlack} alt='black' className="Img" />
        </div>
        <div className="main-content_container">
          <div className="main-content">
            <div className="headerWrapper">
              <h2>{this.props.item.brand}</h2>
              <h1>{this.props.item.title}</h1>
              <h3>{this.props.item.description}</h3>
            </div>
            <div className="description-container">
              <div className="description">
                {this.props.item.descriptionFull}
              </div>
            </div>
              <div className="purchase-info">
                <div className="price-container">
                  <p className="price">{this.props.item.currency}{this.props.item.price}.00</p>
                </div>
                <button className="button">Добавить в корзину</button>
              </div>
            </div>
        </div>
      </>
    );
  }
}

ShopItemClass.propTypes = {
  item: propTypes.instanceOf(Item).isRequired
}

export default ShopItemClass;