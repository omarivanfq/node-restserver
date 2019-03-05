// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================

console.log( " > > > > > > > > NODE_DEV = " + process.env.NODE_DEV + "  < < < < < < < < <")
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  BASE DE DATOS
// ============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    console.log( " > > > > > > > > A < < < < < < < < <")
    urlDB = 'mongodb://localhost:27017/cafe';
}
else {
    console.log( " > > > > > > > > B < < < < < < < < < " + process.env.MONGO_URI)
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;