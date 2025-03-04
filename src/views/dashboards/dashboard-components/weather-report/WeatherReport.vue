<template>
  <div>
    <div class="d-flex align-items-center flex-row mt-4">
      <div class="p-2 display-6 text-info">
        <i class="mdi mdi-weather-windy-variant mr-2"></i>
        <span>73<sup>°</sup></span>
      </div>
      <div class="p-2 ml-4 pl-4">
        <h3 class="mb-0">Saturday</h3>
        <small>Ahmedabad, India</small>
      </div>
    </div>
    <table class="table table-borderless">
      <tr>
        <td>Wind</td>
        <td class="fw-medium">ESE 17 mph</td>
      </tr>
      <tr>
        <td>Humidity</td>
        <td class="fw-medium">83%</td>
      </tr>
      <tr>
        <td>Pressure</td>
        <td class="fw-medium">28.56 in</td>
      </tr>
      <tr>
        <td>Cloud Cover</td>
        <td class="fw-medium">78%</td>
      </tr>
      <tr>
        <td>Ceiling</td>
        <td class="fw-medium">25760 ft</td>
      </tr>
    </table>
    <ul
      class="list-unstyled row text-center city-weather-days border-top m-0 pt-3"
    >
      <li class="col col-6 col-md-3 text-center mt-2 pt-1">
        <i class="d-block font-24 text-info mdi mdi-weather-pouring"></i
        ><span class="d-block tetxt-muted text-nowrap pt-2">09:30</span>
        <h3 class="fw-light mt-1">70<sup>°</sup></h3>
      </li>
      <li class="col col-6 col-md-3 text-center mt-2 pt-1">
        <i class="d-block font-24 text-info mdi mdi-weather-lightning"></i
        ><span class="d-block tetxt-muted text-nowrap pt-2">11:30</span>
        <h3 class="fw-light mt-1">72<sup>°</sup></h3>
      </li>
      <li class="col col-6 col-md-3 text-center mt-2 pt-1">
        <i class="d-block font-24 text-info mdi mdi-weather-rainy"></i
        ><span class="d-block tetxt-muted text-nowrap pt-2">13:30</span>
        <h3 class="fw-light mt-1">75<sup>°</sup></h3>
      </li>
      <li class="col col-6 col-md-3 text-center mt-2 pt-1">
        <i class="d-block font-24 text-info mdi mdi-weather-sunny"></i
        ><span class="d-block tetxt-muted text-nowrap pt-2">15:30</span>
        <h3 class="fw-light mt-1">76<sup>°</sup></h3>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "WeatherReport",
  data: () => ({
    title: "WeatherReport",
  }),
};
</script>