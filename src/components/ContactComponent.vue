<script>
export default {
  name: "ContactComponent",
  components: {},
  data: () => {
    return {};
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {

  },
};
</script>

<template>
  <h1 class="text-center text-uppercase display-3 mb-5">
    <mark class="color3 rounded-5">Contact</mark> Me
  </h1>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form action="https://formspree.io/f/xdorklej" method="POST">
          <input
            class="form-control mb-3 border color2 "
            name="name"
            placeholder="Name"
          />
          <input
            class="form-control mb-3 border color2 "
            name="email"
            placeholder="E-Mail"
          />
          <input
            class="form-control mb-3 border color2 "
            name="subject"
            placeholder="Subject"
          />
          <textarea
            class="form-control border color2  mb-3"
            name="body"
            placeholder="How can I help you?"
            style="height: 250px"
          ></textarea>
          <input
            class="btn rounded-3 color3 btn-md mb-3"
            type="submit"
            value="Send"
            style="width: 10rem"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
input {
  float: right;
}

</style>
