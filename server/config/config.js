// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================

console.log(process.env.NODE_DEV)
process.env.NODE_DEV = process.env.NODE_DEV || 'dev';

// ============================
//  BASE DE DATOS
// ============================

let urlDB;

if (process.env.NODE_DEV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
}
else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;