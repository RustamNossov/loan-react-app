import React, { useEffect, useState, useRef } from "react";
import { useHttp } from '../../hooks/http.hook';
import { useImgImport } from "../../hooks/imgImport.hook";
import { useDispatch, useSelector } from "react-redux";
import { dataFetched, dataFetchingError } from '../../actions';


const withSlider = (BaseComponent, SliderComponent) => {
    return ({url, containerItem, oneSlideWidth, activityClass, selectors, isInfinity}) => {
        const { request } = useHttp();
        const importImg = useImgImport();
        const dispatch = useDispatch();
        const { items, dataLoadingStatus } = useSelector(state=>state);
        const [elements, setElements] = useState([])
        const [imgUrls, setImgUrls] = useState([])
        const slideWidth = useRef(oneSlideWidth) //331 // 320
        const sliderContainer = useRef();

        useEffect(()=>{
            
            request(`http://localhost:3001/${url}`) //mainPageSlider //exploreMoreSlider
                .then(data=>{
                        dispatch(dataFetched(data));
                        data.forEach(({url}) => {
                            importImg(url)
                                .then( urlImg => setImgUrls(oldData=>[...oldData, urlImg]))
                    })

                    })
                .catch(dataFetchingError())
            sliderContainer.current = document.querySelector(containerItem); //'.showup__content-slider-container' //modules__content-slider-container      
        
           
        },[])
        

        // ========== getting slider elements ==============


        const getElements = (arr) => {
            const newArr = [arr[arr.length-1], ...arr]
            const newImgUrls = [imgUrls[imgUrls.length-1], ...imgUrls]
            const elems = newArr.map((data, i) => {
                const newClasses = i === 1 ? 'first' : '';
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
                    document.querySelector(`${item}.first`).classList.add(activityClass);
                } else {
                    document.querySelector(`${item}.first`).classList.remove(activityClass);//'slick-current'
                }
                    
            })
        }
        useEffect(()=>{
        
            if (items.length > 0 && items.length === imgUrls.length) {

                setElements(getElements(items));
                sliderContainer.current.style.transform = `translateX(-${slideWidth.current}px)`;
                
            }
        },[items, imgUrls]);

        useEffect(()=>{
           
            if (elements.length > 0 && elements.length===items.length+1) {
                setActivityClass(selectors, "add")
                
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
            const newSliderItems = [...items.slice(1), items[0]]
            const newImgUrls = [...imgUrls.slice(1), imgUrls[0]]
                
            setTimeout(()=>{
                    setImgUrls(newImgUrls)
                    dispatch(dataFetched(newSliderItems))
                    sliderContainer.current.style.transition = "all 0s"
                    sliderContainer.current.style.transform = `translateX(-${slideWidth.current}px)`
                    //setActivityClass(selectors, "add");
                }, 300)
    
        }
        

         //========on click Prev btn ===========//

         const onPrevSlide = () => {
            setActivityClass(selectors, "remove");
            sliderContainer.current.style.transition = "all 0.3s"
            sliderContainer.current.style.transform = "translateX(0px)"
            const newSliderItems = [ items[items.length-1], ...items.slice(0, items.length-1)]
            const newImgUrls = [imgUrls[imgUrls.length-1], ...imgUrls.slice(0, imgUrls.length-1)]
                
            setTimeout(()=>{
                    setImgUrls(newImgUrls)
                    dispatch(dataFetched(newSliderItems))
                    sliderContainer.current.style.transition = "all 0s"
                    sliderContainer.current.style.transform = "translateX(-331px)"
                    //setActivityClass(selectors, "add");
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