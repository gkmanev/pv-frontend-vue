<template>
  <div>
    <div class="table-responsive">
      <table class="table v-middle text-nowrap">
        <thead class="bg-light">
          <tr class>
            <th class="border-top-0">Assigned</th>
            <th class="border-top-0">Name</th>
            <th class="border-top-0">Priority</th>
            <th class="border-top-0">Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <div class="mr-2">
                  <b-avatar variant="primary" class="px-0" text="S"></b-avatar>
                </div>
                <div class>
                  <h6 class="mb-0">Sunil Joshi</h6>
                  <small class="text-muted">Web Designer</small>
                </div>
              </div>
            </td>
            <td>Elite Admin</td>
            <td>
              <b-badge pill variant="danger" class="px-2">Low</b-badge>
            </td>
            <td>$3.9K</td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <div class="mr-2">
                  <b-avatar variant="danger" text="M"></b-avatar>
                </div>
                <div class>
                  <h6 class="mb-0">Andrew</h6>
                  <small class="text-muted">Project Manager</small>
                </div>
              </div>
            </td>
            <td>Real Homes</td>
            <td>
              <b-badge pill variant="info" class="px-2">Medium</b-badge>
            </td>
            <td>$23.9K</td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <div class="mr-2">
                  <b-avatar variant="warning" text="D"></b-avatar>
                </div>
                <div class>
                  <h6 class="mb-0">Bhavesh patel</h6>
                  <small class="text-muted">Developer</small>
                </div>
              </div>
            </td>
            <td>MedicalPro Theme</td>
            <td>
              <b-badge pill variant="success" class="px-2">High</b-badge>
            </td>
            <td>$12.9K</td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <div class="mr-2">
                  <b-avatar variant="success" text="N"></b-avatar>
                </div>
                <div class>
                  <h6 class="mb-0">Nirav Joshi</h6>
                  <small class="text-muted">Frontend Eng</small>
                </div>
              </div>
            </td>
            <td>Elite Admin</td>
            <td>
              <b-badge pill variant="danger" class="px-2">Low</b-badge>
            </td>
            <td>$10.9K</td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <div class="mr-2">
                  <b-avatar variant="dark" text="H" />
                </div>
                <div class>
                  <h6 class="mb-0">Micheal Doe</h6>
                  <small class="text-muted">Content Writer</small>
                </div>
              </div>
            </td>
            <td>Helping Hands</td>
            <td>
              <b-badge pill variant="success" class="px-2">High</b-badge>
            </td>
            <td>$12.9K</td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <div class="mr-2">
                  <b-avatar variant="danger" text="J"></b-avatar>
                </div>
                <div class>
                  <h6 class="mb-0">Johnathan</h6>
                  <small class="text-muted">Graphic</small>
                </div>
              </div>
            </td>
            <td>Digital Agency</td>
            <td>
              <b-badge pill variant="warning" class="px-2">High</b-badge>
            </td>
            <td>$2.6K</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectTable",
  data: () => ({
    title: "ProjectTable",
  }),
};
</script>