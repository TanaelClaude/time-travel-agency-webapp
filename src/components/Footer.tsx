const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-display text-xl font-bold text-gradient-gold">TimeTravel</span>
            <span className="font-body text-xs text-muted-foreground ml-2 uppercase tracking-widest">Agency</span>
          </div>
          <p className="font-body text-sm text-muted-foreground">
            © 2087 TimeTravel Agency. Tous droits réservés à travers le temps.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
