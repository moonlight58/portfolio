<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="profile-container">
        <div class="profile-image-wrapper">
          <img
            src="../assets/moon-pfp.jpg"
            alt="Gaël Röthlin"
            class="profile-image"
          />
          <div class="profile-glow"></div>
        </div>
        <div class="profile-info">
          <h1 class="profile-name">Portfolio Artistique</h1>
          <p class="profile-subtitle">Dark Art & Doodles</p>
          <div class="profile-badges">
            <span class="badge art-badge">Dessin</span>
            <span class="badge style-badge">Dark Art</span>
            <span class="badge creative-badge">Doodling</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Navigation -->
    <div class="gallery-nav">
      <div class="nav-buttons">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="setActiveCategory(category.id)"
          :class="['nav-btn', { active: activeCategory === category.id }]"
        >
          <span class="nav-icon">{{ category.icon }}</span>
          <span>{{ category.name }}</span>
        </button>
      </div>
    </div>

    <!-- Gallery Description -->
    <div class="gallery-description">
      <div class="description-card">
        <h2>{{ getCurrentCategoryTitle() }}</h2>
        <p>{{ getCurrentCategoryDescription() }}</p>
      </div>
    </div>

    <!-- Image Gallery -->
    <div class="gallery-section">
      <div class="gallery-grid" v-if="filteredArtworks.length > 0">
        <div
          v-for="(artwork, index) in filteredArtworks"
          :key="index"
          class="artwork-card"
          @click="openModal(artwork, index)"
        >
          <div class="artwork-image-wrapper">
            <img
              :src="artwork.thumbnail || artwork.src"
              :alt="artwork.title"
              class="artwork-image"
              loading="lazy"
            />
            <div class="artwork-overlay">
              <div class="artwork-info">
                <h3 class="artwork-title">{{ artwork.title }}</h3>
                <p class="artwork-description">{{ artwork.description }}</p>
                <div class="artwork-meta">
                  <span class="artwork-date">{{ artwork.date }}</span>
                  <span class="artwork-category">{{ artwork.category }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <div class="empty-icon">🎨</div>
        <h3>Aucune œuvre dans cette catégorie</h3>
        <p>
          Cette section sera bientôt remplie avec mes créations artistiques.
        </p>
      </div>
    </div>

    <!-- Modal for full-size viewing -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">⛌</button>
        <div class="modal-navigation">
          <button
            @click="previousImage"
            :disabled="currentImageIndex === 0"
            class="nav-arrow nav-prev"
          >
            ←
          </button>
          <button
            @click="nextImage"
            :disabled="currentImageIndex === filteredArtworks.length - 1"
            class="nav-arrow nav-next"
          >
            →
          </button>
        </div>
        <div class="modal-image-container">
          <img
            :src="currentImage.src"
            :alt="currentImage.title"
            class="modal-image"
          />
        </div>
        <div class="modal-info">
          <h3>{{ currentImage.title }}</h3>
          <p>{{ currentImage.description }}</p>
          <div class="modal-meta">
            <span>{{ currentImage.date }}</span>
            <span>{{ currentImage.category }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Instagram Link Section -->
    <div class="instagram-section">
      <div class="instagram-card">
        <h2>Découvrir plus</h2>
        <p>
          Retrouvez toutes mes créations artistiques et mes dernières œuvres sur
          Instagram
        </p>
        <a
          href="https://www.instagram.com/osiris._25/"
          target="_blank"
          class="instagram-link"
          rel="noopener noreferrer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
          <span>Suivre @osiris._25</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DrawingView",
  data() {
    return {
      isVisible: false,
      activeCategory: "all",
      showModal: false,
      currentImage: null,
      currentImageIndex: 0,

      categories: [
        { id: "all", name: "Toutes", icon: "🎨" },
        { id: "dark-art", name: "Dark Art", icon: "🌙" },
        { id: "doodles", name: "Doodles", icon: "✨" },
        { id: "tattoos", name: "Tattoos", icon: "🖊️" },
        { id: "abstract", name: "Abstrait", icon: "🌀" },
      ],

      artworks: [
        {
          id: 1,
          title: "Double Skulls",
          description:
            "I was inspired by the music cover 'What the Fuck' from RHODAMINE.",
          date: "2024",
          category: "dark-art",
          src: require("@/assets/drawing/DarkArt1.jpg"),
          thumbnail: require("@/assets/drawing/DarkArt1.jpg"),
        },
        {
          id: 2,
          title: "PFP Social Media",
          description:
            "I really wanted to try to draw a skeleton because I'm really obsessed with skulls, bones...",
          date: "2024",
          category: "dark-art",
          src: require("@/assets/drawing/DarkArt2.jpg"),
          thumbnail: require("@/assets/drawing/DarkArt2.jpg"),
        },
        {
          id: 3,
          title: "Autel Skull",
          description:
            "It was a training to understand how perspective works and how to draw hand holding a big object, such as a skull",
          date: "2024",
          category: "dark-art",
          src: require("@/assets/drawing/DarkArt3.jpg"),
          thumbnail: require("@/assets/drawing/DarkArt3.jpg"),
        },
        {
          id: 4,
          title: "CyberSigilism",
          description:
            "It was my first tattoo design, I got it tattooed on my right forearm/hand, to celebrate my graduation. It represents the choices made in life, starting with only one branch and dividing in multiple paths, each path representing a choice and the one I didn't made.",
          date: "2024",
          category: "tattoos",
          src: require("@/assets/drawing/Tattoo3.png"),
          thumbnail: require("@/assets/drawing/Tattoo3.png"),
        },
        {
          id: 5,
          title: "Death Spider",
          description:
            "It was a request from a friend who wanted to challenge me to draw a spider in a dark art style. I really enjoyed drawing it, especially the details on the legs, the skull and the details of the web between the legs.",
          date: "2024",
          category: "tattoos",
          src: require("@/assets/drawing/Tattoo1.png"),
          thumbnail: require("@/assets/drawing/Tattoo1.png"),
        },
        {
          id: 6,
          title: "Fuming Skull",
          description:
            "I saw a similar design by one of my favorite artist named 'orchard.mag' and it made me wonder if I can do something similar with my own style.",
          date: "2024",
          category: "tattoos",
          src: require("@/assets/drawing/Tattoo2.png"),
          thumbnail: require("@/assets/drawing/Tattoo2.png"),
        },
        {
          id: 7,
          title: "Doodle 1",
          description:
            "A spontaneous doodle that came to life during a moment of inspiration.",
          date: "2024",
          category: "doodles",
          src: require("@/assets/drawing/Doodle1.jpg"),
          thumbnail: require("@/assets/drawing/Doodle1.jpg"),
        },
        {
          id: 8,
          title: "Doodle 2",
          description: "Another doodle, this time with a more abstract theme.",
          date: "2024",
          category: "doodles",
          src: require("@/assets/drawing/Doodle2.jpg"),
          thumbnail: require("@/assets/drawing/Doodle2.jpg"),
        },
      ],
    };
  },

  computed: {
    filteredArtworks() {
      if (this.activeCategory === "all") {
        return this.artworks;
      }
      return this.artworks.filter(
        (artwork) => artwork.category === this.activeCategory
      );
    },
  },

  mounted() {
    // Animation d'entrée progressive
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  },

  methods: {
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
    },

    getCurrentCategoryTitle() {
      const category = this.categories.find(
        (cat) => cat.id === this.activeCategory
      );
      return category ? category.name : "Toutes les œuvres";
    },

    getCurrentCategoryDescription() {
      const descriptions = {
        all: "Découvrez l'ensemble de mes créations artistiques, des œuvres sombres aux doodles spontanés.",
        "dark-art":
          "Explorations des thèmes sombres et mystérieux à travers l'art visuel.",
        doodles:
          "Créations spontanées et expressives nées de l'inspiration du moment.",
        portraits: "Études de visages et d'expressions humaines.",
        abstract: "Œuvres abstraites jouant avec les formes et les couleurs.",
      };
      return descriptions[this.activeCategory] || descriptions["all"];
    },

    openModal(artwork, index) {
      this.currentImage = artwork;
      this.currentImageIndex = index;
      this.showModal = true;
      document.body.style.overflow = "hidden";
    },

    closeModal() {
      this.showModal = false;
      document.body.style.overflow = "auto";
    },

    nextImage() {
      if (this.currentImageIndex < this.filteredArtworks.length - 1) {
        this.currentImageIndex++;
        this.currentImage = this.filteredArtworks[this.currentImageIndex];
      }
    },

    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
        this.currentImage = this.filteredArtworks[this.currentImageIndex];
      }
    },
  },
};
</script>

