document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

   
    if (username === "usuario" && password === "senha123") {
        
        errorMessage.textContent = ""; 
        alert("Login bem-sucedido! Redirecionando para a página principal...");
       
    } else {
        
        errorMessage.textContent = "Usuário ou senha incorretos.tente novamente.";
    }
});
