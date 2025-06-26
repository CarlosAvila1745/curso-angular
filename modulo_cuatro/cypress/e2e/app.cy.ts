describe('Pruebas E2E de la app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Debe mostrar el mapa', () => {
    cy.get('ngx-mapbox-gl').should('exist');
  });

  it('Al hacer click en el marker, debe mostrarse popup', () => {
    cy.get('mgl-marker').click();
    cy.get('mgl-popup').should('be.visible');
  });

  it('Al hacer click en botón, contador debe incrementar', () => {
    cy.get('button[data-tracking-tag="btn-guardar"]').click();
    cy.contains('btn-guardar: 1').should('exist');
  });
});
