import styled from 'styled-components';

export const EllipsisButtonWrapper = styled.button`
  position: absolute;
  bottom: 3px;
  padding: 0;
  font-weight: bold;
  font-size: 12px;
  color: #3c4043;
  border: none;
  background: transparent;
`;

export const AllDisplayModal = styled.div`
  display: ${(props: { showAll: boolean }) => (props.showAll ? 'block' : 'none')};
  position: absolute;
  width: 220px;
  background: #fff;
  outline: 1px solid;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.302), 0 4px 8px 3px rgba(60, 64, 67, 0.149);
  /* transition: transform 0.225s cubic-bezier(0, 0, 0.2, 1); */
`;
