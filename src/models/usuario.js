const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', { 
    name: String 
});

module.exports = Usuario;