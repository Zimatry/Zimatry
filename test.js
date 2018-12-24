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


    let body= `Name: ${name} \ 
    Email: ${escape(document.getElementById('mail').value)} \ 
    Phone Number: ${escape(document.getElementById('phone').value)} \
    \n\nMessage: ${escape(document.getElementById('message').value)}`;

    var link = "mailto:zimatry@gmail.com"
             + "?subject=" + subject
             + "&body=" + `${body}`;

    window.location.href = link;
  }

