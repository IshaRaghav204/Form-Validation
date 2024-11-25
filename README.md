
# Form Validation
This project is a simple form validation app built with React.js. It includes a form with fields for Name, Email, Password, Phone Number, Date of Birth, Address, and a Gender selection. The form has validation rules for each field, ensuring that user input is correctly formatted and complete before submission.
## Features

- Validation for all fields: Each input field is validated with specific criteria:
- Name: Required.
- Email: Required and must be a valid email format.
- Password: Required and must be at least 6 characters long.
- Phone Number: Required and must be a 10-digit number.
- Date of Birth: Required.
- Address: Required.
- Checkbox Validation: Ensures that the user agrees to the terms and conditions before submitting the form.
- Error Display: Shows error messages below the respective input fields for easy user reference.
- Loading State: Prevents multiple submissions by disabling the submit button when the form is in the process of submitting.
- Reset Functionality: Clears the form fields after a successful submission.
- Bootstrap Integration: Utilizes Bootstrap for styling the form elements, buttons, and error messages for a polished look.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IshaRaghav204/form-validation-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd V:/small-projects/form-validation/Form
   ```
   
3. ```bash
   npm create vite@latest
   ```
   
4. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Project

To run the project locally:

```bash
npm run dev
```

The website will be running at `http://localhost:5173`.

## Bootstrap Installation
1. Install Bootstrap
  ```bash
   npm install bootstrap@5.3.3
   ```
2. Import Bootstrap in file
   ```bash
   import "bootstrap/dist/css/bootstrap.min.css
   ```
   
## Technologies Used

- **React** for building the user interface
- **Bootstrap** for styling and layout of the form
- **Use State** for managing form state
  **Css** for custom styling

## Screenshots
<img width="357" alt="image" src="https://github.com/user-attachments/assets/0d7a7079-cfdc-41a0-97dd-a5a1cfb88253">

## License

This project is licensed under the MIT License.
>>>>>>> 0640409abba7c6229dfe80e74a4e3fb545a27b22
