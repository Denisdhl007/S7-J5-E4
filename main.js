// // # Exercice d'observation :
// // >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// // >*Cherche des methodes pour résoudre les énoncés suivants :*

// // ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe

let redPurple = document.getElementsByClassName("redPurple");
console.log(redPurple);

// // ### 2. Récupère avec un querySelectorAll, "redPurple" affiche

let redPurple = document.querySelectorAll('.redPurple');
for (let i = 0; i < redPurple.length; i++) {
  redPurple[i].style.display = 'block';
}
console.log(redPurple);

// // ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"

let redPurple = document.querySelectorAll('h1.redPurple');
for (let i = 0; i < redPurple.length; i++) {
  console.log(redPurple[i]);
}

// // // ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span

let redPurple = document.querySelectorAll('li, p, span');
for (let i = 0; i < redPurple.length; i++) {
  console.log(redPurple[i]);
}

// // // ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 

let redPurple = document.querySelectorAll('li.important, p');
for (let i = 0; i < redPurple.length; i++) {
  console.log(redPurple[i]);
}

// // // ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"

let redPurple = document.querySelectorAll('h1, span.redPurple');
for (let i = 0; i < redPurple.length; i++) {
  console.log(redPurple[i]);
}