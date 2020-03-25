import { success } from '../../helpers/redux/actions';
import { createSelector } from 'reselect';

// action types
export const LOAD_SECTORS = 'LOAD_SECTORS';
export const SET_SELECTED_SECTORS = 'SET_SELECTED_SECTORS';
export const LOAD_EVENTS = 'LOAD_EVENTS';

const initialState = {
  sectors: {},
  selectedSectors: []
};

function select(state, action) {
  const { sectors } = state;
  const { sectorId } = action.payload;
  const currSector = sectors?.[sectorId];

  debugger;

  return {
    sectors: {
      ...state.sectors,
      [sectorId]: {
        ...currSector,
        checked: currSector.checked !== undefined ? !currSector.checked : true
      }
    }
  };
}

function saveEvents(state, action) {
  debugger;
  const {
    payload,
    filters: { sector }
  } = action;
  const currSector = state.sectors?.[sector];
  debugger;
  return {
    sectors: {
      ...state.sectors,
      [sector]: {
        ...currSector,
        data: payload
      }
    }
  };
}
export function eventsReducer(state = initialState, action) {
  const { type, payload } = action;

  debugger;
  switch (type) {
    case success(LOAD_SECTORS):
      debugger;
      return {
        ...state,
        sectors: Object.assign(
          ...payload.map(item => ({ [item.id]: { ...item, checked: false } }))
        )
      };

    case success(LOAD_EVENTS):
      return saveEvents(state, action);

    case SET_SELECTED_SECTORS:
      return select(state, action);

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

export function loadEvents(sector, region) {
  return {
    type: LOAD_EVENTS,
    createRequest: {
      url: '/news/events/',
      filters: {
        limit: 5,
        offset: 0,
        sector,
        region__initial: region
      }
    }
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
      ? Object.keys(state.sectors)
          .map(key => state.sectors[key])
          .sort((a, b) => b.total_estimated_impact - a.total_estimated_impact)
      : []
);
