import React from 'react';

import {
  Breadcrumbs,
  Container,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';

import Page from 'src/components/Page';

import TradingNoteForm from './components/TradingNoteForm';

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

const title = 'Cadastro transações';
const breadcrumbs = (
  <Breadcrumbs>
    <Typography>Fundos Imobiliários</Typography>
    <Link href="/app/real-estate-funds/transactions">Transações</Link>
    <Link href="/app/real-estate-funds/transactions/register">{title}</Link>
  </Breadcrumbs>
);

const Register = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title={title}>
      <Container className={classes.container} maxWidth={false}>
        {breadcrumbs}
        <br />
        <TradingNoteForm />
      </Container>
    </Page>
  );
};

export default Register;
