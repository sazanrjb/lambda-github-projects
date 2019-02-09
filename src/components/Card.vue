<template>
  <div class="card has-shadow">
    <header class="card-header">
      <a :href="data.html_url" target="_blank" rel="noopener noreferrer" class="card-header-title button is-text">
        {{ data.name }}
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        {{ data.description }}
      </div>
    </div>
    <footer class="card-footer has-text-centered">
      <span class="card-footer-item">
        <v-icon name="star"/>{{ data.stargazers_count }}
      </span>
      <span class="card-footer-item">
        <v-icon name="code-branch"/> {{ data.forks }}
      </span>
      <span class="card-footer-item">
        <v-icon name="eye"/>{{ data.watchers_count }}
      </span>
    </footer>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
      data: {
          type: Object,
          required: true,
      },
  },
};
</script>

<style scoped>
    .card {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        box-shadow: 2px;
        margin-bottom: 10px;
    }
    .card-content {
        flex-grow: 1;
    }
    .card-header {
        flex-shrink: 1;
    }
    .card-header .card-header-title {
      margin: 0em;
    }
    .card-footer-item {
      flex-direction: column;
      line-height: 2em;
    }
</style>

