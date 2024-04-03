import {user} from '../../support/generateUsers'

describe('API Testing ', function () {

let user_id;
let bearerToken;

   it('API - Register User', () => {
       cy.request({
           method: 'POST',
           url: `${Cypress.env('api_server')}/Usuarios`,
           failOnStatusCode: false,
           body: {
            "nome": user.firstName,
            "email": user.email,
            "password": user.password,
            "administrador": "true"
          }
       }).as('details')
       cy.get('@details').its('status').should('eq', 201)
       cy.get('@details').then((response) => {
                   let res = response.body
                   user_id = res._id
                   cy.log(user_id)
               })
          
   })

   it('API - Login', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('api_server')}/Login/`,
        failOnStatusCode: false,
        body: {
         "email": user.email,
         "password": user.password,
       }
    }).as('details')
    cy.get('@details').its('status').should('eq', 200)
    cy.get('@details').then((response) => {
                let res = response.body
                bearerToken = res.authorization
                cy.log(bearerToken)
            })
       
})

   it('API - User Update', () => {
       cy.request({
           method: 'PUT',
           url: `${Cypress.env('api_server')}/Usuarios/${user_id}`,
           failOnStatusCode: false,
           Headers: {
               'Authorization': bearerToken
           },
           body: {
            'nome': user.firstName,
            'email': user.email,
            'password': user.password,
            "administrador": "true"
        }

       }).as('details')

        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {

        cy.log(JSON.stringify(response.body))
    })
          
   })

   it('API - Get User by _Id', () => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('api_server')}/Usuarios/${user_id}`,
        failOnStatusCode: false,
        Headers: {
            'Authorization': bearerToken
        },
    }).as('details')

     cy.get('@details').its('status').should('eq', 200)
     cy.get('@details').then((response) => {

     cy.log(JSON.stringify(response.body))
 })
       
})

it('API - Delete User by _Id', () => {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.env('api_server')}/Usuarios/${user_id}`,
        failOnStatusCode: false,
        Headers: {
            'Authorization': bearerToken
        },
    }).as('details')

     cy.get('@details').its('status').should('eq', 200)
     cy.get('@details').then((response) => {

     cy.log(JSON.stringify(response.body))
 })
       
})

})