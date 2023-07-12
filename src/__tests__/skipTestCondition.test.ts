import { describe, expect, test } from 'vitest';

import useEnv from '@hooks/useEnv';

import skipTestCondition from '@utils/skipTestCondition';

const { TESTING_MODE } = useEnv();

/**
 * Test skipTestCondition function.
 *
 * This function has to return true if mode is not equal mode
 * from argument or if project`s testing mode is fullstack.
 */

describe.skipIf(skipTestCondition('FRONTEND') || TESTING_MODE === 'FULLSTACK')(
  'Skip test condition',
  () => {
    test('Condition is frontend', () => {
      const isSkip = skipTestCondition('FRONTEND');

      expect(isSkip).toBe(false);
    });

    test('Condition is backend', () => {
      const isSkip = skipTestCondition('BACKEND');

      expect(isSkip).toBe(true);
    });
  },
);
