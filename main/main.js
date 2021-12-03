function getNewLen(len, baseLen) {
    return len - baseLen
}
function getTimePrice(time) {
    let timePrice = 0
    if (time) {
        timePrice = 0.25 * time;
    }
    return timePrice;
}

function getPrice(price) {
    return (price * 1000 + (price * 0.5) * 1000) / 1000;
}

module.exports = function main(len, time) {
    let timePrice = getTimePrice(time);
    let basePrice = 6 
    let price = 0.8
    let result = 0
    function getResult(result) {
        return result +  timePrice
    }
    function getBasePrice(price) {
        return basePrice + price * 6;
    }
    function getBaseAddPrice(price) {
        return basePrice + price;
    }
    function getResultByPrice(price) {
        return basePrice + price
    }
    function getPriceByLen(len) {
        return Math.round(len) * price
    }
    if(len > 2) {
        let newLen = getNewLen(len, 2)
        if(len > 8) {

            basePrice = getBasePrice(price);
            newLen = getNewLen(len, 8)

            for(let i = 0; i < newLen; i ++) {
                if (i > 0) {
                    basePrice = getBaseAddPrice(price);
                }
                price = getPrice(price)
            }
            result = getResultByPrice(price)
            return getResult(result)
        }
        result = getResultByPrice(getPriceByLen(newLen))
        return getResult(result)
    }
    return getResult(basePrice)
};