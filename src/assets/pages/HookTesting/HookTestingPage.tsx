import Page from '@components/Page/Page';
import styles from './HookTestingPage.module.scss';
import cn from 'classnames';
import { useLocalStorage } from '@hooks/useLocalStorage/useLocalStorage';
import { useRef, useState } from 'react';

const HookTestingPage = () => {
  const [localStorage, setLocalStorage] = useLocalStorage({
    name: 'test_local_storage',
    defaultItem: 0,
  });
  const [localStorageState, setLocalStorageState] = useState(localStorage);

  return (
    <Page
      meta={{ pageTitle: 'Hook testing', pageDescription: '', keywords: '' }}
    >
      <div className={cn(styles.testBody)}>
        <section>
          <h2>useLocalStorage hook</h2>

          <div>
            <label>Input data: </label>
            <input
              type={'text'}
              value={localStorageState}
              onChange={(event) => {
                setLocalStorageState(event.target.value);
              }}
            />
            <button
              onClick={() => {
                setLocalStorage(localStorageState);
              }}
            >
              Update state
            </button>
          </div>

          <div style={{ display: 'flex' }}>
            <label>Local storage content: </label>
            <div>{localStorage}</div>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default HookTestingPage;
