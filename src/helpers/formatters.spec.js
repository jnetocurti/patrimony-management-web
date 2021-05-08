import {
  formatCurrency,
  formatDecimalTwoPlaces,
  formatPercentage
} from './formatters';

describe('src/helpers/formatters', () => {
  it('should format as a Currency', () => {
    expect(formatCurrency(null)).toBeNull();
    expect(formatCurrency(1.2)).toBe('R$ 1,20');
  });

  it('should format as a Percentage', () => {
    expect(formatPercentage(null)).toBeNull();
    expect(formatPercentage(0.447427293064877)).toBe('0,45%');
  });

  it('should format as a Decimal Two Places', () => {
    expect(formatDecimalTwoPlaces(null)).toBeNull();
    expect(formatDecimalTwoPlaces(0.447427293064877)).toBe('0.45');
  });
});
