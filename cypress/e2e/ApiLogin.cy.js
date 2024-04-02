import {user} from '../support/generateUsers'

describe('API Testing ', function () {
   let att1
   let att2  

//    it('API - GET details', () => {
//        cy.request({
//            method: 'GET',
//            url: `${config.URL}`,
//            failOnStatusCode: false,
//        }).as('details')
//        //Validate status code
//        cy.get('@details').its('status').should('eq', 200)
//        cy.get('@details').then((response) => {
//            cy.log(JSON.stringify(response.body))
//        })
//    })

   it('API - POST Request', () => {
       cy.request({
           method: 'POST',
           url: `http://localhost:3000/login`,
           failOnStatusCode: false,
           body: {
            "email": "fulano@qa.com",
            "password": "teste"
          }
       }).as('details')
       //Validate status code
       cy.get('@details').its('status').should('eq', 200)
       cy.get('@details').then((response) => {
           cy.log(JSON.stringify(response.body))
       })
          
   })

//    it('API Post - POST Request', () => {
//        cy.request({
//            method: 'POST',
//            url: `${config.URL2}`,
//            failOnStatusCode: false,
//            'auth': {
//                'bearer': `${config.Bearer_Rest}`
//            },
//            body: {'user':att2,
//            'user_id': att1,
//            'email':faker.internet.email(),
//            'title':'This is a title',
//            'body': 'This is a message'}
//        }).as('details')
//        //Validate status code
//        cy.get('@details').its('status').should('eq', 201)
//        cy.get('@details').then((response) => {
//            let res = response.body
//            let post_id = res.id
//            cy.log(post_id)
//        })
//        cy.get('@details').then((response) => {
//            cy.log(JSON.stringify(response.body))
//        })
          
//    })

//    it('API - PUT Request', () => {
//        cy.request({
//            method: 'PUT',
//            url: `${config.URL}`+att1,
//            failOnStatusCode: false,
//            'auth': {
//                'bearer': `${config.Bearer_Rest}`
//            },
//            body: {'name':faker.internet.userName(),
//            'gender':'female',
//            'email':faker.internet.email(),
//            'status':'active'}
//        }).as('details')
//        //Validate status code
//        cy.get('@details').its('status').should('eq', 200)
//        cy.get('@details').then((response) => {
//            cy.log(JSON.stringify(response.body))
//        })
          
//    })

//    it('API - DELETE Request', () => {
//        cy.request({
//            method: 'DELETE',
//            url: `${config.URL}`+att1,
//            failOnStatusCode: false,
//            'auth': {
//                'bearer': `${config.Bearer_Rest}`
//            },
//        }).as('details')
//        //Validate response code
//        cy.get('@details').its('status').should('eq', 204)
//        cy.get('@details').then((response) => {
//            cy.log(JSON.stringify(response.body))
//        })
      
          
//    })

})