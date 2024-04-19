import React, { useEffect, useRef } from 'react'
import './Highlight.scss'

export default function Highlight({ tag: Tag = 'h1', children}) {
    const titleRef = useRef(null);
    const highlightRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (highlightRef.current) {
                highlightRef.current.style.width = entry.isIntersecting ? '105%' : '85%';
            }
        },
        {
            threshold: 0.5,
        }
    );

        const currentTitleRef = titleRef.current;

        if (currentTitleRef) {
            observer.observe(currentTitleRef);
        }

        return () => {
            if (currentTitleRef) {
                observer.unobserve(currentTitleRef);
            }
        };
    }, []);

    return (
      <>
        <Tag ref={titleRef}>{children}</Tag>
        <div ref={highlightRef} className='highlight'></div>
      </>
  )
}
