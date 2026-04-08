document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  lucide.createIcons();

  // 2. Initialize AOS (Animate On Scroll)
  AOS.init({
    once: true,
    offset: 50,
  });

  // 3. Set dynamic copyright year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 4. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
    } else {
      navbar.classList.add('bg-transparent');
      navbar.classList.remove('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
    }
  });

  // 5. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  let isMobileMenuOpen = false;

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
      // Show menu
      mobileMenu.classList.remove('hidden');
      // Trigger reflow to ensure transition happens
      void mobileMenu.offsetWidth;
      mobileMenu.classList.remove('opacity-0', '-translate-y-4');
      mobileMenu.classList.add('opacity-100', 'translate-y-0');
      
      // Update icons
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      // Hide menu animations
      mobileMenu.classList.remove('opacity-100', 'translate-y-0');
      mobileMenu.classList.add('opacity-0', '-translate-y-4');
      
      // Wait for transition before actual hide
      setTimeout(() => {
        if (!isMobileMenuOpen) {
          mobileMenu.classList.add('hidden');
        }
      }, 300);
      
      // Update icons
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  };

  mobileMenuBtn.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMobileMenuOpen) {
        toggleMobileMenu();
      }
    });
  });

  // 6. Chart.js Setup for Recharts replacement
  const ctx = document.getElementById('sensorChart');
  if (ctx) {
    
    Chart.defaults.color = 'rgba(255, 255, 255, 0.4)';
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.font.size = 10;

    // Gradient for the pH line
    const canvasContext = ctx.getContext('2d');
    const gradientPh = canvasContext.createLinearGradient(0, 0, 0, 300);
    gradientPh.addColorStop(0, 'rgba(14, 165, 233, 0.3)'); // #0ea5e9
    gradientPh.addColorStop(1, 'rgba(14, 165, 233, 0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
        datasets: [
          {
            label: 'pH Level',
            data: [7.2, 7.1, 7.3, 7.0, 6.9, 7.2, 7.4],
            borderColor: '#0ea5e9',
            backgroundColor: gradientPh,
            borderWidth: 2,
            tension: 0.4, // smooth curve
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 4,
          },
          {
            label: 'Turbidity (NTU)',
            data: [12, 15, 11, 18, 22, 14, 10],
            borderColor: '#22d3ee',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 4,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: false, // Recharts representation didn't show legend
          },
          tooltip: {
            backgroundColor: '#0f172a',
            borderColor: 'rgba(255,255,255,0.2)',
            borderWidth: 1,
            titleColor: '#fff',
            bodyColor: '#fff',
            cornerRadius: 12,
            padding: 10,
            boxPadding: 4,
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            border: {
              display: false
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
              tickBorderDash: [3, 3], // dotted grid
            },
            border: {
              display: false
            },
            ticks: {
              stepSize: 5
            }
          }
        }
      }
    });
  }
});
