// removes null and undefined values from obj
function cleanObject(obj) {
  return Object.entries(obj).reduce((acc, curr) => {
    const [key, val] = curr;
    return {
      ...(val !== null && val !== undefined ? { [key]: val } : {}),
      ...acc,
    };
  }, {});
}

export function toQueryString(object) {
  const keys = Object.keys(object);
  return keys.length
    ? `?${keys.map(key => `${key}=${object[key].toString()}`).join('&')}`
    : '';
}

export function filtersMiddleware() {
  return next => action => {
    if (!action.createRequest || !action.createRequest.filters) {
      return next(action);
    }

    try {
      const { filters, url } = action.createRequest;

      next({
        ...action,
        createRequest: {
          ...action.createRequest,
          url: `${url}${toQueryString(cleanObject(filters))}`,
        },
        filters
      });
    } catch (e) {
      // let's keep it error-passive for now
      next(action);
    }
  };
}