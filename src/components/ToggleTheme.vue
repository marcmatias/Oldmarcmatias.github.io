<template>
  <div role="button" class="section-buttons">
    <g-link to="/search" class="bg-transparent">
      <button role="button" class="nav-buttons">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 14 14"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg> 
      </button>
    </g-link>
    <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme" class="nav-buttons">
        <svg v-if="darkTheme" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme
      // Delay to reset embed disqus and change text color
      setTimeout(this.$disqus.reset, 500);

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>

<style lang="scss">
.bg-transparent {
  background-color: transparent !important;
}
.nav-buttons {
  @extend .bg-transparent;
  border: 0;
  color: var(--body-color);
  cursor: pointer;

  &:hover {
    opacity: .8
  }
  &:focus {
    outline: none;
  }
}
.section-buttons {
  display: flex;
  align-items: center;
  gap: .2rem;
}
</style>