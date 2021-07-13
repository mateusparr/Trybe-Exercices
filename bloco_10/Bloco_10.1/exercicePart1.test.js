const {
    sum,
    myRemove,
} = require('./exercicesPart1.js');

describe('testa somatórias', () => {
    it('testa se o retorno é 9', () => {
        expect(sum(4, 5)).toEqual(9);
    })
    it('testa se o retorno é 0 quando os parametros são 0', () => {
        expect(sum(0, 0)).toEqual(0);
    })
    it('lança erro se algum parametro nao for numero', () => {
        expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
    })
})

describe('testa a função remove', () => {
    it('Se ao chamar a função retorna o arrat esperado', () => {
        expect(myRemove([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
    })
    it('Verifica se não retorna o array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('Verifica se o array passado por parametro não sofreu alterações', () => {
        const myArray = [1, 2, 3, 4];
        myRemove(myArray);
        expect(myArray).toEqual([1, 2, 3, 4]);
    })
})