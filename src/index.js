const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

// Uso de Template String
<<<<<<< HEAD
const $iconCollab = ` <img  class='icon' 
                    src='img/icon-collabcode.png'  alt='Gueio'>
                `;
=======
const $icon = ` <img  class='icon' 
                    src='img/icon-collabcode.png'  alt='Gueio'>
                `;


const $iconC = `<div class="icon-c">
                    <img class='memory-card' src='img/icon-c.png' alt='Gueio'>
                </div>`
>>>>>>> db34d8284d7fd77a3ec26f540e3bc30679109394

const $iconC = ` <img  class='icon' 
                    src='img/icon-c.png'  alt='Livro da linguagem C++'>
                `;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);
<<<<<<< HEAD

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin",$iconCollab);
$memoryCardFront.insertAdjacentHTML("afterbegin",$iconC);
=======
$memoryCard.insertAdjacentHTML("beforeend",$icon);
$memoryCard.insertAdjacentHTML("beforeend",$iconC);
>>>>>>> db34d8284d7fd77a3ec26f540e3bc30679109394
