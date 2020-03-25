import { success } from '../../helpers/redux/actions';
import { createSelector } from 'reselect';

// action types
export const LOAD_SECTORS = 'LOAD_SECTORS';
export const SET_SELECTED_SECTORS = 'SET_SELECTED_SECTORS';
const initialState = {
  sectors: {},
  selectedSectors: []
};

function select(state, payload) {
  const { sectors } = state
  const { sectorId } = payload
  const currSector = sectors?.[payload.sectorId]


  debugger;

  return {
    sectors: {
      ...state.sectors,
      [sectorId]: {
        ...currSector,
        checked: !currSector.checked
      }
    }
  };
}

export function eventsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case success(LOAD_SECTORS):
      return {
        ...state,
        sectors: Object.assign(
          ...payload.map(item => ({ [item.id]: { ...item, checked: false } }))
        )
      };

    case SET_SELECTED_SECTORS:
      return select(state, payload)

    default:
      return state;
  }
}

// actions
export function loadSectors() {
  return {
    createRequest: { url: '/organizations/sectors' },
    type: LOAD_SECTORS
  };
}

export function selectSector(sectorId) {
  return {
    type: SET_SELECTED_SECTORS,
    payload: { sectorId }
  };
}

// selectors
export const getSectors = createSelector(
  globalState => globalState.eventsReducer,
  state =>
    Object.keys(state.sectors).length
      ? Object.keys(state.sectors).map(key => state.sectors[key])
      : []
);
