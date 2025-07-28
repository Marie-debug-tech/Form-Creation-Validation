// Step 1: Define async function
async function fetchUserData() {
  // Step 2: Define API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select data container
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch data
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Step 5: Clear "Loading..." message
    dataContainer.innerHTML = '';

    // Step 6: Create user list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 7: Append to container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 8: Error handling
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Step 9: Run fetch on DOM load
document.addEventListener('DOMContentLoaded', fetchUserData);