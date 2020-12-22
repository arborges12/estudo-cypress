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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364','R6xmma6F4U6edNQuu67M0rFB17GjE%2FLfK33%2B1nRmwgwkoj2XnO2mKLXcyO9Juld0p7TCDK2khBx%2F13gmLSyCsAUbV%2BTyc6zUog931r2anfsWMLzTSJoLLxbK0rmDc%2FJ5J0rSA0vBZEmcmS18t6w9SCKkQiP4tLJmeQftKN0jXp5hJnl4T3tCwRc9cZv7Gd%2BrbFHUhXvCwT2JowYWEdncGTg9audX%2F2UfZGXMm6O1Q%2F4uJICvwQezVKVs0Hay62Nq3NkckWPhVH%2BvnmGXgfEAgYzQRQyfXFM7X5vxWcMZnJOi1Udk4CtCO%2FRMvP5ZzNEbkJfrbR8ynr9RZqsl2a7sSHQFOkkKx4kRQnGZXwZPl1F7dUAxiY37nqVOQdU87RbFlEF5RFT2DvR4F%2BmlpRqeXq6jS5z9GV4mL%2F32r9AVMPs%3D000320' 
    )

})
