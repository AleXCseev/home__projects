import React, { useState, Children, useEffect, cloneElement, ReactNode, isValidElement } from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"
import styles from "./slider.module.css";

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    animationTime?: number,
    animationFunc?: string,
    item: number,
}

export const Slider: React.FC<SliderProps> = ({children, item = 1, animationTime = 0.3, animationFunc = "ease", ...props}) => {

    const count: number = Children.count(children);

    const [childrens, setChildrens] = useState<ReactNode>()
    const [gap, setGap] = useState<number>(0)
    const [slide, setSlide] = useState<number>(0)
    const [widthSlide, setWidthSlide] = useState<number>(100 / item)


    useEffect(() => {
        if(item > 1) {
            setGap(10)
        }
        setChildrens(
            Children.map(children, (child) => {
                if(isValidElement(child)) {
                    return cloneElement(child, {
                        style: {
                            minWidth: `calc(${widthSlide}% - ${gap * 2}px)`,
                            maxWidth: `calc(${widthSlide}% - ${gap * 2}px)`,
                            margin: `0 ${gap}px`
                        },
                    })
                }
                
            })
        )
    }, [])


    const prevSlide = () => {
        setSlide((currentSlide) => {
            let newCurrentSlide: number = 0
            if (currentSlide === 0) {
                newCurrentSlide =  -((count - 1) * widthSlide)
                return newCurrentSlide
            }
            newCurrentSlide = currentSlide + widthSlide

            return newCurrentSlide
        })
    }

    const nextSlide = () => {
        setSlide((currentSlide) => {
            let newCurrentSlide: number = 0

            if(currentSlide <= -((count - 1) * widthSlide)) {
                return newCurrentSlide
            }

            newCurrentSlide = currentSlide -  widthSlide
            return newCurrentSlide
        })
    }


    return (
        <div className={ styles.slider } {...props}>
            <div 
                className={ styles.wrapper } 
                style={{
                    transform: `translateX(${slide}%)`, 
                    transition: `${animationTime}s ${animationFunc}`,
                    
                    }}>
                {childrens}
            </div>
            <div className={ styles.nav }>
                <FaArrowLeft className={ styles.nav__btn } onClick={nextSlide}/>
                <FaArrowRight className={ styles.nav__btn } onClick={prevSlide}/>
            </div>
        </div>
    )
}