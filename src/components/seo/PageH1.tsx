type Props = {
  children: string;
};

export default function PageH1({ children }: Props) {
  return <h1 className="sr-only">{children}</h1>;
}
