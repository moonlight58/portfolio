<template>
  <nav class="neuro-navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-brand">
        <div class="brand-icon">
          <img src="../assets/Euphron.svg" alt="Logo" class="logo" />
        </div>
        <span class="brand-name">Gaël Röthlin</span>
      </router-link>

      <div class="nav-links">
        <router-link to="/competences/readyornot" class="nav-link">
          Ready Or Not
        </router-link>
        <router-link to="/competences/neumorphism" class="nav-link">
          Neumorphism
        </router-link>
        <router-link to="/competences/minimalist" class="nav-link">
          Minimalist
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NeumorphismNavBar'
}
</script>

<style scoped>
.neuro-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #1a1a1a;
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  box-shadow: 
    4px 4px 8px #0f0f0f,
    -4px -4px 8px #252525;
}

.nav-brand:hover {
  box-shadow: 
    inset 4px 4px 8px #0f0f0f,
    inset -4px -4px 8px #252525;
  transform: translateY(2px);
}

.brand-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #1a1a1a;
  box-shadow: 
    inset 2px 2px 4px #0f0f0f,
    inset -2px -2px 4px #252525;
}

.logo {
  width: 24px;
  height: 24px;
}

.brand-name {
  font-weight: 700;
  font-size: 1.2rem;
  color: #e0e0e0;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #a0a0a0;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: #1a1a1a;
  box-shadow: 
    4px 4px 8px #0f0f0f,
    -4px -4px 8px #252525;
}

.nav-link:hover {
  color: #ffffff;
  box-shadow: 
    inset 4px 4px 8px #0f0f0f,
    inset -4px -4px 8px #252525;
  transform: translateY(2px);
}

.nav-link.router-link-active {
  color: #6366f1;
  box-shadow: 
    inset 4px 4px 8px #0f0f0f,
    inset -4px -4px 8px #252525;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .brand-name {
    font-size: 1rem;
  }

  .nav-links {
    gap: 0.5rem;
  }

  .nav-link {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
}
</style>]]>
