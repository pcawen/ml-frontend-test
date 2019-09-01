import React from 'react';
import { connect } from 'react-redux';

const CategoryBreadcrumb = ({ item: { data } }) => {
  return (
    <div>
      { data.categories &&
      <div className="breadcrumb">
        {data.categories.map((cat, idx) => {
          return (
            <span>{cat.name} { idx < data.categories.length - 1 ? ' > ' : ''}</span>
          )
        })}
      </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return { item: state.item };
};

export default connect(mapStateToProps)(CategoryBreadcrumb);