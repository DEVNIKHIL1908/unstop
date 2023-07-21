'use strict'

let assessment_btn = document.querySelector(".assessment__form");
let form_close =  document.querySelector(".close_btn")
let form = document.querySelector(".form__pop")
let overlay = document.querySelector(".overlay")


function toVisible(btn,el1,el2,el3="",animation){

    btn.addEventListener("click",()=>{
        el1.style.display = "block"
        el1.style.animation = animation
        el2.style.display = "block"
        el3.style.display = "block"
       
    })

}


function toHide(arr,el1,el2,el3="",animation){
   arr.forEach(btn=> btn.addEventListener('click',()=>{
        el1.style.animation = animation
        el2.style.display = "none"
        setTimeout(()=>{
            el1.style.display = "none"
        },400)
        el3.style.display = "none"
    }))

}


toVisible(assessment_btn,form,overlay,"","slide-in-bottom 0.5s ease both")
toHide([form_close,overlay],form,overlay,"","slide-out-bottom 0.5s  ease  both")



// for mobile view

let mobile_close = document.querySelector(".mobile_close");
let mobile_overlay = document.querySelector(".mobile__overlay");
let mobile_sidebar = document.querySelector(".mobile__view-sidebar") 
let mobile_view_btn = document.querySelector(".mobile__view-btn")
let mobile_sidebar_ul = document.querySelector(".mobile__view-sidebar ul")



toVisible(mobile_view_btn,mobile_sidebar,mobile_overlay,mobile_sidebar_ul,"left-slide-in 0.2s ease-out both")
toHide([mobile_overlay,mobile_close],mobile_sidebar,mobile_overlay,mobile_sidebar_ul,"left-slide-out 0.2s ease-out both")


// for mobileview toggle

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



toVisible(mobile_assessment_btn,mobile_form,mobile_form_overlay,undefined,"slide-in-bottom 0.5s ease both")
toVisible(mobile_view_add,mobile_form,mobile_form_overlay,undefined,"slide-in-bottom 0.5s ease both")
toHide([mobile_form_overlay,mobile_close_btn],mobile_form,mobile_form_overlay,undefined,"slide-out-bottom 0.5s ease both")

// 


// for stats toggling


let mobile_view_stats = document.querySelector(".mobile__view-stats")
let chart_icon = document.querySelector(".mobile__stat-toggle")

$(document).ready(function(){
    $(mobile_view_stats).hide()

    $(chart_icon).click(function(){
        
        $(mobile_view_stats).slideToggle(300)
        $(chart_icon).toggleClass("active-stat-toggle")
    })

    
})
