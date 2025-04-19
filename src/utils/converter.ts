export const convertUnit = (
    type: 'distance' | 'temperature',
    value: number,
    from: string,
    to: string
): number => {
    if (from === to) return value;

    if (type === 'distance') {
        const meterMap: Record<string, number> = {
            meter: 1,
            centimeter: 0.01,
            inch: 0.0254,
            feet: 0.3048,
            yard: 0.9144,
        };
        const inMeter = value * meterMap[from];
        return inMeter / meterMap[to];
    }

    if (type === 'temperature') {
        let celsius = from === 'celsius'
            ? value
            : from === 'fahrenheit'
                ? (value - 32) * (5 / 9)
                : value - 273.15;

        return to === 'celsius'
            ? celsius
            : to === 'fahrenheit'
                ? (celsius * 9) / 5 + 32
                : celsius + 273.15;
    }

    throw new Error('Unsupported type');
};