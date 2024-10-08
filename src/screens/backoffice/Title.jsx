import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title(props) {
  const { children, style } = props;

  return (
    <Typography component="h2" variant="h1" color="primary" gutterBottom style={style}>
      {children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object, // Prop for passing styles
};

export default Title;
