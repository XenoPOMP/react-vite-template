import useEnv, { TestingMode } from '@hooks/useEnv';

const { TESTING_MODE } = useEnv();

/**
 * Determines skip test condition.
 * @param {TestingMode} mode       target mode
 * @returns {boolean}              false if current mode isn`t the same as target one
 *                                 or current mode is FULLSTACK
 */
const skipTestCondition = (mode: TestingMode): boolean => {
  if (TESTING_MODE === 'FULLSTACK') {
    return false;
  }

  return TESTING_MODE !== mode;
};

export { skipTestCondition as default };
