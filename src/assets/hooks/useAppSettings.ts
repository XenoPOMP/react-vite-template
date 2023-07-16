import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { AppSettings, changeLang } from '@redux/reducers/appSettingsSlice';
import { DeepPartial } from 'redux';

type SettingController<T> = {
  get: () => T;
  set: (newValue: T) => void;
} & (T extends boolean
  ? {
      toggle: () => void;
    }
  : {});

interface IUseAppSettings
  extends Record<keyof AppSettings, DeepPartial<SettingController<any>>> {
  appVersion: Omit<SettingController<AppSettings['appVersion']>, 'set'>;
  appName: Omit<SettingController<AppSettings['appName']>, 'set'>;
  language: SettingController<AppSettings['language']>;
}

const useAppSettings = (): IUseAppSettings => {
  const { appVersion, appName, language }: AppSettings = useAppSelector(
    state => state.appSettings,
  );

  const dispatch = useAppDispatch();

  return {
    appVersion: {
      get: () => appVersion,
    },

    appName: {
      get: () => appName,
    },

    language: {
      get: () => language,
      set: newValue => dispatch(changeLang(newValue)),
    },
  };
};

export default useAppSettings;
