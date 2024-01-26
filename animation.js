document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      var animatedElement = document.querySelector('.About');
      var elementPosition = animatedElement.getBoundingClientRect().top;
  
      // Adjust the threshold value based on when you want the animation to trigger
      if (elementPosition < window.innerHeight * 0.75) {
        animatedElement.classList.add('animated');
      }
    });
  });
  
  var typed = new Typed("#text", {
    strings: ["Full Stack Developer", "App Developer", "Front End Developer"],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true,
  });


  const ctx = document.getElementById('barchart');

  const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Communicatiom', 'React', 'Javascript', 'CSS', 'Exprss Js', 'Mongodb'],
      datasets: [{
        label: '# of Acceptance',
        data: [12, 19, 3, 5, 24, 13,16,18,6],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const ctx2 = document.getElementById('doughnut');

  const doughnut = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Communicatiom', 'React', 'Javascript', 'CSS', 'Exprss Js', 'Mongodb'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 24, 13,16,18,6],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
