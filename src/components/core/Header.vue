<template>
  <div>
    <v-app-bar
      dense
      dark
    >
      <ul class="menu">
        <li>
          <v-btn
          @click="toHome"
          >
          home
          </v-btn>
        </li>
        <li>
          <v-btn
          @click="toStatus"
          >
          status
          </v-btn>
        </li>
        <li>
          <v-btn
          @click="toSetting"
          >
          setting
          </v-btn>
        </li>
      </ul>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: ''
    }
  },
  methods: {
    toStatus() {
      this.path = 'status'
      let currentPath = this.getCurrentPath()
      if (this.path == currentPath) {
        location.reload()
      } else {
        this.$router.push("/status")
      }
    },
    toSetting() {
      this.path = 'setting'
      let currentPath = this.getCurrentPath()
      if (this.path == currentPath) {
        location.reload()
      } else {
        this.$router.push("/setting")
      }
    },
    toHome() {
      this.path = ''
      let currentPath = this.getCurrentPath()
      if (this.path == currentPath) {
        location.reload()
      } else {
        this.$router.push("/")
      }
    },
    getCurrentPath() {
      let pathObj = window.location.href.split('/')
      let key = Object.keys(pathObj).length - 1
      console.log(pathObj)
      console.log(pathObj[key])
      return pathObj[key]
    }
  },
}
</script>

<style>
  ul.menu li{ display: inline;}
</style>
