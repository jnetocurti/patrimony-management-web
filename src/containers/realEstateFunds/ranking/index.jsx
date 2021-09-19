import React from 'react';

import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Link,
  makeStyles
} from '@material-ui/core';

import PropTypes from 'prop-types';
import Page from 'src/components/Page';
import { ScreenLoading } from 'src/components/ui/ScreenLoading';
import Connect from 'src/store/connect';

import Results from './components/Results';
import Toolbar from './components/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: theme.palette.background.dark
  },
  container: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

const title = 'Fundos Imobiliários';
const breadcrumbs = (
  <Breadcrumbs>
    <Link href="/app/real-estate-funds">{title}</Link>
  </Breadcrumbs>
);

const RealEstateFunds = ({ globalLoading }) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title={title}>
      <ScreenLoading loading={globalLoading} />
      <Container className={classes.container} maxWidth={false}>
        <Card>
          <CardHeader title={breadcrumbs} />
          <Divider variant="middle" />
          <CardContent>
            <Box>
              <Card>
                <CardContent>
                  <Toolbar />
                  <Box mt={3}>
                    <Results />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

RealEstateFunds.propTypes = {
  globalLoading: PropTypes.bool
};

const mapStateToProps = ({ rootStore: { globalLoading } }, props) => {
  return { globalLoading, ...props };
};

export default Connect(mapStateToProps)(RealEstateFunds);
