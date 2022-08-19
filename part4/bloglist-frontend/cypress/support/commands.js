// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", function (user) {
  const password = user.password;
  const username = user.username;
  cy.request("POST", "http://localhost:3003/api/login", {
    username,
    password,
  }).then(function ({ body }) {
    localStorage.setItem("loggedBlogappUser", JSON.stringify(body));
    cy.visit("http://localhost:3000");
  });
});

Cypress.Commands.add("createUser", function (user) {
  cy.request("POST", "http://localhost:3003/api/users", user);
});

Cypress.Commands.add("createBlog", function (title, name) {
  cy.get("#hide-Create-a-blog").click();
  cy.get("#blogTitle").type(title);
  cy.get("#blogAuthor").type(name);
  cy.get("#blogUrl").type("Test.org");
  cy.get("#blogSubmit").click()
});
