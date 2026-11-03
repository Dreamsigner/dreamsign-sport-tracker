# Dreamsign sport tracker

Carnet sportif personnel, en français, sans dépendance à installer. Créez des exercices, ajoutez des séances datées avec leurs séries, consultez les totaux et l’historique, personnalisez une illustration (y compris GIF) et ajoutez un lien explicatif. Le minuteur est facultatif.

## Lancer

Avec Node.js installé, depuis ce dossier : `node server.js`, puis ouvrir http://127.0.0.1:4173. Arrêter avec Ctrl+C. La variable `PORT` permet de choisir un autre port. Le serveur écoute uniquement sur la machine locale.

L’application peut être installée via le menu du navigateur compatible ; après une première visite, elle fonctionne hors connexion. La disponibilité du bouton d’installation dépend du navigateur et de ses critères PWA.

## Données

Les données restent dans le stockage local du navigateur : elles ne sont ni synchronisées ni partagées entre navigateurs ou appareils, et peuvent disparaître si les données du site sont effacées. Utilisez « Mes données » pour exporter régulièrement une sauvegarde JSON et l’importer sur un autre navigateur. L’import remplace les données existantes après confirmation. Les illustrations occupent l’espace limité du navigateur ; chaque fichier est limité à 1 Mo.

## Vérifications

`node --check app.js`, `node --check server.js`, et `node test.js`.
