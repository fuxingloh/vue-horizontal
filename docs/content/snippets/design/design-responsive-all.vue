<template>
  <main>
    <vue-horizontal class="horizontal">
      <section v-for="item in items" :key="item.i">
        <div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </div>
      </section>
    </vue-horizontal>
  </main>
</template>

<script>
export default {
  data() {
    return {
      // E.g: creates 20 array items...
      items: [...Array(20).keys()].map((i) => {
        return {i, title: `Responsive`, content: `Content`};
      }),
    }
  }
}
</script>

<style scoped>
/* Layout/Content Style */
main {
  margin: 24px;
}

section > div {
  padding: 16px 24px;
  background: #f3f3f3;
  border-radius: 4px;
  border: 1px #ebebeb solid;
}
</style>

<style scoped>
/* Responsive Style */
/* section is used to control sizing, div is for the inner styling. */

@media (max-width: 640px) {
  .horizontal {
    margin: 0 -24px;
  }

  .horizontal >>> .v-hl-container {
    scroll-padding-left: 16px;
  }

  .horizontal >>> .v-hl-btn {
    display: none;
  }

  section {
    width: calc(100% - (16px + 16px));
    padding: 0 8px;
  }

  section:first-child {
    padding-left: 24px;
    width: calc(100% - 16px);
  }

  section:last-child {
    padding-right: 24px;
    width: calc(100% - 16px);
  }

  section:only-child {
    width: 100%;
  }
}

@media (min-width: 640px) {
  section {
    width: calc((100% - (24px)) / 2);
    margin-right: 24px;
  }
}

@media (min-width: 768px) {
  section {
    width: calc((100% - (2 * 24px)) / 3);
  }
}

@media (min-width: 1024px) {
  section {
    width: calc((100% - (3 * 24px)) / 4);
  }
}

@media (min-width: 1280px) {
  section {
    width: calc((100% - (4 * 24px)) / 5);
  }
}
</style>
