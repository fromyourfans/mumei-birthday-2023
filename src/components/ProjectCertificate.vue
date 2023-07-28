<template>
  <div class="project">
    <div class="project-description">
      <h3>PlaceholderTitle</h3>
      <p>PlaceholderDescription</p>
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
        <v-carousel-item :src="Cookbook01" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook02" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook03" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook04" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook05" contain ></v-carousel-item>
        <v-carousel-item :src="Cookbook06" contain ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import Cookbook01 from '@/assets/mural-20220719.png';
import Cookbook02 from '@/assets/mural-20220719.png';
import Cookbook03 from '@/assets/mural-20220719.png';
import Cookbook04 from '@/assets/mural-20220719.png';
import Cookbook05 from '@/assets/mural-20220719.png';
import Cookbook06 from '@/assets/mural-20220719.png';

export default {
  props: ['image'],
  data: () => ({
    maxHeight: 480,
    Cookbook01,
    Cookbook02,
    Cookbook03,
    Cookbook04,
    Cookbook05,
    Cookbook06,
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
