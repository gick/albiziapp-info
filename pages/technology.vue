<template>
  <b-container fluid>
        <b-row>
          <b-col cols="3">
        <b-navbar sticky class="flex-column">
          <b-nav pills class="flex-column">
            <b-nav-item href="#web">Full web</b-nav-item>
            <b-nav-item href="#plant">Plant recognition</b-nav-item>
            <b-nav-item href="#item-3">Notifications</b-nav-item>
          </b-nav>
        </b-navbar>
  </b-col>
<b-col cols="9">
        <section id="content" class="mt-2 custom">
          <h2>Features</h2>
            <h4 id="web">Full web and PWA</h4>
            <p>
                Existing tree mapping applications are, to our best knowledge, only <strong>native applications</strong>.
                This means that they require the user to install an application on his smartphone. This creates various 
                issues : device compatibility (e.g application needs a specific Android version), trust issue (e.g user
                can be reluctant to install an application), complex update process...
            </p>
            <p>
                To overcome these issues, Albiziapp is only based on fully standard web technologies. Practically, it means
                that it <strong>is accessed through a browser</strong>, without installation required and it runs on any mobile
                device. 
            </p>
            <p>
                In case the user wish it, Albiziapp support PWA installation. Practically, the user can add Albiziapp to 
                his desktop and enjoy a fullscreen experience.
            </p>
            <h4 id="plant">Plant recognition</h4>
            <p>
                Albiziapp integrate a plant recognition feature. The user can upload a leaf photo to obtain the most likely
                species of the leaf. This feature is based on Folia, an application built by the <b-link href="https://liris.cnrs.fr/en/news/liris-diffuse-un-premier-prototype-reconnaissance-feuilles-sur-lappstore">LIRIS</b-link>
            </p>

            <b-card
              border-variant="light"
              title="Folia"
              img-src="/folia.png"
              img-alt="Image"
              img-left
            >
              <b-card-text>
                  An example of using Folia, the plant recognition feature.
                </b-card-text>
  
            </b-card>
  
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