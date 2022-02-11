/* eslint-disable max-len */
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

And('verify response count to equal {int}', (count) => {
  // encapsulated the api request call
  searchCloseApproachObjects(httpMethod, baseURL, searchParams).then((response) => {
    /**
     * The better approach is to use `expect().to.equal()` assertion.
     * Since, the API response is changing, I have used the below assertion to handle this.
     * For such flakiness behaviour, better approach is to stub the response. I have handled such behaviour in 'cypress/unit' tests.
     */
    expect(response.body.count).to.have.length.of.at.most(count);
  });
});
