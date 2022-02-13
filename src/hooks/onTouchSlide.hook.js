import { useRef } from "react";

export const useTouchSlide = () => {
    const touchStart = useRef([]);
    const touchEnd = useRef([])

    const onTouchStart = (e) => {
        const touchesX = e.touches[0].pageX;
        const touchesY = e.touches[0].pageY;
        touchStart.current = [touchesX, touchesY];
    }
    
    const onTouchMove = (e) => {
        const touchesX = e.touches[0].pageX;
        const touchesY = e.touches[0].pageY;
        touchEnd.current = [touchesX, touchesY];
    }
    
    const onTouchEnd = (nextSlide, prevSlide) => {
        const diffX = touchEnd.current[0] - touchStart.current[0];
        const diffY = touchEnd.current[1] - touchStart.current[1];

        if (diffX < -100 && Math.abs(diffY) < 20 ) {
            nextSlide()
        }
        if (diffX > 100 && Math.abs(diffY) < 20 ) {
            prevSlide()
        }
        touchEnd.current = []
        touchStart.current = []
    }

    return {onTouchStart, onTouchMove, onTouchEnd}
}
