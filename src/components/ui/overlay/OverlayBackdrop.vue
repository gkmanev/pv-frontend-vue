<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Overlay backdrop color -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Overlay backdrop color"
    subtitle="You can control the backdrop background color via the variant prop. "
    modalid="modal-8"
    modaltitle="Overlay backdrop color"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-row&gt;
      &lt;b-col lg=&quot;6&quot; aria-controls=&quot;overlay-background&quot;&gt;
        &lt;b-form-group label=&quot;Variant&quot; label-for=&quot;bg-variant&quot; label-cols-sm=&quot;4&quot; label-cols-lg=&quot;12&quot;&gt;
          &lt;b-form-select id=&quot;bg-variant&quot; v-model=&quot;variant&quot; :options=&quot;variants&quot;&gt;&lt;/b-form-select&gt;
        &lt;/b-form-group&gt;

        &lt;b-form-group label=&quot;Opacity&quot; label-for=&quot;bg-opacity&quot; label-cols-sm=&quot;4&quot; label-cols-lg=&quot;12&quot;&gt;
          &lt;b-input-group&gt;
            &lt;b-form-input
              id=&quot;bg-opacity&quot;
              v-model=&quot;opacity&quot;
              type=&quot;range&quot;
              number
              min=&quot;0&quot;
              max=&quot;1&quot;
              step=&quot;0.01&quot;
            &gt;&lt;/b-form-input&gt;
            &lt;b-input-group-append is-text class=&quot;text-monospace&quot;&gt;
              {{ opacity.toFixed(2) }}
            &lt;/b-input-group-append&gt;
          &lt;/b-input-group&gt;
        &lt;/b-form-group&gt;

        &lt;b-form-group label=&quot;Blur&quot; label-for=&quot;bg-blur&quot; label-cols-sm=&quot;4&quot; label-cols-lg=&quot;12&quot;&gt;
          &lt;b-form-select id=&quot;bg-blur&quot; v-model=&quot;blur&quot; :options=&quot;blurs&quot;&gt;&lt;/b-form-select&gt;
        &lt;/b-form-group&gt;
      &lt;/b-col&gt;

      &lt;b-col lg=&quot;6&quot;&gt;
        &lt;b-overlay
          id=&quot;overlay-background&quot;
          show
          :variant=&quot;variant&quot;
          :opacity=&quot;opacity&quot;
          :blur=&quot;blur&quot;
          rounded=&quot;sm&quot;
        &gt;
          &lt;b-card title=&quot;Card with overlay&quot; aria-hidden=&quot;true&quot;&gt;
            &lt;b-card-text&gt;
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            &lt;/b-card-text&gt;

            &lt;b-button disabled variant=&quot;primary&quot;&gt;Button&lt;/b-button&gt;
          &lt;/b-card&gt;
        &lt;/b-overlay&gt;
      &lt;/b-col&gt;
    &lt;/b-row&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        variant: 'light',
        opacity: 0.85,
        blur: '2px',
        variants: [
          'transparent',
          'white',
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ],
        blurs: [
          { text: 'None', value: '' },
          '1px',
          '2px',
          '5px',
          '0.5em',
          '1rem'
        ]
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
      <div>
        <b-row>
          <b-col lg="6" aria-controls="overlay-background">
            <b-form-group
              label="Variant"
              label-for="bg-variant"
              label-cols-sm="4"
              label-cols-lg="12"
            >
              <b-form-select
                id="bg-variant"
                v-model="variant"
                :options="variants"
              ></b-form-select>
            </b-form-group>

            <b-form-group
              label="Opacity"
              label-for="bg-opacity"
              label-cols-sm="4"
              label-cols-lg="12"
            >
              <b-input-group>
                <b-form-input
                  id="bg-opacity"
                  v-model="opacity"
                  type="range"
                  number
                  min="0"
                  max="1"
                  step="0.01"
                ></b-form-input>
                <b-input-group-append is-text class="text-monospace">
                  {{ opacity.toFixed(2) }}
                </b-input-group-append>
              </b-input-group>
            </b-form-group>

            <b-form-group
              label="Blur"
              label-for="bg-blur"
              label-cols-sm="4"
              label-cols-lg="12"
            >
              <b-form-select
                id="bg-blur"
                v-model="blur"
                :options="blurs"
              ></b-form-select>
            </b-form-group>
          </b-col>

          <b-col lg="6">
            <b-overlay
              id="overlay-background"
              show
              :variant="variant"
              :opacity="opacity"
              :blur="blur"
              rounded="sm"
            >
              <b-card title="Card with overlay" aria-hidden="true">
                <b-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </b-card-text>

                <b-button disabled variant="primary">Button</b-button>
              </b-card>
            </b-overlay>
          </b-col>
        </b-row>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "OverlayBackdrop",

  data: () => ({
    variant: "light",
    opacity: 0.85,
    blur: "2px",
    variants: [
      "transparent",
      "white",
      "light",
      "dark",
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
    ],
    blurs: [{ text: "None", value: "" }, "1px", "2px", "5px", "0.5em", "1rem"],
  }),
  components: { BaseCard },
};
</script>