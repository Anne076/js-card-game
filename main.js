let playBtn = document.getElementById('play');
playBtn.addEventListener('click', play);

let cardP1 = document.getElementById('card-p1')
let cardP2 = document.getElementById('card-p2')

let cardP1Content = document.getElementById('card-p1-content')
let cardP2Content = document.getElementById('card-p2-content')

let p1winner = document.getElementById('p1-winner')
let p2winner = document.getElementById('p2-winner')

/*
    TODO: Générer les deux decks des joueurs
*/
// CODE DE GENERATION

function play(){

    /*
    TODO: Récupérer la carte du dessus du packet pour les deux joueurs
    */

    /*
    TODO changer le .innerText des deux cartes avec la carte du dessus du packet
    */
   cardP1Content.innerText = 50; // A remplacer avec les bonnes données
   cardP2Content.innerText = 100; // A remplacer avec les bonnes données

   // On retourne les cartes
   cardP1.classList.toggle('Active');
   cardP2.classList.toggle('Active');

   /*
   TODO: donner la carte du joueur qui a gagné à l'autre joueur
   INDICE: fonction pop(); sur un tableau et push(); sur l'autre
   */
   // CODE ICI

   /*
   TODO: Afficher le gagnant
   */
  p1winner.innerText = 'Winner'
  // OU 
  p2winner.innerText = 'Winner'
}

/*
    BONUS
    [1] : Afficher le nombre de carte dans le deck de chaque joueur
    [2] : Créer un affichage quand la partie est terminée 
*/