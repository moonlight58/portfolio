<template>
  <div class="container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="profile-container">
        <div class="profile-image-wrapper">
          <img src="../assets/moon-pfp.jpg" alt="Gaël Röthlin" class="profile-image" />
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
        <button v-for="category in categories" :key="category.id" @click="setActiveCategory(category.id)"
          :class="['nav-btn', { active: activeCategory === category.id }]">
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
        <div v-for="(artwork, index) in filteredArtworks" :key="index" class="artwork-card"
          @click="openModal(artwork, index)">
          <div class="artwork-image-wrapper">
            <img :src="artwork.thumbnail || artwork.src" :alt="artwork.title" class="artwork-image" loading="lazy" />
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
        <p>Cette section sera bientôt remplie avec mes créations artistiques.</p>
      </div>
    </div>

    <!-- Modal for full-size viewing -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-navigation">
          <button @click="previousImage" :disabled="currentImageIndex === 0" class="nav-arrow nav-prev">
            ‹
          </button>
          <button @click="nextImage" :disabled="currentImageIndex === filteredArtworks.length - 1"
            class="nav-arrow nav-next">
            ›
          </button>
        </div>
        <div class="modal-image-container">
          <img :src="currentImage.src" :alt="currentImage.title" class="modal-image" />
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
        <p>Retrouvez toutes mes créations artistiques et mes dernières œuvres sur Instagram</p>
        <a href="https://www.instagram.com/osiris._25/" target="_blank" class="instagram-link"
          rel="noopener noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>Suivre @osiris._25</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtGallery",
  data() {
    return {
      activeCategory: 'all',
      showModal: false,
      currentImageIndex: 0,
      categories: [
        { id: 'all', name: 'Tout', icon: '🎨' },
        { id: 'dark-art', name: 'Dark Art', icon: '🖤' },
        { id: 'doodles', name: 'Doodles', icon: '✏️' },
        { id: 'tattoos', name: 'Tattoos', icon: '🖊️' },
      ],
      artworks: [
        {
          title: "Double Skulls",
          description: "I was inspired by the music cover 'What the Fuck' from RHODAMINE.",
          date: "2024",
          category: "Dark Art",
          categoryId: "dark-art",
          src: require('@/assets/drawing/DarkArt1.jpg'),
          thumbnail: require('@/assets/drawing/DarkArt1.jpg')
        },
        {
          title: "PFP Social Media",
          description: "I really wanted to try to draw a skeleton because I'm really obsessed with skulls, bones...",
          date: "2024",
          category: "Dark Art",
          categoryId: "dark-art",
          src: require('@/assets/drawing/DarkArt2.jpg'),
          thumbnail: require('@/assets/drawing/DarkArt2.jpg')
        },
        {
          title: "Autel Skull",
          description: "It was a training to understand how perspective works and how to draw hand holding a big object, such as a skull",
          date: "2024",
          category: "Dark Art",
          categoryId: "dark-art",
          src: require('@/assets/drawing/DarkArt3.jpg'),
          thumbnail: require('@/assets/drawing/DarkArt3.jpg')
        },
        {
          title: "CyberSigilism",
          description: "It was my first tattoo design, I got it tattooed on my right forearm/hand, to celebrate my graduation. It represents the choices made in life, starting with only one branch and dividing in multiple paths, each path representing a choice and the one I didn't made.",
          date: "2024",
          category: "Tattoos",
          categoryId: "tattoos",
          src: require('@/assets/drawing/Tattoo3.png'),
          thumbnail: require('@/assets/drawing/Tattoo3.png')
        },
        {
          title: "Death Spider",
          description: "It was a request from a friend who wanted to challenge me to draw a spider in a dark art style. I really enjoyed drawing it, especially the details on the legs, the skull and the details of the web between the legs.",
          date: "2024",
          category: "Tattoos",
          categoryId: "tattoos",
          src: require('@/assets/drawing/Tattoo1.png'),
          thumbnail: require('@/assets/drawing/Tattoo1.png')
        },
        {
          title: "Fuming Skull",
          description: "I saw a similar design by one of my favorite artist named 'orchard.mag' and it made me wonder if I can do something similar with my own style.",
          date: "2024",
          category: "Tattoos",
          categoryId: "tattoos",
          src: require('@/assets/drawing/Tattoo2.png'),
          thumbnail: require('@/assets/drawing/Tattoo2.png')
        },
        {
          title: "Doodle 1",
          description: "A spontaneous doodle that came to life during a moment of inspiration.",
          date: "2024",
          category: "Doodles",
          categoryId: "doodles",
          src: require('@/assets/drawing/Doodle1.jpg'),
          thumbnail: require('@/assets/drawing/Doodle1.jpg')
        },
        {
          title: "Doodle 2",
          description: "Another doodle, this time with a more abstract theme.",
          date: "2024",
          category: "Doodles",
          categoryId: "doodles",
          src: require('@/assets/drawing/Doodle2.jpg'),
          thumbnail: require('@/assets/drawing/Doodle2.jpg')
        },

      ]
    };
  },
  computed: {
    filteredArtworks() {
      if (this.activeCategory === 'all') {
        return this.artworks;
      }
      return this.artworks.filter(artwork => artwork.categoryId === this.activeCategory);
    },
    currentImage() {
      return this.filteredArtworks[this.currentImageIndex] || {};
    }
  },
  methods: {
    setActiveCategory(categoryId) {
      this.activeCategory = categoryId;
    },
    getCurrentCategoryTitle() {
      const category = this.categories.find(cat => cat.id === this.activeCategory);
      return category ? `${category.icon} ${category.name}` : '🎨 Portfolio Artistique';
    },
    getCurrentCategoryDescription() {
      const descriptions = {
        'all': 'Découvrez l\'ensemble de mes créations artistiques, du dark art aux doodles spontanés.',
        'dark-art': 'Explorations profondes de thèmes sombres et mystiques à travers mon art.',
        'doodles': 'Créations spontanées et libres, nées de moments d\'inspiration.',
        'sketches': 'Études et esquisses préparatoires, captures de moments créatifs.',
        'digital': 'Créations numériques et expérimentations avec les outils digitaux.'
      };
      return descriptions[this.activeCategory] || descriptions['all'];
    },
    openModal(artwork, index) {
      this.currentImageIndex = index;
      this.showModal = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.showModal = false;
      document.body.style.overflow = 'auto';
    },
    nextImage() {
      if (this.currentImageIndex < this.filteredArtworks.length - 1) {
        this.currentImageIndex++;
      }
    },
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    }
  },
  mounted() {
    // Gestion des touches clavier pour la navigation
    document.addEventListener('keydown', (e) => {
      if (!this.showModal) return;

      if (e.key === 'Escape') {
        this.closeModal();
      } else if (e.key === 'ArrowRight') {
        this.nextImage();
      } else if (e.key === 'ArrowLeft') {
        this.previousImage();
      }
    });
  }
};
</script>

