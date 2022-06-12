function toggleNav() {
  $("nav").toggleClass("togglednav");
  $(".navlink").toggleClass("animated");
  $(".navlink").toggleClass("slideInLeft");
  scrollTo(top);
  if (document.getElementsByTagName("html")[0].style.overflow == "hidden") {
    document.getElementsByTagName("html")[0].style.overflow = "visible";
  } else {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  }
}

function toggleTeamNav() {
  toggleNav();
  $("body").toggleClass("toggledteam");
  $(".teamletter").toggleClass("animated");
  $(".teamletter").toggleClass("slideInLeft");
  if (document.getElementsByTagName("html")[0].style.overflow == "hidden") {
    document.getElementsByTagName("html")[0].style.overflow = "visible";
  } else {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  }
}

currentYear = document.getElementById("currentYear");
var date = new Date();
var year = date.getFullYear();
currentYear.innerHTML = year;

function imageLoop() {
  var basepath = "/static/images/gallery/";
  /*var gallery = ['battle_of_the_bay/','competitions/'];
    var battle_of_the_bay = ['1', '2', '3'];
    var competitions = ['4', '5', '6', '7'];
    var totallist = [battle_of_the_bay, competitions];
    totallist.forEach(function(event) {
        event.forEach(function(image) {
            $(".column:nth-child(1)").append('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
            $(".column:nth-child(2)").prepend('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
            $(".column:nth-child(3)").append('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
            $(".column:nth-child(4)").prepend('<img class="galleryimage" src="' + basepath + gallery[totallist.indexOf(event)] + image + '.jpg">');
        });
    });*/
  /*for (var i = 0; i < totallist.length; i++) {
        for (var n = 0; n < totallist[i].length; n++) {
            $("#gallery").append("<img src=\"" + basepath + totallist[i][n] + '.jpeg">');
        }

    }*/
  var files = ["rick1.jpeg", "rick2.jpeg", "rick3.jpeg", "rick4.jpeg"];

  for (const file of files) {
    $("#slides").append(
      '<div class="slideImg"><img class="galleryimage" src="' +
        basepath +
        "/" +
        file +
        '"></div>'
    );
  }
}
teamletters = ["A", "B", "C", "K", "R", "S"];
function populateTeamNav() {
  for (i = teamletters.length - 1; i >= 0; i--) {
    $(".teamletters").prepend(
      '<a href="../' +
        teamletters[i].toLowerCase() +
        '.html" class="teamletter gradienttext"onClick="toggleTeamNav()">' +
        teamletters[i] +
        "</a>"
    );
  }
}

populateTeamNav();

linknames = ["Gallery", "Sponsors", "Donate", "Contact Us"];
links = [
  "gallery.html",
  "sponsors.html",
  "donate.html",
  "contact.html",
];
function populateNav() {
  for (i = 0; i < links.length; i++) {
    $(".links").append(
      '<li class="navlink"><a href="../' +
        links[i] +
        '" class="link"onclick="toggleNav()">' +
        linknames[i] +
        "</a></li>"
    );
  }
}

populateNav();

//imageLoop();
/*
let slideI = 1;
showSlides(slideI);

function changeSlide(n){
  showSlides(slideI += n);
}

function currSlide(n){
  showSlides(slideI = n);
}

function showSlides(n){
  let slides = document.getElementsByClassName("slideImg");
  if(n>slides.length){slideI=1}
  if(n<1){slideI=slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideI-1].style.display = "block";
}*/

var prezLinks = [
  "https://drive.google.com/open?id=1ds09cnbuP2DbrLcoegZKKnc79plkbSCr24seIgcbFgU",
  "https://drive.google.com/open?id=1czRFx12VOB6_6FFu1tHJrvgAva-kWa7r_ZbN-7Pxas0",
  "https://drive.google.com/open?id=1HXSzGJqJ_0P-WAIR5tVxJYYR0zyPbFXZwahXCYQkvxc",
  "https://drive.google.com/open?id=1Co1IcnDAOU1ILBoGIzwD8ox2R4U9O0g7ykcLrXfH9_4",
  "https://drive.google.com/open?id=1m-f02A9g0KJN0salFp4PuCZrV716IMxSffCxbVzZfJo",
  "https://drive.google.com/open?id=1royEabEcNmsw1qqPe93lb0V9mS7DiSCo-nCt1lzZydI",
  "https://drive.google.com/open?id=1Bv1TjdlBpbnZiSrSWHgVphHEIrtMyXaZOrhr7mFxGgs",
  "https://drive.google.com/open?id=19SfnCtaIe0_rLAOnBu9e8yzELgxaoWkeFePKEHtXQh8",
  "https://drive.google.com/open?id=1h03u6xVBR7W1_tvYR-a2LcrxGg1irk-UoUThsJvymig",
  "https://drive.google.com/open?id=1LoWrse5cKoy2lBdhVJn1mMVUpMt0kAdBktCRRMII5T0",
  "https://drive.google.com/open?id=1xP3_Mj-ngb8Ad_NRPKK3qD33zzBc7b_Dd1y0hbvLPHw",
];
var prezTitles = [
  "Overview",
  "Week 1: Engineering Process",
  "Week 2: Math Behind The Mechs",
  "Week 3: Motion Transfer",
  "Week 4: VEX Parts Overview",
  "Week 5: Bases & Friction Reductions",
  "Week 6: Lifts & Joints",
  "Week 7: Launchers",
  "Week 8: Intakes",
  "Week 9: Sensors & Electronics",
  "Week 10: Pneumatics",
];

