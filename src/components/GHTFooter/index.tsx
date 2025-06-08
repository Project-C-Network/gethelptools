const GHTFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      &copy; {year} GetHelpTools. All rights reserved.
    </footer>
  );
};

export default GHTFooter;
