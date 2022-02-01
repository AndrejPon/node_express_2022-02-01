function makeCamelCase(str){
// console.log(str);
const arrFromString = str.split('');
// console.log('arrFromString ===', arrFromString);
const arrayAfterProcess = [];
arrFromString.forEach((element, idx, arr) => {
if (element !== ' ') {
    arrayAfterProcess.push(element);
}   else {
    arr[idx + 1] = arr[idx + 1].toUpperCase();
}
});
arrayAfterProcess[0] = arrayAfterProcess[0].toLowerCase();
//  jeigu pakeisim i UperCase gausim Pascale Case

const stringFromArr = arrayAfterProcess.join('');
// console.log('arrFromString ===', stringFromArr);
return stringFromArr;
}

// makeCamelCase('Ar veikia camel casesas?');

module.exports = {
    makeCamelCase,
};