import { Fragment } from "react";

export type Props = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
};

export const GenericTemplate = ({ header, footer, children }: Props) => {
  return (
    <Fragment>
      <div>{header}</div>
      <div>
        <main>{children}</main>
      </div>
      <div>{footer}</div>
    </Fragment>
  );
};
