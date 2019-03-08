/*
 * Copyright 2016 Red Hat Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
'use strict';

const _get = require('./_get');
const log = require('./log')(':grant-attacher');

module.exports = function (keycloak) {
  return function grantAttacher (request, response, next) {
    keycloak.getGrant(request, response)
      .then(grant => {
        log('grant %j', _get(grant, 'access_token.content'))
        request.kauth.grant = grant;
      })
      .then(next).catch(err => {
        log('%s', err)
        next()
      });
  };
};
