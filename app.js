const fs = require('fs');
let nama = "sena"

// mengisi file dengan apa yang di tulis dengan synchronous
// try {
//     fs.writeFileSync('index.html', `${nama} hallo ini sena`);
// } catch (error) {
//     console.log(error)
// }


//menyimpan text ke file dengan cara asynchronous

// fs.writeFile('index.html', 'hallo world', (e, r) =>{
//     console.log(e);
// })

//membaca isi file yang dibuat tadi synchronous
// const baca = fs.readFile('index.html')
// console.log(baca)

//membaca isi file secara asynchronous
// fs.readFileSync('index.html', 'utf-8', (err, data) =>{
//     console.log(data)
// })
// const data = fs.readFileSync('index.html', 'utf-8', (error, result) =>{

// })





const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question('Masukkan nama anda : ', (nama) =>{
    rl.question('Masukkan nomor hp anda : ', (nohp) =>{
        rl.question('Masukkan tahun lahir anda: ', (thLahir) =>{
            rl.question('Masukkan alamat anda: ', (alamat) =>{
                rl.question('Masukkan bersaudara anda: ', (saudara) =>{
                    rl.question('Masukkan sekolah anda: ', (sekolah) =>{
                        rl.question('Masukkan makanan anda: ', (makanan) =>{
                            const data={
                                nama: nama,
                                noHP : nohp,
                                TahunLahir : thLahir,
                                alamat: alamat,
                                saudara: saudara,
                                sekolah: sekolah,
                                makanan: makanan
                            };
                            const file = fs.readFileSync('contacts.json', 'utf8');
                            const contact = JSON.parse(file);

                            contact.push(data);

                            fs.writeFileSync('contacts.json', JSON.stringify(contact))

                            console.log('-------------------------------------------------------')
                            console.log("Terima Kasih udah mengisi data")
                            console.log('-------------------------------------------------------')

                            
                            rl.close()
                        })
                    })
                })
            })
        })
    })

})