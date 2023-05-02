// Criar conta

const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

// Executar login

document.getElementById("login-form").addEventListener("submit", function(event)
{
    event.preventDefault();
    const email = document.getElementById("email-input").value;
    const passowrd = document.getElementById("password-input").value;
    const Checksession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    
    if(!account) 
    {
        alert("Usuário ou senha incorretos");
        return;
    }

    if(account)
    { if (account.passowrd !== passowrd)
        {
        alert("Usuário ou senha incorretos");
        return;
        }

        saveSession(email,Checksession)

        window.location.href = "home.html";
        
    }

    

});


document.getElementById("create_form").addEventListener("submit", function(event)
{   
    event.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const passowrd = document.getElementById("password-create-input").value;

    if(email.lenght<5)
    {
        alert("Preencha o campo com um e-mail válido")
        return;
    }

    if(passowrd.lenght<4){
        alert("Preencha a senha com no mínimo 4 digitos")
        return;
    }

    saveAccount
    ({
        login : email,
        passowrd : passowrd,
        transactions : [],

    });

    console.log(email,passowrd);
    myModal.hide();
    alert("Conta criada com sucesso");
    

});


function checkLogged()
{
    if(session)
    {
        sessionStorage.setItem("logged",session);   
        logged = session; 
    }

    if(logged)
    {
        saveSession(logged, session);
        window.location.href = "home.html";
    }
}




function saveAccount(data)
{
    console.log(data);
    localStorage.setItem(data.login, JSON.stringify(data));
}


function saveSession(data,saveSession)
{   
    if(saveSession)
    {   
        localStorage.setItem("session",data);
    }

    sessionStorage.setItem("logged",data);

}



function getAccount(key)
{
    const account = localStorage.getItem(key);

    if(account) 
    {
        return JSON.parse(account);
    }
    return "";

}