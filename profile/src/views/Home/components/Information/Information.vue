<template>
  <div class="col-xl-8 order-xl-1">
    <div class="card">
      <div class="card-header">
        <div class="row align-items-center">
          <div class="col-8">
            <h3 class="mb-0">{{ $t('titles.information') }}</h3>
          </div>
          <div class="col-4 text-right">
             
          </div>
        </div>
      </div>
      <div class="card-body">
        <form v-if="data">
          <h6 class="heading-small text-muted mb-4">{{ $t('info') }}</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-lg-6">
                <InfoItem :label="'information.name'" :value="data.name" />
              </div>
              <div class="col-lg-6">
                <InfoItem :label="'information.email'" :value="data.email" />
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <!-- Social Network -->
          <h6 class="heading-small text-muted mb-4">{{ $t('contact') }}</h6>
          <div class="pl-lg-4">
            <SocialNetwork :social_network="data.social_network" />
          </div>

          <hr class="my-4" />
          <!-- Skills -->
          <h6 class="heading-small text-muted mb-4">{{ $t('skills') }}</h6>
          <div class="pl-lg-4">
            <Skill :skills="data.skills" />
          </div>
          <hr class="my-4" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import InfoItem from './InfoItem'
import Skill from '../Skill/Skill'
import SocialNetwork from '../SocialNetwork/SocialNetwork'
export default {
  name: 'Information',
  components: { InfoItem, Skill, SocialNetwork },
  props: {
    data: Object,
  },
}
</script>
