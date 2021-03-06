const express = require('express');

const router = express.Router();
const passport = require('passport');
const commentsApi = require("../../../controllers/api/v1/comments_api");

router.post('/',passport.authenticate('jwt', {session: false}),commentsApi.create);

router.delete('/:id',passport.authenticate('jwt', {session: false}),commentsApi.destroy);

module.exports=router;
