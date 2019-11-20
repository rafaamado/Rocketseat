import React from 'react';
import './styles.css';

export default class Slides extends React.Component{

    state = {
        slideIndex: 1,
        imgs: this.props.images
    };

    nextSlide = () => {
        let {slideIndex, imgs} = this.state;
        slideIndex += 1;
        if (slideIndex > imgs.length)
            slideIndex = 1;
        this.setState({slideIndex: slideIndex});
    };

    prevSlide = () => {
        let {slideIndex, imgs} = this.state;
        slideIndex -= 1;
        if (slideIndex <= 0)
            slideIndex = imgs.length;
        this.setState({slideIndex: slideIndex});
    };
    

    render(){
        return (
            // another way: <React.Fragment>
            <>
                <div className="slideshow-container">
                    
                    {this.renderImgs()}
                                
                    <a className="prev" onClick={this.prevSlide}>&#10094;</a>
                    <a className="next" onClick={this.nextSlide}>&#10095;</a>
                </div>
                <div style={{textAlign : "center"}}>
                    { this.renderDots() }
                </div>
            </>
        );
    }

    renderImgs(){
        const { imgs, slideIndex} = this.state; 

        return (
            imgs.map( (img, index) => (
                <div key={img.number} className="mySlides fade" style={{display: index+1 == slideIndex ? 'block' : 'none' }}>            
                    <div className="numbertext">{img.number + '/' + imgs.length}</div>
                    <img src={img.image} style={{width: '100%'}}/>
                    <div className="text">{img.text}</div>
                </div>)
            )      
        );
    }

    renderDots(){
        let dotsArray = [];
        for(let i = 0; i < this.state.imgs.length; i++){
            const classNm = i+1 == this.state.slideIndex ? 'dot active' : 'dot'; 
            dotsArray.push(
                <span key={i} className={classNm} 
                    onClick={ () => this.setState({slideIndex : i+1 }) }
                ></span>
            );
        }
        return dotsArray;
    }
}