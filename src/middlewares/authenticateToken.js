import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

function authenticateToken(req, res, next) {

    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Token manquant ou mal formé.' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalide.' });
        }

        req.user = user;
        next();
    });
}

export { authenticateToken };