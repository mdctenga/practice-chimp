module.exports = function () {

  // Jason's attempt
  // this.Given(/^I navigate to Facebook$/, function () {
  // client.url('http://facebook.com');
  // });

  // this.Given(/^Input "([^"]*)"$/, function (username) {
  // client
  //   .setValue('input[name="email"]', username );
  // });

  // this.Given(/^Input "([^"]*)"$/, function (password) {
  // client
  //   .setValue('input[name="pass"]', password);
  // });

  // this.When(/^I click "([^"]*)"$/, function () {
  // // Write the automation code here
  // // client.click('#u_0_n');
  // pending();
  // });


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

  this.Given(/^I can click "([^"]*)"$/, function (login) {
    client
      .leftClick('#u_0_n');
  });

};