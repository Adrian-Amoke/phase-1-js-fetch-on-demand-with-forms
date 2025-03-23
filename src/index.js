const init = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);

  
}
const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log(name, email, message);
}


document.addEventListener('DOMContentLoaded', init);