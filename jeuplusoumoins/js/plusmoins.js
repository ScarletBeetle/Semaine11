$text = document.getElementById("text");
$button = document.getElementById("button");
$solution = document.getElementById("solution");
reponse = Math.ceil(Math.random() * 100);

function tester() {
    if ($text.value < reponse) {
        $solution.innerHTML = "Désolé, ce n'est pas assez!";
    }
    if ($text.value == reponse) {
        $solution.innerHTML = "Gagné !";
    }
    if ($text.value > reponse) {
        $solution.innerHTML = "Et non c'est trop!";
    }
}

$button.onclick = tester;