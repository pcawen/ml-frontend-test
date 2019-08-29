import React from 'react';
import { connect } from 'react-redux';

const CategoryBreadcrumb = ({ item }) => {
  return (
    <div>
      <span>Breadcrumb:</span>
      <span>{item.id}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { item: state.item };
};

export default connect(mapStateToProps)(CategoryBreadcrumb);