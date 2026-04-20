<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a project? Let's talk. Fill out the form below and I'll get back to you.</p>
      </div>

      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-group">
            <label for="fullName">Full Name *</label>
            <input 
              id="fullName" 
              v-model="form.fullName" 
              type="text" 
              required
              placeholder="Enter your full name"
            >
          </div>
          <div class="form-group">
            <label for="phone">Contact Number *</label>
            <input 
              id="phone" 
              v-model="form.phone" 
              type="tel" 
              required
              placeholder="e.g. +27 123 456 789"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email Address *</label>
          <input 
            id="email" 
            v-model="form.email" 
            type="email" 
            required
            placeholder="your.email@example.com"
          >
        </div>

        <div class="form-group">
          <label for="message">Message *</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            required
            rows="6"
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
  </section>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
    async submitForm() {
      this.loading = true;
      this.status = null;

      try {
fetch('http://localhost:3001/api/contact', {
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
            message: '✅ Message sent to my email! I\'ll reply within 24 hours.'
          };
        } else {
          throw new Error(data.message || 'Server error');
        }
      } catch (error) {
        console.error('Submit error:', error);
        this.status = {
          type: 'error',
          message: `❌ Failed to send: ${error.message}. Make sure backend server is running.`
        };
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped>
/* All original styles unchanged */
.contact {
  padding:100px 50px;
  min-height:100vh;
  background: radial-gradient(ellipse at top, #111 0%, #000 80%);
}
.contact-container {
  max-width:800px;
  margin:0 auto;
}
.contact-header {
  text-align:center;
  margin-bottom:60px;
}
.contact-header h1 {
  font-size:48px;
  margin-bottom:15px;
  background:linear-gradient(45deg, #fff, #00ff99);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.contact-header p {
  color:#aaa;
  font-size:18px;
  max-width:600px;
  margin:0 auto;
}
.contact-form {
  background:#111;
  padding:50px;
  border-radius:25px;
  box-shadow:0 20px 60px rgba(0,0,0,0.5);
}
.form-row {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:25px;
  margin-bottom:25px;
}
.form-group {
  display:flex;
  flex-direction:column;
}
.form-group label {
  color:#ccc;
  font-weight:500;
  margin-bottom:8px;
  font-size:14px;
}
.form-group input,
.form-group textarea {
  background:#222;
  border:1px solid #333;
  border-radius:12px;
  padding:15px;
  color:#fff;
  font-size:16px;
  transition:0.3s;
}
.form-group input:focus,
.form-group textarea:focus {
  outline:none;
  border-color:#00ff99;
  box-shadow:0 0 0 3px rgba(0,255,153,0.1);
}
.form-group textarea {
  resize:vertical;
  font-family:inherit;
}
.submit-btn {
  background:linear-gradient(45deg, #00ff99, #00cc77);
  border:none;
  padding:18px 40px;
  border-radius:25px;
  color:#000;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
  transition:0.3s;
  width:100%;
  margin-top:20px;
}
.submit-btn:hover:not(:disabled) {
  transform:translateY(-2px);
  box-shadow:0 15px 35px rgba(0,255,153,0.4);
}
.submit-btn:disabled {
  opacity:0.7;
  cursor:not-allowed;
}
.status-message {
  margin-top:30px;
  padding:20px;
  border-radius:15px;
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
@media (max-width:768px) {
  .contact { padding:60px 20px; }
  .form-row { grid-template-columns:1fr; }
  .contact-form { padding:30px 20px; }
}
</style>

