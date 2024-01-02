export default function appendToEachArrayValue(array, appendString) {
    const array_2 = []
    for (const idx of array) {
        array_2.push(appendString + idx)
    }
    return array_2;
}