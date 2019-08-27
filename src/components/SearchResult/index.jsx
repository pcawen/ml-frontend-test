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
    if (!this.props.items.data) {
      this._fetchItems();
    }
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
      <div>
        <div>Search result</div>
        <ul>
        {data.map(item => {
          return (
            <li key={item.id} >
              <NavLink to={`/items/${item.id}`}>
                {item.name}
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