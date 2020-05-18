const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-884471.okta.com',
  token: '00d0aG13tbO6U-Q0l6dIctrIMceMPhFZZU8tup70ey'
});

module.exports = client;