<template>
  <b-container fluid>
    <b-row>
      <b-col cols="3">
        <b-navbar sticky class="flex-column">
          <b-nav pills class="flex-column">
            <b-nav-item href="#france">From France</b-nav-item>
            <b-nav-item href="#outside">Outside France</b-nav-item>
            <b-nav-item href="#tailor">Tailored to your needs</b-nav-item>
          </b-nav>
        </b-navbar>
      </b-col>
      <b-col cols="9">
        <section id="content" class="mt-2 custom">
          <h2>Features</h2>
          <h4 id="france">Accessing Albiziapp from France</h4>
          <p>
              The main Albiziapp instance is freely accessible for everyone. All you need is a 
              (free) <b-link target="_blank" href="https://openstreetmap.org">Open Street Map</b-link> account to start recording trees.
              If you don't have an OpenStreetMap account and don't want to open one, you can still have a feeling of the
              interactions but you won't be able to perform new records.
          </p>
          <p>
              The French instance is accessible <b-link target="_blank" href="https://albiziapp.reveries-project.fr">here</b-link>
          </p>
          <h4 id="outside">Outside France</h4>
          <p>
              The French instance uses a very detailed satelite map provided by the <b-link target="_blank" href="http://ign.fr">French Geographic
               Institute</b-link>. Unfortunately, this map covers only France area. If you want to use Albiziapp outside
               France, you can use the <b-link target="_blank" href="https://pre-prod.albiziapp.reveries-project.fr">internationalized version</b-link>.
          </p>

          <h4 id="tailor">Tailored to your needs</h4>
          <p>
              If you're either a teacher, a botanic parc manager, a responsible in communication, you may need an Albiziapp
              version tailored for your specific needs. In this case, <b-link to='/contact'>contact us</b-link> with your project idea to have a specific 
              instance deployed for you.  
          </p>
          <p>
              Albiziapp being part of a research project, we will provide free instances given that the user data can be
              analysed anonymously for research purpose.
          </p>

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
      title: 'Albiziapp Access',
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