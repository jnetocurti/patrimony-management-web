const fundsList = [
  {
    id: '60ce09a9ac4f8be3e9f0f1a5',
    code: 'HSML11',
    sector: 'SHOPPINGS',
    currentPrice: 87.85,
    dailyLiquidity: 26436,
    dividend: 0.16,
    dividendYield: 0.0018,
    dividendYieldThreeMonthsAccumulated: 0.0113,
    dividendYieldSixMonthsAccumulated: 0.0267,
    dividendYieldTwelveMonthsAccumulated: 0.0428,
    dividendYieldThreeMonthsAverage: 0.0038,
    dividendYieldSixMonthsAverage: 0.0036,
    dividendYieldTwelveMonthsAverage: 0.0045,
    liquidPatrimony: 1533108424.8,
    patrimonyValue: 97.15,
    patrimonyValueByPrice: 0.9,
    dividendYieldPatrimonyValue: null,
    physicalVacancy: 0.055,
    financialVacancy: null,
    activeQuantity: 5
  },
  {
    id: '60ce09a9ac4f8be3e9f0f195',
    code: 'XPLG11',
    sector: 'LOGÍSTICA',
    currentPrice: 114.82,
    dailyLiquidity: 48524,
    dividend: 0.59,
    dividendYield: 0.0051,
    dividendYieldThreeMonthsAccumulated: 0.0147,
    dividendYieldSixMonthsAccumulated: 0.0285,
    dividendYieldTwelveMonthsAccumulated: 0.0559,
    dividendYieldThreeMonthsAverage: 0.0049,
    dividendYieldSixMonthsAverage: 0.0047,
    dividendYieldTwelveMonthsAverage: 0.0048,
    liquidPatrimony: 3001645978.98,
    patrimonyValue: 110.76,
    patrimonyValueByPrice: 1.04,
    dividendYieldPatrimonyValue: null,
    physicalVacancy: 0.082,
    financialVacancy: 3.2,
    activeQuantity: 13
  }
];

const mock = jest.createMockFromModule('src/api/realEstateFunds').default;

mock.findAll = () => ({ data: fundsList });

mock.importFunds = () => ({ data: fundsList });

export default mock;
