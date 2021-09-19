import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Link,
  makeStyles,
  Typography
} from '@material-ui/core';

import Page from 'src/components/Page';
import AddButton from 'src/components/ui/buttons/AddButton';
import DataGrid from 'src/components/ui/DataGrid';
import SearchInput from 'src/components/ui/SearchInput';

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

const title = 'Transações';
const breadcrumbs = (
  <Breadcrumbs>
    <Typography>Fundos Imobiliários</Typography>
    <Link href="/app/real-estate-funds/transactions">{title}</Link>
  </Breadcrumbs>
);

const Transactions = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title={title}>
      <Container className={classes.container} maxWidth={false}>
        <Card>
          <CardHeader title={breadcrumbs} />
          <Divider variant="middle" />
          <CardContent>
            <Box>
              <Card>
                <CardContent>
                  <Grid container justify="space-between">
                    <Grid item xs={12} md={6}>
                      <SearchInput placeholder="Pesquisar por Ticker ou Observação" />
                    </Grid>
                    <Grid item>
                      <RouterLink to="/app/real-estate-funds/transactions/register">
                        <AddButton title="Adicionar nota negociação" />
                      </RouterLink>
                    </Grid>
                  </Grid>
                  <Box mt={3}>
                    <div style={{ height: 350, width: '100%' }}>
                      <DataGrid
                        columns={[
                          { field: 'code', headerName: 'Código' },
                          { field: 'operation', headerName: 'Operação' },
                          { field: 'date', headerName: 'Data' },
                          { field: 'quantity', headerName: 'Qtd' },
                          { field: 'price', headerName: 'Preço' },
                          { field: 'costs', headerName: 'Custos' },
                          { field: 'total', headerName: 'Total' },
                          { field: 'observation', headerName: 'Observação' }
                        ]}
                        rows={[
                          {
                            id: 1,
                            code: 'HSML11',
                            operation: 'Compra',
                            date: '17/12/2020',
                            quantity: 10,
                            price: 95.45,
                            costs: 0.34,
                            total: 954.84,
                            observation: ''
                          },
                          {
                            id: 2,
                            code: 'XPLG11',
                            operation: 'Compra',
                            date: '17/12/2020',
                            quantity: 10,
                            price: 95.45,
                            costs: 0.34,
                            total: 954.84,
                            observation: ''
                          }
                        ]}
                      />
                    </div>
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

export default Transactions;
