import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';
import { Apartment as ApartmentIcon, ListOutlined } from '@material-ui/icons';

import PropTypes from 'prop-types';

import NavItem from './NavItem';

const items = [
  {
    open: true,
    icon: ApartmentIcon,
    title: 'Fundos imobiliários',
    href: '/app/real-estate-funds/ranking',
    subItems: [
      {
        icon: ListOutlined,
        title: 'Ranking',
        href: '/app/real-estate-funds/ranking'
      },
      {
        icon: ListOutlined,
        title: 'Transações',
        href: '/app/real-estate-funds/transactions'
      }
    ]
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 225
  },
  desktopDrawer: {
    top: 64,
    width: 225,
    height: 'calc(100% - 64px)'
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem key={item.title} config={item} />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
