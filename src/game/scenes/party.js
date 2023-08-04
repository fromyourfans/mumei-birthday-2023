import Phaser from 'phaser';

class PartyScene extends Phaser.Scene {
  bgm = null;

  bgmOn = false;

  create() {
    const { width, height } = this.sys.game.canvas;
    const centerX = width / 2;
    const centerY = height / 2;
    this.input.topOnly = true;

    // Version number
    this.add.rectangle(0, 0, 170, 60)
      .setDepth(60001).setOrigin(0, 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.game.vue.$root.$emit('doneQuest', { questId: 'credits' });
        this.openProject('credits');
      });
    this.add.text(10, 5, 'Version 220804.0929', {
      fontFamily: 'Arial',
      fontSize: 14,
      align: 'left',
      color: '#e0e0e0',
      stroke: '#131313',
      strokeThickness: 3,
    }).setDepth(60002).setOrigin(0, 0);
    this.add.text(10, 22, 'Credits', {
      fontFamily: 'Arial',
      fontSize: 20,
      align: 'left',
      color: '#ffffff',
      stroke: '#131313',
      strokeThickness: 5,
    }).setDepth(60003).setOrigin(0, 0);

    // Elements
    this.add.image(0, 0, 'room').setOrigin(0, 0);
    this.add.image(0, 0, 'flags2').setOrigin(0, 0);
    this.add.image(5, 60, 'balloons1').setOrigin(0, 0);
    this.add.image(1480, 730, 'balloons2').setOrigin(0, 0);
    this.add.image(1323, 514, 'bat').setOrigin(0, 0);
    this.add.image(1028, 557, 'figs').setOrigin(0, 0);
    this.hoverElement(534, 428, 'hfae');
    this.hoverElement(885, 289, 'hdeez');
    this.hoverElement(1131, 368, 'bae');
    this.hoverElement(1420, 340, 'kronii');
    this.hoverElement(395, 420, 'fauna');
    this.hoverElement(624, 523, 'sana');
    const friend = this.hoverElement(1111, 675, 'friend').setDepth(1).setDepth(303);
    this.hoverElement(140, 520, 'irys').setScale(0.9);
    this.hoverElement(767, 843, 'hnintan').setDepth(4);
    this.hoverElement(935, 809, 'hjackiegnome').setDepth(5);
    this.hoverElement(1182, 796, 'hjake').setDepth(1);
    this.hoverElement(1267, 742, 'hemi').setDepth(1);
    this.hoverElement(1358, 811, 'hchlorine').setDepth(1);
    this.hoverElement(1610, 895, 'hscounty').setDepth(1);
    this.hoverElement(1510, 945, 'halphaca').setDepth(1);
    this.hoverElement(1730, 945, 'hsayowl').setDepth(1);
    this.add.image(410, 835, 'hjesusa').setOrigin(0, 0).setScale(0.8);
    this.hoverElement(790, 292, 'hjesus').setDepth(1).setScale(0.9);
    this.hoverElement(1269, 935, 'hobtuse').setDepth(1);
    this.hoverElement(482, 908, 'hhootsie').setDepth(1);
    this.hoverElement(890, 475, 'mumei').setScale(1.08).setDepth(2);
    this.add.image(629, 529, 'sanalite').setOrigin(0, 0);
    this.add.image(786, 717, 'table').setDepth(3).setOrigin(0, 0);
    this.add.image(610, 240, 'globos').setScale(0.76).setOrigin(0, 0);
    const animol = this.hoverElement(410, 250, 'animol').setScale(0.9);
    this.add.image(3, 0, 'flags1').setOrigin(0, 0);
    this.add.image(3, 0, 'flags1').setOrigin(0, 0);
    this.add.image(532, 817, 'gifts1').setOrigin(0, 0);
    this.add.image(1097, 889, 'gifts2').setOrigin(0, 0);
    this.add.image(centerX, 0, 'banner').setScale(0.85).setOrigin(0.5, 0);
    this.add.image(823, 406, 'closet').setOrigin(0, 0);
    this.add.image(893, 630, 'cake').setScale(0.94).setDepth(4).setOrigin(0, 0);

    const windowFrame = this.add.image(0, 0, 'window').setDepth(301).setOrigin(0, 0).setAlpha(1)
      .setInteractive({ useHandCursor: false });
    const bush = this.add.image(0, 1080, 'fore').setOrigin(0, 1).setDepth(302);
    const ticket = this.add.image(960, 900, 'ticket').setScale(1.4).setDepth(304).setVisible(false);

    // Animol hover
    this.tweens.add({
      targets: animol,
      y: 230,
      angle: -4,
      duration: 5000,
      yoyo: true,
      loop: -1,
      ease: 'Circ.easeInOut',
    });

