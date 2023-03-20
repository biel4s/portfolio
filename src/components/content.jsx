import React from 'react';
import myself from '../images/myself.png'

export default function Content() {
    return (
        <div className="content">
            <div className="content-left">
                <p>Hi, my name is</p>
                <h1>Kamil Bielawski.</h1>
                <h3>Front-end developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aliquam sit ipsam repellat harum labore eum, sunt quasi dicta recusandae. Quisquam, ullam explicabo vel aliquam adipisci cupiditate quia minus iste.</p>
            </div>
            <div className="content-right">
                <img src={myself} className="myself" width="400" height="460" alt="myself" />
            </div>
        </div>
    )
}