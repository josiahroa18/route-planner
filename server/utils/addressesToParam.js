/**
 * Converts an address to an acceptable query param for google's API url string
 * All spaces and comman-spaces must be converted to '+'
 * Expected format: single spaced string with or without commas
*/
const addressesToParam = (addresses) => {
    let locations = '';
    let i = 0;
    const length = Object.keys(addresses).length;

    for (const [key, value] of Object.entries(addresses)){
        const formattedAddress = value.replace(/\s/g, '+').replace(/,/g, '');
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