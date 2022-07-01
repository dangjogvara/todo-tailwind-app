const Header = (props: { name: string }) => {
  return (
    <div className="flex mb-3 justify-center bg-orange-500 rounded-2xl w-1/2 m-auto mt-5 shadow-md">
      <header className=" py-3 px-3 font-bold text-4xl text-white">{props.name}</header>
    </div>
  );
};

export default Header;
