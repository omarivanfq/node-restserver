// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================

process.env.NODE_DEV = process.env.NODE_DEV || 'dev';

// ============================
//  BASE DE DATOS
// ============================

let urlDB;

if (process.env.NODE_DEV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
}
else {
    urlDB = 'mongodb+srv://omarivan:EZ2CoRANf0z6v9e3@cluster0-zrzaj.mongodb.net/cafe'
}
process.env.URLDB = urlDB