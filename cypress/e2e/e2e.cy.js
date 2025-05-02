// cypress/e2e/quiz.cy.js

describe('Quiz – E2E Flow', () => {
  beforeEach(() => {
    // stub out the random question API
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
      statusCode: 200
    }).as('getRandomQuestion');

    // visit the page that renders your Quiz component;
    // change '/' to '/quiz' or whatever route you use
    cy.visit('/');
  });

  it('should start the quiz and display the first question', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer a question and complete the quiz', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');

    // pick answer “1”
    cy.get('button').contains('1').click();

    // upon completion, success alert with score appears
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain', 'Your score');
  });

  it('should allow restarting the quiz after completion', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getRandomQuestion');

    cy.get('button').contains('1').click();
    cy.get('button').contains('Take New Quiz').click();

    // back to first‐question state
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
