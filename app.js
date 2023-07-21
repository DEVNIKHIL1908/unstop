'use strict'

let assessment_btn = document.querySelector(".assessment__form");
let form_close =  document.querySelector(".close_btn")
let form = document.querySelector(".form__pop")
let overlay = document.querySelector(".overlay")

assessment_btn.addEventListener("click",()=>{
    form.style.display = "block"
    form.style.animation = "slide-in-bottom 0.5s ease both"
    overlay.style.display = "block"
   
})

overlay.addEventListener('click',()=>{
    form.style.animation = "slide-out-bottom 0.5s  ease  both"
    overlay.style.display = "none"
    setTimeout(()=>{
        form.style.display = "none"
    },400)
})
form_close.addEventListener("click",()=>{
    form.style.animation = "slide-out-bottom 0.5s ease both"
    overlay.style.display = "none"
    setTimeout(()=>{
        form.style.display = "none"
    },400)
     
})


// for mobile view

let mobile_close = document.querySelector(".mobile_close");
let mobile_overlay = document.querySelector(".mobile__overlay");
let mobile_sidebar = document.querySelector(".mobile__view-sidebar") 
let mobile_view_btn = document.querySelector(".mobile__view-btn")
let mobile_sidebar_ul = document.querySelector(".mobile__view-sidebar ul")


mobile_view_btn.addEventListener("click",()=>{
    mobile_overlay.style.display ="block"
    mobile_sidebar.style.animation = "left-slide-in 0.2s ease-out both"
    mobile_sidebar.style.display = "block"
    mobile_sidebar_ul.style.display = "block"
    
})

mobile_close.addEventListener("click",()=>{
   

    mobile_sidebar.style.animation = "left-slide-out 0.2s ease-out both"
    mobile_overlay.style.display ="none"
    mobile_sidebar_ul.style.display = "none"
})

mobile_overlay.addEventListener("click",()=>{
    mobile_sidebar.style.animation = "left-slide-out 0.2s ease-out both"
    mobile_overlay.style.display ="none"
    mobile_sidebar_ul.style.display = "none"
  
})




// for mobileview toggle


let mobile_view_stats = document.querySelector(".mobile__view-stats")
let chart_icon = document.querySelector(".mobile__stat-toggle")

$(document).ready(function(){
    $(mobile_view_stats).hide()

    $(chart_icon).click(function(){
        
        $(mobile_view_stats).slideToggle(300)
        $(chart_icon).toggleClass("active-stat-toggle")
    })

    
})



let desktop_view = document.querySelector(".desktop_view")
let mobile_view  = document.querySelector(".mobile_view")

let mobile_icon = document.querySelector(".mobile-icon")
let desktop_view_btn = document.querySelector(".desktop__view-btn")

mobile_icon.addEventListener("click",()=>{
    desktop_view.style.display = "none"
    mobile_view.style.display = "block"
})


desktop_view_btn.addEventListener('click',()=>{
    desktop_view.style.display = "block"
    mobile_view.style.display = "none"
})




let mobile_form = document.querySelector(".mobile_form__pop")
let mobile_form_overlay = document.querySelector(".mobile_overlay")
let mobile_assessment_btn = document.querySelector(".mobile__view-first-assessment")
let mobile_view_add = document.querySelector(".mobile__view-add-btn")
let mobile_close_btn =  document.querySelector(".mobile_form_close")

mobile_assessment_btn.addEventListener("click",()=>{
    mobile_form_overlay.style.display  = "block"
    mobile_form.style.display = 'block'
    mobile_form.style.animation = "slide-in-bottom 0.5s ease both"
})



mobile_view_add.addEventListener("click",()=>{
    mobile_form_overlay.style.display  = "block"
    mobile_form.style.display = 'block'
    mobile_form.style.animation = "slide-in-bottom 0.5s ease both"
})


mobile_form_overlay.addEventListener("click",()=>{
    mobile_form_overlay.style.display  = "none"
    mobile_form.style.animation = "slide-out-bottom 0.5s ease both"
    setTimeout(() => {
        mobile_form.style.display = "none"
    }, 510);
})


mobile_close_btn.addEventListener("click",()=>{
    mobile_form_overlay.style.display  = "none"
    mobile_form.style.animation = "slide-out-bottom 0.5s ease both"
    setTimeout(() => {
        mobile_form.style.display = "none"
    }, 510);
})
