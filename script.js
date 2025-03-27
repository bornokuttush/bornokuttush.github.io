// Goku vs Luffy Fight Animation Logic
const goku = document.getElementById('goku');
const luffy = document.getElementById('luffy');

// Function to trigger the Goku vs Luffy fight animation
function animeFight() {
  // Initializing the fight sequence

  // Goku moves towards Luffy
  anime({
    targets: goku,
    translateX: ['0%', '60%'],  // Goku moves to the right
    duration: 2000,
    easing: 'easeInOutSine',
    loop: false,
    delay: 500,
    complete: () => {
      // When Goku reaches the right side, punch animation
      anime({
        targets: goku,
        scale: [1, 1.2], // Goku gets bigger as he punches
        duration: 300,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: 2,
      });

      // After punching, Luffy reacts
      anime({
        targets: luffy,
        translateX: ['0%', '-60%'], // Luffy moves back as if getting hit
        duration: 1500,
        easing: 'easeInOutSine',
        delay: 2000,
      });
    }
  });

  // Luffy's counterattack animation
  anime({
    targets: luffy,
    translateX: ['0%', '60%'],  // Luffy moves to the right to punch
    duration: 2000,
    easing: 'easeInOutSine',
    loop: false,
    delay: 3000,
    complete: () => {
      // Luffy's punch animation
      anime({
        targets: luffy,
        scale: [1, 1.2], // Luffy grows as he punches
        duration: 300,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: 2,
      });

      // Goku dodges the punch
      anime({
        targets: goku,
        translateX: ['60%', '0%'], // Goku dodges back
        duration: 1500,
        easing: 'easeInOutSine',
        delay: 2500,
      });
    }
  });

  // Optional: Add explosion or energy effect for dramatic action
  anime({
    targets: '#explosion',
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 500,
    delay: 1500,
    complete: () => {
      // Once explosion animation completes, reset its scale and opacity
      anime({
        targets: '#explosion',
        scale: [1, 0],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 500,
        delay: 500,
      });
    }
  });
}

// Trigger the fight sequence when the user clicks on the "Start Fight" button
document.getElementById('startFightBtn').addEventListener('click', animeFight);
