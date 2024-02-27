const express = require('express');
const passport = require('passport')
const router = express.Router();
const usersController = require('../controllers/users_controller');

function adminCheck(req, res, next) {
    if (req.isAuthenticated() && req.user.isAdmin) {
        return next();
    }
    // Если пользователь не администратор, можно перенаправить на главную страницу или показать сообщение об ошибке
    return res.redirect('/');
}

// router.get('/profile', passport.checkAuthentication ,usersController.profile);
router.get('/profile/:id', passport.checkAuthentication ,usersController.profile);
router.post('/update/:id', passport.checkAuthentication ,usersController.update);


router.get('/sign-in',usersController.signIn);

router.get('/sign-up',usersController.signUp);

router.get('/sign-out',usersController.destroySession);

router.post('/create',usersController.create);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
    ), usersController.createSession);

router.get('/admin-panel', adminCheck, (req, res) => {
    // Здесь должен быть контроллер для административной панели
    res.send('Welcome to the Admin Panel');
});

module.exports = router;