<style scoped>
.container {
  font-family: "N27", sans-serif;
  margin-top: 8rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  color: #f8f9fa;
  background: linear-gradient(135deg, rgba(240, 248, 255, 0.02), rgba(230, 230, 250, 0.02));
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease-out;
}

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

.profile-container {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(176, 196, 222, 0.15);
  border-radius: 24px;
  padding: 3rem 2rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(147, 112, 219, 0.1);
}

.profile-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 112, 219, 0.6),
      rgba(176, 196, 222, 0.6),
      transparent);
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(147, 112, 219, 0.4);
  box-shadow: 0 0 40px rgba(147, 112, 219, 0.3);
  transition: all 0.4s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 0 60px rgba(147, 112, 219, 0.5);
}

.profile-glow {
  position: absolute;
  top: -15px;
  left: -15px;
  right: -15px;
  bottom: -15px;
  background: radial-gradient(circle, rgba(147, 112, 219, 0.3), rgba(176, 196, 222, 0.2), transparent);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.profile-image-wrapper:hover .profile-glow {
  opacity: 1;
}

.profile-name {
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.95),
      rgba(147, 112, 219, 0.8),
      rgba(176, 196, 222, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(147, 112, 219, 0.3);
}

.profile-subtitle {
  font-size: 1.3rem;
  color: rgba(176, 196, 222, 0.8);
  font-style: italic;
  margin: 0 0 1.5rem 0;
  opacity: 0.9;
}

.profile-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(147, 112, 219, 0.2);
}

