Cypress.Commands.add('register', (firstName, lastName, sex, Email, birthday, password, companyName, ) =>{
    const date = birthday.split('/');
    cy.get('.ico-register').click()
    cy.get(`#gender-${sex}`).click()
    cy.get('#FirstName').type(firstName)
    cy.get('#LastName').type(lastName)
    cy.get('select[name="DateOfBirthDay"]').select(parseInt(date[0],10));
    cy.get('select[name="DateOfBirthMonth"]').select(parseInt(date[1],10)); 
    cy.get('select[name="DateOfBirthYear"]').select(date[2]); 
    cy.get('#Email').type(Email)
    cy.get('#Company').type(companyName)
    cy.get('#Password').type(password)
    cy.get('#ConfirmPassword').type(password)
    cy.get('#register-button').click()
})


