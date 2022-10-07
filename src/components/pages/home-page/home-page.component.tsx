import { Organisms, Templates } from "@/components";

export const HomePage = () => {
  return (
    <Templates.GenericTemplate
      header={<Organisms.SiteHeader />}
      footer={<Organisms.SiteFooter />}
    >
      <div>Main</div>
    </Templates.GenericTemplate>
  );
};
