# Today I Learned

"Today I Learned" est une application web interactive qui permet aux utilisateurs de partager des faits intéressants, de voter sur ces faits et de filtrer les faits par catégorie. Développée en utilisant React et Supabase, cette application offre une expérience fluide et interactive pour explorer des faits intéressants.

## Fonctionnalités

- **Affichage des Faits** : Affiche les faits triés par popularité.
- **Filtrage par Catégorie** : Permet de filtrer les faits selon différentes catégories.
- **Ajout de Faits** : Les utilisateurs peuvent partager de nouveaux faits via un formulaire.
- **Vote sur les Faits** : Permet aux utilisateurs de voter sur les faits en trois catégories : Intéressant, Étonnant, et Faux.
- **Indication des Faits Disputés** : Les faits avec plus de votes "Faux" que la somme des votes "Intéressant" et "Étonnant" sont marqués comme disputés.

## Déploiement

L'application est déployée et accessible en ligne à l'adresse suivante :

[https://todayilearned-lady.netlify.app/](https://todayilearned-lady.netlify.app/)

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (Version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/))

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/Lydia-BEDRI/FullStack-app-Today-I-Learned.git
   ```

2. **Naviguer dans le répertoire du projet** :

   ```bash
    cd FullStack-app-Today-I-Learned
   ```

3. **Installer les dépendances :**

   ```bash
   npm install
   ```

   ou

   ```bash
    yarn install
   ```

4. **Configurer Supabase :**

Avant de démarrer le serveur, vous devez configurer Supabase. Remplacez l'URL et la clé de Supabase dans le fichier `src/supabase.js` :

```javascript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "VOTRE_URL_SUPABASE";
const supabaseKey = "VOTRE_CLE_SUPABASE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```

    - Supabase URL : Vous pouvez obtenir l'URL depuis votre tableau de bord Supabase.
    - Supabase Key : Utilisez la clé publique de votre projet Supabase.

5. **Démarrer le serveur de développement :**

   ```bash
    npm start
   ```

````

ou

```bash
 yarn start
```

L'application sera accessible à l'adresse http://localhost:3000.

## Utilisation

- **Ajouter un Fait :** Cliquez sur le bouton "Share a fact" pour ouvrir le formulaire et ajouter un nouveau fait. Vous devrez entrer le texte du fait, fournir une source fiable, et choisir une catégorie.
- **Voter sur un Fait :** Utilisez les boutons "👍", "🤯", ou "⛔️" pour voter sur les faits affichés. Les votes seront comptabilisés et mis à jour en temps réel.
- **Filtrer par Catégorie :** Utilisez le menu de filtrage sur le côté pour voir les faits classés par catégorie. Les catégories disponibles incluent technologie, science, finance, société, divertissement, santé, histoire et actualités.

## Structure du Projet

- **`src/App.js`** : Composant principal de l'application qui gère l'état des faits, la logique d'affichage, et inclut tous les composants suivants :
  - **`Header`** : Composant d'en-tête de l'application.
  - **`NewFactForm`** : Formulaire pour ajouter de nouveaux faits.
  - **`CategoryFilter`** : Composant pour filtrer les faits par catégorie.
  - **`FactList`** : Liste des faits affichés.
  - **`Fact`** : Composant représentant un fait individuel.
- **`src/supabase.js`** : Configuration et initialisation de Supabase pour la gestion des données.
- **`src/style.css`** : Fichier de styles CSS pour la mise en forme de l'application.
````