    // Animol barks
    this.barks = [
      this.sound.add('bark1').setVolume(0.7),
      this.sound.add('bark2').setVolume(0.7),
      this.sound.add('bark3').setVolume(0.7),
      this.sound.add('bark4').setVolume(0.7),
    ];
    animol
      .off('pointerover')
      .off('pointerout')
      .on('pointerdown', () => {
        animol
          .on('animationcomplete', () => { animol.setFrame(0); })
          .play({ key: 'animol', repeat: 0 });
        const bark = this.barks[Math.floor(Math.random() * 4)];
        bark.play();
        this.game.vue.$root.$emit('doneQuest', { questId: 'animol' });
      });

    // INTERACTIVE: Letters -> messages
    this.interactiveElement(784, 1000, 'letters', 800, 944, 'Messages', 'messages');

    // INTERACTIVE: Photos -> fanarts
    this.interactiveElement(252, 470, 'photos', 252, 430, 'Gallery', 'fanarts');

    // INTERACTIVE: Drawings -> mural
    this.interactiveElement(91, 711, 'drawings', 91, 651, 'Drawings', 'mural');

    // INTERACTIVE: Computer -> video
    this.interactiveElement(1780, 620, 'computer', 1800, 500, 'Computer', 'video');

    // INTERACTIVE: Certificate -> video
    this.interactiveElement(750, 460, 'certificate', 750, 400, 'Certificate', 'certificate');

    // Friend
    friend.once('pointerdown', () => {
      friend.disableInteractive();
      friend.setDepth(100);
      ticket.setVisible(true);
      friend.setDepth(1);
      this.tweens.add({
        targets: friend,
        x: 960,
        y: 360,
        scale: { from: 1, to: 0.3 },
        ease: 'Back.easeIn',
        duration: 1000,
        onComplete: () => {
          this.tweens.add({
            targets: friend,
            y: 340,
            duration: 3000,
            yoyo: true,
            loop: -1,
            ease: 'Back.easeInOut',
          });
        },
      });
      friend.off('pointerover');
      friend.off('pointerout');
      friend.setFrame(0);
    });

    // Ticket enter
    ticket.setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        this.input.topOnly = false;
        this.tweens.add({
          targets: windowFrame,
          alpha: { from: 1, to: 0 },
          duration: 500,
          onComplete: () => {
            windowFrame.setVisible(false);
          },
        });
        this.tweens.add({
          targets: ticket,
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

    // Overlay
    this.input.topOnly = true;
    this.overlay = this.add.rectangle(centerX, centerY, 1920, 1080, 0x1a1a1a)
      .setInteractive()
      .setAlpha(0.75)
      .setDepth(4000)
      .on('pointerdown', () => {})
      .setVisible(false);
    this.game.vue.$root.$on('projectClosed', () => {
      this.input.topOnly = false;
      this.overlay.setVisible(false);
    });

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
    this.musicImg = this.add.image(25, 10, 'musicon')
      .setDisplaySize(70, 70)
      .setOrigin(0, 0);
    this.musicIcon = this.add.container(250, 950, [
      this.add.circle(0, 0, 60, 0xffffff, 0)
        .setOrigin(0, 0)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
          this.toggleBGM();
        }),
      this.musicImg,
      this.add.text(0, 80, 'Toggle Music', {
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
      bush,
      this.questIcon,
      this.musicIcon,
    ]).setVisible(false);

    // Default Room BGM
    this.bgm = this.sound.add('bgm2023').setVolume(0.3);
    this.toggleBGM();
  }

  // eslint-disable-next-line class-methods-use-this
  hoverElement(x, y, texture) {
    const sprite = this.add.sprite(x, y, texture).setOrigin(0, 0);
    sprite.setInteractive({ useHandCursor: true })
      .on('pointerover', () => { sprite.setFrame(1); })
      .on('pointerout', () => { sprite.setFrame(0); });
    return sprite;
  }

  interactiveElement(x, y, texture, lx, ly, text, project, fontSize) {
    const lbl = this.add.text(lx - 200, ly - 40, text, {
      fontFamily: 'Londrina Solid',
      fontSize: fontSize || 40,
      color: '#ffffff',
      stroke: '#131313',
      strokeThickness: 10,
      fixedWidth: 400,
      align: 'center',
    })
      .setDepth(400)
      .setVisible(false);
    const img = this.add.image(x, y, texture)
      .setInteractive({ useHandCursor: true })
      .on('pointerover', () => {
        img.setAngle((Math.random() * 20) - 10);
        lbl.setVisible(true);
      })
      .on('pointerout', () => {
        img.setAngle(0);
        lbl.setVisible(false);
      })
      .on('pointerdown', () => {
        this.game.vue.$root.$emit('doneQuest', { questId: project });
        this.openProject(project);
      });
    return { img, lbl };
  }

  toggleBGM() {
    this.bgmOn = !this.bgmOn;
    if (this.bgmOn) {
      this.musicImg.setTexture('musicon');
      this.bgm.setLoop(true).play();
    } else {
      this.musicImg.setTexture('musicoff');
      this.bgm.stop();
    }
  }

  openProject(projectName) {
    this.input.topOnly = true;
    this.overlay.setVisible(true);
    this.game.vue.dialog = true;
    this.game.vue.openProject = projectName;
  }
}

export default PartyScene;
