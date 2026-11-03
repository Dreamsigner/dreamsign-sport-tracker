# Architecture

Application statique sans dépendance : `index.html` fournit les vues et dialogues, `style.css` la mise en page responsive, et `app.js` les interactions, validations et calculs. Les exercices et séances sont enregistrés sous une clé localStorage versionnée. L’export JSON contient une version de format et les données ; l’import vérifie leur structure avant remplacement. Le service worker met les ressources locales en cache pour l’usage hors ligne. `server.js` est un serveur HTTP local Node.js et propose `/health`.
