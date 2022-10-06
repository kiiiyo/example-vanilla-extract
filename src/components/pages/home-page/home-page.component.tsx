import { Templates } from "@/components";

export const HomePage = () => {
  return (
    <Templates.GenericTemplate
      header={<div>Header</div>}
      footer={<div>footer</div>}
    >
      <div>Main</div>
    </Templates.GenericTemplate>
  );
};
