/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/// <reference types="cypress" />

import { identity, pickBy } from 'lodash';

export const searchCloseApproachObjects = (httpMethod: string, baseURL: string, searchParams: any) => {
  const urlParams = pickBy(searchParams, identity); // filtering out the search params object
  const urlSearchParams = new URLSearchParams(urlParams); // capturing query string of a URL
  return cy
    .request(httpMethod, `${baseURL}?${urlSearchParams}`)
    .then((response) => {
      const closeApproachObjects = response;
      return closeApproachObjects;
    });
};
