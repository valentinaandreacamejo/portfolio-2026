import { Component } from '@angular/core';
import { Ticker } from '../../shared/components/ticker/ticker';
import { AboutStory } from './components/about-story/about-story';
import { ContactSection } from './components/contact-section/contact-section';
import { ExperienceTimeline } from './components/experience-timeline/experience-timeline';
import { HeroAvatar } from './components/hero-avatar/hero-avatar';
import { ProjectsDirectory } from './components/projects-directory/projects-directory';
import { TechAiStack } from './components/tech-ai-stack/tech-ai-stack';

@Component({
  imports: [
    HeroAvatar,
    Ticker,
    AboutStory,
    ProjectsDirectory,
    ExperienceTimeline,
    TechAiStack,
    ContactSection,
  ],
  selector: 'app-portfolio-page',
  styleUrl: './portfolio-page.scss',
  templateUrl: './portfolio-page.html',
})
export class PortfolioPage {}
