<template>
  <div class="project">
    <div class="project-description">
      <h3>The Owls Trust Fundraiser Certificate</h3>
      <p>The Owls Trust official fundraiser certificate.</p>
    </div>
    <div class="project-close">
      <v-btn
        @click="$root.$emit('closeProject')"
        block large elevation="1" color="brown lighten-4">
        Close
      </v-btn>
    </div>
    <div class="project-content" ref="container">
      <v-carousel height="100%" hide-delimiters progress>
        <v-carousel-item :src="Cert1Img" contain ></v-carousel-item>
        <v-carousel-item :src="Cert2Img" contain ></v-carousel-item>
        <v-carousel-item :src="Cert3Img" contain ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import Cert1Img from '@/assets/certs/cert1.png';
import Cert2Img from '@/assets/certs/cert2.png';
import Cert3Img from '@/assets/certs/cert3.png';

export default {
  props: ['image'],
  data: () => ({
    maxHeight: 480,
    Cert1Img,
    Cert2Img,
    Cert3Img,
  }),
  methods: {
    onImgLoaded() {
      console.log(this.$refs.container.clientHeight);
      this.maxHeight = this.$refs.container.clientHeight;
    },
    onImgClick() {
      window.open(this.image);
    },
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
    height: 70px;
    overflow:none;
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
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f0f0f0;
  }
  .project-close {
    position:absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 50px;
  }
}
</style>
