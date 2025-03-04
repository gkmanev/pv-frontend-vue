<template>
  <div>
    <div class="card-body">
      <div class="mt-4 text-center">
        <img
          src="../../../../assets/images/users/5.jpg"
          alt="user"
          class="rounded-circle"
          width="150"
        />
        <h4 class="card-title mt-2">Hanna Gover</h4>
        <h6 class="card-subtitle text-muted font-weight-light">
          Accoubts Manager Amix corp
        </h6>
        <b-row class="text-center justify-content-md-center mt-3">
          <b-col cols="4">
            <a
              href="javascript:void(0)"
              class="link d-flex align-items-center justify-content-md-center"
              ><i class="icon-people mr-1"></i>
              <span class="font-weight-medium">254</span></a
            >
          </b-col>
          <b-col cols="4">
            <a
              href="javascript:void(0)"
              class="link d-flex align-items-center justify-content-md-center"
              ><i class="icon-picture mr-1"></i>
              <span class="font-weight-medium">54</span></a
            >
          </b-col>
        </b-row>
      </div>
    </div>
    <div>
      <hr />
    </div>
    <div class="card-body">
      <small class="text-muted font-weight-light">Email address </small>
      <h6 class="mb-4">hannagover@gmail.com</h6>
      <small class="text-muted font-weight-light">Phone</small>
      <h6 class="mb-4">+91 654 784 547</h6>
      <small class="text-muted font-weight-light">Address</small>
      <h6 class="mb-4">71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
      <div class="map-box mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
          class="w-100"
          height="150"
          style="border: 0"
          allowfullscreen
        ></iframe>
      </div>
      <small class="text-muted db">Social Profile</small>
      <br />
      <b-button variant="secondary" class="b-avatar rounded-circle mr-1">
        <i class="fab fa-facebook"></i>
      </b-button>
      <b-button variant="secondary" class="b-avatar rounded-circle mr-1">
        <i class="fab fa-twitter"></i>
      </b-button>
      <b-button variant="secondary" class="b-avatar rounded-circle mr-1">
        <i class="fab fa-youtube"></i>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileDetail",
  data: () => ({
    title: "UserProfileDetail",
  }),
};
</script>