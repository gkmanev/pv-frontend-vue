<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Skeleton -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Basic Skeleton"
    subtitle="<b-skeleton> is a BootstrapVue custom component, that allows you to display a loading state for several component types while your data is being fetched or computed."
    modalid="modal-1"
    modaltitle="Basic Skeleton"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">

&lt;template&gt;
  &lt;div&gt;
    &lt;div class=&quot;d-flex align-items-center mb-3&quot;&gt;
      &lt;b-progress class=&quot;w-100&quot; :max=&quot;maxLoadingTime&quot; height=&quot;1.5rem&quot;&gt;
        &lt;b-progress-bar :value=&quot;loadingTime&quot; :label=&quot;`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`&quot;&gt;&lt;/b-progress-bar&gt;
      &lt;/b-progress&gt;

      &lt;b-button class=&quot;ml-3&quot; @click=&quot;startLoading()&quot;&gt;Reload&lt;/b-button&gt;
    &lt;/div&gt;

    &lt;b-skeleton-wrapper :loading=&quot;loading&quot;&gt;
      &lt;template #loading&gt;
        &lt;b-card&gt;
          &lt;b-skeleton width=&quot;85%&quot;&gt;&lt;/b-skeleton&gt;
          &lt;b-skeleton width=&quot;55%&quot;&gt;&lt;/b-skeleton&gt;
          &lt;b-skeleton width=&quot;70%&quot;&gt;&lt;/b-skeleton&gt;
        &lt;/b-card&gt;
      &lt;/template&gt;

      &lt;b-card&gt;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien,
        non rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie,
        massa diam imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis quam,
        sit amet sollicitudin neque sodales in.
      &lt;/b-card&gt;
    &lt;/b-skeleton-wrapper&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        loading: false,
        loadingTime: 0,
        maxLoadingTime: 3
      }
    },
    watch: {
      loading(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.clearLoadingTimeInterval()

          if (newValue) {
            this.$_loadingTimeInterval = setInterval(() =&gt; {
              this.loadingTime++
            }, 1000)
          }
        }
      },
      loadingTime(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue === this.maxLoadingTime) {
            this.loading = false
          }
        }
      }
    },
    created() {
      this.$_loadingTimeInterval = null
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true
        this.loadingTime = 0
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="d-flex align-items-center mb-3">
        <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
          <b-progress-bar
            :value="loadingTime"
            :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"
          ></b-progress-bar>
        </b-progress>

        <b-button class="ml-3" @click="startLoading()">Reload</b-button>
      </div>

      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-card>
            <b-skeleton width="85%"></b-skeleton>
            <b-skeleton width="55%"></b-skeleton>
            <b-skeleton width="70%"></b-skeleton>
          </b-card>
        </template>

        <b-card>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          viverra nunc sapien, non rhoncus elit tincidunt vitae. Vestibulum
          maximus, ligula eu feugiat molestie, massa diam imperdiet odio, vitae
          viverra ligula est id nisi. Aliquam ut molestie est. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis
          quam, sit amet sollicitudin neque sodales in.
        </b-card>
      </b-skeleton-wrapper>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicSkeleton",

  data: () => ({
    loading: false,
    loadingTime: 0,
    maxLoadingTime: 3,
  }),
  components: { BaseCard },
  watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval();

        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++;
          }, 1000);
        }
      }
    },
    loadingTime(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false;
        }
      }
    },
  },
  created() {
    this.$_loadingTimeInterval = null;
  },
  mounted() {
    this.startLoading();
  },
  methods: {
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval);
      this.$_loadingTimeInterval = null;
    },
    startLoading() {
      this.loading = true;
      this.loadingTime = 0;
    },
  },
};
</script>