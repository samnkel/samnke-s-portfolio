<template>
  <div class="app">
    <nav class="nav">
      <div class="logo">
        <div class="logo-circle" :class="{ flipping: isFlipping }">
          SM
        </div>
        <h3>Samnkelsiwe Mpiyonke</h3>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Me</router-link>
        <router-link to="/services" class="nav-link">Services</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        
      </div>
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

        <form class="modal-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="modal-fullName">Full Name *</label>
            <input 
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
export default {
  data() {
    return {
      isFlipping: false,
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
    async submitForm() {
      this.loading = true;
      this.status = null;

      try {
        const response = await fetch('http://localhost:3001/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form)
        });

        const data = await response.json();

        if (data.success) {
          this.form = { fullName: '', phone: '', email: '', message: '' };
          this.status = {
            type: 'success',
            message: '✅ Message sent to Gmail! Reply within 24h.'
          };
        } else {
          throw new Error(data.message || 'Server error');
        }
      } catch (error) {
        console.error('Submit error:', error);
        this.status = {
          type: 'error',
          message: '❌ Backend not running. Run: cd back-end && npm install && node server.js'
        };
      } finally {
        this.loading = false;
      }
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
  padding:20px 50px; 
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
  gap:30px; 
  position:relative;
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

/* Modal Styles */
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
  padding:40px;
  border-radius:25px;
  max-width:500px;
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
  font-size:28px;
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
}
.submit-btn:disabled {
  opacity:0.7;
  cursor:not-allowed;
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
@keyframes fadeIn {
  from { opacity:0; }
  to { opacity:1; }
}
@keyframes popIn {
  0% { transform:scale(0.7) translateY(50px); opacity:0; }
  100% { transform:scale(1) translateY(0); opacity:1; }
}
@media (max-width:768px) {
  .nav { padding:15px 20px; }
  .modal-content { margin:20px; padding:30px 20px; }
}
</style>
