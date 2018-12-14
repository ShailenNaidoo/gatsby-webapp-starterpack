const toggleButton = () => {
  cy.visit('/')

  const clickButton = () => {
    cy.get('button').click();
  }

  const checkIfStartingState = () => {
    const button = cy.get('button');
    button.should('have.class', 'MuiButtonBase-root-102 MuiButton-root-76 MuiButton-contained-87 MuiButton-containedPrimary-88 MuiButton-raised-90 MuiButton-raisedPrimary-91')
    button.contains('Enable Button')
  }
  
  const checkIfToggledState = () => {
    const button = cy.get('button');
    button.should('have.class', 'MuiButtonBase-root-102 MuiButton-root-76 MuiButton-contained-87 MuiButton-containedSecondary-89 MuiButton-raised-90 MuiButton-raisedSecondary-92')
    button.contains('Disable Button')
  }

  checkIfStartingState();
  clickButton();
  checkIfToggledState();
  clickButton();
  checkIfStartingState();
}


describe('Homepage', () => {
  it('Toggle text button', toggleButton)
});