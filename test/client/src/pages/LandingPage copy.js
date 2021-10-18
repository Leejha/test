import React, {useEffect} from 'react';
import { withRouter }  from 'react-router-dom';
import styled from "styled-components";


function LandingPage(props) {
    return (
        <div>
            <Header>
                <button>
                    로고
                </button>
                <button>
                    login
                </button>
            </Header>
            {/* <video src = 'Bungee.mp4' muted autoplay playsinline>

            </video> */}

            <main>  
                <section>
                    <Img src = 'BungeeShort.gif' alt = 'image'/>    
                    온라인 공연은 비대면 작전 사령부

                </section>

                https://laslesvpn-landing.netlify.app/ 
                    해야할 것
                    2.이미지위에 텍스트 올리기
                    3.버튼 이미지
                    
                <First>
                    <Right>
                        {/* <img src = 'illustration-1.svg' alt = 'image' /> */}
                        {/* <img src = 'BungeeLong.gif' alt = 'image' /> */}
                    </Right>
                    <Left>
                        

                    </Left>


                </First>
            </main>      
        </div>

    )   
};

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding : 24px 48px;

    `

const First = styled.section`
    display: flex;
    justify-content: center;
    `

const Left = styled.div`
    display : inline-block;
    `
const Right = styled.div`
    display : inline-block;
    `

const Img = styled.img`
    object-fit : cover;
    width: 100%;
    height: 100%;
    `


export default withRouter(LandingPage) 
