import Phaser from 'phaser';

import PartyScene from './party';

import bed from '../assets/images/bed.png';
import counter from '../assets/images/counter.png';
import front1 from '../assets/images/front1.png';
import front2 from '../assets/images/front2.png';
import front3 from '../assets/images/front3.png';
import outside from '../assets/images/outside.png';
import room from '../assets/images/room.png';
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
import letters from '../assets/images/letters.png';
import painting from '../assets/images/painting.png';
import shelftop from '../assets/images/shelftop.png';

import bae from '../assets/images/bae.png';
import mumei from '../assets/images/mumei.png';
import sana from '../assets/images/sana.png';
import fauna from '../assets/images/fauna.png';

import bark1 from '../assets/audio/bark01.mp3';
import bark2 from '../assets/audio/bark02.mp3';
import bark3 from '../assets/audio/bark03.mp3';
import bark4 from '../assets/audio/bark04.mp3';

import Cursor3 from '../assets/cursor/cursor3.png';

import confettiPng from '../assets/atlas/confetti.png';
import confettiJson from '../assets/atlas/confetti.json';
import friendPng from '../assets/atlas/friend.png';
import friendJson from '../assets/atlas/friend.json';

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
    this.load.image('bed', bed);
    this.load.image('counter', counter);
    this.load.image('front1', front1);
    this.load.image('front2', front2);
    this.load.image('front3', front3);
    this.load.image('outside', outside);
    this.load.image('room', room);
    this.load.image('shelf', shelf);
    this.load.image('animol', animol);
    this.load.image('banner', banner);
    this.load.image('lantern', lantern);
    this.load.image('table', table);
    this.load.image('cake', cake);
    this.load.image('trunk', trunk);
    this.load.image('rice', rice);
    this.load.image('bowls', bowls);
    this.load.image('balloon1', balloon1);
    this.load.image('balloon2', balloon2);
    this.load.image('decors', decors);
    this.load.image('letters', letters);
    this.load.image('painting', painting);
    this.load.image('shelftop', shelftop);

    this.load.image('bae', bae);
    this.load.image('mumei', mumei);
    this.load.image('sana', sana);
    this.load.image('fauna', fauna);

    this.load.audio('bark1', bark1);
    this.load.audio('bark2', bark2);
    this.load.audio('bark3', bark3);
    this.load.audio('bark4', bark4);

    this.load.atlas('confetti', confettiPng, confettiJson);
    this.load.atlas('friend', friendPng, friendJson);
  }

  async create() {
    // Cursor
    this.input.setDefaultCursor(`url(${Cursor3}), auto`);

    // Wait for asyncs to finish
    await Promise.all([
      // Configure Google Fonts and let it load specific fonts
      this.googleFonts.configure(),
    ]);

    // Done all preloading
    this.loadingText.destroy();

    // Proceed to next scene
    this.scene.start('party');
  }
}

export default IndexScene;
