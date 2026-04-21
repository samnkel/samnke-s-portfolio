<template>
  <section class="services-hero">
    <div class="services-content">
      <h1 class="services-title">Our Services</h1>
      <p class="services-subtitle">What I specialize in delivering</p>
    </div>
    
    <div class="services-grid">
      <div class="service-card" v-for="service in services" :key="service.title" @click="openModal(service)">
        <div class="service-icon">{{ service.icon }}</div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.desc }}</p>
        <button class="service-btn">Read More</button>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedService" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-icon">{{ selectedService.icon }}</div>
        <h2>{{ selectedService.title }}</h2>
        <p class="modal-desc">{{ selectedService.detailed }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { 
          title: 'UI/UX Design', 
          desc: 'Using UI and UX methodologies to enhance the users overall quality of life with modern, intuitive interfaces.',
          detailed: 'I create beautiful, intuitive user interfaces using modern design principles and tools like Figma. My designs focus on user experience, accessibility, and pixel-perfect execution across all devices.',
          icon: '🎨'
        },
        { 
          title: 'Backend Development and APIs', 
          desc: 'Designing and connecting data systems. Setting up databases (SQL / NoSQL), CRUD applications, connecting frontend to backend.',
          detailed: 'Building robust backend systems with Node.js, Express, MongoDB, PostgreSQL. RESTful APIs, authentication, real-time features with Socket.io, serverless functions, and scalable architecture.',
          icon: '☁️'
        },
        { 
          title: 'Web Development', 
          desc: 'Design modern technologies and frameworks to create responsive web applications that work perfectly across all devices.',
          detailed: 'Full-stack web applications using Vue.js, Node.js. Responsive design, PWAs, SEO optimization, performance optimization, and deployment to Vercel/Netlify.',
          icon: '💻'
        }
      ],
      selectedService: null
    }
  },
  methods: {
    openModal(service) {
      this.selectedService = service
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedService = null
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped>
.services-hero { 
  padding:100px 50px; 
  text-align:center; 
  background: radial-gradient(circle at 20% 20%, #0a1f2f, #02060a 70%);
  min-height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.services-content { margin-bottom:60px; }
.services-title { 
  font-size:50px; 
  margin-bottom:10px; 
  background: linear-gradient(45deg, #fff, #00ff99); 
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.services-subtitle { 
  color:#aaa; 
  font-size:18px; 
  max-width:600px;
  margin:0 auto;
}
.services-grid { 
  display:flex; 
  justify-content:center; 
  gap:30px; 
  flex-wrap:wrap; 
  margin-bottom:80px;
}
.service-card { 
  background:#111; 
  padding:40px 30px; 
  width:320px; 
  border-radius:25px; 
  text-align:left; 
  transition:0.4s;
  position:relative;
  overflow:hidden;
  cursor:pointer;
}
.service-card::before {
  content:'';
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:4px;
  background:linear-gradient(90deg, #00ff99, transparent);
  transform:translateX(-100%);
  transition:0.4s;
}
.service-card:hover::before { transform:translateX(100%); }
.service-icon { 
  width:70px; 
  height:70px; 
  background:#000; 
  border-radius:20px; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  font-size:24px;
  margin-bottom:25px;
}
.service-card h3 { 
  font-size:24px; 
  margin-bottom:15px;
}
.service-card p { 
  color:#aaa; 
  line-height:1.6; 
  margin-bottom:25px;
}
.service-btn { 
  background:#00ff99; 
  border:none; 
  padding:12px 25px; 
  border-radius:25px; 
  cursor:pointer; 
  font-weight:bold;
  transition:0.3s;
}
.service-card:hover { 
  transform:translateY(-15px); 
  box-shadow:0 25px 50px rgba(0,255,153,0.15); 
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
  z-index:1000;
  backdrop-filter:blur(10px);
}
.modal-content {
  background:#111;
  padding:60px 50px;
  border-radius:25px;
  max-width:600px;
  max-height:80vh;
  overflow-y:auto;
  position:relative;
  border:1px solid rgba(0,255,153,0.3);
}
.modal-close {
  position:absolute;
  top:20px;
  right:20px;
  background:none;
  border:none;
  font-size:30px;
  color:#aaa;
  cursor:pointer;
  width:40px;
  height:40px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  transition:0.3s;
}
.modal-close:hover {
  background:rgba(255,255,255,0.1);
  color:#fff;
}
.modal-icon {
  width:80px;
  height:80px;
  background:#000;
  border-radius:25px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:32px;
  margin:0 auto 25px;
}
.modal-content h2 {
  font-size:32px;
  margin-bottom:25px;
  text-align:center;
}
.modal-desc {
  color:#ccc;
  line-height:1.8;
  font-size:16px;
  text-align:center;
  max-width:500px;
  margin:0 auto;
}

@media (max-width: 768px) {
  .services-hero { padding:60px 20px; }
  .services-grid { flex-direction:column; align-items:center; }
  .modal-content { padding:40px 25px; margin:20px; }
}
</style>
