gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
})

if (ScrollTrigger.isTouch !==1) {

  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  })

  gsap.fromTo('.hero-section', { opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '800',
      scrub: true,
    }
    })

  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
  itemsL.forEach(item => {
    gsap.fromTo(item, {x: -110, opacity: 0}, {
      opacity: 1, x: 0, 
      scrollTrigger: {
        trigger: item,

        end: "-100",
        scrub: true
      }
    })
  })

 
  let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
  itemsR.forEach(item => {
    gsap.fromTo(item, {x: 110, opacity: 0.1}, {
      opacity: 1, x: 0, 
      scrollTrigger: {
        trigger: item,

        end: "-100",
        scrub: true
      }
    })
  })

}


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("popup");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("popup2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("popup3");
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("popup4");
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}

var modal5 = document.getElementById("myModal5");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById("popup5");
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}

var modal6 = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById("popup6");
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks on <span> (x), close the modal
span6.onclick = function() {
  modal6.style.display = "none";
}

var modal7 = document.getElementById("myModal7");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img7 = document.getElementById("popup7");
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById("caption7");
img7.onclick = function(){
  modal7.style.display = "block";
  modalImg7.src = this.src;
  captionText7.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("close7")[0];

// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
  modal7.style.display = "none";
}

var modal8 = document.getElementById("myModal8");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img8 = document.getElementById("popup8");
var modalImg8 = document.getElementById("img08");
var captionText8 = document.getElementById("caption8");
img8.onclick = function(){
  modal8.style.display = "block";
  modalImg8.src = this.src;
  captionText8.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span8 = document.getElementsByClassName("close8")[0];

// When the user clicks on <span> (x), close the modal
span8.onclick = function() {
  modal8.style.display = "none";
}

var modal9 = document.getElementById("myModal9");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img9 = document.getElementById("popup9");
var modalImg9 = document.getElementById("img09");
var captionText9 = document.getElementById("caption9");
img9.onclick = function(){
  modal9.style.display = "block";
  modalImg9.src = this.src;
  captionText9.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span9 = document.getElementsByClassName("close9")[0];

// When the user clicks on <span> (x), close the modal
span9.onclick = function() {
  modal9.style.display = "none";
}
var modal10 = document.getElementById("myModal10");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img10 = document.getElementById("popup10");
var modalImg10 = document.getElementById("img010");
var captionText10 = document.getElementById("caption10");
img10.onclick = function(){
  modal10.style.display = "block";
  modalImg10.src = this.src;
  captionText10.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span10 = document.getElementsByClassName("close10")[0];

// When the user clicks on <span> (x), close the modal
span10.onclick = function() {
  modal10.style.display = "none";
}
var modal11 = document.getElementById("myModal11");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11 = document.getElementById("popup11");
var modalImg11 = document.getElementById("img011");
var captionText11 = document.getElementById("caption11");
img11.onclick = function(){
  modal11.style.display = "block";
  modalImg11.src = this.src;
  captionText11.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span11 = document.getElementsByClassName("close11")[0];

// When the user clicks on <span> (x), close the modal
span11.onclick = function() {
  modal11.style.display = "none";
}

function scrollWin() {
  window.scrollTo(0, 0);
    behavior: "smooth";
}

