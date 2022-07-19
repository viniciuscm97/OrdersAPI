const successStatus = 'succeeded';
/**
 * @function extractOrdersInfo
 * @param {Array} orders
 * @return {Object}
 */
const extractOrdersInfo = (orders) => {
  const total = orders.reduce((prev, current) => prev + current.payment.amount, 0);

  const amount = orders.length;

  return {
    total,
    amount,
  };
};


/**
 * @function extractSalesInfo
 * @param {Array} orders
 * @return {Object}
 */
 const extractSalesInfo = (orders) => {
  const total = orders.reduce((prev, cur, i) => {
    const { payment: { status = '', amount = 0 } = {} } = cur;
    console.log(`${i} - ${status} - ${amount}`)
    return status === successStatus ? prev + amount : prev;
  }, 0);

  const amount = orders.length;

  const average = +(total / amount).toFixed(2);

  return {
    total,
    amount,
    average,
  };
};

export { extractOrdersInfo, extractSalesInfo };