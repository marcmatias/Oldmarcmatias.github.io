<template>
  <Layout :show-logo="true" :show-search="false">
    <h1 class="text-center">Search</h1>
    <div class="text-center">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by words in title"
        class="search-input"
        v-model="search"
      />
    </div>

    <!-- List posts -->
    <div>
      <div v-if="searchResults.length > 0">
        <PostCard
          v-for="result in searchResults"
          :key="result.node.id"
          :post="result.node"
        />
      </div>
      <div id="message" class="message text-center" v-else-if="search">
        <span>No results found</span>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "DD/MM/YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo: {
    title: "Search",
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    searchResults() {
      return this.$page.posts.edges.filter((post) => {
        return post.node.title
          .toLowerCase()
          .includes(this.search.toLowerCase().trim());
      });
    },
  },
};
</script>

<style lang="scss">
.search-input {
  padding: 0.5rem;
  margin: 1rem 0.5rem 3rem;
  width: 350px;
}
.message {
    border: 2px dashed rgba(128, 128, 128, 0.5);
    padding: 1rem;
    width: 60%;
    margin: 0 auto 2rem;
}
</style>
