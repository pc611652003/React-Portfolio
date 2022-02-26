import React from 'react';

function Footer() {
    const inspiration = [
        "It's all just javascript!",
        "Google is your best tool!",
        "No one can escape from bugs!",
        "Just Ask! You are not alone!",
        "Unknown Error?! Welcome to the World of Coding"
    ];
    var randomIndex = Math.floor(Math.random()*inspiration.length);

    return (
        <footer className="flex-row px-1">
            <h3>{inspiration[randomIndex]}</h3>
            <ul className="flex-row">
                <li className='mx-2'>
                    <a href="https://github.com/pc611652003">GitHub</a>
                </li>
                <li className='mx-2'>
                    <a href="https://www.linkedin.com/in/calvin-yan-9845b758/">LinkedIn</a>
                </li>
                <li className='mx-2'>
                    <a href="https://twitter.com/CalvinYan12">Twitter</a>
                </li>
                <li className='mx-2'></li>
            </ul>
        </footer>

    );
}

export default Footer;