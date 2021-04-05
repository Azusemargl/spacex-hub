const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

exports.registerController = async (req, res) => {
   try {
      const {login, email, password} = req.body;
      const candidat = await User.findOne({ email });

      if (candidat) {
         return res.json({ error: 'Такой пользователь уже существует' });
      }

      const hashPassword = await bcrypt.hash(password, 12);
      const user = new User({ login, email, password: hashPassword });

      await user.save();

      res.json({ message: 'Пользователь создан' });
   } catch {
      res.json({ error: 'Ошибка при регистрации' });
   }
};

exports.loginController = async (req, res) => {
   try {
      const {email, password} = req.body;
      const user = await User.findOne({ email });

      if(!user) {
         return res.json({ error: 'Такого пользователя нет' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
         return res.json({ error: 'Неверный Email или пароль, попробуйте снова' });
      }

      const token = jwt.sign(
         {userId: user.id},
         process.env.SECRET,
         {expiresIn: '24h'}
      );

      return res.json({ token, userId: user.id, login: user.login, email: user.email });
   } catch {
      res.json({ error: 'Ошибка при входе' });
   }
};

exports.meController = async (req, res) => {
   const token = req.body.token;
   const secret = process.env.SECRET;

   try {
      const { userId } = jwt.verify(token, secret);

      const user = await User.findOne({ _id: userId });
      
      return res.json({ user });
   } catch (err) {
      console.error(err);
      return res.json({ error: 'Вы не авторизированы' });
   }
};