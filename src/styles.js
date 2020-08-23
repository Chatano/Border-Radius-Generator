import styled from 'styled-components'

export const container = styled.div`
    margin: 0 auto;
    max-width: 1080px;
    padding: 2px 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: white;
        text-transform: uppercase;
    }
`

export const inputsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    input{
        width:  235px;
        height: 55px;
        margin: 10px;
        border-radius: 4px;
        outline: 0;
        padding: 20px;
    }

`

export const box = styled.div`
    width: 600px;
    height: 360px;
    background-color: #f51871;

    
    border-top-left-radius: ${props => props.topLeft ? `${props.topLeft}px` : `0px` };
    border-top-right-radius: ${props => props.topRight ? `${props.topRight}px` : `0px` };
    
    border-bottom-left-radius: ${props => props.bottomLeft ? `${props.bottomLeft}px` : `0px` };
    border-bottom-right-radius: ${props => props.bottomRight ? `${props.bottomRight}px` : `0px` };
    
`