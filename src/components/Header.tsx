type Props = {
  name: string;
};

const Header = ({ name }: Props) => {
  return (
    <header className="text-center bg-orange-500 rounded-xl py-3 px-3 font-bold text-4xl text-white">{name}</header>
  );
};

export default Header;
