window.onload = () => {
  const validateContainer = document.createElement('div');
  validateContainer.className = 'validations';

  const accessibilityTest = document.createElement('button');
  accessibilityTest.innerHTML = 'test accessibility';
  let pageIsHidden = false;
  accessibilityTest.onclick = () => {
    if (pageIsHidden) {
      validateContainer.className = 'validations';
      pageIsHidden = false;
      accessibilityTest.innerHTML = 'test accessibility';
    } else {
      validateContainer.className = 'validations hidden';
      pageIsHidden = true;
      accessibilityTest.innerHTML = 'reveal page';
    }
  };
  validateContainer.appendChild(accessibilityTest);

  if (window.location.href.indexOf('http') !== -1) {
    const validator = document.createElement('button');
    validator.innerHTML = 'validate HTML';
    validator.onclick = () => window.open('https://validator.w3.org/nu/?doc=' + encodeURIComponent(window.location.href), '_blank');
    validateContainer.appendChild(validator);
  }

  document.body.insertBefore(validateContainer, document.body.firstChild);
}
