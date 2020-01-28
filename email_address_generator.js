/// http://qa-has-power.herokuapp.com/login

describe("email_generator", function() {
  it("generate email address", function() {
    cy.visit("http://qa-has-power.herokuapp.com/login");

    function userID_Alpha() {
      var imie = ["Jan", "Adam", "Janusz"];
      var nazwisko = ["Kowalski", "Nowak", "Psikuta"];
      var rand_i = imie[Math.floor(Math.random() * imie.length)];
      var rand_n = nazwisko[Math.floor(Math.random() * nazwisko.length)];
      var number = Math.floor(Math.random() * 999);
      var x = rand_i.toString();
      var y = rand_n.toString();
      var z = number.toString();
      var xyz = x.concat(".", y, z, "@stxnext.pl");
      return xyz;
    }

    cy.get("#email.form-control").type(userID_Alpha());

    cy.get("#password.form-control").type("Admin123456789!");
  });
});
