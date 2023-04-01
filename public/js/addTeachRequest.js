const addTeachForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#teach-name').value.trim();
  const level = document.querySelector('#teach-level').value.trim();
  const description = document.querySelector('#teach-desc').value.trim();

  if (name && level && description) {
    const response = await fetch(`/api/teach`, {
      method: 'POST',
      body: JSON.stringify({ name, level, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const deleteTeachRequest = async (event) => {
  if (event.target.hasAttribute('teach-id')) {
    const id = event.target.getAttribute('teach-id');

    const response = await fetch(`/api/teach/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};


document
  .querySelector('.teach-project-form')
  .addEventListener('submit', addTeachForm);

document
  .querySelector('.teach-list')
  .addEventListener('click', deleteTeachRequest);

