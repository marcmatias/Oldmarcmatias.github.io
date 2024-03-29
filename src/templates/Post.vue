<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />

    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <Disqus lang="pt_BR" :identifier="$page.post.title" />
    </div>

    <Author class="post-author" />
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
    PostMeta,
    PostTags
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "twitter:title",
          name: "twitter:title",
          content: this.$page.metadata.siteName,
        },
        {
          key: "description",
          name: "description",
          content: this.$page.post.description,
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content:
            this.$page.metadata.siteUrl + this.$page.post.cover_image.src,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.description,
        },
        {
          key: "og:title",
          name: "og:title",
          content: this.$page.metadata.siteName,
        },
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.post.description,
        },
        {
          key: "og:image",
          name: "og:image",
          content:
            this.$page.metadata.siteUrl + this.$page.post.cover_image.src,
        },
      ],
    };
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  metadata {
  	siteName
  	siteUrl
  	siteDescription
  }
  post: post (id: $id) {
    title
    path
    date (format: "DD/MM/YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
  max-width: 58rem;
  margin: 0 auto;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  background-color: var(--bg-content-color);
	max-width: var(--content-width);
	margin: 0 auto;
	transition: background-color .6s;
	padding: var(--space);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
