const convertToRoman = (num) => {
    try {
        num = Math.round(num);
        let str = '';
        const roman = {
            l: 50000,
            xl: 40000,
            x: 10000,
            ix: 9000,
            v: 5000,
            iv: 4000,
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        for (const i of Object.keys(roman)) {
            const q = Math.floor(num / roman[i]);
            num = num - q * roman[i];
            str = str + i.repeat(q);
        }
        return str;    
    } catch (error) {
        return {error: 'Only Numbers'}
    }
}

module.exports = { convertToRoman };