const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const mobile = document.querySelector('#mobile-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const country = document.querySelector('#country-signup').value.trim();
  const communication = document.querySelector('input[name="preferred-communication[]"]:checked').value;
  
  if (name && email && password && mobile && country && communication) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, mobile, country, communication}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
