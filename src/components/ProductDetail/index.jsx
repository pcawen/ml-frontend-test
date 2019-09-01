import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItem } from '../../action/search';
import Price from '../../common/Price';

class ProductDetail extends Component {

  static fetching ({ dispatch, params }) {
    return [dispatch(fetchItem(params.id))];
  }

  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id);
  }

  render() {
    const { item: { isFetching, data } } = this.props;
    return (
      <div className="item-container">
        { data && data.item && <div className="item-detail">
          <div className="item-main">
            <img src={data.item.picture} alt="product image"/>
            <div>
              <h1>Descripción del producto</h1>
              <p>{data.item.description}</p>
            </div>
          </div>
          <div className="item-side">
            <span>{`${data.item.condition} - ${data.item.sold_quantity} vendidos`}</span>
            <h3>{data.item.title}</h3>
            <Price className="item-detail__price" {...data.item.price}/>
            <input type="submit" className="buy-btn" value="Comprar" />
          </div>
        </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { item: state.item };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: bindActionCreators(fetchItem, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);