const mongoose = require('mongoose');

async function connecting () {
   try {
    await mongoose.connect('mongodb+srv://87taw:1234@coqueiro.klf4u7a.mongodb.net/?retryWrites=true&w=majority');
    console.log("connecting")
   } catch(err) {
    console.log(err)
   }

}
module.exports = {connecting}