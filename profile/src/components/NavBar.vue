<template>
  <!-- Top navbar -->
  <nav
    class="navbar navbar-top navbar-expand navbar-dark bg-default border-bottom fixed-top"
    id="navbar-main"
  >
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar links -->
        <ul class="navbar-nav align-items-center ml-md-auto">
          <li class="nav-item d-xl-none">
            <!-- Sidenav toggler -->
            <div
              class="pr-3 sidenav-toggler sidenav-toggler-dark"
              data-action="sidenav-pin"
              data-target="#sidenav-main"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </div>
          </li>
          <li class="nav-item d-sm-none">
            <a
              class="nav-link"
              href="#"
              data-action="search-show"
              data-target="#navbar-search-main"
            >
              <i class="ni ni-zoom-split-in"></i>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="ni ni-ungroup"></i>
            </a>
            <div
              class="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right"
            >
              <div class="row shortcuts px-4">
                <router-link to="/" class="col-4 shortcut-item">
                  <span
                    class="shortcut-media avatar rounded-circle bg-gradient-red"
                  >
                    <i class="ni ni-single-02"></i>
                  </span>
                  <small>{{ $t('menu.profile') }}</small>
                </router-link>
                <router-link to="/experience" class="col-4 shortcut-item">
                  <span
                    class="shortcut-media avatar rounded-circle bg-gradient-orange"
                  >
                    <i class="ni ni-briefcase-24"></i>
                  </span>
                  <small>{{ $t('menu.experience') }}</small>
                </router-link>
              </div>
            </div>
          </li>

          <!-- Traslate -->
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="ni ni-world-2"></i>
              <small class="ml-2">{{ $i18n.locale }}</small>
            </a>
            <div
              class="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right"
            >
              <div class="row shortcuts px-4">
                <div
                  class="col-4 shortcut-item"
                  @click="changeLanguage(locale.ES)"
                  style="cursor: pointer;"
                >
                  <span
                    class="shortcut-media avatar rounded-circle bg-gradient-red"
                  >
                    <i>{{ locale.ES }}</i>
                  </span>
                </div>
                <div
                  class="col-4 shortcut-item"
                  @click="changeLanguage(locale.EN)"
                  style="cursor: pointer;"
                >
                  <span
                    class="shortcut-media avatar rounded-circle bg-gradient-orange"
                  >
                    <i>{{ locale.EN }}</i>
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav align-items-center ml-auto ml-md-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link pr-0"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img
                    alt="Image placeholder"
                    src="assets/images/avatar/avatar7.png"
                  />
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm font-weight-bold">Bryan Silverio</span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>My profile</span>
              </a>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </a>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </a>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-support-16"></i>
                <span>Support</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  props: {
    data: Object,
  },
  data() {
    return {
      locale: {
        ES: 'es',
        EN: 'en',
      },
    }
  },
  mounted() {},
  methods: {
    changeLanguage(locale) {
      console.log(locale)
      this.$i18n.locale = locale
    },
  },
}
</script>
