const link = document.getElementById('mijnLink');
    link.addEventListener('click', function(event) {
        event.preventDefault();
        if (link.textContent === "Klik hier om te doneren") {
            link.textContent = "Bedankt!";
        }
        else {
            link.textContent = "Klik hier om te doneren"; 
        }
         });