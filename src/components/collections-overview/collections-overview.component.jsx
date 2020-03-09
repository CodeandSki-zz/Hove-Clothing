import React from 'react';

import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { selectColelctionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherCollectioProps}) => (
            <CollectionPreview key={id} {...otherCollectioProps}></CollectionPreview>
        ))
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectColelctionsForPreview
  });

export default connect(mapStateToProps)(CollectionsOverview); 