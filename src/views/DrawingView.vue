<template>
  <div class="drawing-zone" :class="{ loaded: isVisible }">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="section-intro">
        <span class="section-number">Art - Creations</span>
        <h2 class="section-heading">
          <span class="heading-main">Portfolio Artistique</span>
          <span class="heading-sub">Dark Art & Créations Personnelles</span>
        </h2>
      </div>

      <div class="hero-content">
        <div class="profile-showcase">
          <div class="profile-image-wrapper">
            <img
              src="../assets/moon-pfp.jpg"
              alt="Gaël Röthlin"
              class="profile-image"
            />
            <div class="profile-glow"></div>
          </div>
          <div class="profile-badges">
            <span class="badge art-badge">Dessin</span>
            <span class="badge style-badge">Dark Art</span>
            <span class="badge creative-badge">Doodling</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Navigation -->
    <section class="navigation-zone">
      <div class="nav-container">
        <div class="nav-intro">
          <h3>Explorez par Catégorie</h3>
          <p>Découvrez mes créations organisées par thématiques</p>
        </div>

        <div class="nav-grid">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setActiveCategory(category.id)"
            :class="['nav-card', { active: activeCategory === category.id }]"
          >
            <div class="nav-icon">{{ category.icon }}</div>
            <span class="nav-label">{{ category.name }}</span>
            <div class="nav-accent"></div>
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Description -->
    <section class="description-zone" v-if="getCurrentCategoryDescription()">
      <div class="description-card">
        <div class="card-inner">
          <h3 class="category-title">{{ getCurrentCategoryTitle() }}</h3>
          <p class="category-description">
            {{ getCurrentCategoryDescription() }}
          </p>
          <div class="artwork-count">
            <span
              >{{ filteredArtworks.length }} œuvre{{
                filteredArtworks.length > 1 ? "s" : ""
              }}</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Image Gallery -->
    <section class="gallery-zone">
      <div class="gallery-container">
        <div class="gallery-grid" v-if="filteredArtworks.length > 0">
          <div
            v-for="(artwork, index) in filteredArtworks"
            :key="artwork.id"
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
                  <h4 class="artwork-title">{{ artwork.title }}</h4>
                  <p class="artwork-description">{{ artwork.description }}</p>
                  <div class="artwork-meta">
                    <span class="artwork-date">{{ artwork.date }}</span>
                    <span class="artwork-category">{{
                      getCategoryName(artwork.category)
                    }}</span>
                  </div>
                </div>
                <div class="view-icon">👁</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state">
          <div class="empty-content">
            <div class="empty-icon">🎨</div>
            <h3>Aucune œuvre dans cette catégorie</h3>
            <p>
              Cette section sera bientôt remplie avec mes créations artistiques.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Section -->
    <section class="instagram-zone">
      <div class="instagram-card">
        <div class="card-inner">
          <div class="instagram-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </div>
          <h3>Découvrir Plus de Créations</h3>
          <p>
            Retrouvez toutes mes créations artistiques et mes dernières œuvres
            sur Instagram. Suivez mon parcours créatif au quotidien !
          </p>
          <a
            href="https://www.instagram.com/osiris._25/"
            target="_blank"
            class="instagram-button"
            rel="noopener noreferrer"
          >
            <span>Suivre @osiris._25</span>
            <div class="button-bg"></div>
          </a>
        </div>
      </div>
    </section>

    <!-- Modal for full-size viewing -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">✕</button>

        <div class="modal-navigation" v-if="filteredArtworks.length > 1">
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
            <span class="meta-date">{{ currentImage.date }}</span>
            <span class="meta-category">{{
              getCategoryName(currentImage.category)
            }}</span>
          </div>
        </div>
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
    }, 300);

    // Gestion du clavier pour la modal
    document.addEventListener("keydown", this.handleKeydown);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
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
        tattoos:
          "Designs de tatouages personnalisés alliant symbolisme et esthétique.",
        abstract: "Œuvres abstraites jouant avec les formes et les couleurs.",
      };
      return descriptions[this.activeCategory] || descriptions["all"];
    },

    getCategoryName(categoryId) {
      const category = this.categories.find((cat) => cat.id === categoryId);
      return category ? category.name : categoryId;
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

    handleKeydown(event) {
      if (!this.showModal) return;

      switch (event.key) {
        case "Escape":
          this.closeModal();
          break;
        case "ArrowLeft":
          this.previousImage();
          break;
        case "ArrowRight":
          this.nextImage();
          break;
      }
    },
  },
};
</script>

<style scoped>
/* Zone principale */
.drawing-zone {
  background: var(--dark-bg);
  min-height: 100vh;
  opacity: 0;
  transition: opacity 0.8s ease;

  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f72585;
  --dark-bg: #0a0e27;
  --dark-surface: #151937;
  --text-primary: #ffffff;
  --text-secondary: #a8b2d1;
  --border-color: rgba(102, 126, 234, 0.1);
}

.drawing-zone.loaded {
  opacity: 1;
}

/* Hero Section */
.hero-section {
  padding: 100px 5% 60px;
  text-align: center;
}

.section-intro {
  margin-bottom: 60px;
}

.section-number {
  display: inline-block;
  font-size: 1rem;
  color: var(--accent-color);
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.section-heading {
  text-align: center;
}

.heading-main {
  display: block;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 15px;
}

.heading-sub {
  display: block;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: var(--text-secondary);
  font-weight: 400;
}

.hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.profile-image-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
}

.profile-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid transparent;
  background: var(--primary-gradient);
  padding: 3px;
}

.profile-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: var(--primary-gradient);
  opacity: 0.3;
  filter: blur(20px);
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.profile-badges {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}

