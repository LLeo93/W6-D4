const urlImg = 'https://api.pexels.com/v1/search?query=mountains';
const cards = document.querySelectorAll('.card');
console.log(cards);
const loadImagesButton = document.getElementById('loadImagesButton');
console.log(loadImagesButton);
const kittenLink = 'https://api.pexels.com/v1/search?query=kittens';
const imgSecondaryButton = document.getElementById('imgSecondaryButton');

// LOAD IMG
loadImagesButton.addEventListener('click', () => {
  fetch(urlImg, {
    headers: {
      authorization: 'GfgJvRAhmJeWQJ1Dulqzo3GSkUstV5mf28mqCLx9lnSv7c0rQUzuZa8M',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('la risposta non era valida');
      }
    })
    .then((data) => {
      console.log('DATI RICEVUTI DAL SERVER', data);
      data.photos.forEach((photo, i) => {
        {
          const img = cards[i].querySelector('img');
          img.src = photo.src.medium;
          edit[i].innerText = '';
          edit[i].innerText = 'Hide';
        }
      });
    })
    .catch((error) => {
      console.log('si è verificato un errore', error);
    });
});

// LOAD SECONDARY IMG
imgSecondaryButton.addEventListener('click', () => {
  fetch(kittenLink, {
    headers: {
      authorization: 'GfgJvRAhmJeWQJ1Dulqzo3GSkUstV5mf28mqCLx9lnSv7c0rQUzuZa8M',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('la risposta non era valida');
      }
    })
    .then((data) => {
      console.log('DATI RICEVUTI DAL SERVER', data);
      data.photos.forEach((photo, i) => {
        {
          const img = cards[i].querySelector('img');
          img.src = photo.src.medium;
          edit[i].innerText = '';
          edit[i].innerText = 'Hide';
        }
      });
    })
    .catch((error) => {
      console.log('si è verificato un errore', error);
    });
});
cards.forEach((card) => {
  if (edit) {
    edit.addEventListener('click', () => {
      if (editButton.innerText === 'Hide') {
        card.classList.add('d-none'); // Aggiungi la classe d-none alla card
      }
    });
  }
});
