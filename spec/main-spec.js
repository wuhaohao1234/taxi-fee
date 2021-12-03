const main = require('../main/main');

describe('taxi fee', function () {
    it('跑1公里，需要支付6元', () => {
        const len = 1
        expect(main(len)).toBe(6)
    })
    it('跑3公里，收6.8', () => {
        const len = 3
        expect(main(len)).toBe(6.8)
    })
    it('跑2.4公里，收6.8', () => {
        const len = 2.4
        expect(main(len)).toBe(6)
    })
    it('跑4公里，收7.2', () => {
        const len = 4
        expect(main(len)).toBe(7.6)
    })
    it('跑4.2公里，收7.2', () => {
        const len = 4.2
        expect(main(len)).toBe(7.6)
    })
    it('跑9公里，收12', () => {
        const len = 9
        expect(main(len)).toBe(12)
    })
    it('跑10公里，收13.8', () => {
        const len = 10
        expect(main(len)).toBe(13.8)
    })
    it('跑11公里，收16.5', () => {
        const len = 11
        expect(main(len)).toBe(16.5)
    })
    it('跑11公里，停10分钟，收16.5', () => {
        const len = 11
        const time = 10
        expect(main(len, time)).toBe(19)
    })
});
