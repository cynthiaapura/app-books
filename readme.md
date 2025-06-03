# 📚 App Books – API REST

## 👥 Groupe 3  
Cynthia Apura, Hermione Tetard, Fiona Ververt

---

## 🔧 Description

Ce projet est une API RESTful développée avec **Node.js**, **Express** et **MongoDB**.  
Elle permet entre autre de gérer une collection de livres : création, lecture, mise à jour et suppression (CRUD).

---

## 🛠️ Prérequis

- Node.js ≥ 18.x  
- MongoDB installé et opérationnel sur `localhost:27017`
- Mongoose et MongoSH installé

---

## 🚀 Instructions de lancement du projet

1. **Cloner le dépôt :**

```bash
git clone https://github.com/cynthiaapura/app-books.git
cd app-books
```

2. **Installer les dépendances :**
```bash
npm install
```

3. **Configurer les variables d'environnement :**

Créer un fichier `.env` à la racine du projet en prenant exemple sur le fichier `.env.exemple`

4. **Initialiser la base de données (seed)**

```bash
node seed/books.js
```
Cette commande insère un jeu de données de livres dans la base MongoDB locale

5. **Lancer le serveur**

```bash
npm start
```
Le serveur sera accessible à l'adresse: 
http://localhost:3000

---

## 📬 Points d’entrée de l’API (routes REST)

| Méthode | Route        | Description                 |
| ------- | ------------ | --------------------------- |
| GET     | `/books`     | Liste de tous les livres    |
| POST    | `/books`     | Ajouter un nouveau livre    |
| GET     | `/books/:id` | Obtenir un livre par son ID |
| PUT     | `/books/:id` | Mettre à jour un livre      |
| DELETE  | `/books/:id` | Supprimer un livre          |

---

## ✅ Test via Postman

Utilisez Postman pour tester les routes ci-dessus. 
N'oubliez pas de spécifier le header ```Content-Type: application/json``` pour les requêtes POST et PUT.

---