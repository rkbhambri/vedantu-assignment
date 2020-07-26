
export const convertDateFormat = (date) => {
    const monthInWords = {
        '1': 'Jan',
        '2': 'Feb',
        '3': 'Mar',
        '4': 'Apr',
        '5': 'May',
        '6': 'Jun',
        '7': 'Jul',
        '8': 'Aug',
        '9': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
    };
    date = new Date(date);
    let month = monthInWords[date.getMonth() + 1];
    let day = date.getDate();
    return `${day} ${month} ${date.getFullYear()}`
};

export const isEmpty = (item) => {
    if (typeof item === 'number') {
        return false;
    }
    return item.trim() === '';
};

export const isArrayEmpty = (arr) => {
    return arr.length === 0;
};

