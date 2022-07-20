<template>
  <div class="project">
    <div class="project-description">
      <h2>Birthday Cards</h2>
      <p>
        Many hoomans sincerely wish Nanashi Mumei a very happy birthday this year!
      </p>
      <p class="blue--text">
        PROTIP: Click on a card to mark it as read. It will persist even across website visits.
        <span class="red--text font-weight-bold">Read messages:  {{countRead}} / {{countAll}}</span>
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
        <div
          v-masonry-tile
          :class="[ 'card', read[item.name] ? 'card-read' : '', censor ? 'card-censor' : '' ]"
          v-for="(item, ix) in cards" :key="`card-${ix}`"
          @click="toggleRead(item.name)"
        >
          <div class="binder"></div>
          <div class="card-name text-h6 pr-12 py-2">{{item.name}}</div>
          <div class="card-text text-body-1 pr-4 pb-2">{{item.message}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import twemoji from 'twemoji';

export default {
  data: () => ({
    source: 'https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei2022.json',
    cards: [],
    read: {},
    countRead: 0,
    countAll: 0,
    censor: true,
  }),
  methods: {
    toggleRead(key) {
      if (typeof this.read[key] === 'undefined') this.read[key] = false;
      this.read = { ...this.read, [key]: !this.read[key] };
      localStorage.setItem('mumei2022_read', JSON.stringify(this.read));
      this.countRead = Object.values(this.read).filter((v) => !!v).length;
    },
    spoiler() {
      this.censor = !this.censor;
    },
  },
  mounted() {
    // Load data
    (async () => {
      if (!localStorage.getItem('mumei2022_read')) localStorage.setItem('mumei2022_read', '{}');
      this.read = JSON.parse(localStorage.getItem('mumei2022_read'));
      this.countRead = Object.values(this.read).filter((v) => !!v).length;
      const fetchSource = await axios.get(this.source).catch(() => null);
      const data = fetchSource && fetchSource.data ? fetchSource.data : {};
      this.cards = Object.values(data.messages)
        .sort((a, b) => a.time - b.time);
      this.countAll = this.cards.length;
      this.$nextTick(() => {
        twemoji.parse(document.body);
        this.$redrawVueMasonry('bdaycards');
        setTimeout(() => {
          this.$redrawVueMasonry('bdaycards');
        }, 1200);
      });
    })();
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
    // background:#c2af8b;
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
  background:#FFFFFF;
  position:relative;
  padding-left:20px;
  min-height:100px;
  width:24%;
  margin:10px 0.5%;
  border:2px solid #c2af8b;
  background:#f1e7d5;
  .binder {
    background:#c2af8b;
    position:absolute;
    top:0px;
    left:0px;
    width:10px;
    height:100%;
  }
  .card-name {
    color:#343c75;
  }
  .card-text {
    white-space: pre-line;
  }
  &.card-read {
    background:#927a4d;
    color:#ffffff;
    .card-name {
      color:#ffffff;
    }
  }
  &.card-censor {
    .card-text {
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
