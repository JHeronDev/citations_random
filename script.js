const citations = [
    {
        texte: "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.",
        auteur: "Albert Einstein"
    },
    {
        texte: "Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.",
        auteur: "Winston Churchill"
    },
    {
        texte: "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.",
        auteur: "Georges Clémenceau"
    },
    {
        texte: "Ce n’est pas la montagne que nous conquérons, mais nous-mêmes.",
        auteur: "Edmund Hillary"
    },
    {
        texte: "Fais de ta vie un rêve, et d’un rêve, une réalité.",
        auteur: "Antoine de Saint-Exupéry"
    }
];

const citationtxt = document.getElementById("citation");
const citationauteur = document.getElementById("auteur");
const timestamp = document.getElementById("timestamp");
const boutonNouvelle = document.getElementById("nouvelle");
const boutonCopier = document.getElementById("copier");

function affiche() {
    const i = Math.floor(Math.random() * citations.length);
    const citation = citations[i];

    citationtxt.textContent = `"${citation.texte}"`;
    citationauteur.textContent = `${citation.auteur}`;
    const time = new Date();
    timestamp.textContent = `${time.toLocaleString()}`;

    

    localStorage.setItem("derniereCitation", JSON.stringify(citation));
}

function memoire() {
    const save = localStorage.getItem("derniereCitation");
    if (save) {
        const citation = JSON.parse(save);
        citationtxt.textContent = `"${citation.texte}"`;
        citationauteur.textContent = `${citation.auteur}`;
    }
}

function copier() {
    const fullQuote = `${citationtxt.textContent} ${citationauteur.textContent}`;
    navigator.clipboard.writeText(fullQuote).then(() => {
        alert("Citation copiée !");
    });
}

boutonNouvelle.addEventListener("click", affiche);
boutonCopier.addEventListener("click", copier);

window.onload = memoire;




let secondes = null; 

const boutonAuto = document.getElementById("auto");

function modeAuto() {
  if (secondes === null) {
    secondes = setInterval(AfficheCitation, 5000);
    boutonAuto.textContent = "Stop";
  } else {
    clearInterval(secondes);
    secondes = null;
    boutonAuto.textContent = "Auto";
  }
}
boutonAuto.addEventListener("click", modeAuto);

