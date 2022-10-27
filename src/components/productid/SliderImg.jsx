import React, { useState } from 'react'
import './styles/slidersimg.css'



const SliderImg = ({product}) => {


    const [indexImg, setIndexImg] = useState(0)

    const handleNext = () => {
        if (indexImg + 1 > product.productImgs.length - 1 ) {
            setIndexImg(0)
        } else {
            setIndexImg(indexImg + 1) 
        }
    }

    const handlePrev = () => {
        if (indexImg - 1 < 0) {
            setIndexImg(product.productImgs.length - 1)
        } else {
            setIndexImg(indexImg - 1)
        }
    }
  return (
    <div className='slider'>
    <button onClick={handlePrev} className='slider_prev'>&#60;</button>
      <div className='slider_static'>
        <div className='slider_move' style={{transform:` translateX(calc(-${indexImg} / 3 * 100%))`}}>
            {
                product.productImgs.map(url => (
                    <div className='slider_img_container' key={url}>
                        <img className='slider_img' src={url} />
                    </div>
                ))
            }
        </div>
      </div>
      <button onClick={handleNext} className='slider_next'>&#62;</button>
    </div>
  )
}

export default SliderImg
