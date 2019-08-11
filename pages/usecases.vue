<template>
  <b-container fluid>
        <b-row>
          <b-col cols="3">
        <b-navbar sticky class="flex-column">
          <b-nav pills class="flex-column">
            <b-nav-item href="#tour">Botanic Tour</b-nav-item>
            <b-nav-item href="#citizen">Citizen science</b-nav-item>
            <b-nav-item href="#class">Botanic class</b-nav-item>
          </b-nav>
        </b-navbar>
  </b-col>
<b-col cols="9">
        <section id="content" class="mt-2 custom">
          <h2>Use cases</h2>
            <h4 id="tour">Botanic tour</h4>
            <p>
              Botanic tour are a way to promote
              <strong>biodiversity heritage</strong> in a given area.
              Such area can be natural parc, cities, botanic garden, campus... Botanic tour also permits
              to acquire botanical knowledge in an easier context than a botanic class.
            </p>
            <p>
              In Albiziapp, botanic tours can be defined through
              <strong>custom missions</strong>.
              These missions are described through a simple format describing a serie of activities
              that the user should perform.
            </p>
            <b-card
              border-variant="light"
              title="Example of missions"
              img-src="/mission.png"
              img-alt="Image"
              img-left
            >
              <b-card-text>
                This is an example of mission consisting of a serie of activities. 
                  The current activitie is to perform three new records with distinct genus.
                   A progress bar indicate the user progression in the current activitie.
                </b-card-text>
  
                <b-card-text>When the activitie is completed, the user will acquire new score points and a badge.</b-card-text>
            </b-card>
            <h4 id="citizen">Citizen science</h4>
              TO BE COMPLETED
            <h4 id="class">Botanic class</h4>
              TO BE COMPLETED

        </section>

</b-col>  </b-row>
  </b-container>
</template>
<style>
.custom .card img {
  height: 400px !important;
  width: auto !important;
  margin: auto;
}
</style>
<script>
export default {};
</script>