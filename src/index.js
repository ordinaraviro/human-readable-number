module.exports = function toReadable (number) {
    const num = number.toString()
    if (num.length == 3) {
        if (numToStr(`${num[1]}${num[2]}`) == '') {
            return `${numToStr(num[0])} hundred`
        }
        else if (numToStr(`${num[1]}${num[2]}`) == '') {
            return `${numToStr(num[0])} hundred`
        }
        else{
            return `${numToStr(num[0])} hundred ${numToStr(`${num[1]}${num[2]}`)}`
        }

    }
    if (num.length == 2)  {
        return numToStr(`${num[0]}${num[1]}`)
    } 
    else if (num == '0') {
        return 'zero'
    }
    else {
        return numToStr(num)
    }
}

function numToStr (x) {
    switch (x){
        case '00': return '';
        case '0': return '';
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return "nine";
        case '01': return 'one';
        case '02': return 'two';
        case '03': return 'three';
        case '04': return 'four';
        case '05': return 'five';
        case '06': return 'six';
        case '07': return 'seven';
        case '08': return 'eight';
        case '09': return "nine";
        case '10': return 'ten';
        case '11': return 'eleven';
        case '12': return 'twelve';
        case '13': return 'thirteen';
        case '14': return 'fourteen';
        case '15': return 'fifteen';
        case '16': return 'sixteen';
        case '17': return 'seventeen';
        case '18': return 'eighteen';
        case '19': return 'nineteen';
        default : return subFunc(x)
    }
}

function subFunc(x) {
    switch (x[0]){
        case '2': if(x[1] == '0') {return `twenty`} else {return `twenty ${numToStr(x[1])}`}
        case '3': if(x[1] == '0') {return `thirty`} else {return `thirty ${numToStr(x[1])}`}
        case '4': if(x[1] == '0') {return `forty`} else {return `forty ${numToStr(x[1])}`}
        case '5': if(x[1] == '0') {return `fifty`} else {return `fifty ${numToStr(x[1])}`}
        case '6': if(x[1] == '0') {return `sixty`} else {return `sixty ${numToStr(x[1])}`}
        case '7': if(x[1] == '0') {return `seventy`} else {return `seventy ${numToStr(x[1])}`}
        case '8': if(x[1] == '0') {return `eighty`} else {return `eighty ${numToStr(x[1])}`}
        case '9': if(x[1] == '0') {return `ninety`} else {return `ninety ${numToStr(x[1])}`}
    }
}

// let x = toReadable(999)
// console.log (x)