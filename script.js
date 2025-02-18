document.addEventListener('DOMContentLoaded', function () {
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');
  
    if (sendBtn) {
      sendBtn.addEventListener('click', function () {
        const inputText = userInput.value.trim();
        if (inputText !== '') {
          // Append user message
          const userMsg = document.createElement('div');
          userMsg.classList.add('message', 'user');
          userMsg.textContent = inputText;
          chatbox.appendChild(userMsg);
          userInput.value = '';
  
          // Simulate bot response
          setTimeout(function () {
            const botMsg = document.createElement('div');
            botMsg.classList.add('message', 'bot');
            botMsg.textContent = "Response: " + inputText;
            chatbox.appendChild(botMsg);
            chatbox.scrollTop = chatbox.scrollHeight;
          }, 1000);
        }
      });
    }
  });
  