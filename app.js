function compare(m, n) {
    if (m > n)
        return 1;
    else if (m < n)
        return -1;
    else
        return 0;
}
console.log(compare(2, 2));

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(4));

function transform(m, n, o) {
    var str = m.toString() + n + o;
    return str;
}
console.log(transform(2, 5, 7));


function square(m, n) {
    if (!n || n === ' ')
        return m * m;
    else
        return m * n
}
console.log(square(4, 7));

function isPerfect(m) {
    let temp = 0;
    for (let n = 1; n <= m / 2; n++) {
        if (m % n === 0) {
            temp += n;
        }
    }

    if (temp === m && temp !== 0) {
        console.log('Your number is perfect');
    }

    else {
        console.log('Your number isn\'t perfect');
    }
}
console.log(isPerfect(7));

const start = +prompt('Enter start of range', 0);
const end = +prompt('Enter end of range', 100);

let perfectInRange = (a, b) => {
    for (let i = a; i <= b; i++) {
        let s = 0;

        for (let j = 0; j < i; j++) {
            if (i % j == 0) {
                s += j;
            }
        }
        if (i == s) {
            console.log(i);
        }
    }
};

perfectInRange(start, end);

function perfectRange(x, y, step) {
    let arr = [];
    for (let i = x; i <= y; i += step) {
        arr.push(i);
    }

    return arr;
}
console.log(perfectRange(2, 7, 1));

function setTime(h) {
    return function setMinutes(m = '00') {
        return function setSeconds(s = '00') {
            return `${h}:${m}:${s}`
        }
    }
}

var time = setTime(13)()();
console.log(time);

function timeToSeconds(h, m, s) {
    if (isNaN(h) || isNaN(m) || m >= 60 || isNaN(s) || s >= 60) {
        return 'enter please valid time';
    }
    else {
        return h * 3600 + m * 60 + s + 'sec';
    }
}

console.log(timeToSeconds(70, 59, 30));

function secondsToHMS(s) {
    var h = Math.floor(s / 3600);
    var m = Math.floor((s - (h * 3600)) / 60);
    var s = s - (h * 3600) - (m * 60);
    s = Math.round(s * 100) / 100

    var result = (h < 10 ? '0' + h : h);
    result += '-' + (m < 10 ? '0' + m : m);
    result += '-' + (s < 10 ? '0' + s : s);
    return result;
}

console.log(secondsToHMS(3600));

let m = new Date(2019, 10, 20),
    n = new Date(2019, 10, 07);

function diffDates(m, n) {
    return (m - n) / (60 * 60 * 24 * 1000);
};

console.log(diffDates(m, n));

let dateDiff = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) => {
    if (h == 0) {
        h = 24;
    }

    let seconds = h * 60 * 60 + m * 60 + s;
    let newseconds = h1 * 60 * 60 + m1 * 60 + s1;
    let secDiff = Math.abs(newseconds - seconds);

    function time(n) {
        let hoursFloat = n / 3600;
        let hours = Math.floor(hoursFloat);
        let minutes = Math.floor((hoursFloat - hours) * 60);
        let seconds = n - ((minutes * 60) + (hours * 3600));

        function zero(num) {
            return num > 9 ? num : '0' + num;
        }

        return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}`;
    }

    return time(secDiff);
};

console.log(dateDiff(0, 10, 0, 10, 0, 0));