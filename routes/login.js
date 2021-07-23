// var express = require('express');
// var router = express.Router();
// var fetch = require('node-fetch');
//
// router.get('/', function(req, response, next) {
//     let accessCode = req.query.code;
//     if (!accessCode) response.redirect("https://jadenhou.ml")
//     console.log(accessCode)
//     const data = {
//         client_id: '734919111221444699',
//         client_secret: 'eOf_Fu32sIlXGLvjQeMGFXDkf42CAUP2',
//         grant_type: 'authorization_code',
//         redirect_uri: 'https://localhost:4510/login',
//         code: accessCode,
//         scope: 'identify',
//     };
//
//         fetch('https://discord.com/api/oauth2/token', {
//             method: 'POST',
//             body: new URLSearchParams(data),
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//         })
//         .then(res => res.json())
//         .then(info => {
//             console.log(info)
//             fetch('https://discord.com/api/users/@me', {
//                 headers: {
//                     authorization: `${info.token_type} ${info.access_token}`,
//                 },
//             })
//                 .then(res => res.json())
//                 .then(obj => {
//                     if (obj.username) {
//                         response.cookie("access_token", Buffer.from(info.access_token).toString('base64'), { maxAge: 1.08e+7 })
//                         console.log(req.cookies)
//                     } else {
//                         response.redirect("https://jadenhou.ml")
//                     }
//
//
//
//                 })
//
//
//
//
//         })
//
//
//
// });
//
//
// module.exports = router;