function presentationList(presentationLinks, presentationTitles) {
  $("#debug").append("<li class=\"footnote\">a</li>");
  for (var i = 0; i < presentationLinks.length; i++) {
    $("#presentationList").append(
      '<li class="prezlisting"><a target="_blank" class="generallink" href="' +
        presentationLinks[i] +
        '">' +
        presentationTitles[i] +
        "</a></li>"
    );
  }
}

presentationList(prezLinks, prezTitles);

// gallery

galleryImgs = [
  "./static/images/gallery/rick1.jpeg",
  "./static/images/gallery/rick2.jpeg",
  "./static/images/gallery/rick3.jpeg",
  "./static/images/gallery/rick4.jpeg",
];

const nextPic = document.querySelector(".next-picture");
const galleryPic = document.querySelector(".gallery-picture");
const prevPic = document.querySelector(".previous-picture");
/*
let counter = 1;
prevPic.addEventListener("click", function () {
  counter -= 1;
  if (counter < 0) {
    counter = galleryImgs.length - 1;
  }

  console.log(galleryImgs[counter]);

  galleryPic.src = galleryImgs[counter];
});

nextPic.addEventListener("click", function () {
  counter += 1;
  if (counter >= galleryImgs.length) {
    counter = 0;
  }

  galleryPic.src = galleryImgs[counter];
});*/
/*
function get_doc(id){
  $("#debug").append("<li>e</li>");
  const url = 'https://www.googleapis.com/drive/v3/files/'+id+'?alt=media'
  if(self.fetch){
  var setHeaders = new Headers();
  setHeaders.append('Authorization', 'Bearer ' + authToken.access_token);
  setHeaders.append('Content-Type', mime);

  var setOptions = {
      method: 'GET',
      headers: setHeaders
  };
  fetch(url,setOptions)
      .then(response => { if(response.ok){
      var reader = response.body.getReader();
      var decoder = new TextDecoder();
      reader.read().then(function(result){
          var data = {}
          data = decoder.decode(result.value, {stream: !result.done});
          console.log(data);
      });
      }
      else{
        $("#debug").append("<p class=\"paragraph\">Response bad</p>");
        console.log("Response was not ok");
      }
      }).catch(error => {
        $("#debug").append("<p class=\"paragraph\">Response bad</p>");
        console.log("There is an error " + error.message);
      });
  }
}

get_doc('1R8HiiCwxjgiH9tKQSvKGK4n-Vs2YWGHM3xo10N5DiSU');
*/

var images = [
  "././static/images/gfr-bg-a.jpeg",
  "././static/images/gfr-bg-b.jpeg",
  "././static/images/gfr-bg-c.jpeg",
  "././static/images/gfr-bg-dark.png",
  "././static/images/gfr-bg-k.jpeg",
  "././static/images/gfr-bg-plain.png",
  "././static/images/gfr-bg-r.jpeg",
  "././static/images/gfr-bg-s.jpeg",
  "././static/images/gfr-bg.png",
  "././static/images/gfr.png",
  "././static/images/gfr-bg-a.jpeg",
  "././static/images/gfr-bg-b.jpeg",
  "././static/images/gfr-bg-c.jpeg",
  "././static/images/gfr-bg-dark.png",
  "././static/images/gfr-bg-k.jpeg",
  "././static/images/gfr-bg-plain.png",
  "././static/images/gfr-bg-r.jpeg",
  "././static/images/gfr-bg-s.jpeg",
  "././static/images/gfr-bg.png",
  "././static/images/gfr.png",
  "././static/images/gfr-bg-a.jpeg",
  "././static/images/gfr-bg-b.jpeg",
  "././static/images/gfr-bg-c.jpeg",
  "././static/images/gfr-bg-dark.png",
  "././static/images/gfr-bg-k.jpeg",
  "././static/images/gfr-bg-plain.png",
  "././static/images/gfr-bg-r.jpeg",
  "././static/images/gfr-bg-s.jpeg"
]

