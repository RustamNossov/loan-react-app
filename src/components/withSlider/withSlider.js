import React, { useEffect, useState, useRef } from "react";
import { useHttp } from '../../hooks/http.hook';
import { useImgImport } from "../../hooks/imgImport.hook";
import { useDispatch, useSelector } from "react-redux";
import { sliderFetched, sliderFetchingError } from '../../actions';


const withSlider = (BaseComponent, SliderComponent) => {
    return ({url, containerItem, oneSlideWidth, activityClass, selectors, isInfinity}) => {
        const { request } = useHttp();
        const importImg = useImgImport();
        const dispatch = useDispatch();
        const { sliderItems } = useSelector(state=>state);
        const [elements, setElements] = useState([])
        const [imgUrls, setImgUrls] = useState([])
        const slideWidth = useRef(oneSlideWidth) //331 // 320
        const sliderContainer = useRef();

        useEffect(()=>{
            request(`http://localhost:3001/${url}`) //mainPageSlider //exploreMoreSlider
                .then(data=>{
                        dispatch(sliderFetched(data));
                        data.forEach(({url}) => {
                            importImg(url)
                                .then( urlImg => setImgUrls(oldData=>[...oldData, urlImg]))
                    })

                    })
                .catch(sliderFetchingError())
            sliderContainer.current = document.querySelector(containerItem); //'.showup__content-slider-container' //modules__content-slider-container      
        
            
        },[])

        // ========== getting slider elements ==============


        const getElements = (arr) => {
            const newArr = [arr[arr.length-1], ...arr]
            const newImgUrls = [imgUrls[imgUrls.length-1], ...imgUrls]
            const elems = newArr.map((data, i) => {
                const newClasses = i === 1 ? activityClass : '';
                return  <SliderComponent 
                                key={i}
                                data = {data}
                                urlImg = {newImgUrls[i]}
                                newClasses={newClasses}
                                />
                    })
            return elems;
        }

        //=====Slider items rendering=============
        const setActivityClass = (selectorsArr, trigger) => {
            selectorsArr.forEach(item => {
                if (trigger === 'add') {
                    document.querySelector(`${item}.${activityClass}`).classList.add('slick-current');
                } else {
                    document.querySelector(`${item}.${activityClass}`).classList.remove('slick-current');
                }
                    
            })
        }
        useEffect(()=>{
        
            if (sliderItems.length > 0 && sliderItems.length === imgUrls.length) {

                setElements(getElements(sliderItems));
                sliderContainer.current.style.transform = `translateX(-${slideWidth.current}px)`;
                
            }
        },[sliderItems, imgUrls]);

        useEffect(()=>{
            
            if (elements.length > 0 && elements.length===sliderItems.length+1) {
                setActivityClass(selectors, "add");
                if (isInfinity) {
                    const intervalId = setInterval(()=>onNextSlide(),3000)
                        return(() => {
                            clearInterval(intervalId)
                        })
                } 
            }

            
            
            
        }, [elements])
        
        //========on click Next btn ===========//
        const onNextSlide = () => {
            setActivityClass(selectors, "remove");
            sliderContainer.current.style.transition = "all 0.3s"
            sliderContainer.current.style.transform = `translateX(-${slideWidth.current*2}px)`
            const newSliderItems = [...sliderItems.slice(1), sliderItems[0]]
            const newImgUrls = [...imgUrls.slice(1), imgUrls[0]]
                
            setTimeout(()=>{
                    setImgUrls(newImgUrls)
                    dispatch(sliderFetched(newSliderItems))
                    sliderContainer.current.style.transition = "all 0s"
                    sliderContainer.current.style.transform = `translateX(-${slideWidth.current}px)`
                    setActivityClass(selectors, "add");
                }, 300)
    
        }
        

         //========on click Prev btn ===========//

         const onPrevSlide = () => {
            setActivityClass(selectors, "remove");
            sliderContainer.current.style.transition = "all 0.3s"
            sliderContainer.current.style.transform = "translateX(0px)"
            const newSliderItems = [ sliderItems[sliderItems.length-1], ...sliderItems.slice(0, sliderItems.length-1)]
            const newImgUrls = [imgUrls[imgUrls.length-1], ...imgUrls.slice(0, imgUrls.length-1)]
                
            setTimeout(()=>{
                    setImgUrls(newImgUrls)
                    dispatch(sliderFetched(newSliderItems))
                    sliderContainer.current.style.transition = "all 0s"
                    sliderContainer.current.style.transform = "translateX(-331px)"
                    setActivityClass(selectors, "add");
                }, 300)
    
        }


        return(
            <BaseComponent
                    onNextSlide={onNextSlide}
                    onPrevSlide={onPrevSlide}
                    elements={elements}/>
        )

    }
    
}

export default withSlider;