import { convertUnit } from '../src/utils/converter';

describe('convertUnit()', () => {
    it('should convert meters to feet correctly', () => {
        expect(convertUnit('distance', 1, 'meter', 'feet')).toBeCloseTo(3.2808);
    });

    it('should convert Celsius to Fahrenheit', () => {
        expect(convertUnit('temperature', 0, 'celsius', 'fahrenheit')).toBe(32);
    });

    it('should convert Fahrenheit to Celsius', () => {
        expect(convertUnit('temperature', 32, 'fahrenheit', 'celsius')).toBeCloseTo(0);
    });
});