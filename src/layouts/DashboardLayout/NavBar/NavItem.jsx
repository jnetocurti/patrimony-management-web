import React, { useState, Fragment } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import {
  Button,
  Collapse,
  List,
  ListItem,
  makeStyles
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0)
  },
  nested: {
    display: 'flex',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(2)
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: theme.spacing(0),
    padding: '8px 6px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const NavItem = ({ config }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(config.open || false);

  const handleClick = () => setOpen(!open);

  const createItem = (options) => {
    const Icon = options.icon;
    const itemClass = options.isParent ? classes.item : classes.nested;
    return (
      <>
        <ListItem
          disableGutters
          className={clsx(itemClass)}
          onClick={options.handleClick}
        >
          <Button
            to={options.href}
            component={RouterLink}
            className={classes.button}
            activeClassName={classes.active}
          >
            {Icon && <Icon className={classes.icon} size="20" />}
            <span className={classes.title}>{options.title}</span>
          </Button>
          {options.isParent
            && options.subItems
            && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {options.subItems && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {options.subItems.map((item) => (
                <Fragment key={item.title}>
                  {createItem({
                    isParent: false,
                    href: item.href,
                    icon: item.icon,
                    title: item.title
                  })}
                </Fragment>
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  };

  return (
    <>
      {createItem({
        handleClick,
        href: config.href,
        icon: config.icon,
        title: config.title,
        subItems: config.subItems,
        isParent: !!config.subItems
      })}
    </>
  );
};

NavItem.propTypes = {
  config: PropTypes.shape({
    open: PropTypes.bool,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    subItems: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired
      })
    )
  })
};

export default NavItem;
