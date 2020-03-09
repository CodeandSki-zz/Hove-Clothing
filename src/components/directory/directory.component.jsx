import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../menu-item/menu-item.component';
import MenuItem from './../menu-item/menu-item.component';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from './directory.selectors';
import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps}) => (
      <MenuItem key={id} {...otherSectionProps}/>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})



export default connect(mapStateToProps)(Directory);