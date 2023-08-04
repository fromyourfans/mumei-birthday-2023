<template>
  <div class="project">
    <div class="project-title">
      <h2 class="text-center">Nanashi Mumei Birthday Project Credits</h2>
    </div>
    <div class="project-content">
      <h3 class="brown--text">The Afterword</h3>
      <p>
        Happy Birthday Mumei, Meimei, Mumeishi, Moomsuke, Moomei, Mooms, Moomers, etc!
        This year the Hoomans have once again worked together
        to create a website for your birthday gift!
        There's lots of presents contained within here that were made
        with lots of love and care in the hopes that
        we can repay back all the love and care you've given us.
        Don't worry about being able to show everything on stream,
        feel free to appreciate what you can and check it out later if you'd like!
      </p>
      <p>
        A thousand thanks for being the one who brought us all together almost 2 years ago!
        Without you, this project would never have been possible with you inspiring us
        or making us laugh and smile every day.
        Hopefully today, you'll let us be the one who can make you smile with our gift.
      </p>

      <h3 class="brown--text">Birthday Website</h3>
      <ul class="pb-4">
        <li><strong>Mumei's Civilization Discord Staff and Members</strong></li>
        <li><strong>Mumei's Sanctuary Discord Staff and Members</strong></li>
        <li><strong>jetrico</strong> - Site Project Organiser, Lead Programmer</li>
        <li><strong>Nin-tan【人単】</strong> - Room Artwork, Object Guides</li>
        <li><strong>The Gnome's Prophet</strong> - Site Project Organiser, The Afterword</li>
        <li><strong>Jackie Chan</strong> - Site Project Organiser, Video Project Organiser</li>
        <li><strong>Mudrock</strong> - Site Project Organiser</li>
        <li>
          Assets
          <ul>
            <li>Mumei - <strong>Faerieko</strong></li>
            <li>Sana - <strong>Pet</strong></li>
            <li>Fauna - <strong>DeezNiceDrawins</strong></li>
            <li>Kronii - <strong>Akkaネン</strong></li>
            <li>Baelz - <strong>Sayowl</strong></li>
            <li>Irys - <strong>Nin-tan【人単】</strong></li>
            <li>Room Layout - <strong>Nin-tan【人単】</strong></li>
            <li>Birthday Cake - <strong>Sayowl & Faerieko</strong></li>
            <li>Central Table - <strong>Nin-tan【人単】</strong></li>
            <li>Birthday Banner - <strong>Pet</strong></li>
            <li>Animal - <strong>AlphaCas</strong></li>
            <li>Hoomans - <strong>Sayowl</strong></li>
            <li>Friend - <strong>Chlorine Cocktail</strong></li>
            <li>Hootsie - <strong>0btuse</strong></li>
            <li>Letter Pile - <strong>DeezNiceDrawins</strong></li>
            <li>Photos by the bed - <strong>Sayowl, Mocha Alpaca</strong></li>
            <li>PC - <strong>Sayowl</strong></li>
            <li>Framed Owl Adoption Certificate - <strong>Sayowl</strong></li>
            <li>Pile of drawings - <strong>AlphaCas</strong></li>
            <li>Floor Balloons, Floating Present - <strong>Sayowl</strong></li>
            <li>Balloons by bed - <strong>AlphaCas</strong></li>
            <li>
              Birthday streamers, Figurines, Baseball Bat, Presents -
              <strong>Chlorine Cocktail</strong>
            </li>
            <li>Sanalite - <strong>Nofuukee</strong></li>
            <li>Unique Hooman - <strong>Jesus Alberto</strong></li>
            <li>Clothing in Closet - <strong>Akkaネン</strong></li>
          </ul>
        </li>
        <li>
          Music &amp; Sounds
          <ul>
            <li>Main BGM - <strong>Wherefore</strong></li>
            <li>Barks - <strong>Animal</strong></li>
          </ul>
        </li>
        <li>
          Interface
          <ul>
            <li>Feather Cursor, Favicon - <strong>jetrico</strong></li>
            <li>Quests Icon - <strong>jetrico</strong></li>
            <li>BGM Icon - <strong>Wherefore</strong></li>
          </ul>
        </li>
      </ul>

      <h3 class="brown--text">Birthday Website</h3>
      <ul class="pb-4">
        <li>Organised by <strong>The Gnome’s Prophet</strong></li>
        <li>Donations by <strong>Hoomans</strong></li>
        <li>The Owls Trust in the UK</strong></li>
      </ul>

      <h3 class="brown--text">Appreciation Video Project</h3>
      <ul class="pb-4">
        <li>Organised by <strong>Jackie Chan</strong></li>
        <li>Script by <strong>Jackie Chan</strong></li>
        <li>Edited by <strong>Jackie Chan</strong></li>
        <li>Music by <strong>DOVA-SYNDROME Youtube Official</strong></li>
        <li>
          Art by
          <ul>
            <li><strong>Abigail Casanova</strong></li>
            <li><strong>DeezNiceDrawins</strong></li>
            <li><strong>AlphaCas</strong></li>
            <li><strong>YmirDraws</strong></li>
            <li><strong>Leftovers</strong></li>
            <li><strong>romeo (the silliest)</strong></li>
            <li><strong>Ghostbyun</strong></li>
            <li><strong>angsty eli</strong></li>
            <li><strong>Mocha Alpaca</strong></li>
            <li><strong>mochirice</strong></li>
            <li><strong>The Arrow</strong></li>
            <li><strong>crim</strong></li>
          </ul>
        </li>
      </ul>

      <h3 class="brown--text">Special Thanks to</h3>
      <ul class="pb-4">
        <li>Staff of Mumei Civilization and Sanctuary discords</li>
      </ul>

      <h3 class="brown--text">Links</h3>
      <ul class="pb-4">
        <li>Drawing Board (closed): <strong>https://magma.com/d/zcJiFfe09Y</strong></li>
        <li>Owls Trust Organisation: <a href="https://theowlstrust.org/" target="_blank">https://theowlstrust.org/</a></li>
        <li>MumeiCiv: <a href="https://twitter.com/MumeiCiv" target="_blank">https://twitter.com/MumeiCiv</a></li>
        <li>MumeisCivilization: <a href="https://www.youtube.com/@MumeisCivilization" target="_blank">https://www.youtube.com/@MumeisCivilization</a></li>
      </ul>
    </div>
    <div class="project-close">
      <v-btn
        @click="$root.$emit('closeProject')"
        block large elevation="1" color="brown lighten-4">
        Close
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.project {
  height:90vh;
  position:relative;
  .project-title {
    left:0;
    right:0;
  }
  .project-content {
    position:absolute;
    top: 50px;
    left:0;
    right:0;
    bottom:110px;
    overflow-y:scroll;
    background:#f0f0f0;
    padding:10px 20px;
  }
  .project-close {
    position:absolute;
    bottom:40px;
    left:0;
    right:0;
  }
}
</style>
