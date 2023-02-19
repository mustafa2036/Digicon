import React from 'react'
import $ from 'jquery'
import './Style/Allstyle.css';

export default function Loading() {
    $(document).ready(()=> {
        $(".spinner").fadeOut(5000, ()=>{
            $("#loading").fadeOut(2000, () => {
                $("body").css("overflow","auto")
            });
        });
    })
  return (
    <>
    <section id='loading'>
        <div className="spinner">
            <div className="cube1"></div>
            <div className="cube2"></div>
        </div>
    </section>
    </>
  )
}
