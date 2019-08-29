import React, { Component } from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../../action/search';
import { NavLink } from 'react-router-dom';

class SearchResult extends Component {

  static fetching ({ dispatch, query }) {
    return [dispatch(fetchItems(query.search))];
  }

  componentDidMount() {
    console.log('componentDidMount')
    // if (!this.props.items.data) {
      this._fetchItems();
    // }
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate')
    if (this.props.location.search !== prevProps.location.search) {
      this._fetchItems();
    }
  }

  _fetchItems = () => {
    console.log('_fetchItems')
    const values = queryString.parse(this.props.location.search);
    console.log('values: ', values);
    this.props.fetchItems(values.search);
  }

  render() {
    const { items: { isFetching, data } } = this.props;
    console.log('Render: ',data);

    return (
      <div>
        <div>Search result</div>
        {<ul>
        {data.items && data.items.map(item => {
          return (
            <li key={item.id} >
              <div>
                <NavLink to={`/items/${item.id}`}>
                  <div>
                    <span>{item.title}</span>
                    <br/>
                    <span>Price</span>
                    <span>{item.price.currency}</span>
                    <span>{item.price.amount}</span>
                    <span>{item.price.decimals}</span>
                    <br/>
                    <span>{item.condition}</span>
                    <img src={item.picture} alt="product image"/>
                    <span>Free shipping:{item.free_shipping}</span>
                  </div>
                </NavLink>
              </div>
            </li>
          )
        })}
        </ul>}
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