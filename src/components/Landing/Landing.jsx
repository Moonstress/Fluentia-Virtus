import React from 'react';
import PropTypes from 'prop-types';
//import './Landing.css'; // Make sure to import the CSS for styling

/**
 * Displays the landing page with a background image.
 *
 * @component
 * @return {JSX.Element} Landing component
 */
const Landing = () => {
  return (
    <div>
      <div className="background-image" />
    </div>
  );
};

// You might want to add PropTypes here if you're using any props in the future
// Landing.propTypes = {
//   ExampleProp: PropTypes.string.isRequired,
// };

export default Landing;
