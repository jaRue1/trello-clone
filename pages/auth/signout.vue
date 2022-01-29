<template>
  <h1>Sign Out</h1>
</template>

<script>
export default {
  asyncData() {
    $nuxt.$fire.auth.signOut()
  },
}
</script>
