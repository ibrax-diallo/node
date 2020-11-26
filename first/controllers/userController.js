const bcript = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');
exports.signup = (req, res, next) => {
  const errors = validationResult(req)
 if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

  bcript.hash(req.body.password, 10)
  .then(hash => {
      const user = new User({
        username: req.body.username,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,  
      });
      user.save()
      .then(() => res.status(201).json({
          "_id": user._id,
          "username": user.username,
          "role": user.role,
          "email": user.email,
          "firstName": user.firstName,
          "lastName": user.lastName,
          "tel": user.tel 
      }))
      .catch(error => res.status(400).json({error}))
   })
  .catch(error => res.status(500).json({error}));
};
exports.getOneUser = (req, res, next) => {
    User.findOne({_id: req.params.id})
    .then(user => res.status(200).json({
        "_id": user._id,
        "username": user.username,
        "role": user.role,
        "email": user.email,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "tel": user.tel
    }))
    .catch(error => res.status(404).json({error}));
  };
exports.getAllUser = (req, res, next) => {
    User.find()
    .then(user => res.status(200).json(user)  )
    .catch(error => res.status(400).json({error}));
  };

exports.login = (req, res, next) => {
    User.findOne({username: req.body.username})
    .then(user => {
        if(!user) {
            return res.status(401).json({error: 'Utilisateur non trouvé !'});
        }
        bcript.compare(req.body.password, user.password)
        .then(valid =>{
            if(!valid) {
                return res.status(401).json({error: 'Mot de passe incorrect !'});
            }
            res.status(200).json({
                userId: user._id,
                "username": user.username,
                "role": user.role,
                "email": user.email,
                "firstName": user.firstName,
                "lastName": user.lastName,
                Token: jwt.sign({
                 userId: user._id
                },
                'RANDOM_TOKEN_SECRET',
                {expiresIn: '24h'}
                )
            })
        })
        .catch(error => res.status(500).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};