<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-wrapper">
        <div class="hero-content">
          <p class="welcome">WELCOME</p>
          
          <h1 class="title">
            SOFTWARE<br>DEVELOPER
          </h1>

          <p class="description">
            Hi, I'm a software developer passionate about building clean, functional apps.
          </p>

          <div class="cta">
<a href="/Samnkelisiwe_Mpiyonke_FlowCV_Resume_2026-04-15 (4).pdf" download class="cv-download-btn floating">Download CV ↓</a>
            <div class="socials">
              <a href="https://www.linkedin.com/in/samnkelisiwe-mpiyonke-3419573b1" class="social-circle linkedin" target="_blank" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.002z"/>
                </svg>
              </a>

              <a href="https://instagram.com" class="social-circle instagram" target="_blank" title="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 .069 5.373 .069 12s5.303 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.966 15.674c-1.463.173-2.294.732-2.48 1.541h-7.652c-.186-.809-.517-1.368-1.988-1.541V12.539c0-.953.295-1.693.884-2.24.589-.547 1.437-.819 2.556-.819.999 0 1.807.309 2.421.927.614.618.921 1.479.921 2.58v.953h-3.079c-.209-.523-.314-.93-.314-1.22 0-.942.442-1.781 1.327-2.518.884-.737 2.068-.737 2.952 0 .884.737 1.327 1.576 1.327 2.518 0 1.165-.418 2.054-1.256 2.68l.047 .558c.884.233 1.569 .884 2.075 1.965h2.628v-.953c0-1.101-.307-1.962-.921-2.58-.614-.618-1.422-.927-2.421-.927-.999 0-1.735.295-2.23 .884-.495.589-.743 1.381-.743 2.393v1.22h3.079zM9.093 16.184c.733.3 1.395.698 1.989 1.201h5.981c.594-.503 1.256-901.3 1.989-1.201H9.093zm3.907-9.649c-1.706 0-3.093.884-3.093 1.981s1.387 1.981 3.093 1.981 3.093-.884 3.093-1.981-.387-1.981-3.093-1.981z"/>
                </svg>
              </a>

              <a href="https://github.com/samnkel" class="social-circle github" target="_blank" title="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" class="social-icon">
                  <path fill-rule="evenodd" d="M12.026 0c-6.627 0-12 5.373-12 12 0 5.302 3.443 9.8 8.179 11.332.607.111.82-.261.82-.58v-2.05c-3.398.74-4.125-1.525-4.125-1.525-.557-1.419-1.36-1.798-1.36-1.798-1.114-.764.07-.747.07-.747 1.232.086 1.88 1.262 1.88 1.262 1.09 1.87 2.866 1.325 3.562 1.013.11-.789.428-1.333.781-1.639-2.724-.31-5.599-1.367-5.599-6.097 0-1.346.481-2.448 1.275-3.31-.268-.66-.611-1.506 0-3.132 0 0 1.03-.33 3.382 1.263a11.71 11.71 0 013.382-.404 11.71 11.71 0 013.382 .404c2.35-1.593 3.382-1.263 3.382-1.263.668 1.626 1.256 2.472 1.256 3.31 0 4.73-2.875 5.787-5.599 6.097.443.382.84 1.126.84 2.27v3.356c0 .319.215.58.82 .58 4.736-1.532 8.179-6.03 8.179-11.332 0-6.627-5.373-12-12.026-12z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        <div class="hero-image">
          <img src="/IMG-20260416-WA0003.jpg" alt="Samnkelsiwe Mpiyonke">
          <div class="floating-card">
            <p class="card-title">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { 
  height:100vh;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
}
.hero-container {
  width:100%;
  max-width:1200px;
  padding:0 30px;
  box-sizing:border-box;
}
.hero-wrapper {
  display:flex; 
  justify-content:space-between; 
  align-items:center; 
  gap:0px;
  width:100%;
}
.hero-content { 
  max-width:480px; 
  flex:1;
  margin-right:10px;
}
.hero-image { 
  flex:1;
  position:relative; 
  max-width:380px;
  margin-left:10px;
}
.welcome { 
  color:#888; 
  font-size:16px; 
  margin-bottom:20px; 
}
.title { 
  font-size:60px; 
  font-weight:bold; 
  line-height:0.9; 
  margin:0 0 12px 0; 
}
.description { 
  color:#aaa; 
  line-height:1.5; 
  margin-bottom:20px; 
  font-size:14px;
}
.cta { 
  display:flex; 
  align-items:center; 
  gap:15px; 
  margin:0;
}

/* Floating CV Button */
.cv-download-btn {
  display:inline-flex; 
  align-items:center; 
  gap:8px;
  background:#00ff99; 
  color:#000; 
  text-decoration:none; 
  padding:14px 25px; 
  border-radius:30px; 
  font-weight:bold; 
  font-size:15px;
  box-shadow:0 5px 15px rgba(0,255,153,0.4);
  animation: smoothFloat 3s ease-in-out infinite;
  transition:0.3s;
}
.cv-download-btn:hover { 
  transform:translateY(-5px) scale(1.05);
  box-shadow:0 15px 35px rgba(0,255,153,0.6);
  animation-play-state:paused;
}
@keyframes smoothFloat {
  0%,100%{transform:translateY(0px)}
  50%{transform:translateY(-12px)}
}

.socials { display:flex; gap:12px; }
.social-circle { 
  width:42px; 
  height:42px; 
  border-radius:50%; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  text-decoration:none;
  transition:0.3s;
}
.social-icon {
  width:18px;
  height:18px;
}

.social-circle.linkedin { 
  background:linear-gradient(135deg, #0077b5, #005582); 
  color:white;
}
.social-circle.instagram { 
  background:linear-gradient(135deg, #e4405f, #f77737); 
  color:white;
}
.social-circle.github { 
  background:#333; 
  color:white;
}
.social-circle:hover { 
  transform:scale(1.1) translateY(-2px);
  box-shadow:0 8px 20px rgba(0,255,153,0.3);
}

.hero-image img { 
  width:100%; 
  height:480px;
  object-fit:cover;
  border-radius:20px; 
  box-shadow:0 20px 40px rgba(0,0,0,0.5);
  border-top:#00ff99 4px solid;
  border-bottom:#5bd9ff 4px solid;
}
.floating-card { 
  position:absolute; 
  top:12px; 
  right:12px; 
  background:#111; 
  padding:12px 16px; 
  border-radius:12px; 
}
.card-title { 
  font-size:11px; 
  color:gray; 
  margin:0;
}

@media (max-width:1200px) {
  .hero-container {padding:0 20px;}
  .hero-wrapper {gap:0px;}
  .hero-content{margin-right:8px;}
  .hero-image{margin-left:8px;}
  .title{font-size:54px;}
}
@media (max-width:768px) {
  .hero-wrapper { 
    flex-direction:column; 
    gap:15px;
  }
  .hero-content {text-align:center; margin:0;}
  .hero-image {margin:0; max-width:320px;}
  .hero-image img {height:400px;}
}
</style>
