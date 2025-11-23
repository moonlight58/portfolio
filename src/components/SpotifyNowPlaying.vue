<template>
  <div class="spotify-badge" :class="{ 'is-playing': isPlaying }">
    <div class="spotify-bg"></div>
    
    <!-- Logo Spotify -->
    <div class="spotify-logo">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    </div>

    <!-- Contenu de la carte -->
    <div class="spotify-content">
      <div v-if="isPlaying && currentTrack" class="track-info">
        <div class="track-details">
          <span class="track-name">{{ currentTrack.name }}</span>
          <span class="track-artist">{{ currentTrack.artist }}</span>
        </div>
        <div class="equalizer">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      
      <div v-else class="not-playing">
        <span>{{ offlineText }}</span>
      </div>
    </div>

    <!-- Lien vers Spotify -->
    <a 
      v-if="spotifyUrl" 
      :href="spotifyUrl" 
      target="_blank" 
      class="spotify-link"
      aria-label="Ouvrir sur Spotify"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SpotifyNowPlaying',
  data() {
    return {
      isPlaying: false,
      currentTrack: null,
      offlineText: 'Pas de musique en cours',
      spotifyUrl: null,
      refreshInterval: null
    };
  },
  mounted() {
    this.fetchNowPlaying();
    // Rafraîchir toutes les 30 secondes
    this.refreshInterval = setInterval(() => {
      this.fetchNowPlaying();
    }, 30000);
  },
  beforeUnmount() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  },
  methods: {
    async fetchNowPlaying() {
      try {
        // Utilise la fonction Netlify
        const response = await fetch('/.netlify/functions/spotify-now-playing');
        
        if (!response.ok) {
          this.isPlaying = false;
          return;
        }

        const data = await response.json();
        
        if (data.is_playing && data.item) {
          this.isPlaying = true;
          this.currentTrack = {
            name: data.item.name,
            artist: data.item.artists.map(artist => artist.name).join(', '),
            album: data.item.album.name,
            albumArt: data.item.album.images[0]?.url
          };
          this.spotifyUrl = data.item.external_urls.spotify;
        } else {
          this.isPlaying = false;
          this.currentTrack = null;
          this.spotifyUrl = null;
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données Spotify:', error);
        this.isPlaying = false;
      }
    }
  }
};
</script>

<style scoped>
.spotify-badge {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(30, 215, 96, 0.1);
  border: 1px solid rgba(30, 215, 96, 0.2);
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s ease;
  min-width: 200px;
}

.spotify-badge.is-playing {
  background: rgba(30, 215, 96, 0.15);
  border-color: rgba(30, 215, 96, 0.3);
}

.spotify-bg {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(30, 215, 96, 0.2), transparent);
  transition: left 0.3s ease;
  z-index: 0;
}

.spotify-badge:hover .spotify-bg {
  left: 100%;
}

.spotify-logo {
  position: relative;
  z-index: 2;
  width: 24px;
  height: 24px;
  color: #1DB954;
  flex-shrink: 0;
}

.spotify-logo svg {
  width: 100%;
  height: 100%;
}

.spotify-content {
  position: relative;
  z-index: 2;
  flex: 1;
  min-width: 0;
}

.track-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.track-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
}

.track-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary, #ffffff);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.track-artist {
  font-size: 0.8rem;
  color: var(--text-secondary, #a8b2d1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.not-playing {
  display: flex;
  align-items: center;
}

.not-playing span {
  font-size: 0.85rem;
  color: var(--text-secondary, #a8b2d1);
  opacity: 0.7;
}

/* Equalizer Animation */
.equalizer {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 16px;
  flex-shrink: 0;
}

.bar {
  width: 3px;
  background: #1DB954;
  border-radius: 3px;
  animation: equalize 1.2s ease-in-out infinite;
}

.bar:nth-child(1) {
  animation-delay: 0s;
}

.bar:nth-child(2) {
  animation-delay: 0.2s;
}

.bar:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes equalize {
  0%, 100% {
    height: 4px;
  }
  50% {
    height: 16px;
  }
}

.spotify-link {
  position: relative;
  z-index: 2;
  width: 20px;
  height: 20px;
  color: var(--text-secondary, #a8b2d1);
  transition: all 0.3s ease;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spotify-link:hover {
  color: #1DB954;
  transform: scale(1.1);
}

.spotify-link svg {
  width: 100%;
  height: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .spotify-badge {
    min-width: 180px;
    padding: 10px 14px;
  }

  .track-name {
    font-size: 0.85rem;
  }

  .track-artist {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .spotify-badge {
    min-width: 160px;
    padding: 8px 12px;
  }

  .spotify-logo {
    width: 20px;
    height: 20px;
  }

  .track-name {
    font-size: 0.8rem;
  }

  .track-artist {
    font-size: 0.7rem;
  }

  .equalizer {
    height: 14px;
  }
}

/* Animation lors du chargement */
.spotify-badge {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