var imagesA = [
  "././static/images/gfr-bg-a.jpeg",
  "././static/images/gfr-bg-b.jpeg",
  "././static/images/gfr-bg-c.jpeg",
  "././static/images/gfr-bg-dark.png",
  "././static/images/gfr-bg-k.jpeg",
  "././static/images/gfr-bg-plain.png",
  "././static/images/gfr-bg-r.jpeg",
  "././static/images/gfr-bg-s.jpeg",
]

function populateGalleryD(target_class,imageLinks) {
  for(var i = 0; i < imageLinks.length; i++){
    $(target_class).append("<article class=\"team-gallery-img-container fade-in "+(i%2==0?"a":"b")+"\"><img src=\"" + imageLinks[i] + "\" alt=\"\" class=\"team-gallery-img\"/></article>")
  }
}

//populateGallery(".gallery-main",images);
//populateGallery(".gallery-a",imagesA);

function populateGallery(target,folder,n){
  var i = 1;
  for(var i = 1; i < n+1; ++i){
    try{
      $(target).append("<article class=\"team-gallery-img-container fade-in "+(i%2==1?"a":"b")+"\"><object data=\"././static/images/" + folder + "/" + i + ".jpeg\" class=\"team-gallery-img\"><img src=\"././static/images/q.jpeg\" class=\"team-gallery-img\"alt=\"\"></object></article>");
    }
    catch(error){
      break;
    }
  }
}

function populateMembers(target,members,folder){
  for(var i = 0; i < members.length;++i){
    try{
      $(target).append("<div class=\"team-member\"><div class=\"team-member-side team-member-front\"><object data=\"././static/images/"+folder+"/"+members[i][0]+".jpeg\" class=\"team-member-photo\"><img src=\"././static/images/dummymember.jpeg\" class=\"team-member-photo\"alt=\"\"></object></div><div class=\"team-member-side team-member-back\"><div class=\"team-member-info\"><p class=\"team-member-text\">"+members[i][0] + " " + members[i][1] +"</p><p class=\"team-member-text\">"+members[i][2]+"</p></div></div></div>")
    }
    catch(error){
      $(target).append("<div class=\"team-member\"><div class=\"team-member-side team-member-front\"><img src=\"././static/images/dummymember.jpeg\" class=\"team-member-photo\"alt=\"\"></div><div class=\"team-member-side team-member-back\"><div class=\"team-member-info\"><p class=\"team-member-text\">"+members[i][1]+"</p><p class=\"team-member-text\">"+members[i][2]+"</p></div></div></div>")
    }
  }
}



/*function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return ("<div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>{props.children}</div>");
}*/

//======================================================================================================================================================
//======================================================================================================================================================
//======================================================================================================================================================
//======================================================================================================================================================
//======================================================================================================================================================

var membersA = [
  ["Akshat","Khandelwal","Captain"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"]
]
var membersB = [
  ["Akshat","Khandelwal","Captain"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"]
]
var membersC = [
  ["Akshat","Khandelwal","Captain"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"]
]
var membersK = [
  ["Akshat","Khandelwal","Captain"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"]
]
var membersR = [
  ["Akshat","Khandelwal","Captain"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"]
]
var membersS = [
  ["Akshat","Khandelwal","Captain"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"],
  ["Akshat","Goon"]
]

populateMembers("#members-a",membersA,"members_a");
populateMembers("#members-b",membersB,"members_b");
populateMembers("#members-c",membersC,"members_c");
populateMembers("#members-k",membersK,"members_k");
populateMembers("#members-r",membersR,"members_r");
populateMembers("#members-s",membersS,"members_s");

populateGallery("#gallery-a","gallery_a",8);
populateGallery("#gallery-b","gallery_b",8);
populateGallery("#gallery-c","gallery_c",8);
populateGallery("#gallery-k","gallery_k",8);
populateGallery("#gallery-r","gallery_r",8);
populateGallery("#gallery-s","gallery_s",8);
populateGallery(".gallery-main","gallery",120);

const faders = document.querySelectorAll('.fade-in');
const fadeOptions = {threshold: 0.2};
const appearOnScroll = new IntersectionObserver (
  function(entries, appaearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('is-visible');
        appearOnScroll.unobserve(entry.target);
      }
    })
  }, fadeOptions
)
faders.forEach(fader =>{
  appearOnScroll.observe(fader);
})