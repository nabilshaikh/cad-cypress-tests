describe('CAD API', () => {
  beforeEach(() => {
    cy.request('GET', 'http://localhost:7081/cad.api').as('apiCADResponse');
  });

  it('Validate the header', () => {
    cy.get('@apiCADResponse')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8');
  });

  it('Validate the status code', () => {
    cy.get('@apiCADResponse')
      .its('status')
      .should('equal', 200);
  });

  it('Validate JSON properties', () => {
    cy.get('@apiCADResponse').then((response) => {
      expect(response.body).to.have.property('signature');
      expect(response.body).to.have.property('count');
      expect(response.body).to.have.property('fields');
      expect(response.body).to.have.property('data');
    });
  });

  it('Validate response count', () => {
    cy.get('@apiCADResponse').then((response) => {
      expect(response.body.count).to.equal('2');
    });
  });
});
