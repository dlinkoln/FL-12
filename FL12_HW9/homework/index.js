const convert = function () {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        typeof arguments[i] === 'string' ? arr[i] = +arguments[i] : arr[i] = arguments[i].toString()
    }
    return arr;
}

convert('1', 2, 3, '4');

const mapLikeFunc = (arr, ctx) => {
    for (let i = 0; i < arr.length; i++) {
        let arg = arr[i];
        ctx(arg, i, arr);
    }
}

mapLikeFunc([1, 2, 3], (el) => {
    console.log(el * 2);
});

const mapArray = (arr, ctx) => {
    let newArr = [];
    mapLikeFunc(arr, (arg, i, arr) => {
        newArr.push(ctx(arg, i, arr));
    });
    return newArr;
}

mapArray([2, '5', 8], (el) => {
    return parseInt(el) + 3;
});

const filterArray = (arr, ctx) => {
    let newArr = [];
    mapLikeFunc(arr, (arg, i, arr) => {
        if (ctx(arg, i, arr)) {
            newArr.push(arg);
        }
    });
    return newArr;
}

filterArray([2, 5, 8], (el) => {
    return el % 2 === 0;
});

const flipOver = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += str[str.length - i - 1];
    }
    return newStr;
}

flipOver('hey world');

const makeListFromRange = (arr) => {
    let newArr = [];
    for (let i = 0; i <= arr[1] - arr[0]; i++) {
        newArr[i] = arr[0] + i;
    }
    return newArr;
}

makeListFromRange([2, 7]);

const actors = [{
    name: 'tommy',
    age: 36
},
{
    name: 'lee',
    age: 28
}
];

const getArrayOfKeys = (arr, key) => {
    let newArr = [];
    mapLikeFunc(arr, (arg) => {
        newArr.push(arg[key]);
    })
    return newArr;
}

getArrayOfKeys(actors, 'name');

const replacer = (arr) => {
    return mapLikeFunc(arr, (arg) => {
        return arg > 30 ? '*' : arg;
    })
}

replacer([58, 14, 48, 2, 31, 29]);

const date = new Date(2019, 0, 2);

const getPastDay = (date, num) => {
    return new Date(+date - num * 3600 * 24 * 1000).getDate();
}

getPastDay(date, 1);
getPastDay(date, 2);
getPastDay(date, 365);

const formatDate = (date) => {
    return `${date.getFullYear()}
    /${date.getMonth() + 1}
    /${date.getDate()} ${date.getHours()}
    :${date.getMinutes()}`;
}

formatDate(new Date('2/15/2018 09:15:00'));
formatDate(new Date());