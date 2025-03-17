const testimonial = [
{
    "id": 1,
    "name" : "~ Dr. A.P.J. Abdul Kalam",
    "testimonial":"Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.",
    "image":"https://media.gettyimages.com/id/482138352/photo/new-delhi-india-president-apj-abdul-kalam-during-a-education-summit-innovating-for-excelience.jpg?s=612x612&w=0&k=20&c=b9LeklIzWFdFBCBFvwCVN6lXl6GXJKhADgTWAZ9O1mg="
},
{
    "id": 2,
    "name" : "~ Swami Vivekananda",
    "testimonial":"Arise, awake, and stop not till the goal is reached.",
    "image":"https://res.cloudinary.com/dkplc2mbj/image/upload/v1611831063/SV_bfd932c2c4.jpg"
},
{
    "id": 3,
    "name" : " ~ Mahatma Gandhi",
    "testimonial":"Be the change that you wish to see in the world.",
    "image":"https://andvijaysays.com/wp-content/uploads/2013/01/mahatma-gandhi.jpg?w=750"
},
{
    "id": 4,
    "name" : "~ Mother Teresa",
    "testimonial":"Do not wait for leaders; do it alone, person to person.",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmw2_PuaTA5-hcVSEOVc6Kyx5MQ0hQSd5yKA&s"
},
{
    "id": 5,
    "name" : " ~ B. R. Ambedkar",
    "testimonial":"Education is the most powerful weapon which you can use to change the world.",
    "image":"https://www.legacyias.com/wp-content/uploads/2023/04/Dr-Bhim-Rao-Ambedkar-Legacy-ias-830x1024.jpg"
}

]


const image = document.querySelector("img");
const text = document.getElementById("text");
const username = document.getElementById("username");

let indexval = 0;

function UpdateTestimonial(){
    const testimonial1 = testimonial[indexval];
    image.src = testimonial1.image;
    text.textContent = testimonial1.testimonial;
    username.textContent = testimonial1.name;
    indexval++;
    if(indexval=== testimonial.length){
        indexval = 0;
    }
    setTimeout(UpdateTestimonial , 4000)
}
UpdateTestimonial();