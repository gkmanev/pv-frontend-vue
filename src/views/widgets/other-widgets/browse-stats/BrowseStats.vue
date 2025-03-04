<template>
  <div>
    <div class="table-responsive">
      <table class="table browser mb-0 no-border">
        <tbody>
          <tr>
            <td class="border-0" style="width: 40px">
              <img src="@/assets/images/browser/chrome-logo.png" alt="logo" />
            </td>
            <td class="border-0">Google Chrome</td>
            <td class="border-0" align="right">
              <b-badge pill variant="info" class="px-2">23%</b-badge>
            </td>
          </tr>
          <tr>
            <td class="border-0">
              <img src="@/assets/images/browser/firefox-logo.png" alt="logo" />
            </td>
            <td class="border-0">Mozila Firefox</td>
            <td class="border-0" align="right">
              <b-badge pill variant="success" class="px-2">15%</b-badge>
            </td>
          </tr>
          <tr>
            <td class="border-0">
              <img src="@/assets/images/browser/safari-logo.png" alt="logo" />
            </td>
            <td class="border-0">Apple Safari</td>
            <td class="border-0" align="right">
              <b-badge pill variant="primary" class="px-2">07%</b-badge>
            </td>
          </tr>
          <tr>
            <td class="border-0">
              <img src="@/assets/images/browser/internet-logo.png" alt="logo" />
            </td>
            <td class="border-0">Internet Explorer</td>
            <td class="border-0" align="right">
              <b-badge pill variant="warning" class="px-2">09%</b-badge>
            </td>
          </tr>
          <tr>
            <td class="border-0">
              <img src="@/assets/images/browser/opera-logo.png" alt="logo" />
            </td>
            <td class="border-0">Opera mini</td>
            <td class="border-0" align="right">
              <b-badge pill variant="danger" class="px-2">23%</b-badge>
            </td>
          </tr>
          <tr>
            <td class="border-0">
              <img src="@/assets/images/browser/internet-logo.png" alt="logo" />
            </td>
            <td class="border-0">Microsoft edge</td>
            <td class="border-0" align="right">
              <b-badge pill variant="primary" class="px-2">09%</b-badge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "BrowseStats",
  data: () => ({
    title: "BrowseStats",
  }),
};
</script>