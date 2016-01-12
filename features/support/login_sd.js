module.exports = function () {

  // this.Given(/^I am not logged in$/, function () {
  // });

  // this.When(/^I navigate to Facebook\.com$/, function (url) {
  //   client.url('http://Facebook.com');
  // });

  // this.Then(/^I should see "([^"]*)"$/, function (selector) {
  //   client
  //     // .elementIdDisplayed(email).then(callback);
  //     // .keys(mdctenga@gmail.com).callback();
  //     // .setValue('#').callback();
  //     .setValue('input[name="q"]', searchTerm)
  //     .keys(['Enter']);

  // });

  this.Given(/^I navigate to Facebook$/, function () {
    client.url('http://Facebook.com');
  });

  this.Given(/^Input "([^"]*)"$/, function (username, password) {
    client
      .setValue('input[name="email"]', username);
  });

  this.Given(/^Input "([^"]*)"$/, function (username, password) {
    client
      .setValue('input[name="pass"]', password);
  });

  this.When(/^I click "([^"]*)"$/, function (password) {
  // Write the automation code here
  pending();
  });

};