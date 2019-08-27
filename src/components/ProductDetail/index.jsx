import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItem } from '../../action/search';

class ProductDetail extends Component {

  static fetching ({ dispatch, params }) {
    console.log({params})
    return [dispatch(fetchItem(params.id))];
  }

  componentDidMount() {
    console.log('Product id: ',this.props.match.params.id)
    this.props.fetchItem(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div>Product detail</div>
        <span>{this.props.item.id}</span>
        <span>{this.props.item.name}</span>
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