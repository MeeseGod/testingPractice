function analyzeArray(array){
    const object = {
        average : getAverage(array),
        min : getMin(array),
        max : getMax(array),
        length : array.length,
    }
    return object;
}

function getAverage(array){
    return array.reduce((previousValue , nextValue) => previousValue + nextValue) / array.length;
};

function getMin(array){
    return Math.min(...array);
}

function getMax(array){
    return Math.max(...array);
}

module.exports = analyzeArray;