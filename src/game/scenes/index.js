import Phaser from 'phaser';

import PartyScene from './party';

import cursor from '../assets/cursor/cursor-sm.png';

import preview from '../assets/preview.png';

import quests from '../assets/images/quests.png';
import musicOn from '../assets/images/music_on.png';
import musicOff from '../assets/images/music_off.png';

import room from '../assets/images2023/room.png';
import table from '../assets/images2023/table.png';
import window from '../assets/images2023/window.png';
import fore from '../assets/images2023/fore.png';
import balloon from '../assets/images2023/balloon.png';
import hoo from '../assets/images2023/hoo.png';

import bark1 from '../assets/audio/bark01.mp3';
import bark2 from '../assets/audio/bark02.mp3';
import bark3 from '../assets/audio/bark03.mp3';
import bark4 from '../assets/audio/bark04.mp3';
import treehouse from '../assets/audio/treehouse.ogg';

import kronii from '../assets/images2023/kronii-1.png';

import animol from '../assets/sprites/animol.png';
import bae from '../assets/sprites/bae.png';
import friend from '../assets/sprites/friend.png';
import irys from '../assets/sprites/irys.png';
import sana from '../assets/sprites/sana.png';

class IndexScene extends Phaser.Scene {
  loadingText = null;

  preload() {
    // Google Fonts
    this.googleFonts.preload(this.load);

    // Loading text
    const { width, height } = this.sys.game.canvas;
    this.add.graphics({ x: 0, y: 0 })
      .fillGradientStyle(0xc2af8b, 0xc2af8b, 0xf1e7d5, 0xf1e7d5, 1, 1, 1, 1)
      .fillRect(0, 0, width, height);
    this.loadingText = this.add.text(width * 0.5, height * 0.7, 'Loading....', {
      fontFamily: 'Arial',
      fontSize: 30,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 3,
    }).setOrigin(0.5, 0.5);

    // Add scenes
    this.scene.add('party', PartyScene);

    // Preload assets
    this.load.image('preview', preview);

    this.load.image('room', room);
    this.load.image('table', table);
    this.load.image('window', window);
    this.load.image('fore', fore);
    this.load.image('balloon', balloon);
    this.load.image('hoo', hoo);
    this.load.image('kronii', kronii);

    this.load.image('quests', quests);
    this.load.image('musicon', musicOn);
    this.load.image('musicoff', musicOff);

    this.load.audio('bark1', bark1);
    this.load.audio('bark2', bark2);
    this.load.audio('bark3', bark3);
    this.load.audio('bark4', bark4);
    this.load.audio('treehouse', treehouse);

    this.load.spritesheet('animol', animol, {
      frameWidth: 223, frameHeight: 164, margin: 2, spacing: 4,
    });
    this.load.spritesheet('irys', irys, {
      frameWidth: 334, frameHeight: 689, margin: 0, spacing: 0,
    });
    this.load.spritesheet('bae', bae, {
      frameWidth: 330, frameHeight: 453, margin: 0, spacing: 0,
    });
    this.load.spritesheet('friend', friend, {
      frameWidth: 375, frameHeight: 465, margin: 0, spacing: 0,
    });
    this.load.spritesheet('sana', sana, {
      frameWidth: 251, frameHeight: 343, margin: 0, spacing: 0,
    });
  }

  async create() {
    // Cursor
    this.input.setDefaultCursor(`url(${cursor}), auto`);

    // Wait for asyncs to finish
    await Promise.all([
      // Configure Google Fonts and let it load specific fonts
      this.googleFonts.configure(),
    ]);

    // Animations
    this.anims.create({
      key: 'animol',
      frames: this.anims.generateFrameNumbers('animol'),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: 'irys',
      frames: this.anims.generateFrameNumbers('irys'),
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: 'friend',
      frames: this.anims.generateFrameNumbers('friend'),
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: 'bae',
      frames: this.anims.generateFrameNumbers('bae'),
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: 'sana',
      frames: this.anims.generateFrameNumbers('sana'),
      frameRate: 2,
      repeat: -1,
    });

    // Done all preloading
    this.loadingText.destroy();

    // Backgrounds
    const { width, height } = this.sys.game.canvas;
    this.add.image(0, 0, 'room')
      .setScale(1.1)
      .setAlpha(0.2)
      .setOrigin(0, 0);

    // Click to Start label
    this.add.text(width * 0.5, height * 0.7, 'TOUCH TO START', {
      fontFamily: 'Londrina Solid',
      fontSize: 60,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
    }).setOrigin(0.5, 0.5);

    // Click to Start
    this.input.once('pointerdown', () => {
      // Proceed to next scene
      this.scene.start('party');
    });
  }
}

export default IndexScene;
