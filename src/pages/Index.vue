<template>
  <Layout :showFooter="true">
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="text-center jumbotron">
      <g-image alt="Example image" src="~/assets/images/favicon.png" height="200" width="100" />

      <h1>Welcome !</h1>

      <p>This is a demo project in Gridsome-Vue. For more info about me, please visit one of the links below. Thanks for visiting.</p>

      <p class="home-links">
        <a
          href="https://peterhychan.github.io"
          target="_blank"
          class="btn btn-primary"
          rel="noopener"
        >Portfolio</a>
        <a
          href="https://github.com/peterhychan"
          target="_blank"
          class="btn btn-primary"
          rel="noopener"
        >GitHub</a>
      </p>
    </div>
  </Layout>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    Footer
  }
};
</script>

<style scoped>
.home-links a {
  margin-right: 1rem;
}
</style>
