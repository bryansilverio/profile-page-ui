<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="name"
      show-expand
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Projects</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          Technologies:
          <template v-for="(value, index) in item.technologies">
            <v-chip :key="index" class="ma-2" color="primary">
              {{ value }}
            </v-chip>
          </template>
        </td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  name: 'Table',
  props: {
    headers: Array,
    items: Array,
  },
  data() {
    return {
      singleExpand: false,
      expanded: [],
    }
  },
}
</script>
