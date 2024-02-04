import { PieChart } from "@mui/x-charts";

export const PayChart = ({data}) => {
    return (
      <PieChart
        series={[
          {
            data
          },
        ]}
        width={400}
        height={200}
      />
    );
  }