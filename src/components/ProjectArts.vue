<template>
  <div class="project">
    <div class="project-description">
      <h2>Various Birthday Gifts</h2>
      <p>
        Hoomans prepared various gifts for Mumei's birthday!
      </p>
    </div>
    <div class="project-close">
      <v-btn style="margin-right:10px"
        @click="spoiler()"
        large elevation="1" color="brown lighten-4">
        Spoiler
      </v-btn>
      <v-btn
        @click="$root.$emit('closeProject')"
        large elevation="1" color="brown lighten-4">
        Close
      </v-btn>
    </div>
    <div class="project-content">
      <div v-masonry="'bdaycards'" transition-duration="0.3s" item-selector=".card" stagger="0s">
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/anewstartremixpackage.png" />
          <div class="gift-note text-center">
            <a href="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/anewstartremixpackage.zip" target="_blank">
              A New Start Remix Package (Download)
            </a>
          </div>
          <div class="artist text-center">romeo the silliest</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/$photos1.png" />
          <div class="artist text-center">Abigail Casanova / Sayowl</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/$photos2.png" />
          <div class="artist text-center">Mocha Alpaca</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/sayowl.png" />
          <div class="artist text-center">Abigail Casanova / Sayowl</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/scount.png" />
          <div class="artist text-center">scount</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/alphacas.png" />
          <div class="artist text-center">AlphaCas</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/jesusalberto.png" />
          <div class="artist text-center">Jesús Alberto</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/akka.png" />
          <div class="artist text-center">Akkaネン</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/dangercatra.png" />
          <div class="artist text-center">DangerCatra</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/deez.png" />
          <div class="artist text-center">DeezNiceDrawins</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/miyach.png" />
          <div class="artist text-center">Mumei Gundam</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/no87.png" />
          <div class="artist text-center">No.87</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/solodestructo.png" />
          <div class="artist text-center">Solo_K_art</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/mocha.png" />
          <div class="artist text-center">Mocha Alpaca</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/veejaiii.png" />
          <div class="artist text-center">VeeJaiii The Moomin Silly</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/okami.png" />
          <div class="artist text-center">Okami</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/ryougraph.png" />
          <div class="artist text-center">Mikki RYOUGRAPH</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/sine2.png" />
          <div class="artist text-center">Sine_Fine_Belli</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/mameng.png" />
          <div class="artist text-center">Mameng</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/eli.png" />
          <div class="artist text-center">Angsty Eli</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/gorani.png" />
          <div class="artist text-center">Gorani</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/kudarannn.png" />
          <div class="artist text-center">Kudarannn</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/umicross.png" />
          <div class="artist text-center">Umicross</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2023/noobilator.png" />
          <div class="artist text-center">The Noobilator</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: () => ({
    censor: true,
  }),
  methods: {
    spoiler() {
      this.$redrawVueMasonry('bdaycards');
      this.censor = !this.censor;
    },
  },
  mounted() {
    this.$nextTick(() => { this.$redrawVueMasonry('bdaycards'); });
    setInterval(() => { this.$redrawVueMasonry('bdaycards'); }, 1000);
    // setTimeout(() => { this.$redrawVueMasonry('bdaycards'); }, 5000);
  },
};
</script>

<style lang="scss" scoped>
.project {
  height:86vh;
  position:relative;
  .project-description {
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    overflow:hidden;
    h3 {
      padding:0;
      margin:0;
    }
    p {
      padding:0;
      margin:0;
    }
  }
  .project-content {
    position:absolute;
    top: 90px;
    left: 0;
    right: 0;
    bottom: 0;
    // background:#927a4d;
    overflow-y:scroll;
  }
  .project-close {
    position:absolute;
    top: 0;
    right: 0;
    width: 230px;
    height: 50px;
  }
}

.card {
  background:#f1e7d5;
  position:relative;
  overflow:hidden;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  padding:0px 0px 24px 0px;
  border:2px solid #927a4d;
  img {
    width:100%;
  }
  div.gift {
    width:100%;
    padding:10px;
  }
  .gift-note {
    font-size:16px;
    margin:0px 0px 5px 0px;
  }
  .gift-anniv {
    font-size:16px;
    margin:0px 0px 0px 0px;
  }
  .artist {
    position:absolute;
    bottom:0;
    left:2px;
    right:2px;
    height:30px;
    line-height:30px;
    font-size:20px;
    font-weight:bold;
    color:#3f3118;
  }
  &.card-censor {
    img {
      filter:blur(20px);
    }
    div.gift {
      filter:blur(5px);
    }
  }
}

@media only screen and (max-width: 1800px) {
  .card {
    width:32%;
    margin:10px 0.5%;
  }
}
@media only screen and (max-width: 1264px) {
  .card {
    width:48%;
    margin:10px 1%;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width:96%;
    margin:10px 2%;
  }
}
</style>

<style lang="scss">
.card-text {
  img {
    height:1.4rem;
  }
}
</style>
