/**
*
* Navigation
*
*/

import React from 'react';


import styles from './styles.css';

function Navigation({ topics }) {
  return (
    <div className={styles.navigation}>
    There are {topics.length} topics in the navigation component.
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
