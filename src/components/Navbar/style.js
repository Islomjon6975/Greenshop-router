import styled from 'styled-components';
import {ReactComponent as logo} from '../../assets/icons/logo.svg'
import {ReactComponent as greenshop} from '../../assets/icons/greenshop.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'
import {ReactComponent as basket} from '../../assets/icons/basket.svg'
import {ReactComponent as login} from '../../assets/icons/logout.svg'
import {ReactComponent as menu} from '../../assets/icons/hamburget-menu.svg'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 78px;
    background-color: #FFFFFF;
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
    @media (max-width: 375px) {
        height: 40px;
    }
    @media (max-width: 975px) {
        height: 65px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

Wrapper.Logo = styled(logo)`
    width: 34.4px;
    height: 34.4px;
    @media (max-width: 375px) {
        width: 30px;
        height: 30px;
    }
`

Wrapper.Title = styled.div`
    background: #46A358;
    font-size: 30px;
`

Wrapper.Greenshop = styled(greenshop)`
    width: 110px;
    height: 12.82px;
    @media (max-width: 375px) {
        width: 96px;
        height: 11px;
    }
`

Wrapper.Search = styled(search)`
    width: 20px;
    height: 20px;
    margin-right: 30px;
    @media (max-width: 375px) {
        width: 14px;
        height: 14px;
        margin-right: 20px;
    }
    @media (max-width: 975px) {
        width: 20px;
        height: 20px;
        margin-right: 25px;
    }
`

Wrapper.Basket = styled(basket)`
    width: 23px;
    height: 23px;
    @media (max-width: 375px) {
        width: 21px;
        height: 21px;
    }
`

Wrapper.Logout = styled(login)`
    width: 16px;
    height: 16px;
    margin-right: 4px;
    @media (max-width: 375px) {
        display: none;
    }
`

Wrapper.Login = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 35px;
    background: #46A358;
    border-radius: 6px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-left: 30px;
    @media (max-width: 375px) {
        display: none;
    }
    @media (max-width: 975px) {
        display: none;
    }
`

Wrapper.BasketWrapper = styled.div`
    position: relative;
`

Wrapper.Count = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11px;
    height: 11px;
    right: -8px;
    top: -2px;
    background: #46A358;
    border: 2px solid #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
    color: #FFFFFF;
    border-radius: 50%;
`

Wrapper.Menu = styled(menu)`
    display: none;
    width: 18px;
    height: 18px;
    @media (max-width: 375px) {
        display: block;
        width: 18px;
        height: 18px;
        margin-left: 20px;
    }
    @media (max-width: 975px) {
        display: block;
        width: 20px;
        height: 20px;
        margin-left: 25px;
    }
`