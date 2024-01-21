import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);

const AdminDashboardComp = () => {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 1000);
  }, []);

  return (
    <>
      <h1>dashboard page</h1>
      {isLoad ? (
        <div style={{ height: "1000px", width: "800px" }}>
          <Chart
            type="line"
            series={[
              { name: "사용자 추이", data: [9, 10, 15, 20, 22, 25, 30, 30, 50, 55, 60, 66] },
              { name: "복용성공률 평균", data: [10, 11, 12, 13, 14, 16, 17, 18, 1, 20, 22, 25] },
            ]}
            options={{
              chart: {
                height: 100,
                width: 100,
              },
            }}
          />
        </div>
      ) : (
        <div>is loading</div>
      )}
    </>
  );
};

export default AdminDashboardComp;
