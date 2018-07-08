const $images = $(".image-thumbnail")
const $containers = $(".container-photo");
const anitime = 150;

$(".searchbox").on('change keyup paste', function() {
  let key = this.value.toLowerCase();
  if (key.length > 0)
    for (let i = 0; i < $images.length; ++i) {
      let $container = $($containers[i]);
      let description = $($containers[i]).attr("title").toLowerCase();
      if (description.indexOf(key) >= 0) {
        $container.show(anitime);
}
      else
        $container.hide(anitime);
      }
  else
    $containers.show(anitime);
});
