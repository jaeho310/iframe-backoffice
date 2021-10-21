<template>
  <div>
    <v-app-bar
      dense
      dark
    >
      <v-tabs align-with-title v-model="activeTab">
        <v-tab v-for="tab of tabs" :key="tab.id" @click="tabClick(tab.id)">
          {{tab.name}}
        </v-tab>
      </v-tabs>
      <!-- <ul class="menu">
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
      </ul> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: '',
      activeTab: 0,
      tabs: [
        { id: 0, name: 'HOME' },
        { id: 1, name: 'STATUS' },
        { id: 2, name: 'SETTING' }
      ]
    }
  },
  methods: {
    tabClick(id) {
      if (id == 0) {
        this.toHome()
      } else if (id == 1) {
        this.toStatus()
      } else if (id == 2) {
        this.toSetting()
      }
    },
    toStatus() {
      this.path = 'status'
      let currentPath = this.getCurrentPath()
      if (this.path == currentPath) {
        this.activeTab = 2
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
    },
    checkTabId() {
      let currentPath = this.getCurrentPath()
      if (currentPath == '') {
        this.activeTab = 0
      } else if (currentPath == 'status') {
        this.activeTab = 1
      } else if (currentPath == 'setting') {
        this.activeTab = 2
      }
      console.log(this.activeTab)
    }
  },
  mounted() {
    this.checkTabId()
  }
}
</script>

<style>
  ul.menu li{ display: inline;}
</style>
