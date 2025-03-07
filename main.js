 // Mobile Menu Functionality
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const nav = document.querySelector('nav');
 const menuItems = document.querySelectorAll('.nav-menu > li');

 mobileMenuBtn.addEventListener('click', () => {
   nav.classList.toggle('active');
   // Close all dropdowns when menu is closed
   if (!nav.classList.contains('active')) {
     menuItems.forEach(item => {
       item.classList.remove('active');
     });
   }
 });

 // Handle dropdown menus on mobile
 menuItems.forEach(item => {
   if (item.querySelector('.dropdown-menu')) {
     item.addEventListener('click', (e) => {
       if (window.innerWidth <= 768) {
         e.preventDefault();
         // Close other dropdowns
         menuItems.forEach(otherItem => {
           if (otherItem !== item) {
             otherItem.classList.remove('active');
           }
         });
         item.classList.toggle('active');
       }
     });
   }
 });

 // Close menu when clicking outside
 document.addEventListener('click', (e) => {
   if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
     nav.classList.remove('active');
     menuItems.forEach(item => {
       item.classList.remove('active');
     });
   }
 });

 // Close mobile menu when window is resized above mobile breakpoint
 window.addEventListener('resize', () => {
   if (window.innerWidth > 768) {
     nav.classList.remove('active');
     menuItems.forEach(item => {
       item.classList.remove('active');
     });
   }
 });

 // Slider functionality
 const slides = document.querySelectorAll('.slide');
 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const dotsContainer = document.querySelector('.slider-dots');
 let currentSlide = 0;

 // Create dots
 slides.forEach((_, index) => {
   const dot = document.createElement('div');
   dot.classList.add('dot');
   if (index === 0) dot.classList.add('active');
   dot.addEventListener('click', () => goToSlide(index));
   dotsContainer.appendChild(dot);
 });

 const dots = document.querySelectorAll('.dot');

 function updateSlides() {
   slides.forEach(slide => slide.classList.remove('active'));
   dots.forEach(dot => dot.classList.remove('active'));
   slides[currentSlide].classList.add('active');
   dots[currentSlide].classList.add('active');
 }

 function nextSlide() {
   currentSlide = (currentSlide + 1) % slides.length;
   updateSlides();
 }

 function prevSlide() {
   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
   updateSlides();
 }

 function goToSlide(index) {
   currentSlide = index;
   updateSlides();
 }

 // Event listeners
 nextBtn.addEventListener('click', nextSlide);
 prevBtn.addEventListener('click', prevSlide);

 // Auto slide
 setInterval(nextSlide, 5000);

 // Login Modal Functionality
 const loginModal = document.getElementById('loginModal');
 const academicModal = document.getElementById('academicModal');
 const studentLoginBtn = document.getElementById('studentLoginBtn');
 const academicLoginBtn = document.getElementById('academicLoginBtn');
 const closeModalBtns = document.querySelectorAll('.close-modal');
 const loginForm = document.getElementById('loginForm');
 const academicForm = document.getElementById('academicForm');

 studentLoginBtn.addEventListener('click', (e) => {
   e.preventDefault();
   loginModal.classList.add('active');
 });

 academicLoginBtn.addEventListener('click', (e) => {
   e.preventDefault();
   academicModal.classList.add('active');
 });

 closeModalBtns.forEach(btn => {
   btn.addEventListener('click', () => {
     loginModal.classList.remove('active');
     academicModal.classList.remove('active');
   });
 });

 window.addEventListener('click', (e) => {
   if (e.target === loginModal) {
     loginModal.classList.remove('active');
   }
   if (e.target === academicModal) {
     academicModal.classList.remove('active');
   }
 });

 loginForm.addEventListener('submit', (e) => {
   e.preventDefault();
   const studentNumber = document.getElementById('studentNumber').value;
   const password = document.getElementById('password').value;

   // Burada öğrenci giriş işlemleri yapılacak
   console.log('Öğrenci Numarası:', studentNumber);
   console.log('Şifre:', password);

   // Örnek başarılı giriş
   alert('Öğrenci girişi başarılı!');
   loginModal.classList.remove('active');
   loginForm.reset();
 });

 academicForm.addEventListener('submit', (e) => {
   e.preventDefault();
   const academicId = document.getElementById('academicId').value;
   const academicPassword = document.getElementById('academicPassword').value;

   // Burada akademisyen giriş işlemleri yapılacak
   console.log('Sicil Numarası:', academicId);
   console.log('Şifre:', academicPassword);

   // Örnek başarılı giriş
   alert('Akademisyen girişi başarılı!');
   academicModal.classList.remove('active');
   academicForm.reset();
 });