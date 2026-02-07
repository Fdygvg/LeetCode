var reverse = function(x) {
  const sign = Math.sign(x);
  
  const rev =
    parseInt(String(Math.abs(x)).split("").reverse().join("")) * sign;

  if (rev < -2147483648 || rev > 2147483647) return 0;

  return rev;
};
