# 🎮 Tic Tac Toe - Jeu Amélioré

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/eliDaniel007/tic-tac-toe-enhanced/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/eliDaniel007/tic-tac-toe-enhanced)](https://github.com/eliDaniel007/tic-tac-toe-enhanced/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/eliDaniel007/tic-tac-toe-enhanced)](https://github.com/eliDaniel007/tic-tac-toe-enhanced/network)
[![GitHub issues](https://img.shields.io/github/issues/eliDaniel007/tic-tac-toe-enhanced)](https://github.com/eliDaniel007/tic-tac-toe-enhanced/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/eliDaniel007/tic-tac-toe-enhanced)](https://github.com/eliDaniel007/tic-tac-toe-enhanced/pulls)

Un jeu de tic-tac-toe moderne, beau et entièrement fonctionnel créé avec HTML, CSS et JavaScript.

## 🚀 **Démo Live**

🎮 **[Jouer au jeu en ligne](https://elidaniel007.github.io/tic-tac-toe-enhanced)**

## 📋 **Table des Matières**

- [✨ Fonctionnalités](#-fonctionnalités)
- [🎨 Sections du Jeu](#-sections-du-jeu)
- [🛠️ Technologies Utilisées](#️-technologies-utilisées)
- [🎯 Comment Jouer](#-comment-jouer)
- [🤖 Intelligence Artificielle](#-intelligence-artificielle)
- [🏆 Système de Scores](#-système-de-scores)
- [🔧 Fonctionnalités Techniques](#-fonctionnalités-techniques)
- [🌟 Améliorations Apportées](#-améliorations-apportées)
- [📱 Compatibilité](#-compatibilité)
- [🚀 Démarrage Rapide](#-démarrage-rapide)
- [📝 Structure des Fichiers](#-structure-des-fichiers)
- [🎨 Personnalisation](#-personnalisation)
- [🤝 Contribution](#-contribution)
- [🎮 Modes de Jeu](#-modes-de-jeu)
- [🏆 Fonctionnalités des Scores](#-fonctionnalités-des-scores)

## ✨ Fonctionnalités

### 🎯 Interface Utilisateur
- **Design moderne** avec des couleurs vives et des dégradés
- **Animations fluides** et transitions élégantes
- **Interface responsive** qui s'adapte à tous les écrans
- **Typographie moderne** avec la police Poppins

### 🎲 Gameplay
- **3 niveaux de difficulté** : 3x3, 4x4, et 5x5
- **Choix du symbole** : X ou O
- **Deux modes de jeu** :
  - **Mode à deux joueurs** : Jouez avec un ami sur le même écran
  - **Mode contre l'IA** : Défiez l'intelligence artificielle
- **Logique de jeu complète** avec détection automatique des gagnants
- **Système de scores** persistant (localStorage)
- **Animations des cellules gagnantes**
- **Affichage des scores finaux** avec noms des joueurs

### 🚀 Expérience Utilisateur
- **Navigation fluide** entre les sections
- **Validation des formulaires** en temps réel
- **Effets de survol** interactifs
- **Message de victoire** adapté au mode de jeu
- **Gestion des raccourcis clavier** (Échap pour fermer)
- **Interface personnalisée** avec noms des joueurs
- **Option de sortie** pour recommencer depuis le début

## 🎨 Sections du Jeu

### 1. Inscription
- **Nom du joueur** (champ unique simplifié)
- **Choix du mode de jeu** :
  - 👥 **À deux joueurs** : Jouez avec un ami
  - 🤖 **Contre l'IA** : Défiez l'ordinateur
- **Nom de l'ami** (requis pour le mode à deux joueurs)
- Validation des champs obligatoires
- Stockage des informations du joueur

### 2. Configuration
- Sélection du niveau de difficulté (3x3, 4x4, 5x5)
- Choix du symbole de jeu (X ou O)
- Interface intuitive avec boutons visuels

### 3. Plateau de Jeu
- Affichage du joueur actuel adapté au mode
- **Labels personnalisés** avec noms des joueurs
- Statistiques en temps réel (scores X et O)
- Boutons de contrôle (Nouvelle Partie, Scores, **Quitter le Jeu**)
- Plateau de jeu dynamique selon la difficulté
- **Mode IA** : L'IA joue automatiquement après votre coup

### 4. Tableau des Scores
- Historique des victoires par symbole
- Nombre total de parties jouées
- Interface claire et organisée
- **Bouton de réinitialisation** pour supprimer tous les scores
- **Bouton de sortie** pour retourner à l'accueil

### 5. Message de Victoire
- **Scores finaux de la partie** avec noms des joueurs
- Affichage du gagnant et du perdant
- Scores actuels de chaque joueur
- Bouton pour commencer une nouvelle partie

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique et accessible
- **CSS3** : 
  - Variables CSS personnalisées
  - Flexbox et Grid pour la mise en page
  - Animations et transitions CSS
  - Design responsive avec media queries
- **JavaScript ES6+** :
  - Logique de jeu complète
  - **Intelligence artificielle** pour le mode solo
  - **Gestion des noms des joueurs**
  - **Affichage des scores finaux**
  - Gestion des événements
  - LocalStorage pour la persistance
  - Manipulation du DOM

## 🎯 Comment Jouer

1. **Ouvrir le fichier** `index.html` dans un navigateur web
2. **Entrer votre nom** dans le champ unique
3. **Choisir le mode de jeu** :
   - **À deux joueurs** : Entrez le nom de votre ami
   - **Contre l'IA** : Laissez le champ ami vide
4. **Choisir la difficulté** et votre symbole
5. **Jouer** en cliquant sur les cellules du plateau
6. **Voir les scores finaux** à la fin de chaque partie
7. **Consulter l'historique** dans la section scores

## 🤖 Intelligence Artificielle

Le mode IA comprend un algorithme intelligent qui :
- **Cherche les positions gagnantes** pour l'IA
- **Bloque les positions gagnantes** du joueur
- **Privilégie le centre** (pour les grilles 3x3)
- **Prend les coins** stratégiques
- **Joue de manière optimale** sur toutes les tailles de grille
- **Commence automatiquement** si elle a le symbole X (qui commence toujours)

## 🏆 Système de Scores

### Pendant le Jeu
- **Affichage en temps réel** des scores X et O
- **Labels personnalisés** avec noms des joueurs
- **Mise à jour automatique** après chaque victoire

### À la Fin de la Partie
- **Message de victoire** personnalisé selon le mode
- **Scores finaux** avec noms des joueurs
- **Historique persistant** sauvegardé localement
- **Statistiques globales** accessibles
- **Réinitialisation possible** des scores

## 🔧 Fonctionnalités Techniques

### Logique de Victoire
- **Alignements adaptatifs** selon la difficulté :
  - **3x3** : Alignement de 3 symboles requis
  - **4x4** : Alignement de 4 symboles requis  
  - **5x5** : Alignement de 5 symboles requis
- Détection automatique des alignements (lignes, colonnes, diagonales)
- Support des grilles 3x3, 4x4 et 5x5
- Algorithme optimisé pour toutes les tailles

### Règles de Victoire par Niveau
- **Niveau Facile (3x3)** : Aligner 3 symboles identiques
- **Niveau Moyen (4x4)** : Aligner 4 symboles identiques
- **Niveau Difficile (5x5)** : Aligner 5 symboles identiques
- **Alignements valides** : Horizontaux, verticaux et diagonaux
- **Détection automatique** des cellules gagnantes avec animation

### Persistance des Données
- Sauvegarde automatique des scores
- Stockage local dans le navigateur
- Pas de perte de données entre les sessions
- **Sauvegarde des noms** des joueurs
- **Réinitialisation des scores** disponible

### Responsive Design
- Adaptation automatique à tous les écrans
- Optimisation mobile et tablette
- Grilles de jeu adaptatives

## 🌟 Améliorations Apportées

### Avant (Version Originale)
- Code JavaScript mélangé dans le HTML
- Fonction `checkWinner()` incomplète
- Styles dispersés et parfois contradictoires
- Interface basique sans animations
- Formulaire complexe avec nom/prénom/genre
- Pas de gestion des noms des joueurs

### Après (Version Améliorée)
- Code JavaScript séparé et organisé
- Logique de jeu complète et fonctionnelle
- **Deux modes de jeu** (2 joueurs ou contre IA)
- **Formulaire simplifié** (un seul nom + nom de l'ami)
- **Interface personnalisée** avec noms des joueurs
- **Affichage des scores finaux** détaillés
- Design moderne avec animations
- Interface utilisateur intuitive et responsive
- Système de scores persistant
- **Intelligence artificielle** pour le mode solo
- Gestion des erreurs et validation

## 📱 Compatibilité

- ✅ Chrome (recommandé)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile et tablette

## 🚀 Démarrage Rapide

1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans votre navigateur
3. Entrez votre nom et choisissez votre mode de jeu
4. Si mode à deux joueurs, entrez le nom de votre ami
5. Commencez à jouer !

## 📦 **Installation et Développement**

### **Option 1 : Utilisation Directe**
```bash
# Télécharger le projet
git clone https://github.com/eliDaniel007/tic-tac-toe-enhanced.git
cd tic-tac-toe-enhanced

# Ouvrir dans le navigateur
open index.html
```

### **Option 2 : Serveur Local (Recommandé)**
```bash
# Cloner le projet
git clone https://github.com/eliDaniel007/tic-tac-toe-enhanced.git
cd tic-tac-toe-enhanced

# Démarrer un serveur local
npm start
# ou
python -m http.server 8000

# Ouvrir http://localhost:8000
```

## 🤝 **Contribution**

Les contributions sont les bienvenues ! Voici comment contribuer :

### **Signaler un Bug**
1. Ouvrez une [issue](https://github.com/eliDaniel007/tic-tac-toe-enhanced/issues)
2. Décrivez le problème avec des étapes de reproduction
3. Incluez des captures d'écran si possible

### **Proposer une Amélioration**
1. Ouvrez une [issue](https://github.com/eliDaniel007/tic-tac-toe-enhanced/issues) avec le label "enhancement"
2. Décrivez votre idée et son utilité
3. Attendez la validation avant de coder

### **Soumettre du Code**
1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 **Structure des Fichiers**

```
INF16107-introduction-internet/
├── index.html          # Page principale du jeu
├── jeu.css             # Styles modernes et animations
├── jeu.js              # Logique complète du jeu + IA + scores
├── IMAGES/             # Images et ressources
├── .gitignore          # Fichiers à ignorer par Git
├── package.json        # Configuration du projet
├── LICENSE             # Licence MIT
└── README.md           # Documentation du projet
```

## 🎨 **Personnalisation**

Le jeu utilise des variables CSS pour faciliter la personnalisation :
- Couleurs principales et secondaires
- Ombres et effets visuels
- Rayons de bordure et transitions
- Modifiez `:root` dans `jeu.css` pour changer l'apparence

## 🌟 **Roadmap Future**

- [ ] **Mode multijoueur en ligne** avec WebSockets
- [ ] **Thèmes personnalisables** (sombre, clair, couleurs)
- [ ] **Système de niveaux** pour l'IA
- [ ] **Statistiques avancées** (temps de jeu, coups moyens)
- [ ] **Mode tournoi** entre plusieurs joueurs
- [ ] **Sons et musique** d'ambiance
- [ ] **Mode mobile optimisé** avec gestes tactiles

## 📄 **Licence**

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 **Auteur**

**eliDaniel007** - [GitHub](https://github.com/eliDaniel007)

## 🙏 **Remerciements**

- Inspiration du jeu classique Tic Tac Toe
- Communauté open source pour les ressources et outils
- Tous les testeurs et contributeurs

---

**Profitez de votre jeu de Tic Tac Toe amélioré avec IA et scores détaillés ! 🎉🤖🏆**

**⭐ N'oubliez pas de donner une étoile au projet si vous l'aimez ! ⭐**
