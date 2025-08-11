# Guide de Style Portfolio - Documentation Technique

## 📋 Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Système de Design](#système-de-design)
3. [Architecture CSS](#architecture-css)
4. [Composants et Patterns](#composants-et-patterns)
5. [Animations et Effets](#animations-et-effets)
6. [Responsive Design](#responsive-design)
7. [Exemples d'implémentation](#exemples-dimplémentation)

---

## 🎨 Vue d'ensemble

Ce portfolio utilise un **design system moderne** basé sur les principes suivants :

- **Aesthetic** : Design sombre futuriste avec des gradients vibrants
- **Philosophy** : "Form follows function" avec des micro-interactions engageantes
- **Target** : Développeurs, designers, et recruteurs tech
- **Mood** : Professionnel, innovant, accessible

### Inspirations Design

- **Glassmorphism** : Effets de verre translucide
- **Neumorphism** subtil : Ombres douces et profondeur
- **Cyberpunk aesthetic** : Couleurs néon et animations fluides
- **Modern minimalism** : Espaces blancs et typographie claire

---

## 🎯 Système de Design

### Variables CSS Principales

```css
:root {
  /* Couleurs principales */
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #f72585;
  --dark-bg: #0a0e27; /* Background principal */
  --dark-surface: #151937; /* Surfaces élevées */

  /* Texte */
  --text-primary: #ffffff; /* Titres et texte important */
  --text-secondary: #a8b2d1; /* Texte secondaire */

  /* Effets */
  --border-color: rgba(102, 126, 234, 0.1);
}
```

### Palette de Couleurs

| Couleur            | Hex       | Usage                  | Exemple                |
| ------------------ | --------- | ---------------------- | ---------------------- |
| **Primary Blue**   | `#667eea` | Gradients, accents     | Titres, boutons        |
| **Primary Purple** | `#764ba2` | Gradients, backgrounds | Cartes, sections       |
| **Accent Pink**    | `#f72585` | Call-to-actions        | Boutons, highlights    |
| **Dark Navy**      | `#0a0e27` | Background principal   | Body background        |
| **Dark Surface**   | `#151937` | Surfaces élevées       | Cards, modals          |
| **Text Light**     | `#ffffff` | Texte principal        | Titres, labels         |
| **Text Muted**     | `#a8b2d1` | Texte secondaire       | Descriptions, captions |

### Typographie

```css
/* Hiérarchie typographique */
.hero-name {
  font-size: clamp(3rem, 8vw, 5rem); /* Responsive fluid typography */
  font-weight: 900;
  line-height: 1;
}

.heading-main {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.body-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}
```

**Règles typographiques :**

- **Titles** : Toujours avec gradient text effect
- **Body** : Couleur secondaire pour la lisibilité
- **Fluid typography** : `clamp()` pour le responsive automatique
- **Line-height** : 1.8 pour le corps de texte, 1 pour les titres

---

## 🏗️ Architecture CSS

### Structure des Classes

```
.component-name {           /* Conteneur principal */
  .component-wrapper {      /* Wrapper avec contraintes */
    .component-content {    /* Contenu avec styles */
      .component-item {     /* Éléments individuels */
        .item-inner {       /* Contenu interne */
        .item-accent {      /* Effets décoratifs */
      }
    }
  }
}
```

### Conventions de Nommage

| Pattern      | Usage                     | Exemple                                 |
| ------------ | ------------------------- | --------------------------------------- |
| `.zone`      | Sections principales      | `.hero-zone`, `.projects-zone`          |
| `.wrapper`   | Conteneurs avec max-width | `.about-wrapper`, `.contact-wrapper`    |
| `.container` | Conteneurs flexibles      | `.projects-container`, `.bio-container` |
| `.item`      | Éléments répétables       | `.contact-item`, `.tech-item`           |
| `.inner`     | Contenu interne           | `.hex-inner`, `.avatar-inner`           |
| `.bg`        | Backgrounds décoratifs    | `.link-bg`, `.contact-bg`               |

---

## 🧩 Composants et Patterns

### 1. Hero Section Pattern

**Structure :**

```html
<section class="hero-zone" :class="{ 'hero-loaded': isVisible }">
  <div class="hero-grid">
    <div class="hero-left"><!-- Contenu principal --></div>
    <div class="hero-right"><!-- Élément visuel --></div>
  </div>
</section>
```

**Caractéristiques :**

- Grid 50/50 sur desktop, stack sur mobile
- Animation d'entrée décalée (left puis right)
- Effet de parallaxe sur les particules

### 2. Section Standard Pattern

```html
<section class="[name]-zone">
  <div class="section-intro">
    <span class="section-number">01</span>
    <h2 class="section-heading">
      <span class="heading-main">Titre Principal</span>
      <span class="heading-sub">Sous-titre</span>
    </h2>
  </div>
  <div class="[name]-content">
    <!-- Contenu spécifique -->
  </div>
</section>
```

### 3. Card Component Pattern

```css
.card-component {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-component:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}
```

**Éléments clés :**

- **Glassmorphism** : `backdrop-filter: blur(10px)`
- **Subtle borders** : Couleurs à faible opacité
- **Hover effects** : Translation + shadow
- **Border radius** : 20px standard

### 4. Button/Link Pattern

```css
.interactive-element {
  position: relative;
  padding: 15px 30px;
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Background animé */
.interactive-element::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--primary-gradient);
  transition: left 0.3s ease;
  z-index: -1;
}

.interactive-element:hover::before {
  left: 0;
}
```

---

## ✨ Animations et Effets

### 1. Système d'Animations

**Types d'animations utilisées :**

#### Entrée de sections

```css
.section-intro {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-intro.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

#### Particules flottantes

```css
.particle {
  animation: float 20s infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 1;
    transform: translateY(10vh) scale(1);
  }
}
```

#### Effet Glitch sur le nom

```css
.hero-name {
  animation: glitch 3s infinite;
}

@keyframes glitch {
  0%,
  100% {
    text-shadow: 0 0 0 transparent;
  }
  95% {
    text-shadow: 2px 2px 0 #f72585, -2px -2px 0 #667eea;
  }
}
```

### 2. Timing et Easing

| Animation              | Duration | Easing                          | Usage                |
| ---------------------- | -------- | ------------------------------- | -------------------- |
| **Hover effects**      | 0.3s     | `ease`                          | Interactions rapides |
| **Page transitions**   | 0.8s     | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrées fluides      |
| **Micro-interactions** | 0.2s     | `ease-out`                      | Feedback instantané  |
| **Complex animations** | 1-2s     | `ease-in-out`                   | Animations de fond   |

### 3. Intersection Observer Pattern

```javascript
// Animation au scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.1 }
);

const elements = document.querySelectorAll(".section-intro, .skill-hex");
elements.forEach((el) => observer.observe(el));
```

---

## 📱 Responsive Design

### Breakpoints Système

```css
/* Large screens */
@media (max-width: 1200px) {
  /* Tablets landscape */
}

/* Medium screens */
@media (max-width: 968px) {
  /* Tablets portrait */
}

/* Small screens */
@media (max-width: 768px) {
  /* Mobile landscape */
}

/* Extra small */
@media (max-width: 480px) {
  /* Mobile portrait */
}
```

### Stratégies Responsive

#### 1. Grid Transformations

```css
/* Desktop */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

/* Mobile */
@media (max-width: 968px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
```

#### 2. Typography Scaling

```css
/* Fluid typography avec clamp() */
.hero-name {
  font-size: clamp(3rem, 8vw, 5rem);
}
```

#### 3. Spacing Adjustments

```css
/* Desktop */
section {
  padding: 100px 5%;
}

/* Mobile */
@media (max-width: 768px) {
  section {
    padding: 80px 5%;
  }
}
```

---

## 🔧 Exemples d'Implémentation

### Créer une Nouvelle Section

```html
<!-- HTML Structure -->
<section class="nouvelle-zone">
  <div class="section-intro">
    <span class="section-number">06</span>
    <h2 class="section-heading">
      <span class="heading-main">Ma Nouvelle Section</span>
      <span class="heading-sub">Description courte</span>
    </h2>
  </div>

  <div class="nouvelle-content">
    <div class="content-wrapper">
      <!-- Votre contenu ici -->
    </div>
  </div>
</section>
```

```css
/* CSS correspondant */
.nouvelle-zone {
  padding: 100px 5%;
  background: linear-gradient(
    180deg,
    var(--dark-bg) 0%,
    var(--dark-surface) 100%
  );
}

.nouvelle-content {
  max-width: 1200px;
  margin: 0 auto;
}

.content-wrapper {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
}

/* Responsive */
@media (max-width: 768px) {
  .nouvelle-zone {
    padding: 80px 5%;
  }

  .content-wrapper {
    padding: 30px;
    border-radius: 15px;
  }
}
```

### Card Interactive

```html
<div class="interactive-card">
  <div class="card-inner">
    <div class="card-icon">
      <img src="icon.svg" alt="Icon" />
    </div>
    <h3 class="card-title">Titre de la Card</h3>
    <p class="card-description">Description du contenu</p>
  </div>
  <div class="card-accent"></div>
</div>
```

```css
.interactive-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.interactive-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  border-color: var(--accent-color);
}

.card-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--primary-gradient);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.interactive-card:hover .card-accent {
  transform: translateX(0);
}

.card-icon img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
  margin-bottom: 15px;
}

.card-title {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}
```

---

## 🚀 Bonnes Pratiques

### Performance

- Utiliser `will-change` pour les éléments animés
- Préférer `transform` et `opacity` pour les animations
- Lazy loading pour les images

### Accessibilité

- Respecter `prefers-reduced-motion`
- États de focus visibles
- Contraste suffisant (WCAG AA)

### Maintenance

- Variables CSS centralisées
- Conventions de nommage cohérentes
- Code modulaire et réutilisable

---

## 📋 Checklist pour Nouvelles Pages

- [ ] Utiliser les variables CSS définies
- [ ] Implémenter le pattern de section standard
- [ ] Ajouter les animations d'entrée avec Intersection Observer
- [ ] Tester sur tous les breakpoints
- [ ] Vérifier l'accessibilité
- [ ] Optimiser les performances

---

_Cette documentation doit être utilisée comme référence pour maintenir la cohérence du design system à travers toutes les pages du portfolio._
