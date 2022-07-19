<template>
  <div class="project">
    <div class="project-title">
      <h2 class="text-center">Quests</h2>
      <!-- <h3 class="text-center">List is in the suggested viewing order</h3> -->
    </div>
    <div class="project-content">
      <ul>
        <li v-for="(quest, project) in questStatus" :key="`quest-${project}`">
          <input type="checkbox" onclick="return false;" :checked="quest" />
          <span>{{questText[project]}}</span>
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
      messages: 'Read of letters scattered on the floor',
      friend: 'Friend has a few outfits he wants to show',
      animol: 'Click on animol and hear what she has to say',
      tour: 'Go outside, and meet Hoomans around the world',
    },
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
    top: 80px;
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

ul {
  margin:0;
  padding:0;
  font-size:24px;
  li {
    margin:0;
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
