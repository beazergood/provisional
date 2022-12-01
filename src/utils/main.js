const fastcsv = require('fast-csv');
const db = require('./db');
const contains = require('validator/lib/contains');

export function insertFromCsv() {
    let csvData = [];
    return (
        fastcsv
        .parse()
        // validate that the column key doesn't contain any commas, as some countries do. This will break our insertion as it would be treated as an extra column and our table expects only 3 columns
        .validate((data) => !contains(data[0], ','))
        // triggered when a new record is parsed, we then add it to the data array
        .on('data', (data) => {
            csvData.push(data);
        })
        .on('data-invalid', (row, rowNumber) =>
            console.log(
                `Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`
            )
        )
        // once parsing is finished and all the data is added to the array we can then insert it into the db table
        .on('end', () => {
            // The insert statement
            const query =
                'INSERT INTO courses (url_slug, name, city, state, zip_code, website, architext, public_private, year_build) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
            // Connect to the db instance
            db.connect((err, client, done) => {
                if (err) throw err;
                try {
                    // loop over the lines stored in the csv file
                    csvData.forEach((row) => {
                        // For each line we run the insert query with the row providing the column values
                        client.query(query, row, (err, res) => {
                            if (err) {
                                // We can just console.log any errors
                                console.log(err.stack);
                            } else {
                                console.log('inserted ' + res.rowCount + ' row:', row);
                            }
                        });
                    });
                } finally {
                    done();
                }
            });
        })
    );
}