describe('display results', () => {

  it('it can display results from an API request', () => {
    // visit the app
    cy.visit('/');

    // intercept the GET request and substitute our fixture for the response
    cy.intercept('GET', '/search', { fixture: 'itunes' })
      .as('searchResults');

    // get the search field and type into it
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk');

    // find the spinner and make sure it's visible
    cy.get('.spinner')
      .should('be.visible');

    // wait for the GET request to resolve
    cy.wait('@searchResults')
      // look for a specific album
      .get('article.album')
      .contains('Homework')
      .should('be.visible');

    // untick the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // make sure that the explicit album is no longer in the results
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
