const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

// Initialize the Express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files (index.html, etc.)
app.use(express.static('public'));

// Path to the Excel file
const excelFilePath = path.join(__dirname, 'contacts.xlsx');

// Helper function to read the existing Excel file or create a new one
function getExcelSheet() {
    if (fs.existsSync(excelFilePath)) {
        const workbook = xlsx.readFile(excelFilePath);
        return workbook.Sheets['Sheet1'] || workbook.Sheets[workbook.SheetNames[0]];
    } else {
        const newWorkbook = xlsx.utils.book_new();
        const newSheet = xlsx.utils.aoa_to_sheet([['Name', 'Contact', 'Organization', 'Gender']]); // Header row
        xlsx.utils.book_append_sheet(newWorkbook, newSheet, 'Sheet1');
        xlsx.writeFile(newWorkbook, excelFilePath);
        return newSheet;
    }
}

// POST endpoint to handle form submissions
app.post('/submit', (req, res) => {
    const { name, contact, organization, gender } = req.body;
    
    // Read the existing sheet or create a new one
    const sheet = getExcelSheet();

    // Add the new row of data
    const newRow = [name, contact, organization, gender];
    xlsx.utils.sheet_add_aoa(sheet, [newRow], { origin: -1 });

    // Save the updated Excel file
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, sheet, 'Sheet1');
    xlsx.writeFile(workbook, excelFilePath);

    res.json({ message: 'Contact added successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
