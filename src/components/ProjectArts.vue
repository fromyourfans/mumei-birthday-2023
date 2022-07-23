<template>
  <div class="project">
    <div class="project-description">
      <h2>Birthday Fan Art</h2>
      <p>
        Artists prepared gifts for Mumei's birthday!
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
          <img src="@/assets/tour/sample1.png" />
          <div class="artist text-center">submissionName</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="@/assets/tour/sample2.png" />
          <div class="artist text-center">submissionName</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="@/assets/tour/sample3.png" />
          <div class="artist text-center">submissionName</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="@/assets/tour/sample4.png" />
          <div class="artist text-center">submissionName</div>
        </div>
        <div v-masonry-tile :class="[ 'card', censor ? 'card-censor' : '' ]">
          <img src="@/assets/tour/sample5.png" />
          <div class="artist text-center">submissionName</div>
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
    // Load data
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
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  padding:10px 10px 24px 10px;
  border:2px solid #927a4d;
  img {
    width:100%;
  }
  .artist {
    position:absolute;
    bottom:0;
    left:2px;
    right:2px;
    height:30px;
    line-height:30px;
    font-size:20px;
    color:#927a4d;
  }
  &.card-censor {
    img {
      filter:blur(20px);
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
