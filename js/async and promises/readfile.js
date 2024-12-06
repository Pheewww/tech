var fs = require("fs");


fs.readFile('./a.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("data", data);


    const content = data.replace(/\s+/g, ' ');

    console.log("content", content)

    fs.writeFile('./a.txt', content, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });

});



let count = 0;

while (count<2000) {
    count++;
    if (count==1999) {
        console.log(count);
    }
}
