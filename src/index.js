const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

// Uso de Template String
const $iconCollab = ` <img  class='icon' 
                    src='img/icon-collabcode.png'  alt='Gueio'>
                `;

const $iconC = ` <img  class='icon' 
                    src='img/icon-c.png'  alt='Livro da linguagem C++'>
                `;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin",$iconCollab);
$memoryCardFront.insertAdjacentHTML("afterbegin",$iconC);