export default function(amount) {
  const options = {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  };
  // if its a whole, Naira amount, leave off the .00 decimal points
  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat("en-NG", options);
  return formatter.format(amount / 100);
}
