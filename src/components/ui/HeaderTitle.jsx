import React, { memo } from 'react';

import { Typography } from '@material-ui/core';

import PropTypes from 'prop-types';

const HeaderTitle = memo(({ title, subTitle }) => {
  return (
    <>
      <Typography variant="h5">{title}</Typography>
      {subTitle && (
        <Typography variant="body1" color="textSecondary">
          {subTitle}
        </Typography>
      )}
    </>
  );
});

HeaderTitle.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default HeaderTitle;
