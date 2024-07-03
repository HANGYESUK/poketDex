import styled from "@emotion/styled";

interface PokeNameChipProps {
    name?: string;
    id?: number;
    color?: string
}
const PokeNameChip = ({ name, id, color }: PokeNameChipProps) => {

    const renderId = (id?: number) => {
        const digits = 3;
        const numberString = id?.toString() || '1'

        if(numberString.length >= digits) {
            return numberString;
        }

        let result = ''

        for(let i=0; i < digits - numberString.length; i++) {
            result += '0'
        }

        return `${result}${numberString}`

    }

    return <Chip color={color}>
        <NumberChip>
            <NumberText>{renderId(id)}</NumberText>
        </NumberChip>
        <ChipText>{name}</ChipText>
    </Chip>
}

const Chip = styled.div`
  display: flex;
  align-items: center;
  
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`

const NumberChip = styled.div`
  padding: 4px 6px;
  background-color: yellow;
  border-radius: 16px;
  opacity: 0.8;
`

const NumberText = styled.label`
    opacity: 1;
`

const ChipText = styled.label`
    margin: 0 8px 0 5px;
`




export default PokeNameChip