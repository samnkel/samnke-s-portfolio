<template>
  <section class="projects-hero">
    <div class="projects-header">
      <h1 class="projects-title">Featured Projects</h1>
      <p class="projects-subtitle">My most recent and exciting work</p>
    </div>
    
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.title">
        <div class="project-image">
          <img :src="project.img" :alt="project.title">
          <div class="project-overlay">
            <h4>{{ project.category }}</h4>
            <p>{{ project.tech }}</p>
          </div>
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
          <div class="project-links">
            <a :href="project.github" target="_blank" class="project-btn primary">View Github</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Portfolio Website',
          desc: 'A modern personal portfolio showcasing software development skills and projects.',
          img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
          category: 'Web App',
          tech: 'Vue.js • Tailwind',
          github: 'https://github.com/samnkelisiwe'
        },
        {
          title: 'Modern Tech Solutions',
          desc: 'Complete HR management platform with employee onboarding, payroll processing, and performance tracking.',
          img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400',
          category: 'HR System',
          tech: 'Vue.js • MySQL • Node.js',
          github: 'https://github.com/magxalasinaye00-max/ModernTech-Solutions.git'
        },
        {
          title: 'Mechanic Connect',
          desc: 'Full-stack automotive service platform for mechanics and car owners with booking system.',
          img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&fit=crop',
          category: 'E-commerce',
          tech: 'Vue.js • MySQL • Node.js',
          github: 'https://github.com/tylormentor-dev/E-COM.git'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-hero { 
  padding:100px 50px; 
 background: radial-gradient(circle at 20% 20%, #0a1f2f, #02060a 70%);
  min-height:100vh;
}
.projects-header { 
  text-align:center; 
  margin-bottom:80px;
}
.projects-title { 
  font-size:50px; 
  margin-bottom:15px;
  background:linear-gradient(45deg, #fff 0%, #00ff99 50%, #fff 100%);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
.projects-subtitle { 
  color:#aaa; 
  font-size:18px; 
  max-width:600px;
  margin:0 auto;
}
.projects-grid { 
  display:grid; 
  grid-template-columns:repeat(auto-fit, minmax(350px, 1fr)); 
  gap:40px; 
  margin-bottom:80px;
}
.project-card { 
  background:#111; 
  border-radius:25px; 
  overflow:hidden;
  transition:0.4s;
  box-shadow:0 10px 30px rgba(0,0,0,0.3);
}
.project-card:hover { 
  transform:translateY(-20px); 
  box-shadow:0 30px 60px rgba(0,255,153,0.2);
}
.project-image { 
  position:relative; 
  height:250px; 
  overflow:hidden;
}
.project-image img { 
  width:100%; 
  height:100%; 
  object-fit:cover;
  transition:1.2s;
}
.project-card:hover .project-image img { transform:scale(1.1); }
.project-overlay { 
  position:absolute; 
  bottom:0; 
  left:0; 
  right:0; 
  background:linear-gradient(transparent, rgba(0,0,0,0.9));
  color:white;
  padding:30px 25px 25px;
}
.project-overlay h4 { 
  margin:0 0 5px 0; 
  font-size:14px; 
  opacity:0.8;
}
.project-overlay p { 
  margin:0; 
  font-size:12px; 
  opacity:0.7;
}
.project-info { 
  padding:30px;
}
.project-info h3 { 
  font-size:24px; 
  margin-bottom:12px;
}
.project-info p { 
  color:#aaa; 
  line-height:1.6; 
  margin-bottom:25px;
}
.project-links { 
  display:flex; 
  gap:15px;
}
.project-btn { 
  padding:10px 20px; 
  border:none; 
  border-radius:20px; 
  cursor:pointer; 
  font-size:14px;
  transition:0.3s;
  text-decoration:none;
  display:inline-block;
}
.project-btn.primary { 
  background:#00ff99; 
  color:#000; 
  font-weight:bold;
}
.project-btn.secondary { 
  background:transparent; 
  color:#00ff99; 
  border:1px solid #00ff99;
}
@media (max-width: 768px) {
  .projects-hero { padding:60px 20px; }
  .projects-grid { grid-template-columns:1fr; }
}
</style>

