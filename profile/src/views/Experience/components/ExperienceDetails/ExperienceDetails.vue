<template>
  <v-dialog v-model="show_dialog" scrollable max-width="1200px" persistent>
    <v-card>
      <v-card-title>{{ Title }} projects</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <template v-if="Val">
          <template v-if="Val.hasOwnProperty('projects')">
            <template v-if="Val.projects">
              <ProjectTable :headers="headers" :items="Val.projects" />
            </template>
          </template>
        </template>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="hide()">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import ProjectTable from './ProjectTable'
export default {
  name: 'ExperienceDetail',
  components: { ProjectTable },
  data() {
    return {
      show_dialog: false,
      title: null,
      value: null,
      technologies: [],
    }
  },
  methods: {
    show() {
      this.show_dialog = true
    },
    hide() {
      this.show_dialog = false
    },
    onClickExpand(value) {
      value.toogle = !value.toogle
      console.log(value.toogle)
    },
    addPropertiesCollection() {
      if (this.value) {
        if (this.value.projects) {
          this.value.projects.forEach((element) => {
            element.toogle = false
          })
        }
      }
    },
  },
  computed: {
    Title: {
      set(value) {
        this.title = value
      },
      get() {
        return this.title
      },
    },
    Val: {
      set(value) {
        this.value = value
        this.addPropertiesCollection()
      },
      get() {
        return this.value
      },
    },
    headers() {
      return [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Description',
          align: 'start',
          sortable: false,
          value: 'description',
        },
      ]
    },
  },
}
</script>
