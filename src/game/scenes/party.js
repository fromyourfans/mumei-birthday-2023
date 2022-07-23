import Phaser from 'phaser';
import ElementsData from '@/data/elements';

const INTENSITY_X = 0.008;
const INTENSITY_Y = 0.004;

class PartyScene extends Phaser.Scene {
  overlay = null;

  movables = {};

  transition = null;

  confettiState = false;

  lightState = true;

  ambientLight = null;

  candleLight = null;

  radioAudio = null;

  projectAudio = null;

  bgm = null;

  candleBlown = false;

  create() {
    const { width, height } = this.sys.game.canvas;
    const centerX = width / 2;
    const centerY = height / 2;

    // Version number
    this.add.text(width - 5, height - 25, 'Version 2207190000', {
      fontFamily: 'Arial',
      fontSize: 16,
      align: 'right',
      color: '#ffffff',
      stroke: '#131313',
      strokeThickness: 4,
    })
      .setDepth(60000)
      .setOrigin(1, 0);

    // Bark sounds
    this.barks = [
      this.sound.add('bark1').setVolume(0.4),
      this.sound.add('bark2').setVolume(0.4),
      this.sound.add('bark3').setVolume(0.4),
      this.sound.add('bark4').setVolume(0.4),
    ];

    // Candle Lights
    this.lights.setAmbientColor(0x0e0e0e);
    this.light1 = this.lights.addLight(width * 0.5, height * 0.75, 900, 0xffdd88, 1);
    this.light2 = this.lights.addLight(width * 0.5, height * 0.75, 1200, 0xffdd88, 2);

    // Animation transition
    this.transition = this.tweens.createTimeline();

    // Create game objects and placements
    Object.entries(ElementsData)
      .forEach(([key, {
        texture, x, y, z, scale, str, ox, oy, lx, ly,
        text, project, font, dir, audio, volume,
      }]) => {
        const container = this.add.container(centerX, centerY).setDepth(z * 10);
        // Image
        const image = this.add.image((width * x) - centerX, (height * y) - centerY, texture || key)
          .setOrigin(ox, oy);
        if (scale) image.setScale(scale);
        container.add(image);
        // Cover
        if (key === 'cover') {
          this.cover = container;
          this.cover.setVisible(false);
        }
        // Interactive object
        if (text) {
          this.interactiveElement(
            key, container, image, text, project, font,
            audio, volume, lx, ly,
          );
        }
        // Transition
        if (
          key !== 'room' && key !== 'trunk' && key !== 'table'
          && key !== 'front1' && key !== 'front2' && key !== 'front3'
        ) this.transitionIn(container, dir);
        // Add to movable list
        this.movables[key] = {
          container,
          strX: str * INTENSITY_X,
          strY: str * INTENSITY_Y,
          image,
        };
      });

    // Friend
    const friendContainer = this.add.container(centerX, centerY).setDepth(900);
    let friendNum = Math.ceil(Math.random() * 96);
    let friendNumStr = String(friendNum).padStart(4, '0');
    this.friend = this.add.sprite(
      (width * 0.41) - centerX,
      (height * 0.61) - centerY,
      'friend',
      `f${friendNumStr}.png`,
    )
      .setDepth(1000)
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        friendNum += 1;
        if (friendNum > 96) friendNum = 1;
        friendNumStr = String(friendNum).padStart(4, '0');
        this.friend.setFrame(`f${friendNumStr}.png`);
        this.game.vue.$root.$emit('doneQuest', { questId: 'friend' });
      });
    this.add.tween({
      targets: this.friend,
      y: this.friend.y - 30,
      x: this.friend.x - 7,
      angle: 5,
      ease: 'Cubic.easeInOut',
      yoyo: true,
      duration: 4000,
      loop: -1,
    });
    friendContainer.add(this.friend);
    this.movables.friend = {
      container: friendContainer,
      strX: 0.85 * INTENSITY_X,
      strY: 0.85 * INTENSITY_Y,
    };

    // Transition Animation
    this.transition
      .on('complete', () => {
        // Parallax
        this.input.on('pointermove', (pointer) => {
          if (!this.lightState) {
            this.light2.x = pointer.x;
            this.light2.y = pointer.y;
          } else {
            const dx = pointer.x - centerX;
            const dy = pointer.y - centerY;
            Object.values(this.movables).forEach(({ container, strX, strY }) => {
              const newX = centerX - (dx * strX);
              const newY = centerY - (dy * strY);
              container.setPosition(newX, newY);
            });
          }
        });
      })
      .play();

    // Overlay
    this.input.topOnly = true;
    this.overlay = this.add.rectangle(centerX, centerY, 1920, 937, 0x1a1a1a)
      .setInteractive()
      .setAlpha(0.75)
      .setDepth(4000)
      .on('pointerdown', () => {})
      .setVisible(false);
    this.game.vue.$root.$on('projectClosed', () => {
      this.overlay.setVisible(false);
      // setTimeout(() => {
      //   this.overlay.setVisible(false);
      // }, 500);
    });

    // Confetti
    this.confetti = this.add.particles('confetti');
    this.confettiEmitter = this.confetti.setDepth(3500).createEmitter({
      frame: ['1', '2', '3', '4', '5', '6', '7', '8'],
      x: { min: 0, max: 1920 },
      y: { min: -300, max: -30 },
      scale: 0.4,
      gravityX: -3,
      gravityY: 50,
      frequency: 100,
      lifespan: 7000,
      speed: { min: 3, max: 15 },
    });
    this.confettiEmitter.setVisible(this.confettiState);

    // Quests
    this.questIcon = this.add.container(0, 0, [
      this.add.rectangle(0, height - 240, 240, 240)
        .setOrigin(0, 0)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
          this.overlay.setVisible(true);
          this.game.vue.dialog = true;
          this.game.vue.openProject = 'quests';
        }),
      this.add.image(20, height - 220, 'quests')
        .setDisplaySize(180, 180)
        .setOrigin(0, 0),
      this.add.text(20, height - 60, 'Quests', {
        fontFamily: 'Londrina Solid',
        fontSize: 40,
        color: '#ffffff',
        stroke: '#131313',
        strokeThickness: 4,
        fixedWidth: 180,
        align: 'center',
      }),
    ]).setDepth(3601);

    // All Quests Completed
    this.game.vue.$root.$on('allQuestComplete', () => {
      this.lightsOff();
    });
  }

  transitionIn(container, dir) {
    container.setAlpha(0);
    let directionTween = {};
    if (dir === 'top') {
      // eslint-disable-next-line no-param-reassign
      container.y -= 200;
      directionTween = { y: '+=200' };
    } else if (dir === 'left') {
      // eslint-disable-next-line no-param-reassign
      container.x -= 200;
      directionTween = { x: '+=200' };
    } else if (dir === 'right') {
      // eslint-disable-next-line no-param-reassign
      container.x += 200;
      directionTween = { x: '-=200' };
    } else if (dir === 'bottom') {
      // eslint-disable-next-line no-param-reassign
      container.y += 200;
      directionTween = { y: '-=200' };
    }
    this.transition.add({
      targets: container,
      ...directionTween,
      alpha: { from: 0, to: 1 },
      ease: 'Circ.easeOut',
      duration: 300,
      repeat: 0,
      offset: '-=230',
    });
  }

  interactiveElement(
    key, container, image, text, project, fontSize = 30,
    audio = null, volume = 0.5, lx = 0, ly = 0,
  ) {
    // Label
    const lblOffX = (lx * image.width) || 0;
    const lblOffY = (ly * image.height) || 0;
    const label = this.createLabel(image.x + lblOffX, image.y + lblOffY, text, fontSize)
      .setDepth(2000 + image.depth);
    container.add(label);
    // Interaction
    image
      .setInteractive({ pixelPerfect: true })
      .on('pointerover', () => {
        if (key === 'cake' && !this.lightState) {
          // Cake available if lights are off, but not when on
          label.setVisible(true);
          this.light1.setIntensity(2);
        } else if (key === 'lantern' && this.candleBlown) {
          // Lantern no hover on candleBlown
        } else if (key !== 'cake' && this.lightState) {
          // Everything else available only if lights are on
          image.setAngle((Math.random() * 3) - 1);
          label
            .setAngle((Math.random() * 11) - 5)
            .setVisible(true);
        }
      })
      .on('pointerout', () => {
        image.setAngle(0);
        label.setVisible(false);
        this.light1.setIntensity(1);
        // Stop hover audio
        if (this.projectAudio) this.projectAudio.stop();
        this.projectAudio = null;
      })
      .on('pointerdown', () => {
        if (key === 'cake') {
          // Cake available if lights off
          if (!this.lightState) this.fanfare();
        } else if (key === 'animol') {
          // Animol barks
          const bark = this.barks[Math.floor(Math.random() * 4)];
          bark.play();
          this.game.vue.$root.$emit('doneQuest', { questId: 'animol' });
        } else if (key === 'lantern') {
          // Lights Off
          if (!this.candleBlown) this.lightsOff();
        } else if (this.lightState) {
          // Everything else available only if lights are on
          this.overlay.setVisible(true);
          this.game.vue.dialog = true;
          this.game.vue.openProject = project;
          if (project === 'tour') this.game.vue.$root.$emit('doneQuest', { questId: 'tour' });
          if (project === 'mural') this.game.vue.$root.$emit('doneQuest', { questId: 'mural' });
          if (project === 'messages') this.game.vue.$root.$emit('doneQuest', { questId: 'messages' });
        }
      });
  }

  interactiveAloupeep(container, text, project, fontSize = 30, audio = null, volume = 0.5) {
    // Label
    const label = this.createLabel(container.sprite.x, container.sprite.y, text, fontSize)
      .setDepth(2000 + container.sprite.depth);
    container.add(label);
    // Interaction
    container.sprite
      .setInteractive()
      .on('pointerover', () => {
        if (!this.lightState) return;
        container.sprite.setAngle((Math.random() * 3) - 1);
        label
          .setAngle((Math.random() * 11) - 5)
          .setVisible(true);
      })
      .on('pointerout', () => {
        container.sprite.setAngle(0);
        label.setVisible(false);
        // Stop hover audio
        if (this.projectAudio) this.projectAudio.stop();
        this.projectAudio = null;
      })
      .on('pointerdown', () => {
        if (!this.lightState) return;
        this.overlay.setVisible(true);
        this.game.vue.dialog = true;
        this.game.vue.openProject = project;
        // Stop radio audio
        if (this.radioAudio) this.radioAudio.stop();
        this.radioAudio = null;
        // Stop hover audio
        if (this.projectAudio) this.projectAudio.stop();
        this.projectAudio = null;
      });
  }

  createLabel(x, y, text, fontSize) {
    return this.add.text(x, y, text, {
      fontFamily: 'Londrina Solid',
      fontSize: fontSize || 50,
      color: '#ffffff',
      stroke: '#003366',
      strokeThickness: 5,
    })
      .setOrigin(0.5, 0.5)
      .setVisible(false);
  }

  toggleConfetti() {
    this.confettiState = !this.confettiState;
    this.confettiEmitter.setVisible(this.confettiState);
  }

  lightsOff() {
    if (this.candleBlown) return;
    this.candleBlown = true;
    this.lightState = false;
    this.cover.setVisible(true);
    this.bgm = this.sound.add('bgm').setVolume(0.7).play();
    Object.values(this.movables).forEach(({ image, sprite }) => {
      if (image) image.setPipeline('Light2D');
      if (sprite) {
        sprite.setPipeline('Light2D');
        sprite.stop();
      }
    });
    this.friend.setPipeline('Light2D');
    this.questIcon.setVisible(false);
    this.lights.enable();
    this.light2.x = this.input.x;
    this.light2.y = this.input.y;
    this.confettiState = false;
    this.confettiEmitter.setVisible(this.confettiState);
  }

  fanfare() {
    this.lightState = true;
    this.cover.setVisible(false);
    Object.values(this.movables).forEach(({ image, sprite }) => {
      if (image) image.setPipeline('MultiPipeline');
      if (sprite) {
        sprite.setPipeline('MultiPipeline');
        sprite.anims.restart();
      }
    });
    this.friend.setPipeline('MultiPipeline');
    this.questIcon.setVisible(true);
    this.lights.disable();
    this.confettiState = true;
    this.confettiEmitter.setVisible(this.confettiState);
  }
}

export default PartyScene;
