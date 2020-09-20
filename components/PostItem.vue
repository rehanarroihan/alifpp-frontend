<template>
  <div class="post-item">
    <nuxt-link
      class="post-name"
      :to="getPostDetailLink()"
    >
      {{ postName }}
    </nuxt-link>
    <p class="post-info">
      <span>by {{ postWriter }}</span>
      <span>| {{ getPostDate() }}</span>
      <span>| {{ postCat }}</span>
    </p>
    <p class="post-content" v-html="postContent" />
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'PostItem',
  props: {
    postId: {
      type: String,
    },
    postSlug: {
      type: String,
    },
    postName: {
      type: String,
    },
    postWriter: {
      type: String,
    },
    postDate: {
      type: String,
    },
    postCat: {
      type: String,
    },
    postContent: {
      type: String,
    },
  },
  methods: {
    getPostDate() {
      return moment(this.postDate).format('dddd, MMMM YYYY');
    },
    getPostDetailLink() {
      return '/post?id=' + this.postId + '&slug=' + this.postSlug;
    }
  }
}
</script>

<style lang="scss" scoped>
.post-item {
  
  .post-name {
    font-size: 24px;
    color: #106eea;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .post-name:hover {
    color: darken(#106eea, 10%);
  }

  .post-info {
    color: black;
    font-weight: 500;
    padding: 0;
    margin: 0;

    margin-top: 12px;
    margin-bottom: 12px;
  }

  .post-content {
    margin-bottom: 28px;
  }
}

.post-item:not(:last-child) {
  margin-bottom: 24px;
  border-bottom: 1px solid #dee2e6;
}
</style>