.art-badge {
  background: rgba(255, 182, 193, 0.15);
  color: #ffb6c1;
  border: 1px solid rgba(255, 182, 193, 0.3);
}

.style-badge {
  background: rgba(186, 85, 211, 0.15);
  color: #ba55d3;
  border: 1px solid rgba(186, 85, 211, 0.3);
}

.creative-badge {
  background: rgba(221, 160, 221, 0.15);
  color: #dda0dd;
  border: 1px solid rgba(221, 160, 221, 0.3);
}

/* Gallery Navigation */
.gallery-nav {
  margin-bottom: 3rem;
  animation: slideInLeft 0.8s ease-out 0.2s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.nav-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(176, 196, 222, 0.12);
  border-radius: 16px;
  color: rgba(176, 196, 222, 0.8);
  padding: 0.8rem 1.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 112, 219, 0.15),
      rgba(176, 196, 222, 0.15),
      transparent);
  transition: left 0.6s ease;
}

.nav-btn:hover::before,
.nav-btn.active::before {
  left: 100%;
}

.nav-btn:hover,
.nav-btn.active {
  background: rgba(147, 112, 219, 0.12);
  border-color: rgba(147, 112, 219, 0.3);
  color: rgba(147, 112, 219, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(147, 112, 219, 0.2);
}

.nav-icon {
  font-size: 1.2rem;
}

/* Gallery Description */
.gallery-description {
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.description-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(176, 196, 222, 0.12);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  text-align: center;
  box-shadow: 0 8px 32px rgba(147, 112, 219, 0.08);
}

.description-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 112, 219, 0.4),
      rgba(176, 196, 222, 0.4),
      transparent);
}

