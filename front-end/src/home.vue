<template>
  <section class="hero">
    <!-- LEFT CONTENT -->
    <div class="hero-left">
      <p class="welcome">WELCOME</p>

      <h1 class="title">
        SOFTWARE <br />
        <span>DEVELOPER</span>
      </h1>

      <p class="description">
        Hi, I'm a software developer passionate about building clean, functional apps.
      </p>

      <div class="actions">
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

    <!-- RIGHT IMAGE -->
    <div class="hero-right">
      <div class="image-card">
        <span class="badge">● Software Development</span>

        <img src="@/assets/8bfd860f-23b9-4c66-9b40-eced7c186dfb.png"/>

        <!-- floating tech icons -->
        <div class="floating top">&lt;/&gt;</div>
        <div class="floating right">JS</div>
        <div class="floating bottom">{ }</div>
        <div class="floating left">Vue</div>
      </div>
    </div>
  </section>
</template>

<script setup>
// no logic needed for now
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 10px 13%;
  background: radial-gradient(circle at 20% 20%, #0a1f2f, #02060a 70%);
  color: #fff;
  overflow: hidden;
}

/* LEFT SIDE */
.hero-left {
  max-width: 550px;
  padding: 70px;
  border-top: 3px solid  #00ff99;
  border-left:3px solid  #0a1f2f;
  border-bottom:3px solid #0a1f2f;
  border-right: 3px solid  #00ff99;
}

.welcome {
  color: #00ffae;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.title {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
}

.title span {
  color: #00ffae;
}

.description {
  margin: 20px 0;
  color: #b0b0b0;
  line-height: 1.6;
}

/* BUTTON */
.btn-primary {
  background: #00ffae;
  color: #000;
  border: none;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 255, 174, 0.6);
  transition: 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

/* SOCIALS */
.actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.socials {
  display: flex;
  gap: 10px;
  margin-left: 150px;
}

.icon svg {
  width: 20px;
  height: 20px;
}

.icon {
  transition: 0.3s;
  cursor: pointer;
}

.icon:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 15px rgba(0, 255, 174, 0.6);
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
/* RIGHT SIDE */
.hero-right {
  position: relative;
}

.image-card {
  position: flex;
  width: 350px;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 174, 0.2);
  box-shadow: 0 0 60px rgba(0, 255, 174, 0.2);
}

.image-card img {
  width: 100%;
  display: block;
  
}

/* BADGE */
.badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #0b0f14;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
}

/* FLOATING ICONS */
.floating {
  position: absolute;
  background: rgba(0, 255, 174, 0.1);
  border: 1px solid rgba(0, 255, 174, 0.3);
  color: #00ffae;
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
}

.top {
  top: -20px;
  left: 40%;
}

.right {
  right: -20px;
  top: 40%;
}

.bottom {
  bottom: -20px;
  right: 30%;
}

.left {
  left: -20px;
  bottom: 40%;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-right {
    margin-top: 40px;
  }
}
</style>