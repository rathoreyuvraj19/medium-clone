import Heading from "./Heading";

interface signCardParams {
  title: string;
  subtitle: string;
  link: string;
  jumpto: string;
}

export const Signcard = ({ title, subtitle, link, jumpto }: signCardParams) => {
  return (
    <div>
      <Heading title={title} subtitle={subtitle} link={link} jumpto={jumpto} />
    </div>
  );
};
