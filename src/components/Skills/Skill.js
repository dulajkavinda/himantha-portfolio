import React from 'react'

export default function Skill() {
    return (
       <div style={{marginTop: "2rem", marginBottom:"2rem"}}>
       <div class="shadow" style={{borderRadius: '1rem'}}>
        <div class="flex-column card-body">
        <h3 class="card-title" style={{fontWeight: "bold"}}>Skills</h3>
            <h6 class="card-text" style={{marginTop: "0.5rem"}}>Python</h6>
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style={{width:"75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h6 class="card-text" style={{marginTop: "0.5rem"}}>C++</h6>
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h6 class="card-text" style={{marginTop: "0.5rem"}}>Java</h6>
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style={{width:"95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h6 class="card-text" style={{marginTop: "0.5rem"}}>MongoDB</h6>
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style={{width:"65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h6 class="card-text" style={{marginTop: "0.5rem"}}>SQL</h6>
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style={{width:"85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        </div>
        </div>
    )
}
