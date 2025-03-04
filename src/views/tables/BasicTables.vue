<template>
  <b-row>
    <b-col cols="12">
      <!-- 1 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Basic Table</h5>
        </b-card-body>
        <b-table responsive class="mb-0" head-variant="light" :items="items">
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <!-- <b-img
              :src="require('@/assets/images/users/' + data.item.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.teamimg2)"
              rounded="circle"
              :alt="data.item.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.teamimg3)"
              rounded="circle"
              :alt="data.item.teamimg3"
              width="35"
              class="border border-white"
            /> -->
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Custom User Datatable</h5>
        </b-card-body>
        <b-table
          class="mb-0"
          hover
          :fields="fieldscustom"
          :items="itemscustom"
          responsive="sm"
        >
          <!-- A virtual column -->
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>

          <!-- A custom formatted column -->
          <template #cell(name)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.image)"
              rounded="circle"
              :alt="data.item.image"
              width="40"
            />
            <span class="ml-2 fw-medium">{{ data.item.name }}</span>
          </template>

          <!-- A virtual composite column -->
          <template #cell(project)="data">
            {{ data.item.project }}
          </template>

          <!-- Optional default data cell scoped slot -->
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.teamimg1)"
              rounded="circle"
              :alt="data.item.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.teamimg2)"
              rounded="circle"
              :alt="data.item.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.teamimg3)"
              rounded="circle"
              :alt="data.item.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>

          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.statustype }}
            </b-badge>
          </template>

          <template #cell(completion)="data">
            <b-progress
              height="12px"
              :value="data.item.value"
              :max="data.item.max"
              show-value
              :variant="data.item.color"
            ></b-progress>
          </template>
        </b-table>
      </b-card>
      <!-- 2 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Striped Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          head-variant="light"
          striped
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <!-- 3 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Bordered Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          head-variant="light"
          bordered
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <!-- 4 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Borderless Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          borderless
          hover
          head-variant="light"
          tbody-tr-class="border-top"
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <!-- 5 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Hoverable Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          borderless
          head-variant="light"
          hover
          tbody-tr-class="border-top"
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <!-- 5.1 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Foot Clone Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          borderless
          head-variant="light"
          hover
          foot-clone=""
          tbody-tr-class="border-top"
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <!-- 6 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Dark Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          borderless
          striped
          hover
          dark
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <!-- 6.1 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Dark Header Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          borderless
          hover
          head-variant="dark"
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <!-- 7 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Header Varient Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          borderless
          hover
          head-variant="light"
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <!-- 8 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Small Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          bordered
          hover
          small
          head-variant="light"
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <!-- 9 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Sticky Header Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          bordered
          hover
          sticky-header="true"
          style="height: 180px"
          head-variant="light"
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
      <b-row>
        <b-col lg="6">
          <!-- 10  -->
          <b-card no-body class="mb-4">
            <b-card-body class="p-3">
              <h5 class="card-title mb-0">Info Table</h5>
            </b-card-body>
            <b-table
              responsive
              class="mb-0"
              bordered
              table-variant="info"
              :items="table1"
            ></b-table>
          </b-card>
        </b-col>
        <b-col lg="6">
          <!-- 11  -->
          <b-card no-body class="mb-4">
            <b-card-body class="p-3">
              <h5 class="card-title mb-0">Primary Table</h5>
            </b-card-body>
            <b-table
              responsive
              class="mb-0"
              bordered
              table-variant="primary"
              :items="table1"
            ></b-table>
          </b-card>
        </b-col>
        <b-col lg="6">
          <!-- 12  -->
          <b-card no-body class="mb-4">
            <b-card-body class="p-3">
              <h5 class="card-title mb-0">Warning Table</h5>
            </b-card-body>
            <b-table
              responsive
              class="mb-0"
              bordered
              table-variant="warning"
              :items="table1"
            ></b-table>
          </b-card>
        </b-col>
        <b-col lg="6">
          <!-- 13  -->
          <b-card no-body class="mb-4">
            <b-card-body class="p-3">
              <h5 class="card-title mb-0">Danger Table</h5>
            </b-card-body>
            <b-table
              responsive
              class="mb-0"
              bordered
              table-variant="danger"
              :items="table1"
            ></b-table>
          </b-card>
        </b-col>
        <b-col lg="6">
          <!-- 14  -->
          <b-card no-body class="mb-4">
            <b-card-body class="p-3">
              <h5 class="card-title mb-0">Success Table</h5>
            </b-card-body>
            <b-table
              responsive
              class="mb-0"
              bordered
              table-variant="success"
              :items="table1"
            ></b-table>
          </b-card>
        </b-col>
        <b-col lg="6">
          <!-- 15  -->
          <b-card no-body class="mb-4">
            <b-card-body class="p-3">
              <h5 class="card-title mb-0">Secondary Table</h5>
            </b-card-body>
            <b-table
              responsive
              class="mb-0"
              bordered
              table-variant="secondary"
              :items="table1"
            ></b-table>
          </b-card>
        </b-col>
      </b-row>

      <!-- 18 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Bottom Caption Table</h5>
        </b-card-body>
        <b-table
          responsive
          class="mb-0"
          hover
          head-variant="light"
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
          <template #table-caption>
            <div class="p-2">This is a table caption.</div>
          </template>
        </b-table>
      </b-card>
      <!-- 19 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Top Caption Table</h5>
        </b-card-body>
        <b-table
          caption-top
          responsive
          class="mb-0"
          hover
          head-variant="light"
          :items="items"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
          <template #table-caption>
            <div class="p-2">This is a table caption.</div>
          </template>
        </b-table>
      </b-card>

      <!-- 23 -->
      <b-card no-body class="mb-4">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Transition Table</h5>
        </b-card-body>
        <b-table
          responsive=""
          id="table-transition-example"
          :items="table5"
          :fields="fields5"
          striped
          small
          borderless
          class="mb-0"
          primary-key="id"
          :tbody-transition-props="transProps"
        >
          <template #cell(id)="data"> #{{ data.item.id }} </template>
          <template #cell(user)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.user.image)"
              rounded="circle"
              :alt="data.item.user.image"
              width="40"
            />
            <span class="ml-2 fw-medium"
              >{{ data.item.user.first }} {{ data.item.user.last }}</span
            >
          </template>
          <template #cell(team)="data">
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
              rounded="circle"
              :alt="data.item.team.teamimg1"
              width="35"
              class="mr-n2 border border-white"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
              rounded="circle"
              :alt="data.item.team.teamimg2"
              width="35"
              class="mr-n2 border border-white card-hover"
            />
            <b-img
              :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
              rounded="circle"
              :alt="data.item.team.teamimg3"
              width="35"
              class="border border-white"
            />
          </template>
          <template #cell(status)="data">
            <b-badge
              pill
              :class="`px-2 text-white badge bg-${data.item.status.statusbg}`"
            >
              <i class="font-9 mdi mdi-checkbox-blank-circle"></i>
              {{ data.item.status.statustype }}
            </b-badge>
          </template>
        </b-table>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "BasicTables",

  data: () => ({
    page: {
      title: "BasicTables",
    },
    fieldsbasic: [
      "id",
      {
        key: "user",
        label: "Full Name",
      },
      {
        key: "project",
        label: "Project Name",
      },
      {
        key: "team",
        label: "Team",
      },
      {
        key: "status",
        label: "Status",
      },
    ],
    items: [
      {
        id: "123",
        user: { image: "1.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Xtreme Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },

        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "451",
        user: { image: "2.jpg", first: "Larsen", last: "Shaw" },
        project: "Severny Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
      {
        id: "234",
        user: { image: "3.jpg", first: "Geneva", last: "Wilson" },
        project: "Adminpro Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "343",
        user: { image: "4.jpg", first: "Jami", last: "Carney" },
        project: "Adminwrap Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "info", statustype: "Start" },
      },
      {
        id: "134",
        user: { image: "5.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
    ],

    fields: [
      {
        key: "last_name",
        sortable: true,
      },
      {
        key: "first_name",
        sortable: true,
      },
      {
        key: "age",
        label: "Person age",
        sortable: true,
      },
    ],
    table1: [
      { first_name: "Dickerson", last_name: "Macdonald", age: 40 },
      { first_name: "Larsen", last_name: "Shaw", age: 21 },
      { first_name: "Geneva", last_name: "Wilson", age: 89 },
      { first_name: "Jami", last_name: "Carney", age: 38 },
    ],

    transProps: {
      // Transition name
      name: "flip-list",
    },
    table5: [
      {
        id: "123",
        user: { image: "1.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Xtreme Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "451",
        user: { image: "2.jpg", first: "Larsen", last: "Shaw" },
        project: "Severny Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
      {
        id: "234",
        user: { image: "3.jpg", first: "Geneva", last: "Wilson" },
        project: "Adminpro Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "danger", statustype: "Pending" },
      },
      {
        id: "343",
        user: { image: "4.jpg", first: "Jami", last: "Carney" },
        project: "Adminwrap Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "info", statustype: "Start" },
      },
      {
        id: "134",
        user: { image: "5.jpg", first: "Dickerson", last: "Macdonald" },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: { statusbg: "success", statustype: "Completed" },
      },
    ],
    fields5: [
      { key: "id", sortable: true },
      {
        key: "user",
        label: "Full Name",
        sortable: true,
      },
      {
        key: "project",
        label: "Project Name",
        sortable: true,
      },
      {
        key: "team",
        label: "Team Members",
      },
      {
        key: "status",
        label: "Status",
      },
    ],
    fieldscustom: ["index", "Name", "Project", "Team", "Status", "Completion"],
    itemscustom: [
      {
        image: "1.jpg",
        name: "Dickerson Macdonald",
        project: "Xtreme Admin",
        teamimg1: "2.jpg",
        teamimg2: "4.jpg",
        teamimg3: "5.jpg",
        status: "danger",
        statustype: "Pending",
        value: 33.333333333,
        max: 100,
        color: "info",
      },
      {
        image: "2.jpg",
        name: "Larsen Shaw",
        project: "Monster Admin",
        teamimg1: "1.jpg",
        teamimg2: "5.jpg",
        teamimg3: "4.jpg",
        status: "warning",
        statustype: "Pause",
        value: 53.111,
        max: 100,
        color: "primary",
      },
      {
        image: "4.jpg",
        name: "Geneva Wilson",
        project: "Severny Admin",
        teamimg1: "2.jpg",
        teamimg2: "5.jpg",
        teamimg3: "1.jpg",
        status: "info",
        statustype: "Start",
        value: 45,
        max: 100,
        color: "danger",
      },
      {
        image: "5.jpg",
        name: "Jami Carney",
        project: "Adminpro Admin",
        teamimg1: "1.jpg",
        teamimg2: "4.jpg",
        teamimg3: "5.jpg",
        status: "success",
        statustype: "Completed",
        value: 53.111,
        max: 100,
        color: "success",
      },
    ],
  }),
  components: {},
};
</script>
