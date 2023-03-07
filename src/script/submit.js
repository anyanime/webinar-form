const emailField = document.querySelector('input[name="email"]');
const form = document.querySelector('form');
// const input = document.querySelectorAll();
// console.log(input)

emailField.addEventListener("change", e => {
    let emailAddress = emailField.value;
    fetch(`http://localhost:8888/api/confirmparticipants?email=${emailAddress}`).then((response) => {
        if (response.status === 200) {
            swal({
                title: "Already Registered!",
                text: "Participant Already Registered!",
                icon: "warning",
              });
              form.reset();
        } else {
            return;
        }
    })
})

const btn = document.querySelector("#btn");  

btn.addEventListener('click', event => {
    event.preventDefault();

    //get input field values
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const box = document.querySelector('input[type="radio"]:checked');
    
        const formBody = {
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            box: box.value
        } 
        submitData(formBody);
   
})

submitData = async (formBody) => {
    const url = "http://localhost:8888/api/register";

    fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify(formBody),
    }).then((response) => {
        if (response.status === 201) {

            swal({
                title: "Submitted!",
                text: "Your registration was submitted!",
                icon: "success",
              });
              form.reset();
        }
    })
    .catch(error => {
        swal({
            title: "Not Registered!",
            text: `An error occurred ${error}`,
            icon: "error",
          });
          console.log(error)
    })
}

// const form = document.querySelector('form');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const data = new URLSearchParams(formData);
//     console.log(data)
// })

