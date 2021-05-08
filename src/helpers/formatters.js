const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

export const formatCurrency = (value) => {
  if (!value) return null;
  return currencyFormatter.format(Number(value));
};

const percentageFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const formatPercentage = (value) => {
  if (!value) return null;
  return percentageFormatter.format(Number(value) / 100);
};

export const formatDecimalTwoPlaces = (value) => {
  if (!value) return null;
  return parseFloat(value).toFixed(2);
};
