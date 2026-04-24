<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a project? Let's talk.</p>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label>Full Name</label>
            <input v-model="formData.fullName" type="text" required>
          </div>

          <div class="form-group">
            <label>Phone</label>
            <input v-model="formData.phone" type="tel" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Email</label>
            <input v-model="formData.email" type="email" required>
          </div>

          <div class="form-group">
            <label>Message</label>
            <textarea v-model="formData.message" required></textarea>
          </div>
        </div>

        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>

        <div v-if="status" class="status-message" :class="status.type">
          {{ status.message }}
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  fullName: '',
  phone: '',
  email: '',
  message: ''
})

const loading = ref(false)
const status = ref(null)

const SERVICE_ID = 'service_9pbccv5'
const TEMPLATE_ID = 'template_kpdbvqu'

const openMailtoFallback = () => {
  const subject = encodeURIComponent(`Portfolio Contact: ${formData.value.fullName}`)
  const body = encodeURIComponent(
    `Name: ${formData.value.fullName}\n` +
    `Phone: ${formData.value.phone}\n` +
    `Email: ${formData.value.email}\n\n` +
    `Message:\n${formData.value.message}`
  )
  window.open(`mailto:samnkelisiwe@gmail.com?subject=${subject}&body=${body}`, '_blank')
}

const handleSubmit = async () => {
  if (!formData.value.fullName || !formData.value.email || !formData.value.message) {
    status.value = { type: 'error', message: 'Please fill all required fields.' }
    return
  }

  loading.value = true
  status.value = null

  try {
    const templateParams = {
      from_name: formData.value.fullName,
      fullName: formData.value.fullName,
      name: formData.value.fullName,
      phone: formData.value.phone,
      contact_number: formData.value.phone,
      from_email: formData.value.email,
      email: formData.value.email,
      reply_to: formData.value.email,
      message: formData.value.message
    }

    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    console.log('EmailJS success:', result)

    status.value = {
      type: 'success',
      message: '🎉 Message sent successfully! I will get back to you soon.'
    }
    formData.value = { fullName: '', phone: '', email: '', message: '' }
  } catch (error) {
    console.error('EmailJS error:', error)

    // Fallback to mailto
    openMailtoFallback()

    status.value = {
      type: 'success',
      message: '📧 Email client opened with your message! Please click SEND in your email app.'
    }
    formData.value = { fullName: '', phone: '', email: '', message: '' }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact {
  padding: clamp(4rem, 10vh, 6rem) clamp(2rem, 6vw, 3rem);
  min-height:100vh;
  background: radial-gradient(circle at 20% 20%, #0a1f2f, #02060a 70%);
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
@media (max-width: 1024px) {
  .form-row { gap: 1.25rem; }
}

@media (max-width: 768px) {
  .contact { padding:60px 20px; }
  .form-row { grid-template-columns:1fr; }
  .contact-form { padding:30px 20px; }
}

@media (max-width: 480px) {
  .contact-header h1 { font-size: clamp(2.5rem, 10vw, 3.5rem); }
  .submit-btn { padding: 16px; min-height: 52px; font-size: 16px; }
  .form-group input, .form-group textarea { padding: 16px; min-height: 52px; }
}
</style>

