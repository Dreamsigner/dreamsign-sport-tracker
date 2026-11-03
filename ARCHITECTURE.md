# Architecture

Application statique sans dépendance : `index.html` fournit les vues et dialogues, `style.css` la mise en page responsive, et `app.js` les interactions, validations et calculs. Les exercices et séances sont enregistrés sous une clé localStorage versionnée. L’export JSON contient une version de format et les données ; l’import vérifie leur structure avant remplacement. Le service worker met les ressources locales en cache pour l’usage hors ligne. `server.js` est un serveur HTTP local Node.js et propose `/health`.

Le catalogue de huit mouvements référence des images locales explicitement autorisées à l’import. Les données importées sont limitées et vérifient notamment dates réelles, unicité des identifiants, nombres et images. Le service worker versionné précharge les ressources et utilise le réseau en priorité avec repli sur le cache ; ses chemins sont relatifs au répertoire de déploiement GitHub Pages.
