<template>
  <section class="about-hero">
    <div class="hero-container">
      <div class="hero-wrapper">
        <div class="hero-content">
          <p class="welcome">ABOUT</p>
          
          <h1 class="title">
            Samnkelisiwe<br>
            Mpiyonke
          </h1>

          <p class="description">
            Passionate Software Developer | 1+ Years Experience | Building Modern Web Applications That Solve Real Problems
          </p>

          <div class="cta">
            <a href="/Samnkelisiwe_Mpiyonke_FlowCV_Resume_2026-04-15 (4).pdf" download class="cv-download-btn floating">Download CV ↓</a>
            
      <div class="socials">
  <!-- LinkedIn -->
  <a href="https://www.linkedin.com/in/samnkelisiwe-mpiyonke-3419573b1" class="icon linkedin" target="_blank">
    <svg viewBox="0 0 24 24">
      <path
        fill="white"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.5 8h4v12h-4V8zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v7.2h-4v-6.4c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.5h-4V8z"
      />
    </svg>
  </a>

    <!-- Email -->
  <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" class="icon email">
    <svg viewBox="0 0 24 24">
      <path
        fill="white"
        d="M2 4h20v16H2V4zm10 9L20 6H4l8 7zm0 2L4 8v10h16V8l-8 7z"
      />
    </svg>
  </a>
  <!-- GitHub -->
  <a href="https://github.com/samnkel" class="icon github" target="_blank">
    <svg viewBox="0 0 24 24">
      <path
        fill="white"
        d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.8-1.4-3.8-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.6 2.7 1.1.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1a10.4 10.4 0 0 1 5.5 0c2.1-.4 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .4.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"
      />
    </svg>
  </a>
</div>
          </div>
        </div>

        <div class="hero-image">
          <div class="skills-panel">
            <div class="skill-item">
              <span class="skill-name">Vue.js</span>
              <span class="skill-level">90%</span>
            </div>
            <div class="skill-item">
              <span class="skill-name">JAVASCRIPT</span>
              <span class="skill-level">80%</span>
            </div>
            <div class="skill-item">
              <span class="skill-name">HTML/CSS</span>
              <span class="skill-level">85%</span>
            </div>
            <div class="skill-item">
              <span class="skill-name">Node.js</span>
              <span class="skill-level">80%</span>
            </div>
            <div class="skill-item">
              <span class="skill-name">PHP</span>
              <span class="skill-level">85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-hero { 
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  padding: clamp(2rem, 5vh, 4rem) clamp(1rem, 5vw, 2rem);
  background: radial-gradient(circle at 20% 20%, #0a1f2f, #02060a 70%);
}
.hero-container {
  width:100%;
  max-width:1200px;
  padding:0 30px;
}
.hero-wrapper {
  display:flex; 
  justify-content:space-between; 
  align-items:center; 
  gap:40px;
}
.hero-content { 
  max-width:500px; 
  flex:1;
}
.hero-image { 
  flex:1;
  position:relative; 
  min-height:400px;
}
.welcome { 
  color:#888; 
  font-size:18px; 
  margin-bottom:25px; 
  letter-spacing:3px;
}
.title { 
  font-size: clamp(2.8rem, 10vw, 4.1rem); 
  font-weight:bold; 
  line-height:0.95; 
  margin:0 0 25px 0;
  background:linear-gradient(135deg, #fff 0%, #00ff99 50%, #5bd9ff 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
}
.description { 
  color:#ccc; 
  line-height:1.7; 
  font-size:16px;
  margin-bottom:40px;
}
.cta { 
  display:flex; 
  align-items:center; 
  gap:20px; 
}

/* Floating CV Button - Home page style */
.cv-download-btn {
  display:inline-flex; 
  align-items:center; 
  gap:8px;
  background:#00ff99; 
  color:#000; 
  text-decoration:none; 
  padding:16px 30px; 
  border-radius:35px; 
  font-weight:bold; 
  font-size:16px;
  box-shadow:0 8px 25px rgba(0,255,153,0.4);
  animation: smoothFloat 3s ease-in-out infinite;
  transition:0.3s;
}
.cv-download-btn:hover { 
  transform:translateY(-6px) scale(1.05);
  box-shadow:0 20px 40px rgba(0,255,153,0.6);
  animation-play-state:paused;
}
@keyframes smoothFloat {
  0%,100%{transform:translateY(0px)}
  50%{transform:translateY(-15px)}
}

.socials {
  display: flex;
  gap: 10px;
}

.icon svg {
  width: 20px;
  height: 20px;
}

.icon {
  transition: 0.3s;
  cursor: pointer;
}

.social-circle:hover { 
  transform:scale(1.15) translateY(-3px);
  box-shadow:0 10px 25px rgba(0,255,153,0.4);
}

.skills-panel {
  background:linear-gradient(135deg, rgba(17,17,17,0.9), rgba(26,26,46,0.9));
  backdrop-filter:blur(20px);
  border:1px solid rgba(0,255,153,0.2);
  border-radius:25px;
  padding: clamp(1.5rem, 6vw, 2.5rem);
  min-height: clamp(350px, 50vh, 450px);
  max-width: 100%;
}
.skill-item {
  display:flex;
  justify-content:space-between;
  margin-bottom:20px;
  padding:12px 0;
  border-bottom:1px solid rgba(255,255,255,0.1);
}
.skill-item:last-child { border-bottom:none; margin-bottom:0; }
.skill-name { color:#ccc; font-weight:500; }
.skill-level { 
  background:linear-gradient(90deg, #00ff99, #5bd9ff);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
  font-weight:bold;
}

/* RESPONSIVE Enhanced */
@media (max-width: 1024px) {
  .hero-wrapper { 
    flex-direction: column; 
    gap: clamp(1.5rem, 6vh, 2.5rem); 
    text-align:center; 
  }
  
  .skills-panel {
    margin-top: 2rem;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .welcome { font-size: clamp(0.875rem, 3vw, 1.125rem); }
}
</style>
