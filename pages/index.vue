<template>
  <b-container fluid>
    <div>
      <b-jumbotron style="padding:20px;" header="Albiziapp" lead="Tree mapping made easy and fun">
        <p>Part of the REVERIES project</p>
      </b-jumbotron>
    </div>
    <section class="mt-2 custom">
          <b-card border-variant="light"  title="Location based activities" img-src="/map.png" img-alt="Image" img-left>
      <b-card-text>
        Albiziapp is conceived for outdoor activities. User position is updated as he moves. The map shows other users records and is updated dynamically.  
      </b-card-text>
    </b-card>
    <b-card title="Gamification" img-src="/score.png" img-alt="Image" img-left>
      <b-card-text>
        Various gamification mechanism. Fully customable score, badge and rank system.
      </b-card-text>
    </b-card>
    <b-card title="Learning through reference images and informations" img-src="/arboretum.png" img-alt="Image" img-left>
      <b-card-text>
        Information about usage and habitat, as well as reference images for all species.
      </b-card-text>
    </b-card>
    <b-card title="More than 200 normalized species" img-src="/record.png" img-alt="Image" img-left>
      <b-card-text>
        Recording is assisted through a curated species list, including genus and common name.
      </b-card-text>
    </b-card>


    </section>
  </b-container>
</template>
<style>
  .custom .card img{
    height:300px!important;
    width:auto!important;
    margin:auto;
  }
</style>
<script>

export default {
    head () {
    return {
      title: 'Albiziapp',
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Albiziapp information' },
      { hid: 'keywords', name: 'keywords', content: 'botanic, serious-games, collaborative, web-application, gamification' }
      ]
    }
  }

};
</script>