import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e2f2df;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 5px solid #5a8a51;
`
export const Description = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 300px;  
  padding-bottom: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`
export const Avatar = styled.img`
  display: block;  
  width: 200px;
  margin-top: 30px;
  margin-bottom: 15px;
`
export const Name = styled.p`
  font-size: 25px;
  line-height: 1.68;
  font-weight: 900;
  color: black;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const Text = styled.p`
  font-weight: 500;
  margin-top: 5px;
  font-size: 17px;
  line-height: 1.58;
  color: #757575;
  
`
export const Stats = styled.ul`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #f7faf8;
  width: 300px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const StatsList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
  padding: 5px;
  border-top: 1px solid  #d4d9d6;
      :not(:last-child) {
  border-right: 1px solid  #d4d9d6;
}
      :not(:last-child) span {
  border-right: none;
  
}
`
export const SpanLabel = styled.span`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #757575;
  display: flex;
  font-size: 15px;
  line-height: 1.62;
  font-weight: 400;
  text-align: center; 
  justify-content: center 
`
export const SpanQuantity = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 900;
  margin: 10px auto; 
`;
