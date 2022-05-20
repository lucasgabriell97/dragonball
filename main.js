const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        const getIdSelected = character.attributes.id.value;

        if(getIdSelected === 'freeza') {
            return;
        }

        // Add and remove selected class when hovering over characters
        const characterSelected = document.querySelector('.selected');
        characterSelected.classList.remove('selected');

        character.classList.add('selected');

        // Change name and image of the big character
        const playerImage = document.querySelector('#character-player-1');
        playerImage.src = `./assets/img/${getIdSelected}.png`;

        const playerName = document.querySelector('#player-1-name');
        const nameSelected = character.getAttribute('data-name');

        playerName.innerHTML = nameSelected;
    });
});