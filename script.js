// script.js

// Store users and events in arrays
let users = [];
let events = [];

// Register Functionality
document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  users.push({ username, email, password });
  alert('Registration successful!');
  e.target.reset();
});

// Login Functionality
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    alert(`Welcome, ${user.username}!`);
  } else {
    alert('Invalid login credentials!');
  }
  e.target.reset();
});

// Add Event Functionality
document.getElementById('eventForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const eventName = document.getElementById('eventName').value;
  const eventLocation = document.getElementById('eventLocation').value;
  const eventDate = document.getElementById('eventDate').value;

  events.push({ eventName, eventLocation, eventDate });
  updateEventList();
  e.target.reset();
});

// Update Event List
function updateEventList() {
  const eventItems = document.getElementById('eventItems');
  eventItems.innerHTML = '';
  events.forEach((event, index) => {
    const li = document.createElement('li');
    li.textContent = `${event.eventName} - ${event.eventLocation} - ${new Date(event.eventDate).toLocaleString()}`;
    li.style='color:white; fontsize:22px';
    li.appendChild(createDeleteButton(index));
    eventItems.appendChild(li);
  });
}

// Create Delete Button for Events
function createDeleteButton(index) {
  const button = document.createElement('button');
  button.style='background-color:red; width: 80px; height: 30px ;font-size: 16px;border-radius: 10px; border: none;courser:pointer';
  button.textContent = 'Delete';
  button.style.margin = '15px';
  button.addEventListener('click', () => {
    events.splice(index, 1);
    updateEventList();
  });
  return button;
}


