<template>
<div class="app">
    <LoadingSpinner />
    <nav class="nav">
      <div class="logo">
        <div class="logo-circle" :class="{ flipping: isFlipping }">
          SM
        </div>
        <h3>Samnkelsiwe Mpiyonke</h3>
      </div>
      <div class="nav-links" :class="{ 'mobile-open': showMobileNav }">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Me</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
      </div>
      <button class="hamburger" @click="toggleMobileNav">☰</button>

      <button class="btn" @click="showContactModal = true">Get In Touch</button>

    </nav>
    
    <div class="nav-divider"></div>

    <router-view />

    <!-- Contact Modal -->
    <div v-if="showContactModal" class="modal-overlay" @click.self="showContactModal = false">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Get In Touch</h2>
          <button class="close-btn" @click="showContactModal = false">&times;</button>
        </div>

        <form class="modal-form" @submit.prevent="handleModalSubmit">
          <div class="form-group">
            <label for="modal-fullName">Full Name *</label>
            <input 
              name="fullName"
              id="modal-fullName" 
              v-model="form.fullName" 
              type="text" 
              required
              placeholder="Enter your full name"
            >
          </div>

          <div class="form-group">
            <label for="modal-phone">Contact Number *</label>
            <input 
              name="phone"
              id="modal-phone" 
              v-model="form.phone" 
              type="tel" 
              required
              placeholder="e.g. +27 123 456 789"
            >
          </div>

          <div class="form-group">
            <label for="modal-email">Email Address *</label>
            <input 
              name="email"
              id="modal-email" 
              v-model="form.email" 
              type="email" 
              required
              placeholder="your.email@example.com"
            >
          </div>

          <div class="form-group">
            <label for="modal-message">Message *</label>
            <textarea 
              name="message"
              id="modal-message" 
              v-model="form.message" 
              required
              rows="4"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="loading">
            {{ loading ? 'Sending...' : 'Send Message' }}
          </button>
        </form>

        <div v-if="status" class="status-message" :class="status.type">
          {{ status.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from './components/LoadingSpinner.vue'

export default {
  components: {
    LoadingSpinner
  },

  data() {
    return {
      isFlipping: false,
      showMobileNav: false,
      showContactModal: false,
      form: {
        fullName: '',
        phone: '',
        email: '',
        message: ''
      },
      loading: false,
      status: null
    }
  },

  mounted() {
    this.flipLogo();
  },
  methods: {
    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
    flipLogo() {
      const flip = () => {
        this.isFlipping = true;
        setTimeout(() => {
          this.isFlipping = false;
          setTimeout(flip, 4000);
        }, 1000);
      };
      flip();
    },
    openMailtoFallback() {
      const subject = encodeURIComponent(`Portfolio Contact: ${this.form.fullName}`)
      const body = encodeURIComponent(
        `Name: ${this.form.fullName}\n` +
        `Phone: ${this.form.phone}\n` +
        `Email: ${this.form.email}\n\n` +
        `Message:\n${this.form.message}`
      )
      window.open(`mailto:samnkelisiwe@gmail.com?subject=${subject}&body=${body}`, '_blank')
    },
    handleModalSubmit(e) {
      e.preventDefault();
      if (!this.form.fullName || !this.form.email || !this.form.message) {
        this.status = { type: 'error', message: 'Please fill required fields.' };
        return;
      }
      this.loading = true;
      this.status = null;
      const templateParams = {
        from_name: this.form.fullName,
        fullName: this.form.fullName,
        name: this.form.fullName,
        phone: this.form.phone,
        contact_number: this.form.phone,
        from_email: this.form.email,
        email: this.form.email,
        reply_to: this.form.email,
        message: this.form.message
      }
      emailjs.send('service_9pbccv5', 'template_kpdbvqu', templateParams).then(() => {
        this.status = { type: 'success', message: '🎉 Message sent! I will reply soon.' };
        this.form = { fullName: '', phone: '', email: '', message: '' };
      }).catch(() => {
        this.openMailtoFallback()
        this.status = { type: 'success', message: '📧 Email client opened with your message! Please click SEND in your email app.' };
        this.form = { fullName: '', phone: '', email: '', message: '' };
      }).finally(() => {
        this.loading = false;
      });
    }
  }
}
</script>

<style>
body { margin:0; }
.app { background:#000; color:#fff; font-family:Arial, sans-serif; position:relative; }
.nav { 
  display:flex; 
  justify-content:space-between; 
  align-items:center; 
  padding: clamp(1rem, 4vw, 1.5rem) clamp(1rem, 5vw, 4rem); 
  position:sticky; 
  top:0; 
  background:#000; 
  z-index:1000; 
}
.logo { display:flex; align-items:center; gap:10px; }
.logo-circle { 
  width:40px; 
  height:40px; 
  background:#00ff99; 
  border-radius:50%; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  color:#000; 
  font-weight:bold; 
  font-size:18px;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
.logo-circle.flipping {
  animation: backflip 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
@keyframes backflip {
  0% { transform: rotateY(0deg) rotateX(0deg); }
  25% { transform: rotateY(90deg) rotateX(90deg); }
  50% { transform: rotateY(180deg) rotateX(180deg); }
  75% { transform: rotateY(270deg) rotateX(270deg); }
  100% { transform: rotateY(360deg) rotateX(360deg); }
}
.nav-links { 
  display:flex; 
  gap: clamp(1rem, 3vw, 2rem); 
  position:relative;
}
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  border-radius: 4px;
  transition: 0.3s;
}
.hamburger:hover {
  background: rgba(0,255,153,0.2);
}
.nav-link { 
  color:#fff; 
  text-decoration:none; 
  font-weight:500;
  position:relative;
  padding-bottom:8px;
  transition:0.3s;
}
.nav-link:hover {
  color:#00ff99;
}
.nav-link::after {
  content:'';
  position:absolute;
  bottom:0;
  left:50%;
  width:0;
  height:2px;
  background:linear-gradient(90deg, #00ff99, transparent);
  transition:0.3s;
  transform:translateX(-50%);
}
.nav-link:hover::after {
  width:80%;
}
.btn { 
  background:#00ff99; 
  border:none; 
  padding:10px 20px; 
  border-radius:20px; 
  cursor:pointer; 
  transition:0.3s; 
  font-weight:bold;
  color:#000;
}
.btn:hover:not(:disabled) { 
  transform:scale(1.05); 
  box-shadow:0 5px 15px rgba(0,255,153,0.4); 
}
.nav-divider {
  height:1px;
  background:linear-gradient(90deg, transparent, #333 20%, #444 50%, #333 80%, transparent);
  margin:0;
  box-shadow:0 1px 3px rgba(0,0,0,0.5);
} 
.modal-overlay {
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.9);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:2000;
  animation: fadeIn 0.3s ease;
}
.modal-content {
  background:#111;
  padding: clamp(1.5rem, 8vw, 2.5rem);
  border-radius:25px;
  max-width: min(90vw, 500px);
  width:90%;
  max-height:90vh;
  overflow-y:auto;
  box-shadow:0 30px 80px rgba(0,0,0,0.7);
  animation: popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.modal-header {
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
  border-bottom:1px solid #333;
  padding-bottom:20px;
}
.modal-header h2 {
  margin:0;
  font-size: clamp(1.5rem, 5vw, 1.75rem);
  color:#fff;
}
.close-btn {
  background:none;
  border:none;
  font-size:32px;
  color:#666;
  cursor:pointer;
  width:40px;
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  transition:0.3s;
}
.close-btn:hover {
  color:#fff;
  background:#333;
}
.modal-form .form-group {
  margin-bottom:25px;
}
.modal-form label {
  display:block;
  color:#ccc;
  font-weight:500;
  margin-bottom:8px;
  font-size:14px;
}
.modal-form input,
.modal-form textarea {
  width:100%;
  background:#222;
  border:1px solid #333;
  border-radius:12px;
  padding:15px;
  color:#fff;
  font-size:16px;
  transition:0.3s;
  box-sizing:border-box;
}
.modal-form input:focus,
.modal-form textarea:focus {
  outline:none;
  border-color:#00ff99;
  box-shadow:0 0 0 3px rgba(0,255,153,0.1);
}
.modal-form textarea {
  resize:vertical;
  font-family:inherit;
}
.submit-btn {
  width:100%;
  padding:18px;
  border-radius:25px;
  font-size:16px;
  font-weight:bold;
  margin-top:10px;
  background: linear-gradient(45deg, #00ff99, #00cc77);
  border: none;
  color: #000;
  cursor: pointer;
}
.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(0,255,153,0.4);
}
.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.status-message {
  margin-top:20px;
  padding:15px;
  border-radius:12px;
  text-align:center;
  font-weight:500;
}
.status-message.success {
  background:rgba(0,255,153,0.1);
  border:1px solid #00ff99;
  color:#00ff99;
}
.status-message.error {
  background:rgba(255,64,95,0.1);
  border:1px solid #ff4060;
  color:#ff4060;
}
@keyframes fadeIn {
  from { opacity:0; }
  to { opacity:1; }
}
@keyframes popIn {
  0% { transform:scale(0.7) translateY(50px); opacity:0; }
  100% { transform:scale(1) translateY(0); opacity:1; }
}
@media (max-width: 1024px) {
  .hamburger { display: block; }
  .nav-links { 
    display: none;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: #000;
    flex-direction: column;
    padding: 1rem 0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  }
  .nav-links.mobile-open { 
    display: flex;
    animation: slideDown 0.3s ease;
  }
  .nav-link { padding: 1rem 2rem; border-bottom: 1px solid #333; width: 100%; text-align: center; }
  .nav-link:last-child { border-bottom: none; }
  .btn { padding: 12px 24px; font-size: 14px; }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .nav { padding:15px 20px; }
  .modal-content { margin:20px; padding:30px 20px; }
}

@media (max-width: 480px) {
  .logo-circle { width: 36px; height: 36px; font-size: 16px; }
  .hamburger { font-size: 1.5rem; padding: 0.75rem; }
  .btn { padding: 10px 20px; font-size: 13px; }
}
</style>
