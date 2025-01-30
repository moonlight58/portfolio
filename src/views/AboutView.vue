<template>
  <div class="container">
    <div class="presentation">
      <div class="presentation-header">
        <img src="../assets/moon-pfp.jpg" alt="Moon-pfp" />
        <p>Gaël Röthlin</p>
      </div>
    </div>

    <div class="presentation-content">
      <p class="title">Developer and artist</p>
      <p class="body">
        I'm a second-year computer science student, BUT<span class="warning">*</span>, with a strong passion for
        both hardware and software. Recently, I've developed a keen interest in
        creating Text User Interface (TUI) applications, which has quickly
        become one of my favorite areas of exploration. My current project
        focuses on transforming full-featured applications, such as Spotify,
        into streamlined TUI versions.
      </p>
      <p class="precision">
        <span class="warning">*</span>(University Bachelor of Technology)
      </p>
      <p class="body">
        While I enjoy building applications, my true passion lies in refining
        them—making them bug-free, accessible, and user-friendly. This attention
        to detail extends to my other projects, such as creating a comprehensive
        tutorial for installing and maintaining Arch Linux. I’ve focused on
        breaking down each step in detail to help users overcome challenges with
        confidence.
      </p>
      <p class="body">
        I’m always eager to experiment, learn new development techniques, and
        explore innovative approaches in the world of Computer Science.
      </p>
      <p class="body">
        In my free time, I enjoy exploring my artistic side through drawing.
        While I experiment with various art styles, I’ve found my specialty in
        dark art and doodling. You can find my work on my Instagram account.
      </p>
      <button
        onclick="window.location='https://www.instagram.com/osiris._25/'"
        class="instagram-button"
      >
        <img src="../assets/instagram.svg" alt="Instagram logo" />
        osiris._25
      </button>
    </div>
  </div>
</template>

<style scoped>
.funny-shape {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-color: rgba(16, 21, 45, 1);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  filter: blur(20px);
  z-index: -1;
}

.presentation {
  margin: 15px 0 10px 0;
  text-align: center;
}

.presentation-header {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.4rem;
  margin: 20px 0;
}

.presentation-header img {
  border-radius: 50%;
  max-width: 40px;
  margin-right: 10px;
}

.presentation-content {
  line-height: 15pt;
}

.presentation-content .title {
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.presentation-content .body {
  font-size: 0.9rem;
  margin-top: 3vh;
  margin-bottom: 10px;
  text-align: justify;
}

.presentation-content .precision {
  font-size: 0.8rem;
}

.warning {
  color: #ff3535;
}

.container {
  margin-top: 4rem;
  width: 90%;
}

.about-title {
  margin: 75px 0 10px 0;
  font-size: 1.4rem;
  font-weight: bold;
}

.project-title,
.skill-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 75px 0 20px 0;
}

.instagram-button {
  display: flex;
  width: auto;
  padding: 10px 20px;
  color: white;
  background-color: #19203c;
  border: 2px solid #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.instagram-button img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.instagram-button:hover {
  background-color: #3f51b5;
  cursor: pointer;
  transform: scale(1.05);
}

@media (min-width: 420px) {
  .container {
    margin-top: 3rem;
    max-width: 800px;
    padding: 20px;
  }
}
</style>
