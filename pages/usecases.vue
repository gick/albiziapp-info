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
          <p>
            Outside of the missions, Albiziapp can be used to freely map trees for amateur botanist.
            In the free mapping mode, users can either perform new records or
            <strong>verify other users observations</strong>.
          </p>
          <b-card
            border-variant="light"
            title="Observations from multiple users"
            img-src="/map2.png"
            img-alt="Image"
            img-left
          >
            <b-card-text>
              In Albiziapp map, user observations are represented by red circles, other people observations are
              represented by green circles. When the user is near a green circle, he can verify the record by tapping
              on the circle. He then access to the information provided by the other user.
            </b-card-text>

            <b-card-text>
              If the user agrees with the information provided in the record (correct species and/or genus),
              he can
              <strong>validate</strong> the record. The number of validations is displayed together with the record informations.
              The user can also modify the record, in that case the previous record is still accessible through an
              <strong>history</strong> button.
            </b-card-text>
          </b-card>
            <p>Albiziapp is based on the principle of open data. All records information can be accessed programmaticaly through an API. 
              Moreover, Albiziapp fully integrates with <b-link target="_blank" href="https://openstreetmap.org">Open Street Map</b-link> the reference in
              Open Geographical Information.</p>

          <h4 id="class">Botanic class</h4>
          <p>
          Albiziapp can be used in the context of a botanic class for outdoor learning. An expert mode allows the teacher to record trees that 
          will trigger an <strong>identification test</strong>. The students then have to give a correct identification in front of the trees and
          are given immediate feedback (e.g did they identify the genus and/or species correctly?).
           </p>
          <p>
          After the outdoor activity, the teacher can access the students answers to provide them feedback on their identification errors or success.
          The records being associated with a photo, the teacher can point out botanical features specific to each trees.
          </p>
          <b-card
            border-variant="light"
            title="Identification test"
            img-src="/identification.png"
            img-alt="Image"
            img-left
          >
            <b-card-text>
              An identification exercise. The correct species, genus and common name must be identified by the student. Together with the correct
              answer, the teacher can associate gamification mechanisms (e.g score, badge) for correct identifications. This is optional since the
              use of gamification mechanisms depends on the teaching style.
            </b-card-text>
          </b-card>

        </section>
      </b-col>
    </b-row>
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
export default {
          head () {
    return {
      title: 'Albiziapp Use Cases',
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Albiziapp technology and features' },
      { hid: 'keywords', name: 'keywords', content: 'botanic, identification, exercise, openstreetmap, osm, score' }
      ]
    }

}};
</script>