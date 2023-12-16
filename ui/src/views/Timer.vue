<template>
    <v-app style="background-color: #3d3d3d;">
        <v-card style="background-color: #3d3d3d">
        <v-card-title>Tarkov Trader Timer</v-card-title>
        <v-row>
        <v-col cols="2" style="padding-left: 40px;">
          <v-row style="padding-bottom: 10%;">
              <v-button @click="selectPrapor()">
              <v-img
                  src="../assets/prapor-portrait.png"
                  style="border-width: 3px;border-style: solid; border-color: #9a8866;"
                  v-if="praporClicked == true">
              </v-img>
              <v-img 
                  src="../assets/prapor-portrait.png"
                  v-else>
                </v-img>
              </v-button>
          </v-row>
          <v-row style="margin-top: 0%; margin-bottom: 0%;">
              <span style="color: white;">{{ this.getTimeAsString(praporTimer) }}</span>
          </v-row>
          <v-row style="margin-top: 0px;">
              <v-button>
                <v-img style="width: 32px;" src="../assets/5.45x39mm_BP.png"></v-img>
              </v-button>
              <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">5.45x39mm BP</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/5.45x39mm_BS.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">5.45x39mm BS</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/5.45x39mm_BT.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">5.45x39mm BT</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/7.62x39mm_BP.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">7.62x39mm BP</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/7.62x39mm_PP.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">7.62x39mm PP</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/7.62x54mm_R_BS.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">7.62x54mm R BS</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/7.62x54mm_R_BT.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">7.62x54mm R BT</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/7.62x54mm_R_PS.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">7.62x54mm R PS</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/9x39mm_BP.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">9x39mm BP</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/9x39mm_SP-6.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">9x39mm SP-6</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/9x39mm_SPP.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">9x39mm SPP</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/12,7x55mm_PS12.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">12,7x55mm PS12</span>
          </v-row>
          <v-row style="margin-top: 15px;">
                <v-button>
                  <v-img style="width: 32px;" src="../assets/12,7x55mm_PS12B.png"></v-img>
                </v-button>
                <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">12,7x55mm PS12B</span>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row style="padding-bottom: 10%;">
            <v-button @click="selectSkier()">
            <v-img
                src="../assets/skier-portrait.png"
                style="border-width: 3px;border-style: solid; border-color: #9a8866;"
                v-if="skierClicked == true">
            </v-img>
            <v-img 
                src="../assets/skier-portrait.png"
                v-else>
              </v-img>
            </v-button>
          </v-row>
          <v-row style="margin-top: 0%; margin-bottom: 0%;">
            <span style="color: white;">{{ this.getTimeAsString(skierTimer) }}</span>
          </v-row>
          <v-row style="margin-top: 15px;">
      <v-button>
        <v-img style="width: 32px;" src="../assets/.300_Blackout_CBJ.png"></v-img>
      </v-button>
      <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">.300 Blackout CBJ</span>
          </v-row>
          <v-row style="margin-top: 15px;">
      <v-button>
        <v-img style="width: 32px;" src="../assets/9x19mm_Luger_CCI.png"></v-img>
      </v-button>
      <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">9x19mm Luger CCI</span>
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-row style="padding-bottom: 10%;">
              <v-button @click="selectPeacekeeper()">
              <v-img
                  src="../assets/peacekeeper-portrait.png"
                  style="border-width: 3px;border-style: solid; border-color: #9a8866;"
                  v-if="peacekeeperClicked == true">
              </v-img>
              <v-img 
                  src="../assets/peacekeeper-portrait.png"
                  v-else>
                </v-img>
              </v-button>
          </v-row>
          <v-row style="margin-top: 0%; margin-bottom: 0%;">
              <span style="color: white;">{{ this.getTimeAsString(peacekeeperTimer) }}</span>
          </v-row>
          <v-row style="margin-top: 15px;">
              <v-button>
                <v-img style="width: 32px;" src="../assets/9x19mm_QuakeMaker.png"></v-img>
              </v-button>
              <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">9x19mm QuakeMaker</span>
          </v-row>
          <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/9x19mm_AP_6.3.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">9x19mm AP 6.3</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/9x19mm_PBP.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">9x19mm PBP</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/4,6x30mm_FMJ_SX.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">4,6x30mm FMJ SX</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/4,6x30mm_AP_SX.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">4,6x30mm AP SX</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/.300_Blackout_M62_Tracer.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">.300 Blackout M62 Tracer</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/5.45x39mm_7N40.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">5.45x39mm 7N40</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/5.56x45mm_M856A1.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">5.56x45mm M856A1</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/5,56x45mm_M855A1.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">5,56x45mm M855A1</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/5.56x45mm_SSA_AP.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">5.56x45mm SSA AP</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/7.62x39mm_MAI_AP.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">7.62x39mm MAI AP</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/7.62x51mm_M80.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">7.62x51mm M80</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/7.62x51mm_M62.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">7.62x51mm M62</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/7.62x51mm_M993.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">7.62x51mm M993</span>
            </v-row>
            <v-row style="margin-top: 15px;">
        <v-button>
          <v-img style="width: 32px;" src="../assets/.338_Lapua_Magnum.png"></v-img>
        </v-button>
        <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">.338 Lapua Magnum</span>
            </v-row>
        </v-col>
        <v-col cols="2">
        <v-row style="padding-bottom: 10%;">
          <v-button @click="selectMechnic()">
          <v-img
              src="../assets/mechanic-portrait.png"
              style="border-width: 3px;border-style: solid; border-color: #9a8866;"
              v-if="mechanicClicked == true">
          </v-img>
          <v-img 
              src="../assets/mechanic-portrait.png"
              v-else>
            </v-img>
          </v-button>
        </v-row>
        <v-row style="margin-top: 0%; margin-bottom: 0%;">
          <span style="color: white;">{{ this.getTimeAsString(mechanicTimer) }}</span>
        </v-row>
        <v-row style="margin-top: 15px;">
            <v-button>
              <v-img style="width: 32px;" src="../assets/.45_ACP_RIP.png"></v-img>
            </v-button>
            <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">.45 ACP RIP</span>
        </v-row>
        <v-row style="margin-top: 15px;">
            <v-button>
              <v-img style="width: 32px;" src="../assets/4.6x30mm_JSP_SX.png"></v-img>
            </v-button>
            <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">4.6x30mm JSP SX</span>
        </v-row>
        <v-row style="margin-top: 15px;">
            <v-button>
              <v-img style="width: 32px;" src="../assets/.338_Lapua_TAC-X.png"></v-img>
            </v-button>
            <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">.338 Lapua TAC-X</span>
        </v-row>
        <v-row style="margin-top: 15px;">
            <v-button>
              <v-img style="width: 32px;" src="../assets/.366_TKM_AP-M.png"></v-img>
            </v-button>
            <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">.366 TKM AP-M</span>
        </v-row>
        </v-col>
        <v-col cols="2">
          <v-row style="padding-bottom: 10%;">
            <v-button @click="selectJaeger()">
            <v-img
                src="../assets/jaeger-portrait.png"
                style="border-width: 3px;border-style: solid; border-color: #9a8866;"
                v-if="jaegerClicked == true">
            </v-img>
            <v-img 
                src="../assets/jaeger-portrait.png"
                v-else>
              </v-img>
            </v-button>
          </v-row>
          <v-row style="margin-top: 0%; margin-bottom: 0%;">
            <span style="color: white;">{{ this.getTimeAsString(jaegerTimer) }}</span>
          </v-row>
          <v-row style="margin-top: 15px;">
            <v-button>
              <v-img style="width: 32px;" src="../assets/9x19mm_RIP.png"></v-img>
            </v-button>
            <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">9x19mm RIP</span>
          </v-row>
          <v-row style="margin-top: 15px;">
            <v-button>
              <v-img style="width: 32px;" src="../assets/.338_Lapua_Magnum_UCW.png"></v-img>
            </v-button>
            <span style="font-size: small; font-family: sans-serif; color: #E7E5D4; align-self: center;margin-left: 3px;">.338 Lapua Magnum UCW</span>
          </v-row>
        </v-col>
        <v-col>
          <v-switch v-model="activateAlert1" label="1 Minuten" color="#9a8866" dark></v-switch>
          <v-switch v-model="activateAlert5" label="5 Minuten" color="#9a8866" dark></v-switch>
          <v-switch v-model="activateAlert10" label="10 Minuten" color="#9a8866" dark></v-switch>
          <v-switch v-model="activateAlert20" label="20 Minuten" color="#9a8866" dark></v-switch>
          <v-switch v-model="activateAlert30" label="30 Minuten" color="#9a8866" dark></v-switch>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>

