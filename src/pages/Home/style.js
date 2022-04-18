import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 1000px;
`

export const Main = styled.div`
    position: relative;
    width: 100%;
    height: 450px;
    background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);
    margin-top: 12px;
    padding: 68px 43px;
    box-sizing: border-box;
`

Main.Welcome = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3D3D3D;
`

Main.Title = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 70px;
    text-transform: uppercase;
    color: #3D3D3D;
    width: 575px;
    margin-top: 7px;
    @media (max-width: 1300px) {
        font-size: 65px;
        width: 575px;
    }
`

Main.Planet = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    line-height: 70px;
    text-transform: uppercase;
    color: #46A358;
`

Main.Desctiption = styled.div`
    width: 557px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #727272;
    margin-top: 5px;
`

Main.Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 40px;
    left: 161px;
    top: 415px;
    background: #46A358;
    border-radius: 6px;
    margin-top: 44px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
`

Main.Img2 = styled.img`
    position: absolute;
    width: 500px;
    height: 500px;
    top: 40px;
    right: 60px;
    @media (max-width: 1300px) {
        width: 450px;
        height: 450px;
        top: 55px;
        right: 60px;
    }
`

Main.Img1 = styled.img`
    position: absolute;
    width: 130px;
    height: 130px;
    top: 380px;
    right: 410px;
    @media (max-width: 1300px) {
        width: 120px;
        height: 120px;
        top: 350px;
        right: 370px;
    }
`