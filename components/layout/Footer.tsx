export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t">
      <div className="text-center space-y-2">
        <p className="text-md text-gray-500 ">
          &copy; {currentYear} Your Company. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          This site was made by{" "}
          <a
            href="https://github.com/ValeryLegkov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the author's GitHub profile"
            className="text-blue-500 hover:underline"
          >
            @ValeryLegkov
          </a>
          !
        </p>
      </div>
    </footer>
  );
};
