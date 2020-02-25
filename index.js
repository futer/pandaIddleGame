import { GameEngine } from './engine.js';
import { LoadImages, gameImages } from './utils/loadImages.js';
import { background_images } from './utils/images_list.js';
import { firebase_config } from './config.js';
import { createLoginPage } from './utils/loginPage.js';
import { isLogged, hideForms } from './utils/loginPage.js';
import { getFromLocalStorage } from './utils/localStorage.js';

class InitGame {
    constructor() {
        const userEmail = getFromLocalStorage('user');
        let isCurrentLogged = isLogged
        firebase.initializeApp(firebase_config);
        firebase.analytics();
        // firebase.auth().signOut().then(function() {
        //     // Sign-out successful.
        //   }).catch(function(error) {
        //     // An error happened.
        //   });
        if (userEmail === null) {
            createLoginPage();
        } else {
            hideForms();
            isCurrentLogged = true;
        }


        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.id = 'pandaIddleGame'
        this.canvas.width = 400;
        this.canvas.height = 700;

        this.loadedImages = [];

        document.body.appendChild(this.canvas);

        new LoadImages();

        let checkIfItIsLogged = setInterval(() => {
            console.log(isCurrentLogged);
            if(isCurrentLogged) {
                console.log(isCurrentLogged)
                clearInterval(checkIfItIsLogged);
            }
        }, 500)



        let checkImages = setInterval(() => {
            const keys = Object.entries(gameImages);
            this.loadedImages = [];
            keys.forEach(element => {
                if (element[1].isLoaded) {
                    this.loadedImages.push(element[1].isLoaded);
                }

            });

            if (this.loadedImages.length === background_images.length && isCurrentLogged) {
                new GameEngine(this.ctx, this.canvas, this.canvas.width, this.canvas.height);
                clearInterval(checkImages);
            }
        }, 100);
    }
}

new InitGame();