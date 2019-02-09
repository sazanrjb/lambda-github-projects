<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ data.name }}</p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        {{ data.description }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Save</a>
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
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
    }
    .card-content {
        flex-grow: 1;
        flex: 1,
    }
    .card-header {
        flex-shrink: 1;
    }
</style>

