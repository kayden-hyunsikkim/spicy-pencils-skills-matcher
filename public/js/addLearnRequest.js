const addLearnForm = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#learn-name').value.trim();
    const level = document.querySelector('#learn-level').value.trim();
    const description = document.querySelector('#learn-desc').value.trim();
  
    if (name && level && description) {
      const response = await fetch(`/api/learn`, {
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
  
  const deleteLearnRequest = async (event) => {
    if (event.target.hasAttribute('learn-id')) {
      const id = event.target.getAttribute('learn-id');
  
      const response = await fetch(`/api/learn/${id}`, {
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
    .querySelector('.learn-project-form')
    .addEventListener('submit', addLearnForm);
  
  document
    .querySelector('.learn-list')
    .addEventListener('click', deleteLearnRequest);
  