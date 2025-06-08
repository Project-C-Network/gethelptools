const GHTFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      &copy; {year} GetHelpTools. All rights reserved.
    </footer>
  );
};

export default GHTFooter;
