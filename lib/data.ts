import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

export const links = [
    {
        name: 'Home',
        hash: '#home'
    },
    {
        name: 'Projects',
        hash: '#projects'
    },
    {
        name: 'About',
        hash: '#about'
    },
    {
        name: 'Experience',
        hash: '#experience'
    }
] as const;

export const socials = [
    {
        name: 'Github',
        url: 'https://github.com/freitas-renato/',
        icon: React.createElement(AiFillGithub)
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/renatooliveirafreitas/',
        icon: React.createElement(AiFillLinkedin)
    },
    {
        name: 'Email',
        url: 'mailto:freitas-renato@outlook.com',
        icon: React.createElement(HiMail)
    }
] as const;