<style scoped>
.drawing-page {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.05) 0%,
    rgba(118, 75, 162, 0.08) 25%,
    rgba(240, 147, 251, 0.05) 50%,
    rgba(75, 172, 254, 0.08) 75%,
    rgba(0, 242, 254, 0.05) 100%
  );
  color: var(--text-primary);
  padding: 2rem;

  /* Variables CSS du guide de style */
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-border: rgba(255, 255, 255, 0.12);
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-muted: rgba(255, 255, 255, 0.6);
  --blur-strength: 20px;
}

/* Hero Section */
.hero-section {
  transform: translateY(40px) scale(0.95);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  margin-bottom: 4rem;
}

.hero-section.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hero-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 32px;
  padding: 4rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  transition: all 0.6s ease;
}

.hero-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-gradient);
  opacity: 0.8;
}

.hero-card:hover {
  transform: translateY(-8px);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 3rem;
}

/* Avatar avec effets */
.avatar-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.2);
  z-index: 3;
  position: relative;
  transition: all 0.8s ease;
}

.avatar-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: var(--primary-gradient);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(20px);
  z-index: 1;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

.avatar-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid transparent;
  background: var(--accent-gradient);
  border-radius: 50%;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.6s ease;
}

.avatar-container:hover .avatar-ring {
  opacity: 0.6;
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Texte du profil */
.profile-info {
  flex: 1;
}

.hero-title {
  margin: 0 0 1rem 0;
}

.name-text {
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #ffffff;
  /* Fallback */
  display: block;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 300;
}

/* Badges */
.status-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  font-weight: 600;
  transition: all 0.4s ease;
  position: relative;
}

