import { describe, expect, test } from 'vitest';

import skipTestCondition from '@utils/skipTestCondition';
import { isUndefined } from '@utils/type-checks';

describe.skipIf(skipTestCondition('FRONTEND'))(
  'Type checking utilities',
  () => {
    test('isUndefined', () => {
      let someVar;
      let definedVar = 1;

      expect(isUndefined(someVar)).toBe(true);
      expect(isUndefined(definedVar)).toBe(false);
    });
  }
);
