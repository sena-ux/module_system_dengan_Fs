const fs = require('fs')


fs.readFile('contacts.json', (err, data) => {
  if (err) throw err;

  const jsonData = JSON.parse(data);
  
  const obj = jsonData[1].nama; // mengambil objek ke-3 (indeks dimulai dari 0)

  console.log(obj);
});