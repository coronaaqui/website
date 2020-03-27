import { createSelector } from 'reselect';
import { LOADING, SUCCESS, FAILURE } from '../../redux/middlewares/api';

const initialState = {};

export function requestsReducer(state = initialState, action) {
  const { type, actionKey = '' } = action;
  const matches = new RegExp(`(.*)_(${LOADING}|${FAILURE}|${SUCCESS})`).exec(
    type
  );

  // not a *_LOADING / *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, name, requestState] = matches;
  const requestName = actionKey ? `${name}_${actionKey}` : name;
  const errorMsg = requestState === FAILURE ? { error: action.error } : {};

  return {
    ...state,
    [requestName]: {
      phase: requestState,
      ...errorMsg
    }
  };
}

// selectors
const getLoading = actions => state => {
  const loadingState = actions
    .filter(item => state[item])
    .map(item => ({ [item]: state[item] }));

  return Object.keys(loadingState).length ? Object.assign(...loadingState) : {};
};

export const createLoadingSelector = (actions, ...args) =>
  createSelector(
    globalState => globalState.requestsReducer,
    getLoading(actions),
    ...args
  );
