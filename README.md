# Dreamsign sport tracker

Carnet sportif personnel, en français, sans dépendance à installer. Créez des exercices, ajoutez des séances datées avec leurs séries, consultez les totaux et l’historique, personnalisez une illustration (y compris GIF) et ajoutez un lien explicatif. Le minuteur est facultatif.

## Lancer

Avec Node.js installé, depuis ce dossier : `node server.js`, puis ouvrir http://127.0.0.1:4173. Arrêter avec Ctrl+C. La variable `PORT` permet de choisir un autre port. Le serveur écoute uniquement sur la machine locale.

L’application peut être installée via le menu du navigateur compatible ; après une première visite, elle fonctionne hors connexion. La disponibilité du bouton d’installation dépend du navigateur et de ses critères PWA.

## Données

Les données restent dans le stockage local du navigateur : elles ne sont ni synchronisées ni partagées entre navigateurs ou appareils, et peuvent disparaître si les données du site sont effacées. Utilisez « Mes données » pour exporter régulièrement une sauvegarde JSON et l’importer sur un autre navigateur. L’import remplace les données existantes après confirmation. Les illustrations occupent l’espace limité du navigateur ; chaque fichier est limité à 1 Mo.

## Vérifications

`node --check app.js`, `node --check server.js`, et `node test.js`.

## Android et illustrations

URL prévue après publication GitHub Pages : https://dreamsigner.github.io/dreamsign-sport-tracker/ . Ouvrir cette adresse HTTPS dans Chrome sur Android, puis choisir « Installer l’application » ou « Ajouter à l’écran d’accueil ». La première visite nécessite une connexion ; les ressources de l’application et les images du catalogue sont ensuite disponibles hors ligne. Les mises à jour sont recherchées en ligne. Aucune synchronisation ni donnée personnelle demandée.

Le catalogue préillustré reste facultatif ; les exercices et images personnalisés sont toujours disponibles. La progression présente la meilleure série de chacune des sept dernières séances, comparée à l’objectif par série lorsqu’il existe.

Illustrations : [Exercise data by RepDB (repdb.co)](https://repdb.co), fichiers WebP gratuits `images/flat/` issus de [RepDB exercise-dataset](https://github.com/RepDB/exercise-dataset), utilisés dans l’application selon la [licence Free Tier](https://github.com/RepDB/exercise-dataset/blob/main/LICENSE-DATA.md). Aucun contenu premium. Les images sont incluses pour l’usage dans cette application, pas pour redistribuer le jeu de données.
