interface CloseMenuProps {
  open: boolean;
  setopen: (a: any) => any;
}

const CloseMenu = ({ open, setopen }: CloseMenuProps) => {
  return (
    <>
      {open && (
        <div
          className="absolute w-screen h-full bg-transparent left-0 top-0 z-[1]"
          onClick={() => setopen(false)}
        ></div>
      )}
    </>
  );
};
export default CloseMenu;
