<script>
  import Boutonscolors from "./lib/Boutonscolors.svelte";
  import Competences from "./lib/Competences.svelte";
  import Contact from "./lib/Contact.svelte";
  import Loisirs from "./lib/Loisirs.svelte";
  import PhotoProfil from "./lib/PhotoProfil.svelte";
</script>

<!-- Début du site web -->
<body class="body__cv">
  <!-- Corps -->
  <header class="header__cv">
    <!-- Navbar -->
    <Boutonscolors />

    <!-- Titre -->
    <section>
      <h1>Tamara VIOLEAU</h1>
      <div class="section__h2">
        <div class="title__h2">
          <h2>Développeuse front-end</h2>
        </div>
      </div>

      <!-- Photo de profil -->
      <PhotoProfil />
    </section>
  </header>

  <!-- Main -->
  <main>
    <!-- Contact -->
    <Contact />

    <!-- SECTION PRESENTATION -->

    <div class="border">
      <article class="article__wanted">
        <p>
          <lord-icon
            class="wanted__icon"
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="hover"
            style="width:3rem;height:3rem"
          />Anciennement éducatrice de jeunes enfants, je me suis reconvertie
          dans le domaine qui suscite un grand intérêt chez moi depuis toute
          jeune : le développement web. Aujourd'hui,
          <strong>développeuse front-end</strong>
          sensibilisée à l'accessibilité, je souhaite mettre mes compétences au service
          de votre entreprise et de vos projets. Comment ? Lors d’un
          <strong>stage</strong>
          à vos côtés non rémunéré du <strong>25/04 au 24/10/2023</strong>.
        </p>
      </article>
    </div>

    <!-- SECTION CV -->
    <section class="section__cv">
      <wrapper class="wrapper__cvleft">
        <!-- ARTICLES FORMATIONS -->
        <article class="article__formations">
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
              <h3>Formations</h3>
            </div>
          </div>

          <h4>Passage le 07 juin 2023</h4>

          <div class="cv__experience">
            <h5>Titre Professionnel développeur web et web mobile</h5>
            <p class="p__experience">(Rennes)</p>
          </div>

          <h4>oct. 2022 - avr. 2023</h4>

          <div class="cv__experience">
            <h5>Développeur web et web mobile</h5>
            <p class="p__experience">
              École O’clock (téléprésentiel)
              <i>798 heures intensives</i>
              <i>4 mois de socle commun</i> <i>1 mois de spécialisation</i>
              <span class="souligner">Spécialisation : </span>Intégration i++
              (bundler Vite, Svelte.js, CMS Directus, maitrise du SASS) et
              accessibilité.
            </p>
          </div>

          <h4>2015 - 2018</h4>

          <div class="cv__experience">
            <h5>Diplôme d'Etat EJE</h5>
            <p class="p__experience">
              IRTS Talence (Éducateur de Jeunes Enfants)
            </p>
          </div>
        </article>

        <!-- ARTICLE COMPETENCES -->
        <Competences />
      </wrapper>

      <wrapper class="wrapper__cvright">
        <!-- ARTICLES FORMATIONS -->
        <article class="article__experiences">
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
              <h3>Expériences</h3>
            </div>
          </div>

          <h4>avril 2023</h4>

          <div class="cv__experience">
            <h5>Développeuse Web - O'clock</h5>
            <p class="p__experience">
              Projet d'apothéose (fin d'études)
              <i>4 semaines intensives</i>
            </p>
            <div class="list">
              <ol>
                <li>Travail d'équipe.</li>
                <li>Organisation.</li>
              </ol>
            </div>
          </div>

          <h4>2019 - 2021</h4>

          <div class="cv__experience">
            <h5>Éducatrice de Jeunes Enfants</h5>
            <p class="p__experience">
              Crèche de 30 enfants. En continuité de direction.
            </p>
            <div class="list">
              <ol>
                <li>Ecoute active.</li>
                <li>Travail d'équipe.</li>
                <li>Remise en question.</li>
              </ol>
              <ol>
                <li>Diplomatie.</li>
                <li>Créativité.</li>
                <li>Adaptabilité.</li>
              </ol>
            </div>
          </div>

          <h4>2011 - 2019</h4>

          <div class="cv__experience">
            <h5>Animatrice BAFA en colonie de vacances</h5>
            <p class="p__experience">
              Animatrice auprès d'enfants de 6 à 17 ans.
            </p>
            <p>Animatrice référente 6/8 ans durant deux ans.</p>
          </div>
        </article>

        <!-- ARTICLE LOISIRS -->
        <Loisirs />

        <!-- ARTICLES SOFT SKILLS -->
        <article class="article__softskills">
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
              <h3>Soft skills</h3>
            </div>
          </div>
          <ul>
            <li class="patience">Patience</li>
            <li class="curiosite">Curiosité</li>
            <li class="adaptabilite">Adaptabilité</li>
            <li class="observation">Observation</li>
          </ul>
          <ul><li class="autonomie">Autonomie</li></ul>
        </article>
      </wrapper>
    </section>
  </main>

  <!-- Footer -->
  <footer />
</body>
