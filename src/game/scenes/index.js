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
import balloons1 from '../assets/images2023/balloons1.png';
import balloons2 from '../assets/images2023/balloons2.png';
import bat from '../assets/images2023/bat.png';
import figs from '../assets/images2023/figs.png';
import flags1 from '../assets/images2023/flags1.png';
import flags2 from '../assets/images2023/flags2.png';
import gifts1 from '../assets/images2023/gifts1.png';
import gifts2 from '../assets/images2023/gifts2.png';
import globos from '../assets/images2023/globos.png';
import letters from '../assets/images2023/letters.png';
import ticket from '../assets/images2023/ticket.png';
import banner from '../assets/images2023/banner.png';
import certificate from '../assets/images2023/certificate.png';
import closet from '../assets/images2023/closet.png';
import computer from '../assets/images2023/computer.png';
import drawings from '../assets/images2023/drawings.png';
import photos from '../assets/images2023/photos.png';
import sanalite from '../assets/images2023/sanalite.png';
import hjesusa from '../assets/images2023/h-jesusa.png';
import cake from '../assets/images2023/cake.png';

import bark1 from '../assets/audio/bark01.mp3';
import bark2 from '../assets/audio/bark02.mp3';
import bark3 from '../assets/audio/bark03.mp3';
import bark4 from '../assets/audio/bark04.mp3';
import bgm2023 from '../assets/audio/2023.ogg';

import animol from '../assets/sprites/animol.png';
import bae from '../assets/sprites/bae.png';
import friend from '../assets/sprites/friend.png';
import irys from '../assets/sprites/irys.png';
import sana from '../assets/sprites/sana.png';
import fauna from '../assets/sprites/fauna.png';
import kronii from '../assets/sprites/kronii.png';
import mumei from '../assets/sprites/mumei.png';

import halphaca from '../assets/sprites/h-alphaca.png';
import hchlorine from '../assets/sprites/h-chlorine.png';
import hdeez from '../assets/sprites/h-deez.png';
import hemi from '../assets/sprites/h-emi.png';
import hfae from '../assets/sprites/h-fae.png';
import hjackiegnome from '../assets/sprites/h-jackiegnome.png';
import hjake from '../assets/sprites/h-jake.png';
import hnintan from '../assets/sprites/h-nintan.png';
import hsayowl from '../assets/sprites/h-sayowl.png';
import hscounty from '../assets/sprites/h-scounty.png';
import hjesus from '../assets/sprites/h-jesus.png';
import hobtuse from '../assets/sprites/h-obtuse.png';
import hhootsie from '../assets/sprites/h-hootsie.png';

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
    this.load.image('balloons1', balloons1);
    this.load.image('balloons2', balloons2);

    this.load.image('bat', bat);
    this.load.image('figs', figs);
    this.load.image('flags1', flags1);
    this.load.image('flags2', flags2);
    this.load.image('gifts1', gifts1);
    this.load.image('gifts2', gifts2);
    this.load.image('globos', globos);
    this.load.image('letters', letters);
    this.load.image('ticket', ticket);
    this.load.image('banner', banner);
    this.load.image('certificate', certificate);
    this.load.image('closet', closet);
    this.load.image('computer', computer);
    this.load.image('drawings', drawings);
    this.load.image('photos', photos);
    this.load.image('sanalite', sanalite);
    this.load.image('hjesusa', hjesusa);
    this.load.image('cake', cake);

    this.load.image('quests', quests);
    this.load.image('musicon', musicOn);
    this.load.image('musicoff', musicOff);

    this.load.audio('bark1', bark1);
    this.load.audio('bark2', bark2);
    this.load.audio('bark3', bark3);
    this.load.audio('bark4', bark4);
    this.load.audio('bgm2023', bgm2023);

    this.load.spritesheet('animol', animol, {
      frameWidth: 223, frameHeight: 200, margin: 0, spacing: 0,
    });
    this.load.spritesheet('irys', irys, {
      frameWidth: 340, frameHeight: 700, margin: 0, spacing: 0,
    });
    this.load.spritesheet('bae', bae, {
      frameWidth: 348, frameHeight: 473, margin: 0, spacing: 0,
    });
    this.load.spritesheet('friend', friend, {
      frameWidth: 380, frameHeight: 470, margin: 0, spacing: 0,
    });
    this.load.spritesheet('sana', sana, {
      frameWidth: 260, frameHeight: 360, margin: 0, spacing: 0,
    });
    this.load.spritesheet('kronii', kronii, {
      frameWidth: 260, frameHeight: 700, margin: 0, spacing: 0,
    });
    this.load.spritesheet('fauna', fauna, {
      frameWidth: 320, frameHeight: 450, margin: 0, spacing: 0,
    });
    this.load.spritesheet('mumei', mumei, {
      frameWidth: 299, frameHeight: 353, margin: 0, spacing: 0,
    });

    this.load.spritesheet('halphaca', halphaca, {
      frameWidth: 140, frameHeight: 130, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hchlorine', hchlorine, {
      frameWidth: 125, frameHeight: 115, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hdeez', hdeez, {
      frameWidth: 104, frameHeight: 96, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hemi', hemi, {
      frameWidth: 136, frameHeight: 130, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hfae', hfae, {
      frameWidth: 93, frameHeight: 97, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hjackiegnome', hjackiegnome, {
      frameWidth: 183, frameHeight: 166, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hjake', hjake, {
      frameWidth: 96, frameHeight: 98, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hnintan', hnintan, {
      frameWidth: 136, frameHeight: 103, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hsayowl', hsayowl, {
      frameWidth: 115, frameHeight: 110, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hscounty', hscounty, {
      frameWidth: 131, frameHeight: 102, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hjesus', hjesus, {
      frameWidth: 112, frameHeight: 105, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hobtuse', hobtuse, {
      frameWidth: 156, frameHeight: 136, margin: 0, spacing: 0,
    });
    this.load.spritesheet('hhootsie', hhootsie, {
      frameWidth: 130, frameHeight: 140, margin: 0, spacing: 0,
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
    this.anims.create({
      key: 'kronii',
      frames: this.anims.generateFrameNumbers('kronii'),
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
