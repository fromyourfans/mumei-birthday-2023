import Phaser from 'phaser';

class PartyScene extends Phaser.Scene {
  movables = {};

  hoomans = [];

  lightState = true;

  bgm = null;

  bgmOn = true;

  candleBlown = false;

  ipodOn = false;

  create() {
    const { width, height } = this.sys.game.canvas;
    const centerX = width / 2;
    const centerY = height / 2;

    // Version number
    // this.add.rectangle(0, 0, 150, 50)
    //   .setDepth(60001).setOrigin(0, 0)
    //   .setInteractive()
    //   .on('pointerdown', () => {
    //     this.game.vue.$root.$emit('doneQuest', { questId: 'credits' });
    //     this.overlay.setVisible(true);
    //     this.game.vue.dialog = true;
    //     this.game.vue.openProject = 'credits';
    //   });
    this.add.text(5, 5, 'Version 220711.1812', {
      fontFamily: 'Arial',
      fontSize: 14,
      align: 'left',
      color: '#e0e0e0',
      stroke: '#131313',
      strokeThickness: 3,
    }).setDepth(60002).setOrigin(0, 0);
    // this.add.text(5, 22, 'Credits', {
    //   fontFamily: 'Arial',
    //   fontSize: 16,
    //   align: 'left',
    //   color: '#ffffff',
    //   stroke: '#131313',
    //   strokeThickness: 4,
    // }).setDepth(60003).setOrigin(0, 0);

    // Bark sounds
    this.barks = [
      this.sound.add('bark1').setVolume(0.7),
      this.sound.add('bark2').setVolume(0.7),
      this.sound.add('bark3').setVolume(0.7),
      this.sound.add('bark4').setVolume(0.7),
    ];

    // // Candle Lights
    // this.lights.setAmbientColor(0x0e0e0e);
    // this.light1 = this.lights.addLight(width * 0.5, height * 0.75, 900, 0xffdd88, 1);
    // this.light2 = this.lights.addLight(width * 0.5, height * 0.75, 1200, 0xffdd88, 1);

    // Create game objects and placements
    // this.add.image(0, 0, 'preview').setAlpha(0.3).setOrigin(0, 0).setDepth(99999);

    this.add.image(0, 0, 'room').setOrigin(0, 0);
    this.add.image(0, 0, 'flags2').setOrigin(0, 0);
    this.add.image(5, 60, 'balloons1').setOrigin(0, 0);
    this.add.image(1480, 730, 'balloons2').setOrigin(0, 0);
    this.add.image(1323, 514, 'bat').setOrigin(0, 0);
    this.add.image(1028, 557, 'figs').setOrigin(0, 0);

    this.hoverSprites = {
      hfae: this.add.sprite(534, 428, 'hfae').setOrigin(0, 0),
      hdeez: this.add.sprite(885, 289, 'hdeez').setOrigin(0, 0),

      animol: this.add.sprite(410, 250, 'animol').setOrigin(0, 0), // .play('animol'),
      bae: this.add.sprite(1131, 368, 'bae').setOrigin(0, 0), // .play('bae'),
      kronii: this.add.sprite(1420, 340, 'kronii').setOrigin(0, 0), // .play('kronii'),
      fauna: this.add.sprite(395, 420, 'fauna').setOrigin(0, 0), // .play('kronii'),
      sana: this.add.sprite(624, 523, 'sana').setOrigin(0, 0), // .play('sana'),
      friend: this.add.sprite(1111, 675, 'friend').setOrigin(0, 0).setDepth(303), // .play('friend'),
      irys: this.add.sprite(120, 380, 'irys').setOrigin(0, 0), // .play('irys'),

      hnintan: this.add.sprite(767, 843, 'hnintan').setOrigin(0, 0).setDepth(1),
      hjackiegnome: this.add.sprite(935, 809, 'hjackiegnome').setOrigin(0, 0).setDepth(1),
      hjake: this.add.sprite(1182, 796, 'hjake').setOrigin(0, 0).setDepth(1),
      hemi: this.add.sprite(1267, 742, 'hemi').setOrigin(0, 0).setDepth(1),
      hchlorine: this.add.sprite(1358, 811, 'hchlorine').setOrigin(0, 0).setDepth(1),
      hscounty: this.add.sprite(1610, 895, 'hscounty').setOrigin(0, 0).setDepth(1),

      halphaca: this.add.sprite(1655, 567, 'halphaca').setOrigin(0, 0).setDepth(1),
      hsayowl: this.add.sprite(1762, 598, 'hsayowl').setOrigin(0, 0).setDepth(1),
    };

    this.add.image(786, 717, 'table').setOrigin(0, 0);
    this.add.image(617, 286, 'globos').setOrigin(0, 0);
    this.add.image(410, 778, 'hjesusa').setOrigin(0, 0);
    this.add.image(3, 0, 'flags1').setOrigin(0, 0);
    this.add.image(3, 0, 'flags1').setOrigin(0, 0);
    this.add.image(532, 817, 'gifts1').setOrigin(0, 0);
    this.add.image(1097, 889, 'gifts2').setOrigin(0, 0);
    this.add.image(714, 964, 'letters').setOrigin(0, 0);

    this.input.topOnly = true;
    this.windowFrame = this.add.image(0, 0, 'window')
      .setDepth(301)
      .setOrigin(0, 0).setAlpha(1)
      .setInteractive({ useHandCursor: false });

    this.bush = this.add.image(0, 1080, 'fore').setOrigin(0, 1).setDepth(302);
    this.ticket = this.add.image(960, 900, 'ticket').setScale(1.4).setDepth(304).setVisible(false);

    // Animol hover
    this.tweens.add({
      targets: this.hoverSprites.animol,
      y: 230,
      angle: -4,
      duration: 5000,
      yoyo: true,
      loop: -1,
      ease: 'Circ.easeInOut',
    });

    // Ticket enter
    this.ticket.setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        this.input.topOnly = false;
        this.tweens.add({
          targets: this.windowFrame,
          alpha: { from: 1, to: 0 },
          duration: 500,
          onComplete: () => {
            this.windowFrame.setVisible(false);
          },
        });
        this.tweens.add({
          targets: this.ticket,
          alpha: { from: 1, to: 0 },
          scale: { from: 1.4, to: 2 },
          duration: 500,
        });
        this.foregrounds.setVisible(true);
        this.tweens.add({
          targets: this.foregrounds,
          alpha: { from: 0, to: 1 },
          y: { from: 200, to: 0 },
          duration: 500,
        });
      });

    Object.entries(this.hoverSprites).forEach(([key, sprite]) => {
      sprite.setInteractive({ useHandCursor: true })
        .on('pointerover', () => {
          sprite.setFrame(1);
        })
        .on('pointerout', () => {
          sprite.setFrame(0);
        });

      // Animol barks
      if (key === 'animol') {
        sprite
          .off('pointerover')
          .off('pointerout')
          .on('pointerdown', () => {
            sprite
              .on('animationcomplete', () => {
                sprite.setFrame(0);
              })
              .play({ key: 'animol', repeat: 0 });
            const bark = this.barks[Math.floor(Math.random() * 4)];
            bark.play();
            this.game.vue.$root.$emit('doneQuest', { questId: 'animol' });
          });
      }

      if (key === 'friend') {
        sprite.once('pointerdown', () => {
          sprite.disableInteractive();
          sprite.setDepth(100);
          this.ticket.setVisible(true);
          this.tweens.add({
            targets: sprite,
            x: 960,
            y: 400,
            scale: { from: 1, to: 0.3 },
            ease: 'Back.easeIn',
            duration: 1000,
            onComplete: () => {
              this.tweens.add({
                targets: sprite,
                y: 380,
                duration: 3000,
                yoyo: true,
                loop: -1,
                ease: 'Back.easeInOut',
              });
            },
          });
          sprite.off('pointerover');
          sprite.off('pointerout');
          sprite.setFrame(0);
        });
      }
    });

    // Overlay
    this.input.topOnly = true;
    this.overlay = this.add.rectangle(centerX, centerY, 1920, 1080, 0x1a1a1a)
      .setInteractive()
      .setAlpha(0.75)
      .setDepth(4000)
      .on('pointerdown', () => {})
      .setVisible(false);
    this.game.vue.$root.$on('projectClosed', () => {
      this.overlay.setVisible(false);
    });

    // // Confetti
    // this.confetti = this.add.particles('confetti').setDepth(1009);

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

    // Music toggle
    this.musicImg = this.add.image(45, height - 330, 'musicon')
      .setDisplaySize(70, 70)
      .setOrigin(0, 0);
    this.musicIcon = this.add.container(0, 0, [
      this.add.circle(20, height - 340, 60, 0xffffff, 0)
        .setOrigin(0, 0)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
          this.toggleBGM();
        }),
      this.musicImg,
      this.add.text(20, height - 260, 'Toggle Music', {
        fontFamily: 'Londrina Solid',
        fontSize: 24,
        color: '#ffffff',
        stroke: '#131313',
        strokeThickness: 4,
        fixedWidth: 120,
        align: 'center',
      }),
    ]).setDepth(3601);

    // Foregrounds group
    this.foregrounds = this.add.container(0, 200, [
      this.bush,
      this.questIcon,
      this.musicIcon,
    ]).setVisible(false);

    // All Quests Completed
    this.game.vue.$root.$on('allQuestComplete', () => {
      this.lightsOff();
    });

    // Default Room BGM
    this.switchBGM('treehouse');
    this.toggleBGM();
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
      offset: '-=250',
    });
  }

  interactiveElement(key, container, image, text, project, fontSize = 30, lx = 0, ly = 0) {
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
      })
      .on('pointerdown', () => {
        if (key === 'cake') {
          // Cake available if lights off
          if (!this.lightState) this.fanfare();
        } else if (key === 'animol') {

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
          if (project === 'fanarts') this.game.vue.$root.$emit('doneQuest', { questId: 'fanarts' });
        }
      });
  }

  createLabel(x, y, text, fontSize) {
    return this.add.text(x, y, text, {
      fontFamily: 'Londrina Solid',
      fontSize: fontSize || 50,
      color: '#ffffff',
      stroke: '#131313',
      strokeThickness: 5,
    })
      .setOrigin(0.5, 0.5)
      .setVisible(false);
  }

  lightsOff() {
    if (this.candleBlown) return;
    this.candleBlown = true;
    this.lightState = false;
    this.cover.setVisible(true);
    this.switchBGM('musicbox');
    Object.values(this.movables).forEach(({ image, sprite }) => {
      if (image) image.setPipeline('Light2D');
      if (sprite) {
        sprite.setPipeline('Light2D');
        sprite.stop();
      }
    });
    this.friend.setPipeline('Light2D');
    this.questIcon.setVisible(false);
    this.musicIcon.setVisible(false);
    this.lights.enable();
    this.light2.x = this.input.x;
    this.light2.y = this.input.y;
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
    this.musicIcon.setVisible(true);
    this.lights.disable();
    if (!this.confettiEmitter) {
      this.confettiEmitter = this.confetti.createEmitter({
        frame: ['1', '2', '3', '4', '5', '6', '7', '8'],
        x: { min: 0, max: 1920 },
        y: { min: -300, max: -30 },
        scale: 0.5,
        gravityX: -3,
        gravityY: 100,
        frequency: 70,
        lifespan: { min: 5000, max: 9000 },
        speed: { min: 3, max: 15 },
      });
      this.confetti.createEmitter({
        frame: ['1', '2', '3', '4', '5', '6', '7', '8'],
        x: { min: 0, max: 1920 },
        y: { min: -100, max: 50 },
        scale: 0.5,
        gravityX: -3,
        gravityY: 200,
        maxParticles: 100,
        lifespan: { min: 5000, max: 9000 },
        speedX: { min: 10, max: 30 },
        speedY: { min: 10, max: 300 },
      }).explode(100);
    }
  }

  switchBGM(audioKey) {
    if (!this.bgmOn) return;
    if (this.bgm) {
      this.bgm.off('complete');
      this.bgm.stop();
    }
    this.bgm = this.sound.add(audioKey);
    if (audioKey === 'musicbox') this.bgm.setVolume(1);
    else this.bgm.setVolume(0.2);
    this.bgm.on('complete', () => {
      this.ipodOn = false;
      this.switchBGM('treehouse');
    });
    this.bgm.play();
  }

  toggleBGM() {
    this.bgmOn = !this.bgmOn;
    if (this.bgmOn) {
      this.musicImg.setTexture('musicon');
      this.switchBGM('treehouse');
    } else {
      this.musicImg.setTexture('musicoff');
      this.ipodOn = false;
      if (this.bgm) {
        this.bgm.off('complete');
        this.bgm.stop();
      }
    }
  }
}

export default PartyScene;
