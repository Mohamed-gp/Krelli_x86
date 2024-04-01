const Footer = () => {
  return (
    <footer
      className="text-white font-bold bg-[#8b8b8b] dark:bg-[#454545] "
      style={{ boxShadow: "-1px 29px 20px 27px #1e40af" }}
    >
      <div className="container py-4 text-center ">
        &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};
export default Footer;
