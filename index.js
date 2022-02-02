const express = require("express");   /// Nodejs Üzerinde api oluşturabilmek için kullandığımız modül
const app = express();
const rateLimit = require('express-rate-limit') //Api gelen aynı ip üzerinden isteklere sınırlandırma getirme modülü


const allowList = ['192.168.0.56', '::1'] // Limite takılmamasını istediğiniz ipleri yazın


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika içinde
    max: 5, // Aynı IP üzerinden maximum 5 istek gelebilir
    skip: (request, response) => allowlist.includes(request.ip), // Verdiğiniz ipler limite takılmayaktır ...
    message:
        'Aynı IP üzerinden Çok fazla deneme yaptınız, lütfen 15 dakika sonra tekrar deneyin',
})



app.use('/', limiter) // Fazla istek geldiği zaman kendisi api önüne geçip hato kodu vericektir



app.listen(3000, () => { /// 3000 Portuna gelen istekleri dinliyoruz
    console.log("Server running on port 3000")
})


app.get('/', (req, res) => {   /// localhost:3000 gelen isteğe cevap veriyoruz
    res.send('WELCOME TO API!!!' + req.ip)
   // res.send(req.ip)
})


