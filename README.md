# Checkpoint n°2 - **4h**

Pour ce travail tu as 4h devant toi. Ce checkpoint n'est pas un examen, il va nous permettre de valider tes compétences, essaye donc de le faire au maximum de ton côté.
Ce checkpoint est très consistant, si tu n'arrives pas à tout faire ce n'est pas grave, fais de ton mieux ;)

## **!!! PREMIERE ÉTAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**

- Clone ce projet
- Crée une branche "ville_nom_prenom", qui va contenir ton avancée. (ville_nom_prenom sera remplacé par la ville de ton campus, ton nom et ton prénom...)

## Pré-requis (outils installés)

- NodeJS
- NPM
- [wcs-checkpoints-quiz](https://www.npmjs.com/package/wcs-checkpoints-quiz)
- @angular/cli

## Étape 1 - Quiz

- Pour lancer le quiz, ouvre un terminal à la racine de ce projet, et tape la commande suivante :

```sh
wcs-checkpoints-quiz start
```

- Suis les instructions présentes dans le terminal
- Réponds aux questions qui te seront posées
- Une fois le quiz terminé, n'oublie pas de commit le fichier de réponses

## Étape 2 - Angular

<img src="https://www.mememaker.net/api/bucket?path=static/img/memes/full/2019/Jan/28/23/angular-101205.png" height="200">

Pour cet exercice tu vas devoir créer un projet se nommant **list-games** grâce à la commande `ng new list-games`.
Dans ce projet tu devras créer 2 composants : `GameListComponent` et `GameComponent`.


Tu devras récupérer les informations (au format JSON) en appelant l'url suivante: [http://www.campus-bordeaux.ovh:3002/joysticks/api/games](http://www.campus-bordeaux.ovh:3002/joysticks/api/games)
Tu dois utiliser le service **HttpClient** pour récupérer les données.

- Le composant `GameListComponent`devra se faire injecter un service de type `HttpClient`.
- Le composant `GameListComponent` devra récupérer les jeux de l'API à l'aide du service et les afficher via des composants `GameComponent`.
- `GameComponent` devra récupérer via le décorateur @Input les informations de chaque jeu (titre, description, image etc...) et les afficher (format libre).

## Étape 4 - Bonus

Il te reste du temps ? Parfait ! Tu vas pouvoir ajouter quelques fonctionnalités utiles à ton projet Angular !
Les bonus sont indépendants les uns des autres, tu peux les réaliser dans l'ordre que tu  veux.

### Selection d'un thème
- ajoute un `select` qui liste tous les thèmes et qui permet de filtrer la liste affichée.
- ajoute un bouton `voir la promo` pour chaque jeu et utilise le router Angular pour afficher l'image `promo` et/ou la vidéo `trailer` sur une page avec une url de type `http://localhost:3000/jeu/promo/5` ou 5 est l'id du jeu selectionné.

### Format des dates
- Affiche le champ date formaté comme dans l'exemple suivant ¨31/06/2019, 12:00¨, em utilisant un `Pipe`

### Création/utilisation d'un service
- Créer un service Angular qui sera chargé d'interroger l'API
- Utilise ce service dans tes `components` à la place du service `http`

## Étape 5 - Et voilà...

Tu peux aller te désaltérer à la brasserie, tu l'as amplement mérité !!

**NB : Tu ne dois pas commencer par cette étape... ;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)