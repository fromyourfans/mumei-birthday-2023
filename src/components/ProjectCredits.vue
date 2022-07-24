<template>
  <div class="project">
    <div class="project-title">
      <h2 class="text-center">Nanashi Mumei Birthday Project Credits</h2>
    </div>
    <div class="project-content">
      <h3 class="brown--text">The Afterword</h3>
      <p>
        Happy Birthday Mumshi!
        This time alot of hoomans worked together to prepare a gift for you.
        We put together a birthday party with many gifts for you to open!
        As you can see, council and some hoomans are in attedance,
        but know that everyone celebrates this special day with you,
        including Myth, all Hololive Production talents, staff,
        and 700,000 hoomans who truly like you!
      </p>
      <p>
        The first and foremost "thank you" is for Nanashi Mumei.
        You are the one who brought us together,
        you are the one making us smile, laugh, and inspired regularly.
        The hooman community was built around you, and the amazing things you show us.
        In this special day, let us be the one giving back to you.
      </p>
      <p>
        This is the day when we appreciate that Nanashi Mumei graced our world.
        This day may have added 1 to your age, but isn't it a small price
        to pay for the next whole year of fun moments we'll enjoy together?
      </p>

      <h3 class="brown--text">Birthday Website</h3>
      <ul class="pb-4">
        <li><strong>Mumei's Civilization Discord Staff and Members</strong></li>
        <li><strong>Mumei's Sanctuary Discord Staff and Members</strong></li>
        <li><strong>jetrico</strong> - Project Organizer, Lead Programmer, The Afterword</li>
        <li><strong>Nin-tan【人単】</strong> - Room Artwork, Object Guides</li>
        <li>
          Artworks
          <ul>
            <li>Mumei - <strong>jetrico</strong></li>
            <li>Sana - <strong>IanCSamson</strong></li>
            <li>Fauna - <strong>faerieko</strong></li>
            <li>Kronii - <strong>Abstraction</strong></li>
            <li>Baelz - <strong>AlphaCas</strong></li>
            <li>Room Layout - <strong>Nin-tan【人単】</strong></li>
            <li>Birthday Cake - <strong>bukiyos_art</strong></li>
            <li>Central Table - <strong>jetrico</strong></li>
            <li>Birthday Banner - <strong>Trix Mix</strong></li>
            <li>Hooman Avatars - <strong>collywob5</strong></li>
            <li>Painting - <strong>Trix Mix</strong></li>
            <li>Letters on Floor - <strong>faerieko</strong></li>
            <li>Balloon Sets - <strong>0btuse</strong></li>
            <li>Kronii Dakimakura, Pillows - <strong>sprub</strong></li>
            <li>Bananas, Berries - <strong>Mogu Mogu</strong></li>
            <li>Ceiling Flags - <strong>Mogu Mogu</strong></li>
            <li>Lantern - <strong>oCat</strong></li>
            <li>Spider - <strong>Error 404 Name Not Found</strong></li>
            <li>Rice - <strong>oCat</strong></li>
            <li>Shelf Items - <strong>AlphaCas</strong></li>
            <li>Friend (all variants) - <strong>Eli</strong></li>
            <li>Animol - <strong>Đay</strong></li>
            <li>Music Player - <strong>Wherefore</strong></li>
          </ul>
        </li>
        <li>
          Music &amp; Sounds
          <ul>
            <li>Main BGM - <strong>Wherefore</strong></li>
            <li>Lights Out BGM - <strong>Wherefore</strong></li>
            <li>New Start Remix - <strong>Wherefore</strong></li>
            <li>Barks - <strong>Animol</strong></li>
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

      <h3 class="brown--text">Special Thanks to:</h3>
      <ul class="pb-4">
        <li>Staff of Mumei Civilization and Sanctuary discords</li>
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
