# User Management Application

This project is a responsive user management application built with ReactJS, Tailwind CSS, and TypeScript. The application includes features such as form validation using React Hook Form and Yup, state management and optional data persistence using local storage.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Responsive Design:** Utilizes Tailwind CSS to ensure the application is responsive across various devices.
- **User Input Form:** Includes input fields for first name, last name and userrole selection.
- **Validation:** Uses Yup for form validation, ensuring all fields are required.
- **State Management:** Management of form data state using React useState.
- **Data Persistence:** User data is saved to local storage.
- **Scrollable User List:** Submitted user data is displayed in a scrollable list.
- **Delete Users:** Users can be removed from de list by clicking the delete icon next to the userrole status.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/christina-sfmn/UserroleForm.git
   cd UserroleForm
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

## Usage

1. **Open the application** in your browser:

Open your browser and go to `http://localhost:5000` (or the appropriate port if different).

2. **Fill out the user form**:

   - First Name
   - Last Name
   - Userole (Admin, Editor, User)
   - Optional: Subscribe to Newsletter

3. **Submit the form**:

   - The submitted user information will appear in the list on the right side.
   - If the data is invalid, validation messages will be displayed.

4. **Persist data (optional)**:
   - User data will be stored in local storage to retain information between sessions.
