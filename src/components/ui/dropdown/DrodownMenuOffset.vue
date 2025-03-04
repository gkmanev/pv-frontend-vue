<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Menu offset -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Menu offset"
    subtitle="Specified as a number of pixels: positive for right shift, negative for left shift."
    modalid="modal-2"
    modaltitle="Menu offset"
  >
  <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;div class=&quot;btn-grp&quot;&gt;
&lt;b-dropdown
  variant=&quot;primary&quot;
  id=&quot;dropdown-offset&quot;
  offset=&quot;25&quot;
  text=&quot;Offset 25 Dropdown&quot;
&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  variant=&quot;primary&quot;
  id=&quot;dropdown-offset&quot;
  offset=&quot;35&quot;
  text=&quot;Offset 35 Dropdown&quot;
&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;b-dropdown
  variant=&quot;primary&quot;
  id=&quot;dropdown-offset&quot;
  offset=&quot;45&quot;
  text=&quot;Offset 45 Dropdown&quot;
&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
  &lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/div&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-dropdown
          variant="primary"
          id="dropdown-offset"
          offset="25"
          text="Offset 25 Dropdown"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          variant="primary"
          id="dropdown-offset"
          offset="35"
          text="Offset 35 Dropdown"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          variant="primary"
          id="dropdown-offset"
          offset="45"
          text="Offset 45 Dropdown"
        >
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DrodownMenuOffset",

  data: () => ({}),
  components: { BaseCard },
};
</script>