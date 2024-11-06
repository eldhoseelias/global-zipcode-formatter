// __tests__/index.test.js
const formatZipCode = require('../index');
describe('formatZipCode', () => {

  test('should format Canada zip code correctly', () => {
    const result = formatZipCode('ca', 'M1P 4S4' );
    expect(result).toBe('M1P 4S4');
  });

  test('should format Andorra zip code correctly', () => {
    const result = formatZipCode('ad', '1 2 3');
    expect(result).toBe('123');
  });

  test('should format United Arab Emirates zip code correctly', () => {
    const result = formatZipCode('ae', '12345');
    expect(result).toBe('12345');
  });

  test('should format Afghanistan zip code correctly', () => {
    const result = formatZipCode('af', '1234');
    expect(result).toBe('1234');
  });


  test('should format Afghanistan zip code correctly', () => {
    const result = formatZipCode('af', '1234');
    expect(result).toBe('1234');
  });

  test('should format Albania zip code correctly', () => {
    const result = formatZipCode('al', '4321');
    expect(result).toBe('4321');
  });

  test('should format Armenia zip code correctly', () => {
    const result = formatZipCode('am', '5678');
    expect(result).toBe('5678');
  });

  test('should format Angola zip code correctly', () => {
    const result = formatZipCode('ao', '123456');
    expect(result).toBe('123456');
  });
  test('should format Sweden zip code correctly', () => {
    const result = formatZipCode('se', '12345');
    expect(result).toBe('123 45');
  });


  test('should throw error for invalid zip code length in Andorra', () => {
    expect(() => formatZipCode('ad', '12345')).toThrow('Invalid zip code for ad. The zip code does not match the required format.');
  });

  test('should throw error for invalid zip code format for UAE', () => {
    expect(() => formatZipCode('ae', '1234')).toThrow('Invalid zip code for ae. The zip code does not match the required format.');
  });

  test('should throw error if country code is not found', () => {
    expect(() => formatZipCode('us', '90210')).toThrow('Country code us not found in zip formats.');
  });

  test('should format Andorra zip code correctly', () => {
    const result = formatZipCode('AD', '123');
    expect(result).toBe('123');
  });

  test('should format United Arab Emirates zip code correctly', () => {
    const result = formatZipCode('AE', '12345');
    expect(result).toBe('12345');
  });

  test('should format Afghanistan zip code correctly', () => {
    const result = formatZipCode('AF', '1234');
    expect(result).toBe('1234');
  });

  test('should format Albania zip code correctly', () => {
    const result = formatZipCode('AL', '1234');
    expect(result).toBe('1234');
  });

  test('should format Armenia zip code correctly', () => {
    const result = formatZipCode('AM', '1234');
    expect(result).toBe('1234');
  });

  test('should format Angola zip code correctly', () => {
    const result = formatZipCode('AO', '123456');
    expect(result).toBe('123456');
  });

  test('should format Australia zip code correctly', () => {
    const result = formatZipCode('AU', '3000');
    expect(result).toBe('3000');
  });

  test('should format Brazil zip code correctly', () => {
    const result = formatZipCode('BR', '12345-678');
    expect(result).toBe('12345-678');
  });

  test('should format Canada zip code correctly', () => {
    const result = formatZipCode('CA', 'M1P 4S4');
    expect(result).toBe('M1P 4S4');
  });

  test('should format United Kingdom zip code correctly', () => {
    const result = formatZipCode('GB', 'W1A 1AA');
    expect(result).toBe('W1A 1AA');
  });

  test('should format Germany zip code correctly', () => {
    const result = formatZipCode('DE', '10115');
    expect(result).toBe('10115');
  });

  test('should format France zip code correctly', () => {
    const result = formatZipCode('FR', '75001');
    expect(result).toBe('75001');
  });

  test('should format Italy zip code correctly', () => {
    const result = formatZipCode('IT', '00100');
    expect(result).toBe('00100');
  });

  test('should format Japan zip code correctly', () => {
    const result = formatZipCode('JP', '100-0001');
    expect(result).toBe('100-0001');
  });

  test('should format Mexico zip code correctly', () => {
    const result = formatZipCode('MX', '01234');
    expect(result).toBe('01234');
  });
  test('should format United States zip code correctly (6 digits)' , () => {
    const result = formatZipCode('US', '1234 56');
    expect(result).toBe('12345');
  });

  test('should format United States zip code correctly', () => {
    const result = formatZipCode('US', '1234 5');
    expect(result).toBe('12345');
  });
  test('should format United States zip code correctly', () => {
    const result = formatZipCode('US', '123456789');
    expect(result).toBe('12345-6789');
  });
  test('should format United States zip code correctly', () => {
    const result = formatZipCode('US', '12 3456789');
    expect(result).toBe('12345-6789');
  });

  test('should format South Africa zip code correctly', () => {
    const result = formatZipCode('ZA', '1000');
    expect(result).toBe('1000');
  });

  test('should format Argentina zip code correctly', () => {
    const result = formatZipCode('AR', 'C1000');
    expect(result).toBe('C1000');
  });

  test('should format Belgium zip code correctly', () => {
    const result = formatZipCode('BE', '1000');
    expect(result).toBe('1000');
  });

  test('should format Switzerland zip code correctly', () => {
    const result = formatZipCode('CH', '8000');
    expect(result).toBe('8000');
  });

  test('should format Spain zip code correctly', () => {
    const result = formatZipCode('ES', '28001');
    expect(result).toBe('28001');
  });
  test('should format Sweden zip code correctly', () => {
    const resultWithSpace = formatZipCode('SE', '123 45');
    expect(resultWithSpace).toBe('123 45');
    
    const resultWithoutSpace = formatZipCode('SE', '12345');
    expect(resultWithoutSpace).toBe('123 45');
  });

  test('should format Norway zip code correctly', () => {
    const result = formatZipCode('NO', '0123');
    expect(result).toBe('0123');
  });

  test('should format Finland zip code correctly', () => {
    const result = formatZipCode('FI', '00100');
    expect(result).toBe('00100');
  });

  test('should format Denmark zip code correctly', () => {
    const result = formatZipCode('DK', '1000');
    expect(result).toBe('1000');
  });

  test('should format Portugal zip code correctly', () => {
    const result = formatZipCode('PT', '1100-001');
    expect(result).toBe('1100-001');
  });

  test('should format Poland zip code correctly', () => {
    const result = formatZipCode('PL', '00-100');
    expect(result).toBe('00-100');
  });

  test('should format Hungary zip code correctly', () => {
    const result = formatZipCode('HU', '1234');
    expect(result).toBe('1234');
  });

  test('should format Czech Republic zip code correctly', () => {
    const result = formatZipCode('CZ', '100 00');
    expect(result).toBe('100 00');
  });

  test('should format Slovakia zip code correctly', () => {
    const result = formatZipCode('SK', '040 01');
    expect(result).toBe('040 01');
  });

  test('should format Greece zip code correctly', () => {
    const result = formatZipCode('GR', '12345');
    expect(result).toBe('12345');
  });

  test('should format Turkey zip code correctly', () => {
    const result = formatZipCode('TR', '34000');
    expect(result).toBe('34000');
  });

  test('should format Egypt zip code correctly', () => {
    const result = formatZipCode('EG', '12345');
    expect(result).toBe('12345');
  });

  test('should format Israel zip code correctly', () => {
    const result = formatZipCode('IL', '12345');
    expect(result).toBe('12345');
  });

  test('should format Saudi Arabia zip code correctly', () => {
    const result = formatZipCode('SA', '12345');
    expect(result).toBe('12345');
  });

  test('should format India zip code correctly', () => {
    const result = formatZipCode('IN', '110001');
    expect(result).toBe('110001');
  });

  test('should format Indonesia zip code correctly', () => {
    const result = formatZipCode('ID', '12345');
    expect(result).toBe('12345');
  });

  test('should format Malaysia zip code correctly', () => {
    const result = formatZipCode('MY', '50490');
    expect(result).toBe('50490');
  });

  test('should format Thailand zip code correctly', () => {
    const result = formatZipCode('TH', '10110');
    expect(result).toBe('10110');
  });

  test('should format Vietnam zip code correctly', () => {
    const result = formatZipCode('VN', '100000');
    expect(result).toBe('100000');
  });

  test('should format Philippines zip code correctly', () => {
    const result = formatZipCode('PH', '1000');
    expect(result).toBe('1000');
  });

  test('should format Pakistan zip code correctly', () => {
    const result = formatZipCode('PK', '12345');
    expect(result).toBe('12345');
  });

  test('should format Sri Lanka zip code correctly', () => {
    const result = formatZipCode('LK', '12345');
    expect(result).toBe('12345');
  });

  test('should format Bangladesh zip code correctly', () => {
    const result = formatZipCode('BD', '1205');
    expect(result).toBe('1205');
  });

  test('should format Nepal zip code correctly', () => {
    const result = formatZipCode('NP', '44600');
    expect(result).toBe('44600');
  });

  test('should format Myanmar zip code correctly', () => {
    const result = formatZipCode('MM', '11111');
    expect(result).toBe('11111');
  });

  test('should format Kazakhstan zip code correctly', () => {
    const result = formatZipCode('KZ', '12345');
    expect(result).toBe('12345');
  });

  test('should format Uzbekistan zip code correctly', () => {
    const result = formatZipCode('UZ', '100000');
    expect(result).toBe('100000');
  });

  test('should format Kyrgyzstan zip code correctly', () => {
    const result = formatZipCode('KG', '720000');
    expect(result).toBe('720000');
  });
});