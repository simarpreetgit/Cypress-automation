class Contact_Us_Po {
  contactForm_Submission(
    firstName,
    lastName,
    email,
    feedback,
    $selector,
    textTolocate,
  ) {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(feedback)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(textTolocate)
  }
}

export default Contact_Us_Po
