import Table from "../../../styled-components/Table";
import Typography from "../../../styled-components/Typography";

export default function Hints({ hints_array }) {
  return hints_array.length > 0 
  ? <Table hint>
      {hints_array.map((item,i) => 
        <Typography key={i} hint>
          <span>{Object.entries(item)[0][0] + ": "}</span>
          {Object.entries(item)[0][1]}
        </Typography>)} 
    </Table>   
  : null   
}