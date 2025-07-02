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
        <p>Cette section sera bientôt remplie avec mes créations artistiques.</p>
      </div>
    </div>

    <!-- Modal for full-size viewing -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-navigation">
          <button 
            @click="previousImage" 
            :disabled="currentImageIndex === 0"
            class="nav-arrow nav-prev"
          >
            ‹
          </button>
          <button 
            @click="nextImage" 
            :disabled="currentImageIndex === filteredArtworks.length - 1"
            class="nav-arrow nav-next"
          >
            ›
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
        <p>Retrouvez toutes mes créations artistiques et mes dernières œuvres sur Instagram</p>
        <a 
          href="https://www.instagram.com/osiris._25/" 
          target="_blank" 
          class="instagram-link"
          rel="noopener noreferrer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
  margin-top: 10rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6rem;
  color: #fff;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 4rem;
}

.profile-container {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.profile-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.profile-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #90a8ff;
  box-shadow: 0 8px 32px rgba(144, 168, 255, 0.3);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(144, 168, 255, 0.3), transparent);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-image-wrapper:hover .profile-glow {
  opacity: 1;
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #fff, #90a8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-subtitle {
  font-size: 1.3rem;
  color: #ccc;
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
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.art-badge {
  background: rgba(255, 107, 107, 0.2);
  color: #ff6b6b;
  border: 1px solid rgba(255, 107, 107, 0.3);
}

.style-badge {
  background: rgba(138, 43, 226, 0.2);
  color: #8a2be2;
  border: 1px solid rgba(138, 43, 226, 0.3);
}

.creative-badge {
  background: rgba(255, 165, 0, 0.2);
  color: #ffa500;
  border: 1px solid rgba(255, 165, 0, 0.3);
}

/* Gallery Navigation */
.gallery-nav {
  margin-bottom: 3rem;
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
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 12px;
  color: #ccc;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(144, 168, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-btn:hover::before,
.nav-btn.active::before {
  left: 100%;
}

.nav-btn:hover,
.nav-btn.active {
  background: rgba(144, 168, 255, 0.1);
  border-color: rgba(144, 168, 255, 0.3);
  color: #90a8ff;
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 1.1rem;
}

/* Gallery Description */
.gallery-description {
  margin-bottom: 3rem;
}

.description-card {
  background: rgba(144, 168, 255, 0.05);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  text-align: center;
}

.description-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.description-card h2 {
  color: #90a8ff;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.description-card p {
  color: #e0e0e0;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

/* Gallery Grid */
.gallery-section {
  margin-bottom: 4rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.artwork-card {
  position: relative;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  transition: all 0.3s ease;
}

.artwork-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 64px rgba(144, 168, 255, 0.2);
  border-color: rgba(144, 168, 255, 0.3);
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
  transition: transform 0.5s ease;
}

.artwork-card:hover .artwork-image {
  transform: scale(1.1);
}

.artwork-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: 2rem 1.5rem 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.artwork-card:hover .artwork-overlay {
  transform: translateY(0);
}

.artwork-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.artwork-description {
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0 0 1rem 0;
  opacity: 0.8;
}

.artwork-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #90a8ff;
  opacity: 0.7;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #ccc;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  color: #90a8ff;
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
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
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
  background: rgba(144, 168, 255, 0.2);
  border: 1px solid rgba(144, 168, 255, 0.3);
  color: #90a8ff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
}

.modal-close:hover {
  background: #90a8ff;
  color: #1a1a1a;
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
  background: rgba(144, 168, 255, 0.2);
  border: 1px solid rgba(144, 168, 255, 0.3);
  color: #90a8ff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
}

.nav-arrow:hover:not(:disabled) {
  background: #90a8ff;
  color: #1a1a1a;
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
  margin-bottom: 2rem;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
}

.modal-info {
  text-align: center;
  color: #fff;
}

.modal-info h3 {
  color: #90a8ff;
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
}

.modal-info p {
  color: #ccc;
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.modal-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 0.9rem;
  color: #90a8ff;
  opacity: 0.7;
}

/* Instagram Section */
.instagram-section {
  margin-top: 4rem;
}

.instagram-card {
  background: rgba(26, 26, 26, 0.6);
  border: 1px solid rgba(144, 168, 255, 0.1);
  border-radius: 16px;
  padding: 3rem 2rem;
  backdrop-filter: blur(10px);
  position: relative;
  text-align: center;
}

.instagram-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #90a8ff, transparent);
}

.instagram-card h2 {
  color: #90a8ff;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.instagram-card p {
  color: #ccc;
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
  opacity: 0.8;
}

.instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(45deg, #fd5949, #d6249f, #285AEB);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.instagram-link:hover::before {
  left: 100%;
}

.instagram-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(253, 89, 73, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
    margin-top: 4rem;
  }

  .profile-name {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .nav-buttons {
    gap: 0.5rem;
  }

  .nav-btn {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .modal-navigation {
    left: -2rem;
    right: -2rem;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .modal-close {
    top: -2.5rem;
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 80px;
    height: 80px;
  }

  .profile-name {
    font-size: 1.75rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .profile-badges {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-buttons {
    flex-direction: column;
    align-items: center;
  }

  .nav-btn {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }

  .modal-overlay {
    padding: 1rem;
  }

  .modal-navigation {
    display: none;
  }

  .instagram-link {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>