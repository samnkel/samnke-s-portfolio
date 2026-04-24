<template>
  <div v-if="visible" class="loader-overlay">
    <div class="loader-content">
      <div class="loader-logo">SM</div>
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
      <p class="loader-text">Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, 2500)
})
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 0.5s ease 2s forwards;
}

.loader-content {
  text-align: center;
}

.loader-logo {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #00ff99, #00cc77);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bold;
  font-size: 28px;
  margin: 0 auto 30px;
  animation: pulse 1s ease-in-out infinite;
}

.loader-bar {
  width: 200px;
  height: 4px;
  background: #222;
  border-radius: 2px;
  margin: 0 auto 20px;
  overflow: hidden;
}

.loader-progress {
  height: 100%;
  background: linear-gradient(90deg, #00ff99, #00cc77);
  border-radius: 2px;
  animation: progress 2s ease-in-out forwards;
}

.loader-text {
  color: #aaa;
  font-size: 14px;
  letter-spacing: 2px;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes progress {
  0% { width: 0%; }
  100% { width: 100%; }
}

@keyframes fadeOut {
  from { opacity: 1; visibility: visible; }
  to { opacity: 0; visibility: hidden; }
}
</style>

