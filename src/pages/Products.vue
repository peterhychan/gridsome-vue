<template>
  <Layout>
    <h1>Products</h1>
    <div
      style="text-align: center;"
      v-for="edge in $page.allContentfulProduct.edges"
      :key="edge.node.id"
    >
      <h2 style="margin-bottom: 0.25em;">{{edge.node.name}}</h2>
      <g-image
        :src="edge.node.image.file.url"
        class="img-fluid mb-4"
        style="width: 100%; height: 300px; object-fit: contain;"
        :alt="edge.node.image.title"
      />
      <p>{{edge.node.description}}</p>
      <button
        class="btn btn-primary m-2"
        :data-item-id="edge.node.id"
        :data-item-name="edge.node.name"
        :data-item-image="edge.node.image.file.url"
        :data-item-price="edge.node.price"
        :data-item-url="edge.node.path"
      >Buy for ${{edge.node.price}}</button>
    </div>
    <hr />
    <Pager class="text-center" :info="$page.allContentfulProduct.pageInfo" linkClass="pager" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allContentfulProduct (perPage: 1, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        name
        price
        description
        image {
          title
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: { Pager },
  metaInfo: {
    title: "Products",
    meta: [
      { charset: "utf-8" },
      { name: "author", content: "Code Artistry" },
      {
        name: "description",
        content:
          "Discover our entire range of luxury apparel, shoes, and accessories"
      },
      {
        name: "keywords",
        content: "Premium Jackets, High-End Clothing, Designer Sunglasses"
      }
    ]
  }
};
</script>

<style scoped>
.pager {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  padding: 20px 20px;
}
</style>

