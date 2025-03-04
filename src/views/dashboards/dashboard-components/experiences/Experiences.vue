<template>
  <div>
    <div class="card-body">
      <h4 class="card-title">Experiances</h4>
      <div class="table-responsive">
        <table class="table mb-0 mt-4 table-borderless no-wrap">
          <tbody>
            <tr>
              <td style="width: 90px">
                <img
                  src="../../../../assets/images/browser/photoshop.jpg"
                  alt="photoshop"
                />
              </td>
              <td style="width: 200px">
                <h4 class="card-title">Photoshop</h4>
                <h6 class="card-subtitle text-muted">This is a sample text</h6>
              </td>
              <td class="align-middle">
                <b-progress value="65" variant="success"></b-progress>
              </td>
            </tr>
            <tr>
              <td style="width: 90px">
                <img
                  src="../../../../assets/images/browser/sketch.jpg"
                  alt="sketch"
                />
              </td>
              <td style="width: 200px">
                <h4 class="card-title">Sketch</h4>
                <h6 class="card-subtitle text-muted">This is a sample text</h6>
              </td>
              <td class="align-middle">
                <b-progress value="45" variant="success"></b-progress>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="card-body border-top">
      <div class="row">
        <div class="col-6 col-md-4 col-xl-5 text-center">
          <h2>5486</h2>
          <h6 class="text-muted">Projects</h6>
        </div>
        <div class="col-6 col-md-4 col-xl-5 text-center">
          <h2>987</h2>
          <h6 class="text-muted text-truncate">Winning Entries</h6>
        </div>
        <div class="col-md-4 col-xl-2 align-self-center text-center">
          <b-button variant="success" block> Hire me </b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Experiences",
  data: () => ({
    title: "Experiences",
  }),
};
</script>