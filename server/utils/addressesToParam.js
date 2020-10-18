/**
 * Converts an object of addresses to an acceptable query param for google's API url string
 * Notes: keys are irrelevant, we only care about the values in the object
 *  
 * Expected input format: {
 *  key: 'valid street address',
 *  ...
 *  key: 'valid street address',
 * }
 * 
 * Expected output format: 'valid+street+address|valid+street+address|valid+street+address'
 * 
 * Regex source: https://stackoverflow.com/questions/1981349/regex-to-replace-multiple-spaces-with-a-single-space
 * Testing for this function is found in '../tests/addressesToParam.test.js'
*/
const addressesToParam = (addresses) => {
    let locations = '';
    let i = 0;
    const length = Object.keys(addresses).length;

    for (const [key, value] of Object.entries(addresses)){
        /**
         * Formatting method
         * 1. Remove all leading and trailing spaces with trim()
         * 2. Replace all ',' with ''
         * 3. Replaces all spaces more than one character long with a single space
         * 4. Replace all spaces with a '+'
         */
        const formattedAddress = value.trim().replace(/,/g, '').replace(/\s\s+/g, ' ').replace(/\s/g, '+');
        if(i < length - 1){
            locations += `${formattedAddress}|`;
        } else {
            locations += formattedAddress;
        }
        i++;
    }
    return locations;
}

module.exports = addressesToParam;