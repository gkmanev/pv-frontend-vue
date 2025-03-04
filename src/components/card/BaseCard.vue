<template>
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">{{ title }}</h4>
          <b-card-text class="text-muted">
            {{ subtitle }}
          </b-card-text>
        </div>
        <div class="ml-auto" v-if="modalid">
          <!-- <b-button
            variant="link"
            class="p-0"
            v-b-tooltip.hover
            title="view code"
            v-b-modal="`${modalid}`"
          >
            <feather type="code" class="feather-sm"></feather>
          </b-button> -->
          <b-button
            size="sm"
            pill
            class="text-primary d-flex align-items-center justify-content-center"
            variant="light-primary"
            v-b-tooltip.hover
            title="view code"
            v-b-modal="`${modalid}`"
          >
            <feather type="code" class="feather-sm"></feather>
          </b-button>
          <b-modal :id="modalid" scrollable :title="modaltitle">
            <div v-highlight>
              <slot name="highlight"></slot>
            </div>
          </b-modal>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <slot name="comcode"></slot>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    modalid: {
      type: String,
      default: "",
    },
    modaltitle: {
      type: String,
      default: "",
    },
  },
};
</script>

