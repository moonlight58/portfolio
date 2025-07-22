# Guide de Style Glassmorphism Moderne

## Vue d'ensemble du style

Cette page utilise un **style glassmorphism moderne** avec des éléments futuristes et des animations fluides. Le design combine transparence, flou d'arrière-plan, gradients colorés et micro-animations pour créer une expérience visuelle premium et immersive.

## 🎨 Palette de couleurs et variables CSS

### Variables principales
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
--glass-bg: rgba(255, 255, 255, 0.08);
--glass-border: rgba(255, 255, 255, 0.12);
--text-primary: #ffffff;
--text-secondary: rgba(255, 255, 255, 0.8);
--text-muted: rgba(255, 255, 255, 0.6);
--blur-strength: 20px;
```

### Arrière-plan principal
```css
background: linear-gradient(135deg,
  rgba(102, 126, 234, 0.05) 0%,
  rgba(118, 75, 162, 0.08) 25%,
  rgba(240, 147, 251, 0.05) 50%,
  rgba(75, 172, 254, 0.08) 75%,
  rgba(0, 242, 254, 0.05) 100%);
```

## 🔍 Effet Glassmorphism - Technique principale

### CSS de base pour les cartes en verre
```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  -webkit-backdrop-filter: blur(var(--blur-strength));
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
}

/* Accent lumineux en haut */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--accent-gradient);
  opacity: 0.5;
}
```

### Variantes de cartes spécialisées
```css
/* Carte principale hero */
.hero-card {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--blur-strength));
  border-radius: 32px;
  padding: 4rem;
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

/* Ligne colorée en haut */
.hero-card::before {
  height: 2px;
  background: var(--primary-gradient);
  opacity: 0.8;
}
```

## ✨ Système d'animations

### Animations d'entrée progressives
```css
/* Animation principale */
.hero-section {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-section.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Sections avec délais échelonnés */
.content-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.content-section:nth-child(1) { transition-delay: 0.1s; }
.content-section:nth-child(2) { transition-delay: 0.2s; }
.content-section:nth-child(3) { transition-delay: 0.3s; }
```

### Animations au hover
```css
.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
}

.hero-card:hover {
  transform: translateY(-8px);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

## 🖼️ Avatar avec effets lumineux

### Structure HTML
```html
<div class="avatar-container">
  <div class="avatar-glow"></div>
  <img src="avatar.jpg" class="avatar-image" />
  <div class="avatar-ring"></div>
</div>
```

### CSS des effets
```css
.avatar-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.2);
  z-index: 3;
  transition: all 0.8s ease;
}

.avatar-glow {
  position: absolute;
  top: -20px; left: -20px; right: -20px; bottom: -20px;
  background: var(--primary-gradient);
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(20px);
  z-index: 1;
  animation: pulse-glow 3s ease-in-out infinite;
}

.avatar-ring {
  position: absolute;
  top: -10px; left: -10px; right: -10px; bottom: -10px;
  border: 2px solid transparent;
  background: var(--accent-gradient);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.avatar-container:hover .avatar-ring {
  opacity: 0.6;
  animation: rotate 8s linear infinite;
}
```

## 🎭 Texte avec gradients

### Technique principale
```css
.gradient-text {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #ffffff; /* Fallback */
}

/* Support navigateurs anciens */
@supports not (-webkit-background-clip: text) {
  .gradient-text {
    color: #ffffff;
  }
}
```

### Exemples d'application
```css
.hero-title .name-text {
  font-size: 3.5rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.highlight {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
```

## 🏷️ Système de badges

### Structure et styles
```css
.badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  backdrop-filter: blur(15px);
  font-weight: 600;
  transition: all 0.4s ease;
}

.badge-student {
  background: rgba(102, 126, 234, 0.15);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #c7d2fe;
}

.badge:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}
```

## 📋 Cartes de compétences avec effets glow

### Structure HTML
```html
<div class="skill-card dev-card">
  <div class="skill-header">
    <div class="skill-icon">💻</div>
    <h3>Développement</h3>
  </div>
  <div class="skill-content">
    <ul class="skill-list">
      <li>Applications TUI</li>
      <li>Refactoring de code</li>
    </ul>
  </div>
  <div class="skill-glow dev-glow"></div>
</div>
```

### CSS avec glow au hover
```css
.skill-card {
  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.4s ease;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.dev-card::before { background: var(--primary-gradient); }
.skill-card:hover::before { opacity: 1; }

.skill-glow {
  position: absolute;
  top: -50%; left: -50%;
  width: 200%; height: 200%;
  opacity: 0;
  filter: blur(30px);
  z-index: -1;
  transition: opacity 0.6s ease;
}

.dev-glow {
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
}

.skill-card:hover .skill-glow { opacity: 1; }
```

## 🔗 Boutons d'action stylisés

### Exemple : Bouton Instagram
```css
.instagram-cta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: rgba(240, 147, 251, 0.1);
  border: 2px solid rgba(240, 147, 251, 0.2);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

/* Effet de balayage lumineux */
.instagram-cta::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(240, 147, 251, 0.1) 50%,
    transparent 100%);
  transition: left 0.6s ease;
}

.instagram-cta:hover::before { left: 100%; }

.instagram-icon {
  width: 48px; height: 48px;
  background: var(--secondary-gradient);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
}

.instagram-cta:hover .instagram-icon {
  transform: scale(1.1) rotate(5deg);
}
```

## 📐 Responsive Design

### Breakpoints principaux
```css
/* Tablettes */
@media (max-width: 1200px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero-card { padding: 2.5rem 1.5rem; }
  .avatar-image { width: 120px; height: 120px; }
  .name-text { font-size: 2.5rem; }
  .status-badges { flex-direction: column; }
}

/* Petit mobile */
@media (max-width: 480px) {
  .name-text { font-size: 2rem; }
  .card-content { padding: 1.5rem 1rem; }
}
```

## 🎯 Checklist pour reproduire ce style

### Éléments essentiels :
- [ ] Variables CSS avec gradients définis
- [ ] Arrière-plan avec gradient subtil multi-couleurs
- [ ] Cards avec `backdrop-filter: blur()`
- [ ] Bordures transparentes avec `rgba(255,255,255,0.12)`
- [ ] Effets `::before` pour accents lumineux
- [ ] Animations d'entrée progressive avec `cubic-bezier(0.16, 1, 0.3, 1)`
- [ ] Hover effects avec `transform: translateY()`
- [ ] Texte avec gradients via `background-clip: text`
- [ ] Box-shadows colorées et floutées
- [ ] Transitions fluides sur tous les éléments interactifs

### Animations obligatoires :
- [ ] Fade-in avec échelle pour les sections
- [ ] Hover elevation (-4px à -8px)
- [ ] Glow effects au survol
- [ ] Rotation/échelle pour les icônes
- [ ] Délais échelonnés pour les sections

### Accessibilité :
- [ ] Fallbacks couleur pour `background-clip: text`
- [ ] Focus-visible avec outline coloré
- [ ] `prefers-reduced-motion` respecté
- [ ] Contraste suffisant pour le texte

## 🚀 Application pratique

Pour créer une page dans ce style, suivez cette séquence :

1. **Setup de base** : Variables CSS + arrière-plan gradient
2. **Structure glassmorphism** : Cards avec blur et transparence
3. **Contenu stylisé** : Texte gradient + badges + listes
4. **Animations** : Entrées progressives + hover effects
5. **Responsive** : Adaptation mobile avec breakpoints
6. **Polish** : Glow effects + micro-animations
