<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card Image -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Card Image"
    subtitle="Use <b-skeleton-img> to represent images in <b-card>. Remember to set the card-img prop to the position of the image."
    modalid="modal-3"
    modaltitle="Card Image"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-row&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;h5&gt;Image top&lt;/h5&gt;
    &lt;b-card no-body img-top&gt;
      &lt;b-skeleton-img card-img=&quot;top&quot; aspect=&quot;3:1&quot;&gt;&lt;/b-skeleton-img&gt;
      &lt;b-card-body&gt;
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        viverra nunc sapien, non rhoncus elit tincidunt vitae.
      &lt;/b-card-body&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;h5&gt;Image bottom&lt;/h5&gt;
    &lt;b-card no-body img-bottom&gt;
      &lt;b-card-body&gt;
        Vestibulum maximus, ligula eu feugiat molestie, massa diam
        imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut
        molestie est.
      &lt;/b-card-body&gt;
      &lt;b-skeleton-img card-img=&quot;bottom&quot; aspect=&quot;3:1&quot;&gt;&lt;/b-skeleton-img&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;

&lt;b-row class=&quot;mt-md-3&quot;&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;h5&gt;Image left&lt;/h5&gt;
    &lt;b-card no-body img-left&gt;
      &lt;b-skeleton-img card-img=&quot;left&quot; width=&quot;225px&quot;&gt;&lt;/b-skeleton-img&gt;
      &lt;b-card-body&gt;
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus at consequat dui.
      &lt;/b-card-body&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
  &lt;b-col cols=&quot;12&quot; md=&quot;6&quot;&gt;
    &lt;h5&gt;Image right&lt;/h5&gt;
    &lt;b-card no-body img-right&gt;
      &lt;b-skeleton-img card-img=&quot;right&quot; width=&quot;225px&quot;&gt;&lt;/b-skeleton-img&gt;
      &lt;b-card-body&gt;
        Aenean tristique sagittis quam, sit amet sollicitudin neque
        sodales in.
      &lt;/b-card-body&gt;
    &lt;/b-card&gt;
  &lt;/b-col&gt;
&lt;/b-row&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-row>
        <b-col cols="12" md="6">
          <h5>Image top</h5>
          <b-card no-body img-top>
            <b-skeleton-img card-img="top" aspect="3:1"></b-skeleton-img>
            <b-card-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              viverra nunc sapien, non rhoncus elit tincidunt vitae.
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <h5>Image bottom</h5>
          <b-card no-body img-bottom>
            <b-card-body>
              Vestibulum maximus, ligula eu feugiat molestie, massa diam
              imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut
              molestie est.
            </b-card-body>
            <b-skeleton-img card-img="bottom" aspect="3:1"></b-skeleton-img>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mt-md-3">
        <b-col cols="12" md="6">
          <h5>Image left</h5>
          <b-card no-body img-left>
            <b-skeleton-img card-img="left" width="225px"></b-skeleton-img>
            <b-card-body>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus at consequat dui.
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <h5>Image right</h5>
          <b-card no-body img-right>
            <b-skeleton-img card-img="right" width="225px"></b-skeleton-img>
            <b-card-body>
              Aenean tristique sagittis quam, sit amet sollicitudin neque
              sodales in.
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SkeletonCardImage",

  data: () => ({}),
  components: { BaseCard },
};
</script>