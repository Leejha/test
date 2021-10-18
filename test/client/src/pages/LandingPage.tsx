import styled, { keyframes } from 'styled-components';
import FirstSec from 'components/landing/FirstSec';
// import SecondSec from "../components/landing/SecondSec";
import ThirdSec from 'components/landing/ThirdSec';
import { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    console.log(window.pageYOffset);
  }, [window.pageYOffset]);

  return (
    <LandingPageBlock>
      {/* 전반적인 소개 */}
      <FirstSec />
      {/* 디테일한 소개 */}
      {/* 화상회의 기능 소개 */}
      <ThirdSec />\<footer></footer>
      <main>{/* https://laslesvpn-landing.netlify.app/  */}</main>
    </LandingPageBlock>
  );
};

// const animate = transition
// animation: 0.5s ease-in-out 0s 1 normal forwards running animation-8hxyql;
// `

// 화면공유 친구 일정 채팅 프라이빗 모바일버전
// 강의 종교 기타 프라이빗 상담
//https://velog.io/@hwang-eunji/Styled-Components-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8
//https://styled-components.com/docs/basics#animations

const LandingPageBlock = styled.div``;

const SecondSec = styled.section`
  background-color: #f9fafb;
  .container {
    display: flex;
    flex-direction: row;
    height: 960px;
    margin: 250px 0 165px 0;
  }
`;

const SecondDiv = styled.div`
  overflow: hidden;
  top: 300px;
  right: calc(50% + 10px);
  width: 460px;
`;
const H2Div = styled.div`
  margin: 0px 85px 0 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 1.4;
  color: #191f28;
`;

const SecondImg = styled.img`
  height: 100%;
  left: 57%;
`;
const SecondDivImg = styled.div`
  overflow: hidden;
`;

const P = styled.p`
  font-size: 23px;
  font-weight: 600;
  line-height: 1.5;
  color: rgb(51, 61, 75);
  transform: translate3d(0px, 50px, 0px);
  white-space: pre-wrap;
  //d
`;

export default LandingPage;
