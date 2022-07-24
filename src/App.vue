<template>
  <v-app id="app">
    <div id="bg"></div>
    <div id="game-container" ref="game-container"></div>
    <v-dialog id="projects" v-model="dialog"
      :max-width="dialogWidth"
      elevation="0" overlay-color="brown darken-4" overlay-opacity="0.85">
      <v-card tile class="pa-4">
        <div v-if="openProject === 'tour'">
          <ProjectTour />
        </div>
        <div v-if="openProject === 'mural'">
          <ProjectImage :image="MuralImg" />
        </div>
        <div v-if="openProject === 'messages'">
          <ProjectMessages/>
        </div>
        <div v-if="openProject === 'credits'">
          <ProjectCredits/>
        </div>
        <div v-if="openProject === 'quests'">
          <ProjectQuests :questStatus="questStatus" />
        </div>
        <div v-if="openProject === 'fanarts'">
          <ProjectArts />
        </div>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import MuralImg from '@/assets/mural-20220724.jpg';
import ProjectTour from '@/components/ProjectTour.vue';
import ProjectImage from '@/components/ProjectImage.vue';
import ProjectMessages from '@/components/ProjectMessages.vue';
import ProjectCredits from '@/components/ProjectCredits.vue';
import ProjectQuests from '@/components/ProjectQuests.vue';
import ProjectArts from '@/components/ProjectArts.vue';
import EnnaBirthday from './game';

export default {
  data: () => ({
    MuralImg,
    dialog: false,
    openProject: null,
    dialogWidth: '80vw',
    questStatus: {
      mural: false,
      messages: false,
      friend: false,
      animol: false,
      tour: false,
      fanarts: false,
      ipod: false,
    },
  }),
  watch: {
    dialog(val) {
      if (!val) {
        this.$root.$emit('projectClosed');
        this.openProject = null;
      } else {
        this.dialogWidth = { credits: 660, quests: 700 }[this.openProject] || '96vw';
      }
    },
  },
  mounted() {
    // Start game instance
    // eslint-disable-next-line no-new
    new EnnaBirthday('game-container', this);

    // Device layout
    if (this.$isMobile) {
      // No scrollbar
      document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
      // Game mobile class
      this.$refs['game-container'].classList.add('mobile');
    } else {
      // Game desktop class
      this.$refs['game-container'].classList.add('desktop');
    }

    // Close Project
    this.$root.$on('doneQuest', (data) => {
      if (typeof this.questStatus[data.questId] !== 'undefined') {
        this.questStatus[data.questId] = true;
      }
    });
    this.$root.$on('closeProject', () => {
      this.dialog = false;
    });
  },
  components: {
    ProjectTour,
    ProjectImage,
    ProjectMessages,
    ProjectCredits,
    ProjectQuests,
    ProjectArts,
  },
};
</script>

<style lang="scss">
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
body {
  background: linear-gradient(180deg,
    #c2af8b 0%,
    #f1e7d5 100%
  );
  #app {
    background:none;
    #bg {
      background-image: url(./game/assets/images/room.png);
      background-size:cover;
      z-index:1;
      position:absolute;
      top:0;
      left:-30px;
      right:0;
      bottom:-300px;
      filter:blur(5px);
      opacity:0.4;
    }
    #game-container {
      z-index:2;
      position:relative;
    }
  }
  .v-dialog {
    overflow:hidden;
  }
}
</style>

<style lang="scss" scoped>
#game-container {
  width:100vw;
  height:100vh;
}
</style>
