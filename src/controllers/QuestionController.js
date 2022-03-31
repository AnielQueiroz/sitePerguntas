/*import Modal from '../../public/scripts/modal.js';
const modal = Modal();*/

const Database = require('../db/config')

//const erroSenha = document.querySelector('.modal #erroSenha');

module.exports = {
    
    async index(req, res) {
        const db = await Database()
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;
        
        //const erroSenha = document.querySelector('.modal #erroSenha');

        /**Verifica se a senha está correta**/ 
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        if(verifyRoom.pass == password){
            
            //erroSenha.innerHTML = "Funciona";

            if (action == "delete"){
                
                await db.run(`DELETE FROM questions WHERE id = ${questionId}`);
                
                //res.redirect(`/room/${roomId}`)
            }
            /*else if(action == "check"){
                
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)

            }*/
        }else{
            res.render('passIncorrect', {roomId: roomId});
        }

        if (action == "check"){
            await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)

        }else{
            
            res.redirect(`/room/${roomId}`)
        }
                

        //console.log(`room = ${roomId}, question = ${questionId}, action = ${action}, password = ${password}`);
    },

    async create(req, res) {
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        )VALUES(
            "${question}",
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`)
    }
}