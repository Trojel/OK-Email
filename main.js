﻿/**window.onload = function() {
    var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
  }**/



function submit()
{
    var text = `Hej ${document.getElementById("navn").value} \n Tak for snakken idag \n Du får hermed pris... \n 
    ${document.getElementById("pris").value} øre/kWh`

    pis = {
        Host : "smtp-mail.outlook.com",
        Username : "mirsadBasic@outlook.dk",
        Password : "FrankHvam",
        To : document.getElementById("mail").value,
        From : "mirsadBasic@outlook.dk",
        Subject : "Tilbud på el-aftale fra OK",
        Body : text
    }
    Email.send(pis).then(
        message => alert(message));
    
        //location.reload()
}



