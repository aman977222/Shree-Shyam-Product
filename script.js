document.getElementById("send-btn").addEventListener("click", function(e) {
    e.preventDefault();

    let userMessage = document.getElementById("chat-input").value;
    if(userMessage.trim() === "") return;

    let chatBody = document.getElementById("chat-body");
    chatBody.innerHTML += "<p><b>You:</b> " + userMessage + "</p>";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "chat_response.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
        if(this.status == 200){
            let botReply = this.responseText;
            chatBody.innerHTML += "<p><b>Bot:</b> " + botReply + "</p>";
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    };

    xhr.send("message=" + encodeURIComponent(userMessage));
    document.getElementById("chat-input").value = "";
});
