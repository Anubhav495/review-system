const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 5,
    name: "hanna",
    job: "Student",
    img:
      "./images/first.jfif",
    text:
    "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 6,
    name: "bill gates",
    job: "the billionare",
    img:
    "./images/fourth.jfif",
    text:
      "I love Money and windows, and yeah I hate apples ,all kinds of them",
  },
  {
    id: 7,
    name: "Jenny",
    job: "the secretary",
    img:
    "./images/fifth.jfif",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 8,
    name: "bill anderson",
    job: "the manager",
    img:
    "./images/third.jfif",
    text:
    "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
];

const img=document.getElementById("person-img")
const name=document.getElementById("author")
const job=document.getElementById("job")
const text=document.getElementById("info")

const prevbtn=document.querySelector('.prev-btn')
const nextbtn=document.querySelector('.next-btn')
let index=0
//load initial item
window.addEventListener("DOMContentLoaded",()=>{
    person()
});

nextbtn.addEventListener("click",()=>
{
    index++;
    index%=9;
    person();
});
prevbtn.addEventListener("click",()=>
{
    index--;
    if(index<0)
    {
        index+=9;
    }
    person();
});



var person=()=>{
    const item=reviews[index]
    img.src=item.img;
    author.textContent=item.name
    job.textContent=item.job
    info.textContent=item.text
};