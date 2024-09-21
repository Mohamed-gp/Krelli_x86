import { FaBars, FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

interface BurgerMenuProps {
  open: boolean;
  setopen: (prev: any) => any;
}

const BurgerMenu = ({ open, setopen }: BurgerMenuProps) => {
  return (
    <>
      {/* <motion.div initial={{y : -20}} animate={{y : 0}}> hello world </motion.div> */}
      {open && (
        <motion.span
          initial={{ scale: 0 ,rotate : -360}}
          animate={{ scale: 1,rotate : 0 }}
          transition={{
            duration: 0.3,
          }}
          onClick={() => {
            setopen(false);
          }}
          className="lg:hidden cursor-pointer z-50"
        >
          <FaX />
        </motion.span>
      )}
      {!open && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
          }}
          onClick={() => {
            setopen(true);
          }}
          className="lg:hidden cursor-pointer z-50"
        >
          <FaBars />
        </motion.span>
      )}
    </>
  );
};
export default BurgerMenu;
