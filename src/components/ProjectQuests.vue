<template>
  <div class="project">
    <div class="project-title">
      <h1 class="text-center">Quests</h1>
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
      mural: 'Look at the pile of crayon drawings',
      messages: 'Check the bundled letters on the floor',
      animol: 'Click on animol and hear what she has to say',
      fanarts: 'Check the photos by the bed',
      certificate: 'What is that certificate on the cabinet?',
      video: 'You have a notification on the computer',
      credits: 'See Credits (top-left)',
    },
  }),
};
</script>

<style lang="scss" scoped>
.project {
  height:480px;
  position:relative;
  .project-title {
    left:0;
    right:0;
  }
  .project-content {
    position:absolute;
    top: 60px;
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
