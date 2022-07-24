<template>
  <div class="project">
    <div class="project-title">
      <h1 class="text-center">Quests</h1>
      <h2 class="text-center red--text">Complete all quests to unlock the secret!</h2>
    </div>
    <div class="project-content">
      <ul>
        <li v-for="(quest, project) in questStatus" :key="`quest-${project}`">
          <input type="checkbox" onclick="return false;" :checked="quest" />
          <span>{{questText[project]}}</span>
        </li>
        <li>
          <input type="checkbox" onclick="return false;" disabled />
          <span>{{questText.lightsoff}}</span>
        </li>
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
  props: ['questStatus'],
  data: () => ({
    questText: {
      mural: 'Check the painting the Hoomans drew together',
      messages: 'Check letters scattered on the floor',
      friend: 'Friend has a few outfits he wants to show',
      animol: 'Click on animol and hear what she has to say',
      tour: 'Go outside, and meet Hoomans around the world',
      fanarts: 'Open birthday gifts at the bottom of the shelves',
      ipod: 'Listen to the music player on the bed',
      credits: 'Read [The Afterword] on Credits (top-left)',
      lightsoff: '- Secret Final Quest -',
    },
  }),
  mounted() {
    if (Object.values(this.questStatus).reduce((c, v) => c && v, true)) {
      this.questText.lightsoff = 'Make a wish and blow the candle!';
      this.$root.$emit('allQuestComplete');
    }
  },
};
</script>

<style lang="scss" scoped>
.project {
  height:80vh;
  position:relative;
  .project-title {
    left:0;
    right:0;
  }
  .project-content {
    position:absolute;
    top: 100px;
    left:0;
    right:0;
    bottom:60px;
    overflow-y:scroll;
    background:#f1e7d5;
    padding:10px 20px;
  }
  .project-close {
    position:absolute;
    bottom:0px;
    left:0;
    right:0;
  }
}

ul {
  margin:0;
  padding:0;
  font-size:24px;
  li {
    margin:10px 0px 0px 0px;
    padding:0;
    list-style: none;
    input {
      width: 18px;
      height: 18px;
      margin-right:10px;
    }
  }
}
</style>
