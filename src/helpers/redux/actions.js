import { LOADING, SUCCESS, FAILURE } from '../../redux/middlewares/api';

export function loading(type) {
  return `${type}_${LOADING}`;
}

export function success(type) {
  return `${type}_${SUCCESS}`;
}

export function failure(type) {
  return `${type}_${FAILURE}`;
}
