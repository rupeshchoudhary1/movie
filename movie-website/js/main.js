new Vue({
    el: '#app',
    data: {
      images: []
    },
    methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files);
      },
      createImage(files) {
        var vm = this;
        for (var index = 0; index < files.length; index++) {
          var reader = new FileReader();
          reader.onload = function(event) {
            const imageUrl = event.target.result;
            vm.images.push(imageUrl);
          }
          reader.readAsDataURL(files[index]);
        }
      },
      removeImage(index) {
        this.images.splice(index, 1)
      }
    }
  })


