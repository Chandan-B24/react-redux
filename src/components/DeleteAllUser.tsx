import styled from "styled-components"

const DeleteAllUser = () => {

  const deleteUsers = () => {
    
  }
 
  return  <Wrapper>
  <button className="btn clear-btn" onClick={deleteUsers}>clear users</button>
  </Wrapper>
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top:2rem;
  }
`


export default DeleteAllUser