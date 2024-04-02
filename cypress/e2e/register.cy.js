import {user} from '../support/generateUsers'

beforeEach(() => {
  cy.visit('/');
});

describe('Register', () => {
  it('Register Successfully', () => {

    cy.register(
      user.firstName,
      user.lastName,
      user.sex, 
      user.email,
      user.birthday, 
      user.password, 
      user.companyName)

    cy.contains('Your registration completed').should('be.visible')
  })

  it('Register with an email that already exists', () => {

    cy.register(
      user.firstName,
      user.lastName,
      user.sex, 
      user.email,
      user.birthday, 
      user.password, 
      user.companyName)

    cy.contains('The specified email already exists').should('be.visible')
  })

  it('check empty filds', () => {

    cy.get('.ico-register').click()
    cy.get('#register-button').click()
    cy.contains('First name is required.').should('be.visible')
    cy.contains('Last name is required.').should('be.visible')
    cy.contains('Email is required.').should('be.visible')
    cy.contains('Password is required.').should('be.visible')
  })

  it("Register with Invalid Email", () =>{

    cy.get('.ico-register').click()
    cy.get('#Email').type(user.firstName)
    cy.get('#Password').click()
    cy.contains("Wrong email").should('be.visible')
  })

  it("Register with Invalid Password", () =>{

    cy.get('.ico-register').click()
    cy.get('#Password').type(user.password.substring(0, 5))
    cy.get('#ConfirmPassword').click()
    cy.contains("Password must meet the following rules: must have at least 6 characters").should('be.visible')
  })

  
})