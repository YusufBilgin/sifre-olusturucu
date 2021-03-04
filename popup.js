document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    
    link.addEventListener('click', function() {
        
        // nedense bu sekilde yapinca girilmis olan degeri okuyamiyorum.
        // var digit_number = document.getElementById("digit").value;
        
        var digit_number = 12
        
        var sifre = document.getElementById("sifre");

        password = ""

        characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '#', '&', '$', '=', '_'];

        for (var i = 0; i < digit_number; i++) {
            password = password + characters[Math.floor(Math.random() * 68)];
        }
        //console.log(password);
        console.log(sifre)
        sifre.innerHTML = password;

    });
});