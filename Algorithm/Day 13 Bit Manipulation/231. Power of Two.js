let ops = 0;

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  // --- Решение с циклом ---
  //   if (n < 1) return false;
  //   while (n > 0) {
  //     if (n === 1) return true;
  //     if (n % 2 === 1) return false;
  //     n /= 2;
  //   }
  //   return true;
  // --- Решение с циклом ---
  //
  // --- Решение с битами ---
  if (n < 1) return false;
  return !(BigInt(n) & BigInt(n - 1));
  // --- Решение с битами ---
}

// true
console.log(isPowerOfTwo(1));

// true
console.log(isPowerOfTwo(16));

// false
console.log(isPowerOfTwo(3));

// false
console.log(isPowerOfTwo(432553443257384056755982357347534657347593));

// false
console.log(isPowerOfTwo(0));
