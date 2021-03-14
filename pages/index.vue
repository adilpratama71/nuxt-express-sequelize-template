<template>
  <div class="container">
    <div
      class="d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <Logo />
      <h1>
        My Awesome Nuxt Application
      </h1>
      <div>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline-success mx-2"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-success mx-2"
        >
          GitHub
        </a>
      </div>
      <div>
        <ul class="list-group list-group-flush">
          <li v-for="fruit in fruits" :key="fruit.id" class="list-group-item">
            {{ fruit.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  methods: {
    ...mapActions(["getFruits"])
  },
  computed: {
    ...mapState(["fruits"])
  },
  created() {
    this.getFruits()
  }
}
</script>

<style></style>
