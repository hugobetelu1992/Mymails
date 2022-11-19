var emails = document.getElementsByClassName("email").length
// Compteur de messages
document.getElementById('emailcounter').textContent = emails ;

// Suppression de messages
for (var i = 0; i < document.getElementsByClassName('trash').length; i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click",
        function () {
            this.parentNode.remove();
        })
}