import Vue from "vue";
import router from "@/router";
import reminder from '../assets/sounds/reminder.mp3';
import soundPraporReset from '../assets/sounds/Prapor_reset.mp3';
import soundJaegerReset from '../assets/sounds/Jaeger_reset.mp3';
import soundSkierReset from '../assets/sounds/Skier_reset.mp3';
import soundMechanicReset from '../assets/sounds/Mechanic_reset.mp3';
import soundPeacekeeperReset from '../assets/sounds/Peacekeeper_reset.mp3';
import soundResetImminent from '../assets/sounds/Trader_reset_is_imminent.mp3';
import soundResetIn5 from '../assets/sounds/Trader_reset_in_5.mp3';
import soundResetIn10 from '../assets/sounds/Trader_reset_in_10.mp3';
import soundResetIn20 from '../assets/sounds/Trader_reset_in_20.mp3';
import soundResetIn30 from '../assets/sounds/Trader_reset_in_30.mp3';

export default {
    name: "Timer.vue",
    beforeCreate() {
    },
    async created() {
      await this.getData();
      this.getTraderTimer("Prapor")
      this.getTraderTimer("Skier")
      this.getTraderTimer("Peacekeeper")
      this.getTraderTimer("Mechanic")
      this.getTraderTimer("Jaeger")
    },
    mounted() {
      setInterval(this.setPraporTime, 500);
      setInterval(this.setSkierTime, 500);
      setInterval(this.setPeacekeeperTime, 500);
      setInterval(this.setMechanicTime, 500);
      setInterval(this.setJaegerTime, 500);
      setInterval(() => this.playTraderSound(0, -1), 980);

      setInterval(() => this.playTraderReminder(this.praporClicked, this.praporTimer), 5000);
      setInterval(() => this.playTraderReminder(this.skierClicked, this.skierTimer), 5000);
      setInterval(() => this.playTraderReminder(this.peacekeeperClicked, this.peacekeeperTimer), 5000);
      setInterval(() => this.playTraderReminder(this.mechanicClicked, this.mechanicTimer), 5000);
      setInterval(() => this.playTraderReminder(this.jaegerClicked, this.jaegerTimer), 5000);
    },
    computed: {
    },
    watch: {
    },
    methods: {
        getData() {
          const url = "https://api.tarkov.dev/graphql";
          const graphqlQuery = `
            query {
              traders(lang: en) {
                name
                resetTime
              }
            }
          `;

          const payload = {
            query: graphqlQuery,
          };
        
          Vue.axios.post(url, payload).then(response => {
            this.traderData = response.data.data.traders;
          }).catch(() => {
            console.log("getData not successful");
          });
        },
        getTraderTimer(traderName) {
          if(this.traderData.length > 0) {
            const trader = this.traderData.find(trader => trader.name === traderName);
            if (!trader) {
                return null;
            }
          
            const resetTime = new Date(trader.resetTime);
            const currentTime = new Date();
            return resetTime - currentTime;
          }
        },
        getTimeAsString(timeDifference) {
          const seconds = Math.floor(timeDifference / 1000) % 60;
          const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
          const hours = Math.floor(timeDifference / (1000 * 60 * 60));
          return hours + ":" + minutes + ":" + seconds
        },
        setTitle(title) {
            document.title = title
        },
        selectPrapor() {
          this.praporClicked = !this.praporClicked
        },
        selectSkier() {
          this.skierClicked = !this.skierClicked
        },
        selectPeacekeeper() {
          this.peacekeeperClicked = !this.peacekeeperClicked
        },
        selectMechnic() {
          this.mechanicClicked = !this.mechanicClicked
        },
        selectJaeger() {
          this.jaegerClicked = !this.jaegerClicked
        },
        setSkierTime() {
          this.skierTimer = this.getTraderTimer("Skier");
        },
        setPeacekeeperTime() {
          this.peacekeeperTimer = this.getTraderTimer("Peacekeeper");
        },
        setMechanicTime() {
          this.mechanicTimer = this.getTraderTimer("Mechanic");
        },
        setJaegerTime() {
          this.jaegerTimer = this.getTraderTimer("Jaeger");
        },
        setPraporTime() {
          this.praporTimer = this.getTraderTimer("Prapor");
        },
        checkTraderClicked(traderBoolean, traderTimer, traderSound, startTime, endTime) {
          if (traderBoolean === true) {
            if (traderTimer < startTime && traderTimer > endTime) {
              console.log("TraderTimer: " + traderTimer)
              console.log("startTime: " + startTime)
              console.log("endTime: " + endTime)
              const audio = new Audio(traderSound);
              audio.play();
            }
          }
        },
        playTraderSound(startTime, endTime) {
          startTime *= 1000;
          endTime *= 1000;
        
          this.checkTraderClicked(this.praporClicked, this.praporTimer, this.soundPraporReset, startTime, endTime);
          this.checkTraderClicked(this.skierClicked, this.skierTimer, this.soundSkierReset, startTime, endTime);
          this.checkTraderClicked(this.peacekeeperClicked, this.peacekeeperTimer, this.soundPeacekeeperReset, startTime, endTime);
          this.checkTraderClicked(this.mechanicClicked, this.mechanicTimer, this.soundMechanicReset, startTime, endTime);
          this.checkTraderClicked(this.jaegerClicked, this.jaegerTimer, this.soundJaegerReset, startTime, endTime);
        },
        playTraderReminder(traderClicked, traderTimer) {
          if (traderClicked) {
            if (this.activateAlert1) {
              this.checkTraderClicked(traderClicked, traderTimer, soundResetImminent, 60000, 55000)
            }
            if (this.activateAlert5) {
              this.checkTraderClicked(traderClicked, traderTimer, soundResetIn5, 300000, 295000)
            }
            if (this.activateAlert10) {
              this.checkTraderClicked(traderClicked, traderTimer, soundResetIn10, 600000, 595000)
            } 
            if (this.activateAlert20) {
              this.checkTraderClicked(traderClicked, traderTimer, soundResetIn20, 1200000, 1195000)
            }
            if (this.activateAlert30) {
              this.checkTraderClicked(traderClicked, traderTimer, soundResetIn30, 1800000, 1750000)
            }
          }
        }
    },
    data: () => ({
        traderData: [],
        praporClicked: false,
        skierClicked: false,
        peacekeeperClicked: false,
        mechanicClicked: false,
        jaegerClicked: false,
        praporTimer: '',
        skierTimer: '',
        peacekeeperTimer: '',
        mechanicTimer: '',
        jaegerTimer: '',
        activateAlert1: false,
        activateAlert5: false,
        activateAlert10: false,
        activateAlert20: false,
        activateAlert30: false
    })
}
</script>

<style lang="sass" scoped>

</style>