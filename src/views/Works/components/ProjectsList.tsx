import React from 'react';
import { Project, ProjectCard } from './ProjectCard';

type ProjectInfo = Project & {
    relatedProjects: Project[];
};

export const ProjectsList = () => {
    const PROJECTS: ProjectInfo[] = [
        {
            title: 'Spotify Playlist Guard',
            description: `This app allows users to load their collaborative spotify playlists and configure allowed users to add and songs to the playlists which will not be removed from the guard bot.`,
            url: 'https://spotify-playlist-guard-website.vercel.app/',
            repoUrl:
                'https://github.com/marcus-castanho/spotify-playlist-guard-website',
            coverImgSrc:
                'https://raw.githubusercontent.com/marcus-castanho/spotify-playlist-guard-website/main/public/assets/images/route-landing-page.PNG',
            relatedProjects: [],
        },
        {
            title: 'My personal portfolio',
            description: `The website you're on now!`,
            url: 'https://marcuscastanho.vercel.app/',
            repoUrl: 'https://github.com/marcus-castanho/my-portfolio',
            coverImgSrc: '/assets/index_screenshot.png',
            relatedProjects: [],
        },
    ];

    return (
        <div className="flex h-full items-center justify-center p-4 sm:p-8">
            <div
                className={
                    PROJECTS.length < 3
                        ? 'flex flex-col items-center justify-center gap-8 2xl:flex-row'
                        : 'grid grid-cols-1 gap-8 sm:grid-cols-2 2xl:grid-cols-3'
                }
            >
                {PROJECTS.map((project, index) => {
                    return <ProjectCard key={index} project={project} />;
                })}
            </div>
        </div>
    );
};
