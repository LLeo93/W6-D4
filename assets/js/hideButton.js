cards.array.forEach((card) => {
  if (editButton) {
    editButton.addEventListener('click', () => {
      if (editButton.innerText === 'Hide') {
        card.classList.add('d-none'); // Aggiungi la classe d-none alla card
      }
    });
  }
});
