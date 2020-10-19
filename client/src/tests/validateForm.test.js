import { validateForm } from '../utils/validateForm';

const mockHandleErrors = () => {
    return;
}

//*****************
// Invalid inputs
//******************
test('Starting location missing', async () => {
    const data = {
        startingLocation: '',
        endLocation: 'address',
        desiredStopOne: 'address1'
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(false);
})

test('End location missing', async () => {
    const data = {
        startingLocation: 'address',
        endLocation: '',
        desiredStopOne: 'address1'
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(false);
})

test('No desired stops', async () => {
    const data = {
        startingLocation: 'address',
        endLocation: 'address1',
        desiredStopOne: ''
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(false);
})

test('Duplicate desired stops', async () => {
    const data = {
        startingLocation: 'address',
        endLocation: 'address1',
        desiredStopOne: 'a',
        desiredStopTwo: 'a',
        desiredStopThree: 'b'
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(false);
})

test('All locations are the same', async () => {
    const data = {
        startingLocation: 'a',
        endLocation: 'a',
        desiredStopOne: 'a',
        desiredStopTwo: 'a',
        desiredStopThree: 'a'
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(false);
})

test('End location and a unique stop are the same', async () => {
    const data = {
        startingLocation: 'a',
        endLocation: 'b',
        desiredStopOne: 'b',
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(false);
})

test('Start location and a unique stop are the same', async () => {
    const data = {
        startingLocation: 'b',
        endLocation: 'a',
        desiredStopOne: 'b',
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(false);
})

//*****************
// Valid inputs
//******************
test('Valid form', async () => {
    const data = {
        startingLocation: 'address',
        endLocation: 'address2',
        desiredStopOne: 'address3'
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(true);
})

test('Valid form with multiple desired stops', async () => {
    const data = {
        startingLocation: 'address',
        endLocation: 'address1',
        desiredStopOne: 'a',
        desiredStopTwo: 'b',
        desiredStopThree: 'c',
        desiredStopFour: 'd',
        desiredStopFive: 'e',
        desiredStopSix: 'f'
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(true);
})

test('Start and end are the same with different desired stops', async () => {
    const data = {
        startingLocation: 'a',
        endLocation: 'a',
        desiredStopOne: 'b',
        desiredStopTwo: 'c',
        desiredStopThree: 'd'
    }
    expect(await validateForm(data, mockHandleErrors)).toEqual(true);
})