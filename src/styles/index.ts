import styled from "styled-components";
export const Column=styled.div<{alignItems?,justifyContent?}>`
        display: flex;
        align-items:${({alignItems})=>alignItems||'center'} ;
        justify-content: ${({justifyContent})=>justifyContent||'center'};
        flex-direction: column;
`;
export const CommonWrap = styled.div<{width?:number}>`
        width: ${({width})=>width||480}px;
        height: auto;
        display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       margin-top: 58px;
`;
