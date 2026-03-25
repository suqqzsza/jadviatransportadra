const reviewScrollButton = document.getElementById('scrollReviews');
const reviewsSection = document.getElementById('reviews');

if (reviewScrollButton && reviewsSection) {
  reviewScrollButton.addEventListener('click', () => {
    reviewsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const voteButtons = document.querySelectorAll('.vote-btn');

voteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const actions = button.closest('.review-actions');
    if (!actions) return;

    const siblingButtons = actions.querySelectorAll('.vote-btn');
    siblingButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');
  });
});
