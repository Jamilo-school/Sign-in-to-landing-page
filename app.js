const scriptURL = 'https://script.google.com/macros/s/AKfycbzbEZSEARSZNsV6mIihKO5t6Ld9Jo9DTpEqigFWQbms_HptG4pVKrzRk8w48pmV5s4s3g/exec';
const form = document.forms['submit-to-google-sheet'];

const passwordRedirectMap = {
    'pass': 'https://jamilo-school.github.io/landing-page/',
    'pass2': './redirect2.html',
    'password3': './redirect3.html',
    // Add more mappings as needed
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Create a container element for the input and eye icons
    const container = document.createElement('div');
    container.style.position = 'relative';

    // Create an input element
    const inputElement = document.createElement('input');
    inputElement.type = 'password';
    inputElement.placeholder = 'Enter Activation License Key';
    inputElement.classList.add('swal2-input');
    inputElement.style.width = 'calc(90% - 40px)'; // Adjust width for icon space
    inputElement.style.marginRight = '40px'; // Space for icons

    // Create eye icons for show/hide password
    const showPasswordIcon = document.createElement('span');
    showPasswordIcon.innerHTML = '👁️';
    showPasswordIcon.style.cursor = 'pointer';
    showPasswordIcon.style.position = 'absolute';
    showPasswordIcon.style.top = '60%';
    showPasswordIcon.style.right = '70px';
    showPasswordIcon.style.transform = 'translateY(-50%)';
    showPasswordIcon.addEventListener('click', () => {
        inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
        showPasswordIcon.style.display = 'none';
        hidePasswordIcon.style.display = 'inline';
    });

    const hidePasswordIcon = document.createElement('span');
    hidePasswordIcon.innerHTML = '❌';
    hidePasswordIcon.style.cursor = 'pointer';
    hidePasswordIcon.style.position = 'absolute';
    hidePasswordIcon.style.top = '60%';
    hidePasswordIcon.style.right = '70px';
    hidePasswordIcon.style.transform = 'translateY(-50%)';
    hidePasswordIcon.style.display = 'none';
    hidePasswordIcon.addEventListener('click', () => {
        inputElement.type = 'password';
        hidePasswordIcon.style.display = 'none';
        showPasswordIcon.style.display = 'inline';
    });

    container.appendChild(inputElement);
    container.appendChild(showPasswordIcon);
    container.appendChild(hidePasswordIcon);

    // Prompt for password
    const { value: password } = await Swal.fire({
        title: 'Digital Activation License Key Required',
        html: container, // Use the container with input and icons
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'Password is required!';
            } else {
                // Check if the entered password is in the passwordRedirectMap
                if (!passwordRedirectMap.hasOwnProperty(value)) {
                    Swal.fire({
                        title: 'Incorrect Activation License Key',
                        text: 'Please enter a valid key or contact.',
                        icon: 'warning',
                    });
                    return ''; // Reject the input
                }
            }
        },
    });

    if (password) {
        Swal.fire({
            title: 'Processing',
            text: 'Please wait',
            icon: 'info',
            showConfirmButton: false,
            allowOutsideClick: false,
        });

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then((response) => {
                Swal.close();
                if (response.status === 200) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Welcome Successful!',
                        icon: 'success',
                    });
                    form.reset();
                    setTimeout(() => {
                        Swal.close();
                        window.location.href = passwordRedirectMap[password];
                    }, 2000);
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Submission Failed',
                        icon: 'error',
                    });
                }
            })
            .catch((error) => {
                console.error('Error!', error.message);
                Swal.close();
                Swal.fire({
                    title: 'Ooops!!',
                    text: 'Connect to the internet ',
                    icon: 'error',
                });
            });
    }
});
