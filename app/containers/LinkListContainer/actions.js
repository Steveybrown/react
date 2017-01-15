/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_SUCCEEDED,
  REQUEST_LINK_FAILED,
} from './constants';

export function requestLinkedSucceeded(links) {
  return {
    type: REQUEST_LINK_SUCCEEDED,
    links,
  };
}

export function requestLinkedFailed(message) {
  return {
    type: REQUEST_LINK_FAILED,
    message,
  };
}
