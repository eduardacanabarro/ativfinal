document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var newUser = {
        "Nome": name,
        "E-mail": email,
        "Senha": password
    };

    console.log("Novo usuário cadastrado: ", newUser);
    alert("Cadastro realizado com sucesso!");
    
});
    