<template>
  <div class="comment-page">
    <h1>Leave a Comment</h1>
    <form @submit.prevent="submitComment">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required>

      <label for="comment">Comment:</label>
      <textarea id="comment" v-model="comment" required></textarea>

      <button type="submit">Submit</button>
    </form>

    <ul class="comments">
      <li v-for="(comment, index) in comments" :key="index">
        <strong>{{ comment.name }}:</strong>
        {{ comment.comment }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      comment: '',
      comments: []
    }
  },
  methods: {
    submitComment() {
      this.comments.push({
        name: this.name,
        comment: this.comment
      });

      this.name = '';
      this.comment = '';
    }
  }
}
</script>

<style scoped>
.comment-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-size: 17px;
}

.comments {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

.comments li {
  margin-bottom: 10px;
}
</style>