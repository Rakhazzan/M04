<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>La granja d'en Pepitu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item v-for="animal in animals" :key="animal.nom">
          <ion-img :src="animal.img" style="width: 100px; height: 100px;"></ion-img>
          <ion-label class="ion-text-wrap">
            <h2>{{ animal.nom }}</h2>
          </ion-label>
          <ion-button @click="playSound(animal.soroll)">🐾 Escolta</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonImg, IonLabel, IonButton } from '@ionic/vue'
import { Howl } from 'howler'

const animals = [
  { nom: 'Vaca', img: 'assets/animals/vaca.jpg', soroll: 'assets/sounds/vaca.mp3' },
  { nom: 'Gall', img: 'assets/animals/gall.jpg', soroll: 'assets/sounds/gall.mp3' },
  { nom: 'Porc', img: 'assets/animals/porc.jpg', soroll: 'assets/sounds/porc.mp3' },
  { nom: 'Ovella', img: 'assets/animals/ovella.jpg', soroll: 'assets/sounds/ovella.mp3' },
  { nom: 'Ànec', img: 'assets/animals/anec.jpg', soroll: 'assets/sounds/anec.mp3' },
  { nom: 'Gat', img: 'assets/animals/gat.jpg', soroll: 'assets/sounds/gat.mp3' },
  { nom: 'Gos', img: 'assets/animals/gos.jpg', soroll: 'assets/sounds/gos.mp3' },
  { nom: 'Cavall', img: 'assets/animals/cavall.jpg', soroll: 'assets/sounds/cavall.mp3' },
  { nom: 'Gallina', img: 'assets/animals/gallina.jpg', soroll: 'assets/sounds/gallina.mp3' },
  { nom: 'Oca', img: 'assets/animals/oca.jpg', soroll: 'assets/sounds/oca.mp3' },
]

function playSound(url) {
  const sound = new Howl({ src: [url] })
  sound.play()
}
</script>
