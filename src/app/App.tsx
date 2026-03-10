import { AppRoutes } from "./routes/AppRoutes";
import { MainLayout } from "./layout/MainLayout";

export const App = () => {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
};