.description-card h2 {
  background: linear-gradient(135deg,
      rgba(147, 112, 219, 0.9),
      rgba(176, 196, 222, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.description-card p {
  color: rgba(176, 196, 222, 0.8);
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

/* Gallery Grid */
.gallery-section {
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.artwork-card {
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(176, 196, 222, 0.12);
  transition: all 0.4s ease;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.artwork-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(147, 112, 219, 0.25);
  border-color: rgba(147, 112, 219, 0.3);
}

.artwork-image-wrapper {
  position: relative;
  aspect-ratio: 1;
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
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  padding: 2rem 1.5rem 1.5rem;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.artwork-card:hover .artwork-overlay {
  transform: translateY(0);
}

.artwork-title {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #fff, rgba(147, 112, 219, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.artwork-description {
  color: rgba(176, 196, 222, 0.8);
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0 0 1rem 0;
  opacity: 0.9;
}

.artwork-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: rgba(147, 112, 219, 0.7);
  opacity: 0.8;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: rgba(176, 196, 222, 0.7);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, rgba(147, 112, 219, 0.8), rgba(176, 196, 222, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.empty-state p {
  margin: 0;
  opacity: 0.7;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.modal-content {
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal-close {
  position: absolute;
  top: -3rem;
  right: 0;
  background: rgba(147, 112, 219, 0.15);
  border: 1px solid rgba(147, 112, 219, 0.3);
  color: rgba(147, 112, 219, 0.9);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.modal-close:hover {
  background: rgba(147, 112, 219, 0.8);
  color: #fff;
  transform: scale(1.1);
}

.modal-navigation {
  position: absolute;
  top: 50%;
  left: -4rem;
  right: -4rem;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  z-index: 1001;
  pointer-events: none;
}

.nav-arrow {
  background: rgba(147, 112, 219, 0.15);
  border: 1px solid rgba(147, 112, 219, 0.3);
  color: rgba(147, 112, 219, 0.9);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.nav-arrow:hover:not(:disabled) {
  background: rgba(147, 112, 219, 0.8);
  color: #fff;
  transform: scale(1.1);
}

.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-prev {
  left: 0;
}

.nav-next {
  right: 0;
}

.modal-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(147, 112, 219, 0.3);
  border: 1px solid rgba(147, 112, 219, 0.2);
}

.modal-info {
  text-align: center;
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(176, 196, 222, 0.12);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.modal-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  background: linear-gradient(135deg, rgba(147, 112, 219, 0.9), rgba(176, 196, 222, 0.9));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modal-info p {
  margin: 0 0 1rem 0;
  color: rgba(176, 196, 222, 0.8);
  line-height: 1.5;
  opacity: 0.9;
}

.modal-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 0.9rem;
  color: rgba(147, 112, 219, 0.7);
  opacity: 0.8;
}

/* Instagram Section */
.instagram-section {
  margin-top: 4rem;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.instagram-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(176, 196, 222, 0.12);
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(147, 112, 219, 0.1);
}

.instagram-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 112, 219, 0.6),
      rgba(176, 196, 222, 0.6),
      transparent);
}

.instagram-card h2 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg,
      rgba(255, 255, 255, 0.95),
      rgba(147, 112, 219, 0.8),
      rgba(176, 196, 222, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.instagram-card p {
  color: rgba(176, 196, 222, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  opacity: 0.9;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg,
      rgba(147, 112, 219, 0.15),
      rgba(176, 196, 222, 0.15));
  border: 1px solid rgba(147, 112, 219, 0.3);
  border-radius: 20px;
  padding: 1rem 2rem;
  color: rgba(147, 112, 219, 0.9);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.4s ease;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
}

.instagram-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      transparent,
      rgba(147, 112, 219, 0.2),
      rgba(176, 196, 222, 0.2),
      transparent);
  transition: left 0.6s ease;
}

.instagram-link:hover::before {
  left: 100%;
}

.instagram-link:hover {
  background: linear-gradient(135deg,
      rgba(147, 112, 219, 0.8),
      rgba(176, 196, 222, 0.8));
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(147, 112, 219, 0.3);
}

.instagram-link svg {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.instagram-link:hover svg {
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
    margin-top: 4rem;
  }

  .profile-container {
    padding: 2rem 1.5rem;
  }

  .profile-name {
    font-size: 2rem;
  }

  .profile-subtitle {
    font-size: 1.1rem;
  }

  .profile-badges {
    gap: 0.5rem;
  }

  .badge {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .nav-buttons {
    gap: 0.5rem;
  }

  .nav-btn {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .description-card {
    padding: 2rem 1.5rem;
  }

  .description-card h2 {
    font-size: 1.4rem;
  }

  .modal-overlay {
    padding: 1rem;
  }

  .modal-navigation {
    left: -2rem;
    right: -2rem;
  }

  .nav-arrow {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }

  .modal-info {
    padding: 1.2rem;
  }

  .modal-meta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .instagram-card {
    padding: 2rem 1.5rem;
  }

  .instagram-card h2 {
    font-size: 1.6rem;
  }

  .instagram-link {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .profile-name {
    font-size: 1.8rem;
  }

  .profile-image {
    width: 100px;
    height: 100px;
  }

  .nav-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  .nav-icon {
    font-size: 1rem;
  }

  .modal-navigation {
    left: -1rem;
    right: -1rem;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }

  .modal-close {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }
}

/* Animations supplémentaires */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }

  100% {
    background-position: 200px 0;
  }
}

.loading {
  animation: pulse 2s infinite;
}

/* Amélioration de l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus pour l'accessibilité */
.nav-btn:focus,
.instagram-link:focus,
.modal-close:focus,
.nav-arrow:focus {
  outline: 2px solid rgba(147, 112, 219, 0.8);
  outline-offset: 2px;
}

/* Amélioration du contraste pour l'accessibilité */
@media (prefers-contrast: high) {

  .profile-name,
  .description-card h2,
  .instagram-card h2 {
    color: #fff;
    -webkit-text-fill-color: #fff;
  }

  .badge,
  .nav-btn,
  .instagram-link {
    border-width: 2px;
  }
}
</style>