# Projet Framer Custom Domain

## Introduction
Ce projet a pour objectif de permettre aux utilisateurs de Framer d'utiliser un domaine personnalisé sans avoir à payer de frais supplémentaires. En utilisant une configuration DNS appropriée et l'hébergement via Vercel, nous pouvons rediriger le trafic vers les pages Framer tout en utilisant un domaine personnalisé.

## Pré-requis

1. Un domaine enregistré auprès d'un registraire (comme GoDaddy, Namecheap, etc.).
2. Un compte Framer avec un projet publié.
3. Un compte Vercel.
4. Node.js et npm installés sur votre machine.

## Étapes de configuration

### 1. Cloner le dépôt et installer les dépendances

1. Ouvrez votre terminal.
2. Clonez le dépôt git contenant le projet Framer.

    ```bash
    git clone https://github.com/tryon-dev/Framer-Custom-Domain
    cd Framer-Custom-Domain
    ```

3. Installez les dépendances nécessaires.

    ```bash
    npm install
    ```

4. Installez globalement Vercel.

    ```bash
    npm install -g vercel
    ```

### 2. Déploiement sur Vercel

1. Connectez-vous à Vercel.

    ```bash
    vercel login
    ```

2. Déployez le projet sur Vercel.

    ```bash
    vercel
    ```

    Suivez les instructions à l'écran pour configurer et déployer votre projet.

### 3. Configuration du domaine sur Vercel

1. Une fois le projet déployé, accédez à votre tableau de bord Vercel.
2. Sélectionnez votre projet et accédez aux paramètres du domaine.
3. Ajoutez votre domaine personnalisé. Vercel vous fournira des enregistrements DNS à ajouter à votre registraire de domaine.


## Résolution des problèmes

- **Problème de propagation DNS :** Assurez-vous que les enregistrements DNS sont correctement configurés. Vérifiez les fautes de frappe et les erreurs dans les valeurs CNAME et les enregistrements A.
- **Projet Framer non visible :** Vérifiez que le domaine personnalisé est correctement configuré dans les paramètres de votre projet Vercel et que le projet a été déployé après avoir ajouté le domaine.
