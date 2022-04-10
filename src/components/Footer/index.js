import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="w-100 mt-auto bg-secondary p-4">
            <div className="container">
                &copy;{new Date().getFullYear()} by Dani Reinholz
            </div>
            <nav>
                <ul>
                    <a href='https://github.com/reinholz36' title='GitHub' rel='noreferrer' target='_blank'>
                        <Icon icon="akar-icons:github-outline-fill" height="40" />
                    </a>

                    <a href='https://stackoverflow.com/users/17116363/riverassistant' title='Stack Overflow' rel='noreferrer' target='_blank'>
                        <Icon icon="bi:stack-overflow" height="40" />
                    </a>

                    <a href='https://www.linkedin.com/in/dreinholz/' title='LinkedIn' rel='noreferrer' target='_blank'>
                        <Icon icon="feather:linkedin" height="40" />
                    </a>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;