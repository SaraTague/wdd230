const images = document.querySelectorAll("picture img[data-src]");

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  images.forEach((image) => {
    observer.observe(image);
  });
} else {
  images.forEach((image) => {
    loadImages(image);
  });
}