.badge-art {
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #c7d2fe;
}

.badge-dark {
  background: rgba(118, 75, 162, 0.15);
  border: 1px solid rgba(118, 75, 162, 0.3);
  color: #ddd6fe;
}

.badge-creative {
  background: rgba(240, 147, 251, 0.15);
  border: 1px solid rgba(240, 147, 251, 0.3);
  color: #fce7f3;
}

.badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.badge-icon {
  font-size: 1.2rem;
}

/* Sections de contenu */
.content-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  margin-bottom: 3rem;
}

.content-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.content-section:nth-child(2) {
  transition-delay: 0.1s;
}

.content-section:nth-child(3) {
  transition-delay: 0.2s;
}

.content-section:nth-child(4) {
  transition-delay: 0.3s;
}

.content-section:nth-child(5) {
  transition-delay: 0.4s;
}

/* Navigation des catégories */
.nav-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
}

.nav-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent-gradient);
  opacity: 0.5;
}

.nav-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.nav-btn.active {
  background: rgba(102, 126, 234, 0.2);
  border-color: rgba(102, 126, 234, 0.4);
  color: var(--text-primary);
}

.nav-btn.active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-gradient);
}

.nav-icon {
  font-size: 1.2rem;
}

/* Description de catégorie */
.description-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  position: relative;
}

.description-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--secondary-gradient);
  opacity: 0.6;
}

.category-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.highlight {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #ffffff;
  /* Fallback */
}

.category-text {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Galerie */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.artwork-card {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
}

.artwork-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

.artwork-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.artwork-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.artwork-card:hover .artwork-image {
  transform: scale(1.1);
}

.artwork-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.artwork-card:hover .artwork-overlay {
  opacity: 1;
}

.artwork-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.artwork-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.4;
}

.artwork-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

/* État vide */
.empty-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 4rem;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
  opacity: 0.7;
}

.empty-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.empty-text {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.5;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.modal-content {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  transform: scale(0.9);
  animation: scaleIn 0.3s ease forwards;
}

@keyframes scaleIn {
  to {
    transform: scale(1);
  }
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: var(--text-primary);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.close-icon {
  font-size: 1.5rem;
  line-height: 1;
}

.modal-navigation {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  z-index: 5;
  pointer-events: none;
}

.nav-arrow {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: all;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.nav-prev,
.nav-next,
.modal-close {
  font-family: "N27", sans-serif;
}

.nav-arrow:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.modal-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-info {
  padding: 2.5rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-info h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.modal-info p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.modal-meta {
  display: flex;
  gap: 2rem;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.modal-meta span {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

/* Section Instagram */
.instagram-section {
  margin-top: 6rem;
}

.instagram-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 32px;
  padding: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(240, 147, 251, 0.15);
  transition: all 0.6s ease;
}

.instagram-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--secondary-gradient);
  opacity: 0.8;
}

.instagram-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 80px rgba(240, 147, 251, 0.25);
}

.instagram-card h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: var(--secondary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: #ffffff;
  /* Fallback */
}

.instagram-card p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 3rem;
  background: rgba(240, 147, 251, 0.1);
  border: 2px solid rgba(240, 147, 251, 0.2);
  border-radius: 20px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.instagram-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(240, 147, 251, 0.1) 50%,
    transparent 100%
  );
  transition: left 0.6s ease;
}

