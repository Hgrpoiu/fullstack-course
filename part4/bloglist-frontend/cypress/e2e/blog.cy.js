const user = {
  name: "root",
  username: "root",
  password: "admin",
};

describe("Blog app", () => {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3003/api/reset");

    cy.createUser(user);
    cy.login(user);
  });

  it("Login form is show", function () {
    cy.contains("Login");
  });

  it("Try Login", function () {
    cy.get("#username").type(user.username);
    cy.get("#password").type(user.password);

    cy.get("#login-submit").click();
    cy.contains("root is logged in");
  });

  it("Try bad Login", function () {
    cy.get("#username").type(user.username);
    cy.get("#password").type("badPass");

    cy.get("#login-submit").click();
    cy.get(".error");
  });

  describe("while logged in", function () {
    beforeEach(function () {
      cy.get("#username").type(user.username);
      cy.get("#password").type(user.password);

      cy.get("#login-submit").click();
      cy.contains("root is logged in");
    });

    it("Create a post", function () {
      cy.get("#hide-Create-a-blog").click()
      cy.get("#blogTitle").type("First blog")
      cy.get("#blogAuthor").type(user.name)
      cy.get("#blogUrl").type("tests.org")
      cy.get("#blogSubmit").click()

      cy.contains(`First blog by`)
    });

    it("Like a post",function(){
      cy.get("#hide-Create-a-blog").click()
      cy.get("#blogTitle").type("First blog")
      cy.get("#blogAuthor").type(user.name)
      cy.get("#blogUrl").type("tests.org")
      cy.get("#blogSubmit").click()

      cy.get("#hide-View").click()
      cy.get('#like-button-First-blog').click()

      cy.contains("likes:1")
    })

    it("Delete user's post",function(){
      cy.get("#hide-Create-a-blog").click()
      cy.get("#blogTitle").type("First blog")
      cy.get("#blogAuthor").type(user.name)
      cy.get("#blogUrl").type("tests.org")
      cy.get("#blogSubmit").click()

      cy.get("#hide-View").click()

      cy.get("#blogDelBut").click()
      cy.should("not.contain","First blog")
    })

    it("Sort by likes",function(){
      cy.createBlog("First blog","User")
      cy.createBlog("Second blog","User")
      cy.createBlog("Third blog","User")

      cy.contains("First blog").get("#hide-View").click()
      cy.contains("First blog").get("#like-button-First-blog").click()
      cy.get("#Second-blog").contains("View").click()
      cy.get("#Second-blog").get("#like-button-Second-blog").click()
      cy.get("#Third-blog").contains("View").click()
      cy.get("#Third-blog").get("#like-button-Third-blog").click()
      cy.get("#Second-blog").get("#like-button-Second-blog").click()
      cy.get("#Third-blog").get("#like-button-Third-blog").click()
      cy.get("#Third-blog").get("#like-button-Third-blog").click()

      cy.visit("http://localhost:3000")

      cy.get("#blogsMapped").get("li").eq(0).contains("Third blog")
      cy.get("#blogsMapped").get("li").eq(1).contains("Second blog")
      cy.get("#blogsMapped").get("li").eq(2).contains("First blog")

    })
  });
});
