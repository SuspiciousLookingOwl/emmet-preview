<template>
  <div id="app" class="container-fluid bg-dark">
    <div class="row">
      <div class="col-6 px-0">
        <textarea
          autofocus
          v-model="emmet"
          class="form-control pl-6 pt-3  h-100-vh bg-dark border-end border-secondary"
          placeholder="Enter Emmet Abbreviations Here..."
        />
      </div>
      <div class="col-6 pl-6 py-2 h-100-vh">
        <pre v-html="html"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import hl from "@/helper/highlight";
import expand from "emmet";

@Component
export default class App extends Vue {
  emmet = "table.table>(thead.head>tr>th*3{Head $})+(tbody.body>tr*5>th*3{$$$})";

  get html() {
    return hl.highlight("html", expand(this.emmet)).value;
  }
}
</script>

<style scoped>
body {
  height: 100%;
}

.pl-6 {
  padding-left: 48px;
}

.h-100-vh {
  height: 100vh;
}

pre {
  color: #979797 !important;
  overflow: auto;
  max-height: 100%;
  tab-size: 2;
}

textarea {
  width: 100%;
  resize: none;
  color: #f8f9fa !important;
  border: none;
}
</style>
