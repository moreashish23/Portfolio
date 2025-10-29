import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowForward } from 'react-icons/io';
import { PROJECTS } from '../utils/data';
import ProjectCard from '../components/ProjectCard';

const MyProject = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);

  return (
    <section id='projects' className='bg-background mt-14'>
      <div className='container mx-auto px-8 md:px-10 py-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title text-center'>Recent Projects</h4>
          <p className='text-sm text-center mt-4 leading-6 text-gray-600'>
            From concept to deployment, these projects showcase my technical
            expertise. I focus on clean code, performance, and user experience.
          </p>
        </div>

        <div className='relative mt-10'>
          {/* Embla Carousel */}
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex pt-6 pb-10 gap-6'>
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className='min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]'
                >
                  <ProjectCard
                    imgUrl={project.image}
                    title={project.title}
                    tags={project.tags}
                    gitLink={project.gitLink}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className={`absolute top-1/2 -translate-y-1/2 bg-white text-black rounded-full shadow-md p-2 transition hover:bg-orange-200 z-10 -left-5 ${
              !canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <IoIosArrowForward className='rotate-180 text-2xl' />
          </button>

          <button
            className={`absolute top-1/2 -translate-y-1/2 bg-white text-black rounded-full shadow-md p-2 transition hover:bg-orange-200 z-10 -right-5 ${
              !canScrollNext ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollNext}
          >
            <IoIosArrowForward className='text-2xl' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
