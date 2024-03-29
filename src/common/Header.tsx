import styled from "@emotion/styled";
import {Link} from "react-router-dom";

const Header = () => {
    return <Head>
       <Link to={"/"}> <Title>Pokémon</Title></Link>
        <Select>
            <option value={"official"}>official</option>
            <option value={"a"}>a</option>
            <option value={"b"}>b</option>
        </Select>
    </Head>
}

const Head = styled.nav`
  display: flex;
  padding: 16px 32px;
  margin-bottom: 16px;
  border-bottom: 1px solid #c0c0c0;
`

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color: #ffca09;
  text-shadow: -1px 0 blue, 0 2px blue, 1px 0 blue, 0 -1px blue;
`

const Select = styled.select`
  display: flex;
  margin-left: auto;
  padding: 8px 12px;
  border-radius: 8px;
`

export default Header