<template>
    <v-app style="background-color: #3d3d3d;">
        <v-card style="background-color: #3d3d3d; width: 1920px; height: 1080px; align-self: center;">
            <v-card-title style="color: white;">Maps übersicht</v-card-title>
              <v-row>
                <v-col cols="4">
                    <v-img class="mapPreview" src="../assets/images/Maps/Customs.png" aspect-ratio="1" max-height="75%" max-width="75%" 
                    @click="onImageClicked('Customs.png')"></v-img>
                    <v-img class="mapPreview" src="../assets/images/Maps/Factory.png" aspect-ratio="1" max-height="75%" max-width="75%"
                    @click="onImageClicked('Factory.png')"></v-img>
                    <v-img class="mapPreview" src="../assets/images/Maps/Interchange.png" aspect-ratio="1" max-height="75%" max-width="75%"
                    @click="onImageClicked('Interchange.png')"></v-img>
                </v-col>
                <v-col cols="4">
                    <v-img class="mapPreview" src="../assets/images/Maps/Labs.png" aspect-ratio="1" max-height="75%" max-width="75%"
                    @click="onImageClicked('Labs.png')"></v-img>
                    <v-img class="mapPreview" src="../assets/images/Maps/Lighthouse.png" aspect-ratio="1" max-height="75%" max-width="75%"
                    @click="onImageClicked('Lighthouse.png')"></v-img>
                    <v-img class="mapPreview" src="../assets/images/Maps/Reserve.png" aspect-ratio="1" max-height="75%" max-width="75%"
                    @click="onImageClicked('Reserve.png')"></v-img>
                </v-col>
                <v-col cols="4">
                    <v-img class="mapPreview" src="../assets/images/Maps/Shoreline.jpg" aspect-ratio="1" max-height="75%" max-width="75%"
                    @click="onImageClicked('Shoreline.jpg')"></v-img>
                    <v-img class="mapPreview" src="../assets/images/Maps/Streets.png" aspect-ratio="1" max-height="75%" max-width="75%"
                    @click="onImageClicked('Streets.png')"></v-img>
                    <v-img class="mapPreview" src="../assets/images/Maps/Woods.jpg" aspect-ratio="1" max-height="75%" max-width="75%"
                    @click="onImageClicked('Woods.jpg')"></v-img>
                </v-col>
              </v-row>

            <v-dialog v-model="showMap">
              <v-card style="background-color: #3d3d3d;">
                <v-card-title>Mappe angucken</v-card-title>
                  <v-img :src="mapToShow"></v-img>
              </v-card>
            </v-dialog>

        </v-card>
    </v-app>
</template>



<script>

export default {
    name: "Maps.vue",
    beforeCreate() {
        document.title="Tarkov Maps"
    },
    async created() {
    },
    mounted() {
    },
    computed: {
    },
    watch: {
    },
    methods: {
      onImageClicked(mapName) {
      this.showMap = true;
      import(`@/assets/images/Maps/${mapName}`)
        .then(image => {
          this.mapToShow = image.default;
          console.log("Image path:", this.mapToShow);
        })
        .catch(error => {
          console.error("Error loading image:", error);
        });
    }
    },
    data: () => ({
        showMap: false,
        mapToShow: "../assets/images/Maps/Customs.png"
    })
}
</script>

<style scoped>

.mapPreview {
  margin-bottom: 20px;
}
</style>