import { PieChart } from "@mui/x-charts";

export const BasicPie = () => {
    return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'Imagenes' },
              { id: 1, value: 15, label: 'Videos' },
              { id: 2, value: 20, label: 'Otros' },
            ]
          },
        ]}
        width={400}
        height={200}
      />
    );
  }