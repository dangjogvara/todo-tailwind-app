const Header = (props: { name: string }) => {
  return (
    <div className="flex mb-3 justify-center bg-orange-500">
      <header className="py-3 px-3 font-bold text-4xl text-white">{props.name}</header>
    </div>
  );
};

export default Header;
