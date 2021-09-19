import React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid
} from '@material-ui/core';

import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import AddButton from 'src/components/ui/buttons/AddButton';
import HeaderTitle from 'src/components/ui/HeaderTitle';
import CurrencyField from 'src/components/ui/inputs/CurrencyField';
import DateField from 'src/components/ui/inputs/DateField';
import IntegerField from 'src/components/ui/inputs/IntegerField';
import SelectField from 'src/components/ui/inputs/SelectField';
import TextField from 'src/components/ui/inputs/TextField';
import Connect from 'src/store/connect';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  date: Yup.date().required('Data do pregão é obrigatório'),
  totalPrice: Yup.number()
    .min(1, 'Deve ser maior que 1')
    .required('Total com taxas é obrigatório'),
  code: Yup.string()
    .matches(/^[A-Z]{4}\d{2}$/, 'Formato inválido')
    .required('Codigo é obrigatório'),
  operation: Yup.string().required('Operação é obrigatório'),
  quantity: Yup.number()
    .min(1, 'Deve ser maior que 1')
    .required('Quantidade é obrigatório'),
  price: Yup.number()
    .min(1, 'Deve ser maior que 1')
    .required('Preço é obrigatório')
});

const TradingNoteForm = ({ formData, operations, dispatch }) => {
  const onSubmit = (data) => {
    dispatch({ type: 'addItem', payload: data });
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={schema}
      initialValues={formData}
    >
      {({ values, errors, touched, handleChange }) => (
        <Form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Card>
                <CardHeader
                  title="Dados da nota"
                  subheader="Inserir a data do pregão e o valor total da nota"
                />
                <Divider variant="middle" />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={6} md={2}>
                      <DateField
                        required
                        name="date"
                        value={values.date}
                        label="Data do pregão"
                        onChange={handleChange}
                        helperText={touched.date && errors.date}
                        error={Boolean(touched.date && errors.date)}
                      />
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <CurrencyField
                        required
                        name="totalPrice"
                        value={values.totalPrice}
                        label="Total com taxas"
                        onChange={handleChange}
                        helperText={touched.totalPrice && errors.totalPrice}
                        error={Boolean(touched.totalPrice && errors.totalPrice)}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Divider />
                      <HeaderTitle
                        title="Dados dos lançamentos da nota"
                        subTitle="Inserir o código do fundo, operação, quantidade e valor unitário"
                      />
                    </Grid>
                    <Grid item xs={2} md={2}>
                      <TextField
                        required
                        name="code"
                        value={values.code}
                        label="Codigo"
                        onChange={handleChange}
                        helperText={touched.code && errors.code}
                        error={Boolean(touched.code && errors.code)}
                        inputProps={{
                          style: { textTransform: 'uppercase' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={2} md={2}>
                      <SelectField
                        required
                        name="operation"
                        value={values.operation}
                        label="Operação"
                        options={operations}
                        onChange={handleChange}
                        helperText="Selecione tipo da operação"
                        error={Boolean(touched.operation && errors.operation)}
                      />
                    </Grid>
                    <Grid item xs={2} md={2}>
                      <IntegerField
                        required
                        name="quantity"
                        value={values.quantity}
                        label="Qtd"
                        onChange={handleChange}
                        helperText={touched.quantity && errors.quantity}
                        error={Boolean(touched.quantity && errors.quantity)}
                      />
                    </Grid>
                    <Grid item xs={2} md={2}>
                      <CurrencyField
                        required
                        name="price"
                        value={values.price}
                        label="Preço"
                        onChange={handleChange}
                        helperText={touched.price && errors.price}
                        error={Boolean(touched.price && errors.price)}
                      />
                    </Grid>
                    <AddButton type="submit" />
                    {/* <AddButton type="submit" disabled={isSubmitting} /> */}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

TradingNoteForm.propTypes = {
  formData: PropTypes.objectOf(
    PropTypes.shape({
      date: PropTypes.date,
      code: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      operation: PropTypes.string,
      totalPrice: PropTypes.number
    })
  ),
  operations: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ realEstateFundsTransactionsStore }, props) => {
  const {
    tradingNoteForm: { formData, operations }
  } = realEstateFundsTransactionsStore;
  return { formData, operations, ...props };
};

export default Connect(mapStateToProps)(TradingNoteForm);
