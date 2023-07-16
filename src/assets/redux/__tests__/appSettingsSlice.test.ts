import { describe, expect, test } from 'vitest';

import appSettingsSlice, {
  AppSettings,
  changeLang,
  initialAppSettings,
} from '@redux/reducers/appSettingsSlice';
import { ReduxAction } from '@redux/types';

import skipTestCondition from '@utils/skipTestCondition';

describe.skipIf(skipTestCondition('FRONTEND'))('Redux => AppSettings', () => {
  test('should return default state when passed an empty action', () => {
    const result = appSettingsSlice(undefined, { type: '' });

    expect(result).toStrictEqual({
      appVersion: '0.0.0',
      appName: 'React Vite Application',
      language: 'en',
    });
  });

  test('change language with "changeLang" action', () => {
    const action: ReduxAction<AppSettings['language']> = {
      type: changeLang.type,
      payload: 'ru',
    };

    const result = appSettingsSlice(undefined, action);

    expect(result.language).toBe('ru');
  });
});
