const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");

// Uso de Template String
const $icon = `
    <img 
        class='icon' 
        src='img/icon-collabcode.png' 
        alt='Gueio'
    >
`;

$memoryCard.classList.add("memory-card");

$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("beforeend",$icon);