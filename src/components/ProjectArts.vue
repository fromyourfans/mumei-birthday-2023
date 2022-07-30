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
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/thumb-dondon.png" />
          <div class="gift-note text-center">
            <a href="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/DON%20DON%20Hand%20Assets%20by%20%C4%90ay.zip" target="_blank">
              DonDon Hand Assets (Download)
            </a>
          </div>
          <div class="artist text-center">Hand Assets from Đay</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/bukiyosart.png" />
          <div class="artist text-center">Mikki BUKIYOS</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/scount.png" />
          <div class="artist text-center">scount</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/nintan.png" />
          <div class="artist text-center">Nin-tan</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/alphacas.png" />
          <div class="artist text-center">AlphaCas</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/shiro.png" />
          <div class="artist text-center">Shiro</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/jisooooo.png" />
          <div class="artist text-center">Jisooooo</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/mogumogu.png" />
          <div class="artist text-center">Mogu Mogu</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/minh.png" />
          <div class="artist text-center">Minh</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/ari33_06.png" />
          <div class="artist text-center">Ari33_06</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/dodee.png" />
          <div class="artist text-center">Dodee</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/eli.png" />
          <div class="artist text-center">Eli</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/leukocytek.png" />
          <div class="artist text-center">@LeukocyteK</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/fozzy.png" />
          <div class="artist text-center">Fozzy</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <div class="gift">
            Weeks before a stream,<br />
            Every hooman had hands on deck.<br />
            Lovingly and carefully planning,<br />
            On what Mumei might want to peck.<br />
            Very early, we settled on some berries,<br />
            Everyone was ready and willing to go -<br />
            Yet we had a few who still forgor,<br />
            Or at least they told us so.<br />
            Under threat of project failure,<br />
            Many of us prayed for days!<br />
            Understanding that our efforts could maybe<br />
            Make our owlshi's day.<br />
            Everyone is happy, everyone is here!<br />
            It is our best wishes to you, on this celebration of the year!
          </div>
          <div class="artist text-center">Xuda</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/lazulis.png" />
          <div class="artist text-center">Lazulis, the Moom Knight (Aspirant)</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei-bday2022/fanart/faerieko.png" />
          <div class="artist text-center">Faerieko</div>
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
