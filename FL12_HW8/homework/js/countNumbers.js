function makeNumber(string) {
    let numbers = '';
    let symbArr = string.split('');
    for (let i = 0; i < symbArr.length; i++) {
        if (!isNaN(symbArr[i])) {
            numbers += symbArr[i];
        }
    }
    return numbers;
}


function countNumber(stringArr) {
    let numbersArr = makeNumber(stringArr).split('');
    let objList = {};
    for (let i = 0; i < numbersArr.length; i++) {
        let objItem = numbersArr[i];
        if (objList[objItem] !== undefined) {
            objList[objItem] += 1;
        } else {
            objList[objItem] = 1;
        }
    }
    return objList;
}
countNumber("ofwvdkeo203-40234=-vok=2-42");
