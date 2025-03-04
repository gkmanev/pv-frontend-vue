<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Employee Timing -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Employee Timing</h4>
          <b-card-text class="text-muted">
            To use add border-bottom py-3 class in the every row styling.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <!-- part 1 start -->
      <b-row class="py-3 align-items-center border-bottom bg-light">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="ename3"> Employee Name </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="ename3"
            type="text"
            placeholder="Employee Name here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="pname3"> Project Name </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="pname3"
            type="text"
            placeholder="Project Name here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom bg-light">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="date3"> Date </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="date3" type="date"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="rate3"> Rate Per Hour </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="rate3"
            type="text"
            placeholder="Rate Per Hour here"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom bg-light">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="sdate3"> Start Time </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="sdate3" type="time"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="edate3"> End Time </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="edate3" type="time"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="py-3 align-items-center border-bottom bg-light">
        <b-col sm="3" class="text-left text-md-right">
          <label class="fw-medium mb-0" for="notes3"> Notes </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="notes3"
            type="text"
            placeholder="Notes here"
          ></b-form-input>
        </b-col>
      </b-row>
      <!-- part 1 end -->
    </b-card-body>
    <div class="p-35 border-top">
      <div class="btn-grp text-right">
        <b-button pill variant="primary" class="px-4">Save</b-button>
        <b-button pill variant="danger" class="px-4">Cancel</b-button>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "EmployeeTiming",

  data: () => ({}),
};
</script>