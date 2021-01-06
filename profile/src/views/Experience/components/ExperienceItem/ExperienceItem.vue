<template>
  <div class="col-xl-8 order-xl-1">
    <div class="card">
      <div class="card-header">
        <div class="row align-items-center">
          <div class="col-8">
            <h3 class="mb-0">{{ $t('titles.information') }}</h3>
          </div>
          <div class="col-4 text-right"></div>
        </div>
      </div>
      <div class="card-body" style="max-height: 800px; overflow: scroll;">
        <Timeline :timeline-items="items" :message-when-no-items="'No items'" />
      </div>
    </div>
  </div>
</template>
<script>
import Timeline from 'timeline-vuejs'

import generalHelper from '@/helpers/generalHelper'

export default {
  name: 'Experience',
  components: { Timeline },
  props: {
    experience: Array,
  },
  computed: {
    items() {
      const collection = []
      if (this.experience) {
        this.experience.forEach((element) => {
          if (element) {
            let option = {
              from: generalHelper.convertStringToDate(element.start_date),
              title: element.company,
              showDayAndMonth: false,
              description: element.description,
              color: generalHelper.getColorHex(),
            }
            collection.push(option)
          }
        })
      }
      return collection
    },
  },
}
</script>
