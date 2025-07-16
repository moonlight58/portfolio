<template>
  <nav class="navbar">
    <div class="nav-content">
      <router-link to="/" class="nav-logo">GR</router-link>
      
      <div class="nav-links">
        <router-link 
          v-for="(link, index) in links" 
          :key="index" 
          :to="link.path"
          class="nav-link"
        >
          <span class="nav-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="nav-text">{{ link.name }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MinimalistNavBar',
  data() {
    return {
      links: [
        { name: 'PROJETS', path: '/projects' },
        { name: 'DESSINS', path: '/drawings' },
        { name: 'À PROPOS', path: '/about-me' }
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid #000000;
  z-index: 1000;
  padding: 1.5rem 0;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-family: 'Crimson Text', serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #000000;
  border: 2px solid #000000;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
}

.nav-logo:hover {
  background-color: #000000;
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  padding: 0.5rem;
  position: relative;
}

.nav-number {
  font-size: 0.8rem;
  color: #666666;
  font-family: 'Crimson Text', serif;
}

.nav-text {
  font-family: 'Crimson Text', serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #000000;
  transition: width 0.2s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.theme-toggle {
  background: none;
  border: 2px solid #000000;
  width: 40px;
  height: 24px;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  padding: 2px;
  transition: all 0.2s ease;
}

.theme-dot {
  display: block;
  width: 16px;
  height: 16px;
  background-color: #000000;
  border-radius: 50%;
  transition: transform 0.2s ease;
}

.theme-toggle:hover {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .nav-link {
    flex-direction: column;
    align-items: center;
  }
}
</style>
