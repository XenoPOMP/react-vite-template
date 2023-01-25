import Page from '@components/Page/Page';
import { ToolkitState } from '@redux/types/toolkit-reducer-types';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { decrement, increment } from '@redux/reducers/toolkitSlice';

const ReduxTestingPage = () => {
  const selector: ToolkitState = useSelector(
    (state: StoreType) => state.toolkit,
  );

  const dispatch = useDispatch();

  return (
    <Page
      meta={{ pageTitle: 'Redux testing', pageDescription: '', keywords: '' }}
    >
      <h1>Value: {selector.value}</h1>

      <button
        style={{ padding: '0 10px', aspectRatio: 1 }}
        onClick={() => dispatch(decrement(2))}
      >
        - 2
      </button>

      <button
        style={{ padding: '0 10px', aspectRatio: 1 }}
        onClick={() => dispatch(increment(1))}
      >
        + 1
      </button>
    </Page>
  );
};

export default ReduxTestingPage;
