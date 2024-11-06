
# Contacts Form

A simple web application to collect contact information from users and store it in an Excel file (`contacts.xlsx`). The form collects the user's **Name**, **Contact Number**, **Organization**, and **Gender**, and appends each new entry to the Excel file.

## Features

- Collects user contact details: **Name**, **Contact Number**, **Organization**, **Gender**.
- Stores submitted data in an Excel file (`contacts.xlsx`).
- Each new submission is appended to the existing data in the Excel file.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Storage**: Excel file (`xlsx` format)

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/junicoder/contacts-form.git
cd contacts-form
```

### 2. Install Dependencies

Ensure that Node.js is installed on your machine. Then, install the required dependencies using npm:

```bash
npm install
```

### 3. Start the Server

Run the following command to start the server:

```bash
node server.js
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 4. Access the Form

Open [http://localhost:3000](http://localhost:3000) in your web browser. Fill out the contact form, and the data will be saved in `contacts.xlsx`.

## File Storage

The contact data is stored in an Excel file named `contacts.xlsx`. Each form submission is appended as a new row in the Excel file with the following columns:

| Name | Contact Number | Organization | Gender |
|------|----------------|--------------|--------|

## License

This project is open-source and available under the MIT License.