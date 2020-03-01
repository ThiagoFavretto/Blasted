import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageBackground = styled.video`
  position: fixed;
  right: 0;
  top: 600;
  min-width: 100%;
  z-index: -1;
`;

export const Wall = styled.div`
  width: 100%;
  height: 170px;
  background: #262626;
  bottom: 0;
  position: fixed;
`;

export const Highway = styled.div`
  width: 100%;
  height: 80px;
  background: #484848;
  bottom: 170px;
  position: fixed;
`;

export const Player = styled.img`
  margin-top: 5px;
`;
export const PlayerContainer = styled.div`
  display: flex;
  z-index: 100;
`;

export const HitBox = styled.div`
  position: fixed;
  width: 70px;
  height: 80px;
  background: rgb(255, 255, 0, 0.2);
  margin-left: 85px;
  z-index: -80;
`;
