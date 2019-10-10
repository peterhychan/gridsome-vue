<template>
  <footer>
    By
    <a href="https://www.github.com/peterhychan" target="_blank">Ho Yeung Chan</a>
    in {{getCurrentYear}}
  </footer>
</template>

<script>
export default {
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
footer {
  text-align: center;
  letter-spacing: 0.2rem;
  padding: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>

