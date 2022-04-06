setStatus = document.getElementById('stat');
    setStatus.onclick = function() {
        if(document.getElementById('stat').checked) {
            localStorage.setItem('stat', "true");
        } else {
            localStorage.setItem('stat', "false");
        }
    }


getStstus = localStorage.getItem('stat');
    if (getStstus == "true") {
        console.log("its checked");
        document.getElementById("stat").checked;
    } else {
        console.log("its not checked");
    }