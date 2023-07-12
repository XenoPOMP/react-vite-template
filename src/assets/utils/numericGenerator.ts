import ArgumentError from '@errors/ArgumentError';

/**
 * This function can generate array with n children.
 *
 * @param {number} length   length of array
 * @returns {number[]}      generated array
 */
const numericGenerator = (length: number): number[] => {
  if (length < 0) {
    throw new ArgumentError('Generator length have to be positive digit');
  }

  return [...Array(length).keys()];
};

export default numericGenerator;
