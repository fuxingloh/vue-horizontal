<template>
  <div>
    <div class="header">
      <div class="brand">
        Brand
      </div>

      <vue-horizontal class="horizontal" :displacement="0.5" :button-between="false">
        <template v-slot:btn-prev>
          <svg class="btn-left" viewBox="0 0 24 24">
            <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z"/>
          </svg>
        </template>

        <template v-slot:btn-next>
          <svg class="btn-right" viewBox="0 0 24 24">
            <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z"/>
          </svg>
        </template>

        <div v-for="tab in tabs" :key="tab.name">
          <div class="tab" :class="{selected: selected === tab.name}" @click="selected = tab.name">
            {{ tab.name }}
          </div>
        </div>
      </vue-horizontal>

      <div class="option">
        Filter
      </div>
    </div>

    <main>
      <div v-for="tab in tabs" :key="tab.name" v-if="tab.name === selected">
        <h1>{{ tab.content }}</h1>
        <br>
        <div>
          <p>
            Since tabs can be placed on the horizontal axis, and some might find it useful.
            This is just a simple tabs design to showcase how you can use vue-horizontal for it.
            When the screen is too small, vue-horizontal will automatically add navigation control if the screen is too
            small.
          </p>
          <br>
          <p>
            As vue-horizontal is the main concern, this section is just an example how you can do tabs.
            Ideally you should use vue-router to route to another page when the tab is selected.
          </p>
          <br>
          <p>You might need to change your browser width to see the navigation control show up if your screen is too
            wide.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {name: 'Home', content: 'Home Page Example'},
        {name: 'For You', content: 'For You Page Example'},
        {name: 'Trending', content: 'Trending Page Example'},
        {name: 'Feed', content: 'Feed Page Example'},
        {name: 'Gallery', content: 'Gallery Page Example'},
        {name: 'Profile', content: 'Profile Page Example'},
        {name: 'Friends', content: 'Friends Page Example'},
        {name: 'Extra', content: 'Extra Page Example'},
        {name: 'Setting', content: 'Setting Page Example'},
        {name: 'Page Content 1', content: 'Page 1'},
        {name: 'Page Content 2', content: 'Page 2'},
        {name: 'Page Content 3', content: 'Page 3'},
        {name: 'Page Content 4', content: 'Page 4'},
        {name: 'Page Content 5', content: 'Page 5'},
        {name: 'Page Content 6', content: 'Page 6'},
      ],
      selected: 'Home'
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  border-bottom: 1px solid #e2e8f0;
}

.brand, .option {
  flex-shrink: 0;
  padding: 0 24px;
  margin: 6px 0;
  font-size: 18px;
  font-weight: 700;
}

.horizontal {
  flex-shrink: 1;
  flex-grow: 1;
  width: 50%;
}

.brand {
  border-right: 1px solid #e2e8f0;
}

.option {
  border-left: 1px solid #e2e8f0;
}

.btn-left, .btn-right {
  padding: 8px;
  height: 100%;
}

.btn-left {
  background: linear-gradient(to left, #ffffff00 0, #fff 50%, #fff);
  padding-right: 16px;
}

.btn-right {
  background: linear-gradient(to right, #ffffff00 0, #fff 50%, #fff);
  padding-left: 16px;
}

.tab {
  padding: 8px 24px 6px 24px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
}

.tab.selected {
  border-bottom: 2px solid black;
}

main {
  padding: 24px;
}

@media (min-width: 768px) {
  main {
    padding: 48px;
  }
}
</style>

