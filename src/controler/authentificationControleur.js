import User from "../model/user.js"; // Assurez-vous que le chemin est correct
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export async function enregistrerUser(req, res) {

    const { nom, prenom, username, email, password } = req.body;

    try {

        // Vérifiez si l'utilisateur existe déjà
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "L'utilisateur existe déjà." });
        }

        // Hachez le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créez un nouvel utilisateur
        const newUser = new User({
            nom,
            prenom,
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur du serveur', error });
    }
}

export async function login(req, res) {

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
        }

        // Création d'un JWT
        const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

        // Inclure le nom et le prénom dans la réponse
        res.json({
            token,
            user: {
                nom: user.nom,
                prenom: user.prenom,
                username: user.username,
                email: user.email,
                date_de_creation: user.createdAt
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur du serveur', error });
 }
}
