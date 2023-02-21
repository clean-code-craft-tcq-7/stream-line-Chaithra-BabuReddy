const { expect } = require('chai');
const { processDataStream } = require('../sender.js');

describe('test processDataStream', () => {
    it('should exists', () => {
        expect(processDataStream).to.exist;
    });
    it('test returned stream has length equal to required count', () => {
        let res = processDataStream(3);
        expect(res.length).to.eql(3);
    })
})
