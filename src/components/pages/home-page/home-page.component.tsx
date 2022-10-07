import { Organisms, Templates } from "@/components";

export const HomePage = () => {
  return (
    <Templates.GenericTemplate
      header={<Organisms.GlobalHeader />}
      footer={<Organisms.GlobalFooter />}
    >
      <div>Main</div>
    </Templates.GenericTemplate>
  );
};
