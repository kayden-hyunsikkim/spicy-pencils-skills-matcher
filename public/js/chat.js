const chatForm = document.getElementById("chat-form");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");

const username = document.getElementById("username").textContent;
const room = window.location.pathname.replace("/chat/", "");

const socket = io();

socket.emit("joinRoom", { username, room });

socket.on("roomUsers", ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

socket.on("message", (message) => {
  output(message);
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = event.target.elements.message.value;

  socket.emit("chatMessage", message);

  event.target.elements.message.value = "";
  event.target.elements.message.focus;
});

function output(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<div>
    <p>${message.username} <span>${message.time}</span></p>
    <p'>
        ${message.text}
    </p>
    </div>`;
  document.querySelector(".chat-messages").appendChild(div);
}

function outputRoomName(room) {
  roomName.innerText = room;
}

function outputUsers(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.username;
    userList.appendChild(li);
  });
}
