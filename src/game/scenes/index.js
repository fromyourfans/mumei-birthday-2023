import Phaser from 'phaser';

import PartyScene from './party';

import bed from '../assets/images/bed.png';
import counter from '../assets/images/counter.png';
import front1 from '../assets/images/front1.png';
import front2 from '../assets/images/front2.png';
import front3 from '../assets/images/front3.png';
import outside from '../assets/images/outside.png';
import room from '../assets/images/room.png';
import cover from '../assets/images/cover.png';
import shelf from '../assets/images/shelf.png';
import animol from '../assets/images/animol.png';
import banner from '../assets/images/banner.png';
import lantern from '../assets/images/lantern.png';
import table from '../assets/images/table.png';
import cake from '../assets/images/cake.png';
import trunk from '../assets/images/trunk.png';
import rice from '../assets/images/rice.png';
import bowls from '../assets/images/bowls.png';
import balloon1 from '../assets/images/balloon1.png';
import balloon2 from '../assets/images/balloon2.png';
import decors from '../assets/images/decors.png';
import gifts from '../assets/images/gifts.png';
import spider from '../assets/images/spider.png';
import daki from '../assets/images/daki.png';
import letters from '../assets/images/letters.png';
import painting from '../assets/images/painting.png';
import shelftop from '../assets/images/shelftop.png';
import flag1 from '../assets/images/flag1.png';
import flag2 from '../assets/images/flag2.png';
import flag3 from '../assets/images/flag3.png';

import quests from '../assets/images/quests.png';
import bae from '../assets/images/bae.png';
import mumei from '../assets/images/mumei.png';
import kronii from '../assets/images/kronii.png';
import sana from '../assets/images/sana.png';
import fauna from '../assets/images/fauna.png';

import bedN from '../assets/normals/bed_n.png';
import counterN from '../assets/normals/counter_n.png';
import roomN from '../assets/normals/room_n.png';
import shelfN from '../assets/normals/shelf_n.png';
import animolN from '../assets/normals/animol_n.png';
import cakeN from '../assets/normals/cake_n.png';
import trunkN from '../assets/normals/trunk_n.png';
import riceN from '../assets/normals/rice_n.png';
import bowlsN from '../assets/normals/bowls_n.png';
import balloon1N from '../assets/normals/balloon1_n.png';
import balloon2N from '../assets/normals/balloon2_n.png';
import decorsN from '../assets/normals/decors_n.png';
import lettersN from '../assets/normals/letters_n.png';
import baeN from '../assets/normals/bae_n.png';
import mumeiN from '../assets/normals/mumei_n.png';
import sanaN from '../assets/normals/sana_n.png';
import faunaN from '../assets/normals/fauna_n.png';

import bark1 from '../assets/audio/bark01.mp3';
import bark2 from '../assets/audio/bark02.mp3';
import bark3 from '../assets/audio/bark03.mp3';
import bark4 from '../assets/audio/bark04.mp3';
import bgm from '../assets/audio/musicbox.ogg';

import cursor from '../assets/cursor/cursor.png';

import confettiPng from '../assets/atlas/confetti.png';
import confettiJson from '../assets/atlas/confetti.json';
import friendPng from '../assets/atlas/friend.png';
import friendJson from '../assets/atlas/friend.json';
import hoomansPng from '../assets/atlas/hoomans.png';
import hoomansJson from '../assets/atlas/hoomans.json';

class IndexScene extends Phaser.Scene {
  loadingText = null;

  preload() {
    // Google Fonts
    this.googleFonts.preload(this.load);

    // Loading text
    const { width, height } = this.sys.game.canvas;
    this.loadingText = this.add.text(width / 2, height / 2, 'Loading....', {
      fontSize: 24,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 3,
    }).setOrigin(0.5, 0.5);

    // Add scenes
    this.scene.add('party', PartyScene);

    // Preload assets
    this.load.image('bed', [bed, bedN]);
    this.load.image('counter', [counter, counterN]);
    this.load.image('front1', front1);
    this.load.image('front2', front2);
    this.load.image('front3', front3);
    this.load.image('outside', outside);
    this.load.image('room', [room, roomN]);
    this.load.image('cover', cover);
    this.load.image('shelf', [shelf, shelfN]);
    this.load.image('animol', [animol, animolN]);
    this.load.image('banner', banner);
    this.load.image('lantern', lantern);
    this.load.image('table', table);
    this.load.image('cake', [cake, cakeN]);
    this.load.image('trunk', [trunk, trunkN]);
    this.load.image('rice', [rice, riceN]);
    this.load.image('bowls', [bowls, bowlsN]);
    this.load.image('balloon1', [balloon1, balloon1N]);
    this.load.image('balloon2', [balloon2, balloon2N]);
    this.load.image('decors', [decors, decorsN]);
    this.load.image('gifts', gifts);
    this.load.image('spider', spider);
    this.load.image('daki', daki);
    this.load.image('letters', [letters, lettersN]);
    this.load.image('painting', painting);
    this.load.image('shelftop', shelftop);
    this.load.image('flag1', flag1);
    this.load.image('flag2', flag2);
    this.load.image('flag3', flag3);
    this.load.image('quests', quests);

    this.load.image('bae', [bae, baeN]);
    this.load.image('mumei', [mumei, mumeiN]);
    this.load.image('sana', [sana, sanaN]);
    this.load.image('kronii', kronii);
    this.load.image('fauna', [fauna, faunaN]);

    this.load.audio('bark1', bark1);
    this.load.audio('bark2', bark2);
    this.load.audio('bark3', bark3);
    this.load.audio('bark4', bark4);
    this.load.audio('bgm', bgm);

    this.load.atlas('confetti', confettiPng, confettiJson);
    this.load.atlas('friend', friendPng, friendJson);
    this.load.atlas('hoomans', hoomansPng, hoomansJson);
  }

  async create() {
    // Cursor
    this.input.setDefaultCursor(`url(${cursor}), auto`);

    // Wait for asyncs to finish
    await Promise.all([
      // Configure Google Fonts and let it load specific fonts
      this.googleFonts.configure(),
    ]);

    // Done all preloading
    this.loadingText.destroy();

    // Backgrounds
    const { width, height } = this.sys.game.canvas;
    this.add.graphics({ x: 0, y: 0 })
      .fillGradientStyle(0xc2af8b, 0xc2af8b, 0xf1e7d5, 0xf1e7d5, 1, 1, 1, 1)
      .fillRect(0, 0, width, height);
    this.add.image(0, 0, 'room')
      .setScale(1.1)
      .setAlpha(0.2)
      .setOrigin(0, 0);

    // Friend
    this.add.sprite(width * 0.5, height * 0.45, 'friend', 'f0004.png')
      .setScale(1.3);

    // Click to Start label
    this.add.text(width * 0.5, height * 0.7, 'TOUCH TO START', {
      fontFamily: 'Londrina Solid',
      fontSize: 60,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 3,
    }).setOrigin(0.5, 0.5);
    this.add.text(width * 0.5, height * 0.78, 'Check for Quests at the bottom-left icon', {
      fontFamily: 'Londrina Solid',
      fontSize: 30,
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 2,
    }).setOrigin(0.5, 0.5);
    this.add.text(width * 0.5, height * 0.83, 'Mumei, no spoilers until your birthday :D', {
      fontFamily: 'Arial',
      fontStyle: 'bold',
      fontSize: 20,
      color: '#927a4d',
    }).setOrigin(0.5, 0.5);

    // Click to Start
    this.input.once('pointerdown', () => {
      // Proceed to next scene
      this.scene.start('party');
    });
  }
}

export default IndexScene;