.instagram-link:hover::before {
  left: 100%;
}

.instagram-link:hover {
  background: rgba(240, 147, 251, 0.2);
  border-color: rgba(240, 147, 251, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(240, 147, 251, 0.3);
}

.instagram-link svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.4s ease;
}

.instagram-link:hover svg {
  transform: scale(1.1) rotate(5deg);
}

/* État vide amélioré */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-state .empty-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
  opacity: 0.7;
  animation: float 3s ease-in-out infinite;
}

.empty-state h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.empty-state p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.5;
  max-width: 400px;
  margin: 0 auto;
}

/* Améliorations des éléments existants */
.container {
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 8rem;
  padding: 0 2rem;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.profile-image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.2);
  z-index: 3;
  position: relative;
  transition: all 0.8s ease;
}

.profile-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: var(--primary-gradient);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(20px);
  z-index: 1;
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: #ffffff;
  /* Fallback */
  margin: 0 0 1rem 0;
  line-height: 1.1;
}

.profile-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 300;
}

.profile-badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 16px;
  backdrop-filter: blur(15px);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.4s ease;
  position: relative;
}

.art-badge {
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #c7d2fe;
}

.style-badge {
  background: rgba(118, 75, 162, 0.15);
  border: 1px solid rgba(118, 75, 162, 0.3);
  color: #ddd6fe;
}

.creative-badge {
  background: rgba(240, 147, 251, 0.15);
  border: 1px solid rgba(240, 147, 251, 0.3);
  color: #fce7f3;
}

.badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

/* Animations d'entrée */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-section,
.gallery-nav,
.gallery-description,
.gallery-section,
.instagram-section {
  animation: fadeInUp 0.8s ease-out;
}

.gallery-nav {
  animation-delay: 0.1s;
}

.gallery-description {
  animation-delay: 0.2s;
}

.gallery-section {
  animation-delay: 0.3s;
}

.instagram-section {
  animation-delay: 0.4s;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .profile-image {
    width: 120px;
    height: 120px;
  }

  .profile-name {
    font-size: 2.5rem;
  }

  .profile-subtitle {
    font-size: 1.2rem;
  }

  .nav-buttons {
    justify-content: center;
    gap: 0.5rem;
  }

  .nav-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .modal-content {
    max-width: 95vw;
    max-height: 95vh;
  }

  .modal-navigation {
    padding: 1rem;
  }

  .nav-arrow {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .instagram-card {
    padding: 2.5rem 1.5rem;
  }

  .instagram-card h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .profile-name {
    font-size: 2rem;
  }

  .profile-badges {
    flex-direction: column;
    align-items: center;
  }

  .badge {
    width: fit-content;
  }

  .nav-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-btn {
    justify-content: center;
  }

  .instagram-link {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }

  .modal-info {
    padding: 2rem 1.5rem;
  }

  .modal-meta {
    flex-direction: column;
    gap: 1rem;
  }
}

/* Améliorations d'accessibilité */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .profile-glow {
    animation: none;
  }

  .empty-state .empty-icon {
    animation: none;
  }
}

/* Focus states pour l'accessibilité */
.nav-btn:focus-visible,
.artwork-card:focus-visible,
.instagram-link:focus-visible,
.modal-close:focus-visible,
.nav-arrow:focus-visible {
  outline: 2px solid rgba(102, 126, 234, 0.8);
  outline-offset: 2px;
}

/* Support pour les anciens navigateurs */
@supports not (backdrop-filter: blur(20px)) {
  .hero-section,
  .nav-card,
  .description-card,
  .artwork-card,
  .instagram-card,
  .modal-content {
    background: rgba(255, 255, 255, 0.15);
  }
}

/* Fallback pour background-clip: text */
@supports not (-webkit-background-clip: text) {
  .profile-name,
  .instagram-card h2 {
    color: #ffffff;
  }
}
</style>
