import { checkPropTypes } from 'prop-types';
import React from 'react';
import Navigation from './Navigation';

const PageLayout = (props) => {
    return (
        <div>
            <Navigation />
            {props.children}
        </div>
    )
}

export default PageLayout;
