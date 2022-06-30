import React from 'react'
import './Home.css'
import hero from '../pic/hero.png'
import skill1 from '../pic/skills1.png'
import skill2 from '../pic/skills2.png'
import skill3 from '../pic/skills3.png'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";


const Home = () => {
    const { text } = useTypewriter({
        words: [" Professional Coder.", " Developer.", " Husband.", " Daddy."],
        loop: 0
    });
    return (
        <>
            <section className="hero" id="home" >
                <div className="container f_flex top">
                    <div className="left top">
                        <h3>WELCOME TO MY WORLD</h3>
                        <h1>
                            Hi, I'm <span>Leonardo Severo</span> 
                        </h1>
                        <h2>
                            a
                            <span>
                            {text}
                            <Cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
                        
                            {/* <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> */}
                            </span>
                        </h2>


                        <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I am not adding motion just to spruce things up, but doing it in ways that.</p>

                        <div className="hero_btn d_flex">
                            <div ClassName="col_1">
                                <h4>FIND WITH ME</h4>
                                <div className="button">
                                    <button className="btn_shadow">
                                        <i class="fab fa-github"></i>
                                    </button>
                                    <button className="btn_shadow">
                                        <i class="fab fa-linkedin-in"></i>
                                    </button>
                                    <button className="btn_shadow">
                                        <i class="fab fa-instagram"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col_1">
                                <h4>BEST SKILL ON</h4>
                                <button className="btn_shadow">
                                    <img src={skill1} alt="" />
                                </button>
                                <button className="btn_shadow">
                                    <img src={skill2} alt="" />
                                </button>
                                <button className="btn_shadow">
                                    <img src={skill3} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_img">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home