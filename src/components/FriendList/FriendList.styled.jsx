import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  border-bottom: 5px solid #5a8a51; 
  border-top: 5px solid #5a8a51;  
  background-color: #e2f2df;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;

  width: 350px;
  padding: 5px;

  border: 2px solid #7aad71;
  border-radius: 25px;
  margin-bottom: 15px;
  &:last-child {
     margin-bottom: 0;
  }
   box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const FriendsStatus = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 75px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const FriendsAvatar = styled.img`
  width: 60px;
  margin-right: 60px;
  margin-left: -20px;
`;

export const FriendsName = styled.p`
  font-weight: 700;
  font-size: 20px;
`;