<script>
  const competences = [
    {
      champ: "Intégration web",
      description:
        "HTML5 / CSS3 / SCSS (Sass) selon les bonnes pratiques d'accessibilité (W3C, RGAA, WAI-ARIA",
    },
    {
      champ: "Développement front-end",
      description: "Javascript vanilla, bundler vite, Svelte.js, Bootstrap",
    },
    {
      champ: "Développement back-end",
      description: "Php (orienté objet, MVC, API Rest, MySQL), Laravel",
    },
    {
      champ: "Gestion de projet numérique",
      description: "Github, Figma, Photoshop, VS Code",
    },
  ];
</script>

<article class="article__competences">
  <div class="cv__search">
    <div class="cv__glass">
      <lord-icon
        src="https://cdn.lordicon.com/hgbzryoa.json"
        trigger="hover"
        colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836"
        style="height:3rem width: 3rem;"
      />
    </div>
    <div class="cv__text">
      <h3>Compétences</h3>
    </div>
  </div>
  {#each competences as competence}
    <h5>{competence.champ}</h5>
    <p>
      {competence.description}
    </p>
  {/each}
</article>
