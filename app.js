console.log("test");
const images = [
  {
    image: "./beach.jpg",
    alt: "A beautiful beach",
  },
  {
    image: "./forest-with-lake.jpg",
    alt: "There is a beautiful meadow",
  },
  {
    image: "./meadow.jpg",
    alt: "Is`a beautiful meadow.",
  },
  {
    image: "./metrapol.jpg",
    alt: "This picture is about metrapol life",
  },
  {
    image: "./ocean.jpg",
    alt: "The ocean is very peacful",
  },
];

const thumbnailContainer = document.getElementById("thumbnail-container");

function createThumbnails() {
  for (let image of images) {
    let thumbImg = document.createElement("img");
    thumbImg.setAttribute("src", image.image);
    thumbImg.setAttribute("alt", image.alt);
    thumbImg.classList.add("thumb-image");
    thumbnailContainer.appendChild(thumbImg);
  }
}
createThumbnails(images);
console.log(createThumbnails);
thumbnailContainer.addEventListener("click", clear);

function clear() {
  largethumblecontainer.innerHTML = null;
}

const largethumblecontainer = document.getElementById(
  "thumbnail-large-container"
);

function createImage(src, alt, height, widht, classname) {
  const newImg = document.createElement("img");
  newImg.classList.add("thumb-large-image");
  newImg.src = src;
  newImg.alt = alt;
  newImg.height = height;
  newImg.width = widht;
  newImg.className = classname;
  largethumblecontainer.appendChild(newImg);
}

const image1 = document.getElementById("img1");
image1.addEventListener("click", handleClick1);
function handleClick1() {
  largethumblecontainer.innerHTML = null;
  createImage("./beach.jpg", "Its a beautiful Beach", 695, 1550, "beach");
}

const image2 = document.getElementById("img2");
image2.addEventListener("click", handleClick2);
function handleClick2() {
  largethumblecontainer.innerHTML = null;
  createImage(
    "./forest-with-lake.jpg",
    "You can see beautiful lake in forest",
    695,
    1550,
    "lake"
  );
}
const image3 = document.getElementById("img3");
image3.addEventListener("click", handleClick3);
function handleClick3() {
  largethumblecontainer.innerHTML = null;
  createImage("./meadow.jpg", "This is wonderful meadow", 695, 1550, "meadow");
}

const image4 = document.getElementById("img4");
image4.addEventListener("click", handleClick4);
function handleClick4() {
  largethumblecontainer.innerHTML = null;
  createImage("./metrapol.jpg", "Metropol city", 695, 1550, "metrapol");
}
const image5 = document.getElementById("img5");
image5.addEventListener("click", handleClick5);
function handleClick5() {
  largethumblecontainer.innerHTML = null;
  createImage("./ocean.jpg", "The ocean is very peacful", 695, 1550, "ocean");
}
