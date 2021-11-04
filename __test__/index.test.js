const { convertToRoman } = require('../index');

test('asdasd = "" ', () => {
    try {
        expect(convertToRoman('asdasd')).toBe('');
    } catch (error) {
        expect(error).toEqual({error: 'Only Numbers'});
    }
});

test('1 = I', () => {
    expect(convertToRoman(1)).toBe('I');
});

test('1.5 = II', () => {
    expect(convertToRoman(1.5)).toBe('II');
});

test('4 = IV', () => {
    expect(convertToRoman(4)).toBe('IV');
});

test('5 = V', () => {
    expect(convertToRoman(5)).toBe('V');
});

test('10 = X', () => {
    expect(convertToRoman(10)).toBe('X');
});

test('100 = C', () => {
    expect(convertToRoman(100)).toBe('C');
});

test('3000 = MMM', () => {
    expect(convertToRoman(3000)).toBe('MMM');
});

test('4000 = iv', () => {
    expect(convertToRoman(4000)).toBe('iv');
});

test('4999 = ivCMXCIC', () => {
    expect(convertToRoman(4999)).toBe('ivCMXCIX');
});

test('5000 = v', () => {
    expect(convertToRoman(5000)).toBe('v');
});

test('5001 = vI', () => {
    expect(convertToRoman(5001)).toBe('vI');
});

test('51651 = lMDCLI', () => {
    expect(convertToRoman(51651)).toBe('lMDCLI');
});

test('Controlar 9999 es igual a ixCMXCIX', () => {
    const result = convertToRoman(9999);
    expect(result).toBe("ixCMXCIX");
});

test('Controlar 6000 es igual a vM', () => {
    const result = convertToRoman(6000);
    expect(result).toBe("vM");
});