describe('Movie List', function(){
  beforeEach(() => {
    cy.visit('https://yegor-sytnyk.github.io/movies-list/')

  })

  it('Finds "12 Angry Men"', function () {
    // Website contains the movie 12 Angry Men
    cy.contains('12 Angry Men')
  })


  it('Clicks 12 Angry Men"', function () {
    // Click the movie 12 Angry Men
    cy.contains('12 Angry Men').click()

  })


  it('Checks pop up window is present', function () {
    // Click the movie 12 Angry Men
    cy.contains('12 Angry Men').click()

    // Get the pop up window class titled 'modal content'
    cy.get('.modal-content')

  })

  it('Identifies "12 Angry Men" in pop up window', function () {
    // Click the movie 12 Angry Men to open new window
    cy.contains('12 Angry Men').click()

    // Checking "12 Angry Men" is present in new window"
    cy.get('.form-control')
    .should('have.value', '12 Angry Men')
  })

  it('Clicks Save on new "12 Angry Men" window', function () {
    // Click the movie 12 Angry Men
    cy.contains('12 Angry Men').click()
    // Saves content
    cy.get('.modal-content')
    .contains('Save')
    .click()
    .get('.toast-message')

  })

})
