<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Default Basic Form -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Default Basic Form"
    subtitle="All bootstrap element classies"
    modalid="modal-5"
    modaltitle="Default Basic Form"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
    &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;text&quot;&gt; Text &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input
            id=&quot;text&quot;
            type=&quot;text&quot;
            value=&quot;Artisanal kale&quot;
          &gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;search&quot;&gt; Search &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input
            id=&quot;search&quot;
            type=&quot;search&quot;
            value=&quot;How do I shoot web&quot;
          &gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;email&quot;&gt; Email &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input
            id=&quot;email&quot;
            type=&quot;email&quot;
            value=&quot;bootstrap@example.com&quot;
          &gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;url&quot;&gt; URL &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input
            id=&quot;url&quot;
            type=&quot;url&quot;
            value=&quot;https://getbootstrap.com&quot;
          &gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;tel&quot;&gt; Telephone &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input
            id=&quot;tel&quot;
            type=&quot;tel&quot;
            value=&quot;1-(555)-555-5555&quot;
          &gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;password&quot;&gt; Password &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input
            id=&quot;password&quot;
            type=&quot;password&quot;
            value=&quot;hunter2&quot;
          &gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;number&quot;&gt; Number &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input id=&quot;number&quot; type=&quot;number&quot; value=&quot;29&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;date&quot;&gt; Date &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input id=&quot;date&quot; type=&quot;date&quot; value=&quot;2011-08-19&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;time&quot;&gt; Time &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input id=&quot;time&quot; type=&quot;time&quot; value=&quot;13:45:00&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;datetime&quot;&gt;Date and time &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input
            id=&quot;datetime&quot;
            type=&quot;datetime-local&quot;
            value=&quot;2011-08-19T13:45:00&quot;
          &gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;month&quot;&gt; Month &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input id=&quot;month&quot; type=&quot;month&quot; value=&quot;2011-08&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;week&quot;&gt; Week &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input id=&quot;week&quot; type=&quot;week&quot; value=&quot;2011-W33&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;color&quot;&gt; Color &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input id=&quot;color&quot; type=&quot;color&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
      &lt;b-row class=&quot;my-3&quot;&gt;
        &lt;b-col sm=&quot;3&quot;&gt;
          &lt;label class=&quot;fw-medium&quot; for=&quot;range&quot;&gt; Input Range &lt;/label&gt;
        &lt;/b-col&gt;
        &lt;b-col sm=&quot;9&quot;&gt;
          &lt;b-form-input id=&quot;range&quot; type=&quot;range&quot;&gt;&lt;/b-form-input&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    
};
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="text"> Text </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="text"
            type="text"
            value="Artisanal kale"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="search"> Search </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="search"
            type="search"
            value="How do I shoot web"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="email"> Email </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="email"
            type="email"
            value="bootstrap@example.com"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="url"> URL </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="url"
            type="url"
            value="https://getbootstrap.com"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="tel"> Telephone </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="tel"
            type="tel"
            value="1-(555)-555-5555"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="password"> Password </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="password"
            type="password"
            value="hunter2"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="number"> Number </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="number" type="number" value="29"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="date"> Date </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="date" type="date" value="2011-08-19"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="time"> Time </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="time" type="time" value="13:45:00"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="datetime">Date and time </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="datetime"
            type="datetime-local"
            value="2011-08-19T13:45:00"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="month"> Month </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="month" type="month" value="2011-08"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="week"> Week </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="week" type="week" value="2011-W33"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="color"> Color </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="color" type="color"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col sm="3">
          <label class="fw-medium" for="range"> Input Range </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="range" type="range"></b-form-input>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DefaultBasicForm",

  data: () => ({}),
  components: { BaseCard },
};
</script>