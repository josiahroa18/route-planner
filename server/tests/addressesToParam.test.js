const addressesToParam = require('../utils/addressesToParam');

/**
 * Unit test file for the addressesToParam function
 * 
 * Example street addresses come from https://www.summet.com/dmsi/html/codesamples/addresses.html
 * 
 * All street addresses passed to the 'addressesToParam' function are 
 * assumed to be a valid street address validated by google's geocoding API 
 * https://developers.google.com/maps/documentation/geocoding/overview
 */


test('address with spaces and no commas', () => {
    const address = {
        key: '2880 Nulla St.'
    }
    const result = addressesToParam(address);
    expect(result).toEqual('2880+Nulla+St.')
})

test('address with spaces more than two characters long', () => {
    const address = {
        key: '2880    Nulla St.'
    }
    const result = addressesToParam(address);
    expect(result).toEqual('2880+Nulla+St.')
})

test('address with leading spaces', () => {
    const address = {
        key: '   2880 Nulla St.'
    }
    const result = addressesToParam(address);
    expect(result).toEqual('2880+Nulla+St.')
})

test('address with trailing spaces', () => {
    const address = {
        key: '2880 Nulla St.   '
    }
    const result = addressesToParam(address);
    expect(result).toEqual('2880+Nulla+St.')
})

test('address with comma', () => {
    const address = {
        key: 'Denver, CO'
    }
    const result = addressesToParam(address);
    expect(result).toEqual('Denver+CO')
})

test('address with comma and spaces more than two characters long', () => {
    const address = {
        key: 'Denver,   CO'
    }
    const result = addressesToParam(address);
    expect(result).toEqual('Denver+CO')
})

test('multiple addresses' , () => {
    const address = {
        key: '2880 Nulla St.',
        key1: '7292 Dictum Av.'
    }
    const result = addressesToParam(address);
    expect(result).toEqual('2880+Nulla+St.|7292+Dictum+Av.')
})

