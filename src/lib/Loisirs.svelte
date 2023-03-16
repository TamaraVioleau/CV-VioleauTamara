<script>
  const loisirs = [
    {
      idbalise: "yoga",
      titre: "Yoga",
      description: "Pratique quotidienne, gestion du stress.",
    },
    {
      idbalise: "rpg",
      titre: "RPG Littéraire",
      description:
        "Role playing game (jeu de rôle) sur forum. Gestion et administration d'un forum (codage et management).",
    },
  ];
</script>

<article class="article__loisirs">
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
      <h3>Loisirs</h3>
    </div>
  </div>

  {#each loisirs as loisir}
    <div class={loisir.idbalise}>
      <aside id={loisir.idbalise} />
      <h5>{loisir.titre}</h5>
      <p>{loisir.description}</p>
    </div>
  {/each}

</article>
