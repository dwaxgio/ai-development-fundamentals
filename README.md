# 💬 Software Dev Chatbot

![Chat UI](./public/img/1_MAIN.png)

A core chatbot web application built with Node.js and the OpenAI API. It allows users to interact with a chat interface where their questions are processed by OpenAI’s GPT model and responded to in real-time.

---

## 🧠 Project Overview

This project demonstrates how to:

- Full-stack chatbot using vanilla JavaScript and Node.js.
- Connect a frontend interface to the OpenAI GPT API via a secure backend route.
- Handle API responses and display messages dynamically in the browser.

---

## 🏗️ Architecture
[Client] index.html / main.js
│
▼
[Express Backend] server.js
│
▼
[OpenAI API] using fetch with API Key


- Static files are served from the `public/` directory.
- The backend has an endpoint (`/getChatbotResponse`) that relays messages to the OpenAI API.
- The frontend sends user input to the backend and displays both user and bot messages.

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- HTML5 + CSS3 + Vanilla JS
- OpenAI API (Chat Completions endpoint)
- dotenv (`.env` for secure API key management)
