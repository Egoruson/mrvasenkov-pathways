const Footer = () => (
  <footer className="hero-gradient py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
      <p className="text-primary-foreground/60 text-sm">
        © {new Date().getFullYear()} ООО «ЕТРЕЙД». Все права защищены.
      </p>
      <a
        href="/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-foreground/60 text-sm underline underline-offset-2 hover:text-primary-foreground/80 transition-colors"
      >
        Политика конфиденциальности
      </a>
    </div>
  </footer>
);

export default Footer;
