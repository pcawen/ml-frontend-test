import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../../action/search';
import { NavLink } from 'react-router-dom';
import Price from '../../common/Price';

class SearchResult extends Component {

  static fetching ({ dispatch, query }) {
    return [dispatch(fetchItems(query.search))];
  }

  componentDidMount() {
    this._fetchItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this._fetchItems();
    }
  }

  _fetchItems = () => {
    const values = queryString.parse(this.props.location.search);
    this.props.fetchItems(values.search);
  }

  render() {
    const { items: { isFetching, data } } = this.props;

    return (
      <div className="items-container">
        <ul>
        {data.items && data.items.map(item => {
          return (
            <li key={item.id} >
              <NavLink className="item" to={`/items/${item.id}`}>
                <div className="item__picture">
                  <img src={item.picture} alt="product image"/>
                </div>
                <div className="item__data">
                  <div className="item__data__price">
                    <Price {...item.price}/>
                    { item.free_shipping && <img src="../../../img/ic_shipping.png" alt=""/> }
                  </div>
                  <span>{item.title}</span>
                  <span>{item.condition}</span>
                </div>
                <div className="item__location">
                  <span>{item.state_name}</span>
                </div>
              </NavLink>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: bindActionCreators(fetchItems, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);