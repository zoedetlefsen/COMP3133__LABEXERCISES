const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

// File paths
const inputFilePath = path.join(__dirname, 'input_countries.csv');
const canadaFilePath = path.join(__dirname, 'canada.txt');
const usaFilePath = path.join(__dirname, 'usa.txt');

// Delete existing files if they exist
if (fs.existsSync(canadaFilePath)) fs.unlinkSync(canadaFilePath);
if (fs.existsSync(usaFilePath)) fs.unlinkSync(usaFilePath);

// Function to write data to a file
function writeDataToFile(filePath, data) {
    fs.appendFileSync(filePath, data + '\n', 'utf8');
}

// Read and process CSV file
fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on('data', (row) => {
        if (row.country === 'Canada') {
            writeDataToFile(canadaFilePath, `${row.country},${row.year},${row.population}`);
        } else if (row.country === 'United States') {
            writeDataToFile(usaFilePath, `${row.country},${row.year},${row.population}`);
        }
    })
    .on('end', () => {
        console.log('CSV file processed successfully.');
    });
