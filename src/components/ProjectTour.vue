<template>
  <div class="project">
    <div class="project-description">
      <h2>World Tour</h2>
      <p>
        Meet Friends around the world who also celebrate Mumei's birthday!
        This tour gallery is organized by Sanctuary.
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
          <div class="img"><v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/anon_dellfeld.png"></v-img></div>
          <div class="artist text-center">Anonymous Hooman</div>
          <div class="location text-center">Dellfeld</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/kjwww_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/kjwww_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/kjwww_03.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">kjwww</div>
          <div class="location text-center">Outside our house, Sierra Vista, Philippines.</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/barghati_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/barghati_02.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">바르그하티</div>
          <div class="location text-center">Korea, seoul, Han-ok Village</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img"><v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/kitsunej_01.png"></v-img></div>
          <div class="artist text-center">Kitsune J</div>
          <div class="location text-center">Essex County South Mountain Recreation Complex</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/lemon_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/lemon_02.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">Lemon</div>
          <div class="location text-center">Time square, New York</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img"><v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/anon_sanfran.png"></v-img></div>
          <div class="artist text-center">Anonymous Hooman</div>
          <div class="location text-center">San Francisco</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/gabyuwu_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/gabyuwu_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/gabyuwu_03.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">Gaby uwu</div>
          <div class="location text-center">Bellas Artes Museum, Mexico</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img"><v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/mikachu05_01.png"></v-img></div>
          <div class="artist text-center">mikachu05</div>
          <div class="location text-center">Castle Acre Norfolk England</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img"><v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/anon_malecon.png"></v-img></div>
          <div class="artist text-center">Anonymous Hooman</div>
          <div class="location text-center">Malecon 2000</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/grizzly_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/grizzly_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/grizzly_03.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/grizzly_04.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/grizzly_05.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">Grizzly ~ ☆</div>
          <div class="location text-center">Zapopan's Historical Center and Minerva Roundabout</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/ignisdark_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/ignisdark_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/ignisdark_03.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/ignisdark_04.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">Ignis.Dark</div>
          <div class="location text-center">Victoria and Albert museum </div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/winner_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/winner_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/winner_03.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/winner_04.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">Winner</div>
          <div class="location text-center">Greenbelt Trail - Long Island, NY</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/waffle_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/waffle_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/waffle_03.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/waffle_04.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/waffle_05.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">waffle</div>
          <div class="location text-center">Rideau Canal, Ottawa (Canada)</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/euroaxleenthusiast_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/euroaxleenthusiast_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/euroaxleenthusiast_03.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/euroaxleenthusiast_04.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/euroaxleenthusiast_05.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">euroaxleenthusiast</div>
          <div class="location text-center">Friend visiting the council members</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img"><v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/azusadesu_01.png"></v-img></div>
          <div class="artist text-center">あずさです!!</div>
          <div class="location text-center">
            Field overlooking Slieve [pronounced "Sleeve"] Donard, somewhere in Ireland
          </div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img"><v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/speedfreak_01.png"></v-img></div>
          <div class="artist text-center">XSpeedfreakX</div>
          <div class="location text-center">Mall Of Asia, Philippines</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/peralsey_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/peralsey_02.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">peralsey</div>
          <div class="location text-center">Lake Erie, USA</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sylfero_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sylfero_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sylfero_03.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sylfero_04.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sylfero_05.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">Sylfero</div>
          <div class="location text-center">Slow Mile (Gausā jūdze, Latvija)</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/soouuup_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/soouuup_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/soouuup_03.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/soouuup_04.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/soouuup_05.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">soouuup</div>
          <div class="location text-center">my bedroom</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/manst_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/manst_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/manst_03.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/manst_04.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/manst_05.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">單推烤肉man的ST</div>
          <div class="location text-center">
            Hong Kong-IFC, The Peak, Disneyland, Victoria Harbour
          </div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="img">
            <v-carousel>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sinefinebelli_01.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sinefinebelli_02.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sinefinebelli_03.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sinefinebelli_04.png"></v-img>
              </v-carousel-item>
              <v-carousel-item>
                <v-img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeitour/sinefinebelli_05.png"></v-img>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="artist text-center">Sine_Fine_Belli</div>
          <div class="location text-center">San Diego</div>
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
      this.censor = !this.censor;
    },
  },
  mounted() {
    this.$nextTick(() => { this.$redrawVueMasonry('bdaycards'); });
    setTimeout(() => { this.$redrawVueMasonry('bdaycards'); }, 1000);
    setTimeout(() => { this.$redrawVueMasonry('bdaycards'); }, 5000);
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
  overflow:hidden;
  position:relative;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  padding:0px 0px 80px 0px;
  border:2px solid #927a4d;
  .img {
    background:#927a4d;
  }
  .artist {
    position:absolute;
    bottom:45px;
    left:2px;
    right:2px;
    height:30px;
    line-height:30px;
    font-size:20px;
    color:#000000;
    font-weight:bold;
  }
  .location {
    position:absolute;
    bottom:5px;
    left:2px;
    right:2px;
    height:40px;
    line-height:18px;
    font-size:14px;
    color:#927a4d;
  }
  &.card-censor {
    .img {
      filter:blur(20px);
    }
    .artist {
      filter:blur(5px);
    }
    .location {
      filter:blur(10px);
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