.badge {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.badge:hover {
  background: rgba(102, 126, 234, 0.1);
  border-color: var(--accent-color);
  transform: translateY(-2px);
}

/* Navigation Zone */
.navigation-zone {
  padding: 0 5% 60px;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
}

.nav-intro {
  text-align: center;
  margin-bottom: 40px;
}

.nav-intro h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.nav-intro p {
  color: var(--text-secondary);
  font-size: 1rem;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.nav-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid var(--border-color);
  border-radius: 15px;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
  border-color: var(--accent-color);
}

.nav-card.active {
  background: rgba(102, 126, 234, 0.1);
  border-color: var(--accent-color);
}

.nav-icon {
  font-size: 2rem;
  margin-bottom: 5px;
}

.nav-label {
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 600;
}

.nav-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--primary-gradient);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.nav-card:hover .nav-accent,
.nav-card.active .nav-accent {
  transform: translateX(0);
}

/* Description Zone */
.description-zone {
  padding: 0 5% 60px;
}

.description-card {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.card-inner {
  padding: 40px;
  text-align: center;
}

.category-title {
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.category-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.artwork-count {
  color: var(--accent-color);
  font-weight: 600;
  font-size: 1rem;
}

/* Gallery Zone */
.gallery-zone {
  padding: 0 5% 100px;
}

.gallery-container {
  max-width: 1400px;
  margin: 0 auto;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.artwork-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.artwork-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
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
  transition: transform 0.4s ease;
}

.artwork-card:hover .artwork-image {
  transform: scale(1.05);
}

.artwork-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px;
}

.artwork-card:hover .artwork-overlay {
  opacity: 1;
}

.artwork-info {
  color: white;
}

.artwork-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.artwork-description {
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.artwork-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.8;
}

.view-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Empty State */
.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.empty-content {
  text-align: center;
  color: var(--text-secondary);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.empty-content h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: 10px;
}

/* Instagram Zone */
.instagram-zone {
  padding: 60px 5% 100px;
  background: linear-gradient(
    135deg,
    var(--dark-bg) 0%,
    var(--dark-surface) 100%
  );
}

.instagram-card {
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.instagram-card .card-inner {
  padding: 50px;
  text-align: center;
}

.instagram-icon {
  margin-bottom: 25px;
  color: var(--accent-color);
}

.instagram-card h3 {
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.instagram-card p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.instagram-button {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  overflow: hidden;
  transition: all 0.3s ease;
}

.instagram-button:hover {
  border-color: var(--accent-color);
  color: white;
}

.button-bg {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  transition: left 0.3s ease;
  z-index: -1;
}

.instagram-button:hover .button-bg {
  left: 0;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.modal-content {
  position: relative;
  background: var(--dark-surface);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1001;
}

.modal-close:hover {
  background: var(--accent-color);
  color: white;
}

.modal-navigation {
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 1001;
}

.nav-arrow {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: all;
}

.nav-arrow:hover:not(:disabled) {
  background: var(--primary-gradient);
  color: white;
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
  padding: 60px 20px 20px;
  min-height: 400px;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.modal-info {
  padding: 30px;
  border-top: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.02);
}

.modal-info h3 {
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.modal-info p {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.modal-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.meta-date,
.meta-category {
  padding: 6px 12px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 0.9rem;
  font-weight: 500;
}

.meta-category {
  background: rgba(247, 37, 133, 0.1);
  border-color: rgba(247, 37, 133, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 80px 5% 40px;
  }

  .heading-main {
    font-size: clamp(2rem, 8vw, 3rem);
  }

  .nav-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }

  .nav-card {
    padding: 20px 15px;
  }

  .nav-icon {
    font-size: 1.5rem;
  }

  .nav-label {
    font-size: 0.9rem;
  }

  .description-card .card-inner {
    padding: 30px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .artwork-overlay {
    padding: 20px;
  }

  .artwork-title {
    font-size: 1.1rem;
  }

  .artwork-description {
    font-size: 0.9rem;
    -webkit-line-clamp: 2;
  }

  .instagram-card .card-inner {
    padding: 35px 25px;
  }

  .instagram-card h3 {
    font-size: 1.5rem;
  }

  .instagram-card p {
    font-size: 1rem;
  }

  .modal-content {
    max-width: 95vw;
    max-height: 95vh;
  }

  .modal-navigation {
    left: 10px;
    right: 10px;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .modal-image-container {
    padding: 50px 15px 15px;
  }

  .modal-info {
    padding: 25px;
  }

  .modal-info h3 {
    font-size: 1.3rem;
  }

  .modal-info p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 5% 30px;
  }

  .profile-badges {
    gap: 10px;
  }

  .badge {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .nav-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .modal-navigation {
    display: none;
  }

  .modal-image-container {
    padding: 40px 10px 10px;
  }

  .modal-info {
    padding: 20px;
  }

  .modal-meta {
    flex-direction: column;
    gap: 10px;
  }
}

/* Animations */
@media (prefers-reduced-motion: no-preference) {
  .artwork-card {
    animation: fadeInUp 0.6s ease forwards;
  }

  .artwork-card:nth-child(2) {
    animation-delay: 0.1s;
  }
  .artwork-card:nth-child(3) {
    animation-delay: 0.2s;
  }
  .artwork-card:nth-child(4) {
    animation-delay: 0.3s;
  }
  .artwork-card:nth-child(5) {
    animation-delay: 0.4s;
  }
  .artwork-card:nth-child(6) {
    animation-delay: 0.5s;
  }
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

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--dark-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-gradient);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #667eea 0%, #f72585 100%);
}
</style>
