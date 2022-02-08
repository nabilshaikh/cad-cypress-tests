/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />

import {
  And, Given,
} from 'cypress-cucumber-preprocessor/steps';
import { searchCloseApproachObjects } from '../support/api-requests';

let baseURL: string;
let httpMethod: string;
const searchParams: Record<string, string> = {};

Given('base url {string}', (url: string) => {
  baseURL = url;
});

And('make HTTP {string} request', (method: string) => {
  httpMethod = method;
});

And('parameter with key {string} and value {string}', (key, value) => {
  searchParams[key] = value;
});

And('verify response count to equal {string}', (count) => {
  // encapsulated the api request call
  searchCloseApproachObjects(httpMethod, baseURL, searchParams).then((response) => {
    expect(response.body.count).to.equal(count);
  });
});
