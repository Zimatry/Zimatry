
function sendToZimatry() {
    var name = escape(document.getElementById("name").value);

    if (name == '') { name = "NO NAME PROVIDED" }


    
    // Parse the subject and determine
    var subject = escape(document.getElementById('subject').value);
    if (subject == '') {
        subject = `[${name}] ` + "Request for More Information"
    } else {
        subject = `[${name}] ` + `${subject}`
    }


    let body= `Hello my name is ${name}. I can be reached by email at ${escape(document.getElementById('mail').value)}. My phone number is ${escape(document.getElementById('phone').value)}. ${escape(document.getElementById('message').value)}`;

    var link = "mailto:zimatry@gmail.com"
             + "?subject=" + subject
             + "&body=" + `${body}`;

    window.location.href = link;
}


var slideIndex = 0;
carousel();

// https://www.w3schools.com/w3css/w3css_slideshow.asp
function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 4000); // Change image every 4 seconds
}