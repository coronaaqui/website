import { createSelector } from 'reselect';
import { success } from '../../helpers/redux/actions';

// action types
export const LOAD_SECTORS = 'LOAD_SECTORS';
export const SET_SELECTED_SECTORS = 'SET_SELECTED_SECTORS';
export const LOAD_EVENTS = 'LOAD_EVENTS';
export const LOAD_REGIONS = 'LOAD_REGIONS';
export const RESET_STATE = 'RESET_STATE';

const initialState = {
  regions: [],
  sectors: [],
  events: {},
  selectedSectors: {},
  lastCheck: null,
};

function select(state, action) {
  const { selectedSectors } = state;
  const { sectorId } = action.payload;
  const currSector = selectedSectors?.[sectorId];

  return {
    ...state,
    lastCheck: sectorId,
    selectedSectors: {
      ...state.selectedSectors,
      [sectorId]: currSector ? !currSector : true,
    },
  };
}

function saveEvents(state, action) {
  const {
    payload,
    filters: { sector },
  } = action;

  return {
    ...state,
    lastCheck: null,
    events: {
      ...state.events,
      [sector]: payload,
    },
  };
}

function saveSectors(state, action) {
  const { type, payload } = action;

  const sortedSectors = payload.results.sort((a, b) => b.events_count - a.events_count);

  // debugger;
  return {
    ...state,
    sectors: sortedSectors,
    selectedSectors: Object.assign(
      ...sortedSectors.filter((_, idx) => idx < 4).map((item) => ({ [item.id]: true }))
    ),
  };
}

function saveRegions(state, action) {
  return {
    ...state,
    regions: action.payload,
  };
}

export function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case success(LOAD_REGIONS):
      return saveRegions(state, action);

    case success(LOAD_SECTORS):
      return saveSectors(state, action);

    case success(LOAD_EVENTS):
      return saveEvents(state, action);

    case RESET_STATE:
      return initialState;

    case SET_SELECTED_SECTORS:
      return select(state, action);

    default:
      return state;
  }
}

// actions
export function loadRegions() {
  return {
    type: LOAD_REGIONS,
    createRequest: {
      url: '/places/regions/',
    },
  };
}

export function loadSectors(filters = {}) {
  return {
    createRequest: {
      url: '/organizations/sectors',
      filters,
    },
    type: LOAD_SECTORS,
  };
}

export function loadEvents(sector, region, limit = 50) {
  return {
    type: LOAD_EVENTS,
    createRequest: {
      url: '/news/events/',
      filters: {
        limit,
        offset: 0,
        sector,
        region__initial: region,
      },
    },
  };
}

export function selectSector(sectorId) {
  return {
    type: SET_SELECTED_SECTORS,
    payload: { sectorId },
  };
}

export function resetState() {
  return {
    type: RESET_STATE,
  };
}

// selectors
export const getSectors = createSelector(
  (globalState) => globalState.eventsReducer,
  (state) => state.sectors
);

export const getLastCheck = createSelector(
  (globalState) => globalState.eventsReducer,
  (state) => state.lastCheck
);

export const getEvents = createSelector(
  (globalState) => globalState.eventsReducer,
  (state) => state.events
);

export const getSelectedSectors = createSelector(
  (globalState) => globalState.eventsReducer,
  (state) => state.selectedSectors
);

export const getRegions = (region) =>
  createSelector(
    (globalState) => globalState.eventsReducer,
    (state) =>
      state.regions.filter((item) => item.initial.toLowerCase() === region.toLowerCase())[0]
  );
