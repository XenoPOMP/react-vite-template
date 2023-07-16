import { FC, useContext, useEffect } from 'react';

import { BodyClassnameContext } from '@providers/BodyClassnameProvider/BodyClassnameProvider';

import CheckBox from '@ui/CheckBox/CheckBox';

import useAppSettings from '@hooks/useAppSettings';
import useBoolean from '@hooks/useBoolean';
import useCopyToClipboard from '@hooks/useCopyToClipboard';

import { TestingPageProps } from './TestingPage.props';

const TestingPage: FC<TestingPageProps> = ({}) => {
  const { appVersion, language } = useAppSettings();
  const { classes, registerClasses, deleteClasses } =
    useContext(BodyClassnameContext);

  useEffect(() => {
    registerClasses('test', ['testing']);

    console.log(classes);

    return () => {
      deleteClasses('test');
    };
  });

  const [checked, toggleCheck, setChecked] = useBoolean(false);
  const fakeTestBooleanHook = useBoolean(true);

  return (
    <div>
      <p>App version: {appVersion.get()}</p>

      <p id={'lang-output'}>Language: {language.get()}</p>
      <button className={'lang-switch'} onClick={() => language.set('ru')}>
        Change lang to Russian
      </button>
      <button className={'lang-switch'} onClick={() => language.set('en')}>
        Change lang to English
      </button>

      <p id={'check-preview'}>{checked ? 'true' : 'false'}</p>
      <button id={'checkbox-test'}>
        <CheckBox
          checked={checked}
          onClick={checked => {
            setChecked(checked);
          }}
        ></CheckBox>
      </button>
    </div>
  );
};

export default TestingPage;
