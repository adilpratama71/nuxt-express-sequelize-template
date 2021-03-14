export const state = () => ({
  fruits: []
})

export const mutations = {
  ADD_FRUITS(state, fruits) {
    state.fruits = fruits
  }
}

export const actions = {
  async getFruits(ctx) {
    const fruits = await this.$axios.$get("/api/fruits")
    ctx.commit("ADD_FRUITS", fruits)
  }
}
