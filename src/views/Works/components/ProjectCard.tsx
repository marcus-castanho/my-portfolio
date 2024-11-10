import React, { FC } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import Image from 'next/image';

export type Project = {
    title: string;
    description: string;
    url: string;
    repoUrl: string;
    coverImgSrc: string;
};

type ProjectInfoProps = {
    project: Project;
};
const ProjectInfo: FC<ProjectInfoProps> = ({ project }) => {
    return (
        <div className="flex flex-1 flex-col gap-2 overflow-hidden">
            <h2 className="max-h-40 text-xl font-bold">
                {project.title.length > 128
                    ? `${project.title.slice(0, 128)}...`
                    : project.title}
            </h2>
            <div className="flex-1 overflow-hidden">
                <p className="line-clamp-5">{project.description}</p>
            </div>
        </div>
    );
};

type CardFooterProps = {
    project: Project;
};
const CardFooter: FC<CardFooterProps> = ({ project }) => {
    return (
        <div className="flex w-full items-center justify-between">
            <Link
                href={project.url}
                target="_blank"
                className="group flex w-full items-center gap-2 hover:underline"
            >
                <p>{`Live project`}</p>
                <div className="duration-200 group-hover:translate-x-1">
                    <ArrowRightIcon size={16} fillColor="white" />
                </div>
            </Link>
            <Link href={project.repoUrl} target="_blank">
                <GitHubIcon size={32} fillColor="white" />
            </Link>
        </div>
    );
};

type ProjectCardProps = {
    project: Project;
};
export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="flex max-w-[calc(1.8*120px+64px)] flex-col gap-4 rounded-[2rem] bg-gray-950 p-8 hover:brightness-125 sm:max-w-[calc(2.5*120px+64px)] lg:max-w-[calc(3*120px+64px)]">
            <div className="relative h-[calc(1.8*60.9px)] w-[calc(1.8*120px)] sm:h-[calc(2.5*60.9px)] sm:w-[calc(2.5*120px)] lg:h-[calc(3*60.9px)] lg:w-[calc(3*120px)]">
                <Image
                    src={project.coverImgSrc}
                    alt="article-cover-image"
                    fill
                    className="rounded-[0.5rem] object-contain"
                />
            </div>
            <div className="flex h-[200px] flex-col justify-between">
                <ProjectInfo project={project} />
                <CardFooter project={project} />
            </div>
        </div>
    );
};
