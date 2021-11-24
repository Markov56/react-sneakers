const beautifyPrice = (price) => {
   return price.toString().length > 3
    ? price.toString().slice(0, -3) + ' ' + price.toString().slice(-3)
    : price
};

export {beautifyPrice};