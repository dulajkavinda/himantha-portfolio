import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { GrMapLocation } from 'react-icons/gr';
import { BsBuilding } from 'react-icons/bs';

export default function Personal() {
    return (
        <div>
        <div style={{marginTop: "2rem"}}>
        <div class="shadow" style={{borderRadius: '1rem'}}>
        <div class="card-body">
            <div className="flex-column">
                    <h6><GrMapLocation/> Galle, Sri Lanka</h6>
            </div>
            <div className="flex-column">
                <a href="mailto:himantha@himatha.gay" style={{textDecoration: "none", color: "#e040fb"}} class="card-text">
                <h6><AiOutlineMail/> himantha@himantha.gay</h6>
                </a>
            </div>
            <div className="flex-column">
                <a href="https://hclsrilanka.com" style={{textDecoration: "none", color: "black"}} class="card-text">
                <h6><BsBuilding/> HCL </h6>
                </a>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
