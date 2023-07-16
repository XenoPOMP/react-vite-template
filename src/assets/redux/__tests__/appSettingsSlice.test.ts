import { describe, expect, test } from 'vitest';
import appSettingsSlice, {
  initialAppSettings,
} from '@redux/reducers/appSettingsSlice';

import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Redux => AppSettings', () => {
  test('should return default state when passed an empty action', () => {
    const result = appSettingsSlice(undefined, { type: '' });

    expect(result).toEqual({
      appVersion: '0.0.0',
      appName: 'React Vite Application',
    });
  });
});
