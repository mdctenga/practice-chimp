module.exports = function () {

  this.Given(/^I navigate to Facebook$/, function () {
    client.url('http://Facebook.com');
  });

  this.Given(/^Input "([^"]*)"$/, function (username) {
    client
      .setValue('input[id="email"]', username);
  });

  this.Given(/^I input "([^"]*)"$/, function (password) {
    client
      .setValue('input[name="pass"]', password);
  });

  this.Given(/^I click "([^"]*)"$/, function (login) {
    client
      .leftClick('#u_0_n');
  });

};