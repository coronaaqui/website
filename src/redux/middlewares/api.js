import fetch from 'isomorphic-unfetch';

/**
 * Action phases that this middleware understands and handles
 */

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const defaultDelimiter = '_';

function generateTypes(type, { types, delimiter }) {
  return types.map((val) => `${type}${delimiter}${val}`);
}

const defaultSettings = {
  types: [LOADING, SUCCESS, FAILURE],
  delimiter: defaultDelimiter,
};

const responseHandlers = {
  json: (response) => response.json(),
  blob: (response) => response.blob(),
};

const API_BASE = 'https://api.coronabrasil.org';
/* const API_BASE = '/api/proxy'; */

export function apiMiddleware(restClient = fetch, settings = defaultSettings) {
  return ({ dispatch }) => (next) => async (action) => {
    if (!action.createRequest) {
      return next(action);
    }

    const { type, createRequest, ...rest } = action;
    const { url, body = {}, method = 'GET', headers = {}, responseType = 'json' } = createRequest;

    const [TYPE_LOADING, TYPE_SUCCESS, TYPE_FAILURE] = generateTypes(type, settings);

    next({ type: TYPE_LOADING, ...rest });

    const commonHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    try {
      const requestBody = method !== 'GET' ? { body } : {};
      const rawResponse = await restClient(`${API_BASE}${url}`, {
        method,
        headers: Object.assign(headers, commonHeaders),
        ...requestBody,
      });

      if (!rawResponse.ok) throw rawResponse;

      const response = await responseHandlers[responseType](rawResponse);

      next({ type: TYPE_SUCCESS, payload: response, ...rest });
      return response;
    } catch (error) {
      next({ type: TYPE_FAILURE, error, ...rest });
      return error;
    }
  };
}
